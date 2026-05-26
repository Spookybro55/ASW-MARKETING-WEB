import { NextResponse } from "next/server";
import { Resend } from "resend";
import { requiresPhone } from "@/lib/contactPolicy";

/*
 * Contact API — hardened in Commit 8a.
 *
 * Defense in depth:
 *   - POST only (GET returns 405).
 *   - Plain TypeScript validation, no Zod or other dependency.
 *   - Per-field max length (name 100, email 254, phone 30, sector 120,
 *     message 5000).
 *   - Honeypot _honey: when filled, silent 200 (no email sent).
 *   - Control-byte rejection: U+0000..U+001F on single-line fields;
 *     message rejects control bytes EXCEPT \t \n \r so legitimate
 *     multi-line input (and Czech diacritics, which sit in higher
 *     code planes) passes through unchanged.
 *   - Lazy Resend init so module load stays pure when secrets missing
 *     (otherwise `next build` "Collecting page data" fails on every
 *     clone without RESEND_API_KEY).
 *   - In-memory per-IP rate limit (5 requests / 10 min). Note: Vercel's
 *     serverless model gives every cold start a fresh map and warm
 *     instances are sharded, so this catches single-IP burst but does
 *     NOT block a distributed attack. For production-scale protection
 *     switch to Vercel KV or Upstash Redis.
 *   - Plain-text email body assembled server-side; no HTML interpolation
 *     of user input anywhere.
 *
 * Backward-compatible payload:
 *   - Old payload: { name, email, message, _honey } — message may already
 *     contain "Obor: ..." / "Telefon: ..." prepended client-side. Accepted
 *     unchanged; just rendered as the email body.
 *   - New payload (Commit 8b ContactForm): { name, email, phone?, sector?,
 *     message, _honey } — phone and sector become separate lines in the
 *     email body, message stays clean.
 */

function getResendClient(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not configured");
  return new Resend(key);
}

const LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  sector: 120,
  product: 120,
  preferredContact: 30,
  preferredTime: 60,
  message: 5000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Reject any C0 control byte (U+0000..U+001F) in single-line fields.
// Czech diacritics live at U+00C0+ and higher, so they are unaffected.
const CTRL_SINGLE_LINE = /[\u0000-\u001F]/;

// Reject control bytes in the multi-line message field EXCEPT:
//   U+0009 = \t (tab)
//   U+000A = \n (LF)
//   U+000D = \r (CR)
const CTRL_MESSAGE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/;

type Bucket = { count: number; firstAt: number };
const buckets = new Map<string, Bucket>();
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_MAX_PER_WINDOW = 5;

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const existing = buckets.get(ip);

  if (!existing || now - existing.firstAt > RATE_WINDOW_MS) {
    buckets.set(ip, { count: 1, firstAt: now });
    return false;
  }

  existing.count += 1;
  // Opportunistic cleanup so the map never grows unbounded.
  if (buckets.size > 1000) {
    for (const [k, v] of buckets) {
      if (now - v.firstAt > RATE_WINDOW_MS) buckets.delete(k);
    }
  }
  return existing.count > RATE_MAX_PER_WINDOW;
}

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | Record<string, unknown>
    | null;

  if (!body || typeof body !== "object") {
    return jsonError("Neplatný požadavek.", 400);
  }

  // Honeypot first — bots fill, silent 200 (no email).
  const honey = body._honey;
  if (typeof honey === "string" && honey.length > 0) {
    return NextResponse.json({ success: true });
  }

  // Required fields
  const name = asTrimmedString(body.name);
  const emailRaw = asTrimmedString(body.email);
  const message = asTrimmedString(body.message);

  if (!name || !emailRaw || !message) {
    return jsonError("Vyplňte prosím všechna povinná pole.", 400);
  }

  // Optional structured fields (new payload). Missing on old payload.
  const phone = asTrimmedString(body.phone);
  const sector = asTrimmedString(body.sector);
  const product = asTrimmedString(body.product);
  const preferredContact = asTrimmedString(body.preferredContact);
  const preferredTime = asTrimmedString(body.preferredTime);
  const email = emailRaw.toLowerCase();

  // Length validation
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    phone.length > LIMITS.phone ||
    sector.length > LIMITS.sector ||
    product.length > LIMITS.product ||
    preferredContact.length > LIMITS.preferredContact ||
    preferredTime.length > LIMITS.preferredTime ||
    message.length > LIMITS.message
  ) {
    console.warn("contact: oversize field rejected");
    return jsonError("Některé pole překračuje povolenou délku.", 400);
  }

  // Email syntax
  if (!EMAIL_RE.test(email)) {
    return jsonError("Zadejte platný e-mail.", 400);
  }

  // Control-character validation. Czech diacritics are NOT control bytes
  // (they live in higher Unicode planes) so they pass unaffected.
  if (
    CTRL_SINGLE_LINE.test(name) ||
    CTRL_SINGLE_LINE.test(email) ||
    CTRL_SINGLE_LINE.test(phone) ||
    CTRL_SINGLE_LINE.test(sector) ||
    CTRL_SINGLE_LINE.test(product) ||
    CTRL_SINGLE_LINE.test(preferredContact) ||
    CTRL_SINGLE_LINE.test(preferredTime)
  ) {
    console.warn("contact: control char in single-line field rejected");
    return jsonError("Neplatný formát polí.", 400);
  }
  if (CTRL_MESSAGE.test(message)) {
    console.warn("contact: control char in message rejected");
    return jsonError("Zpráva obsahuje nepovolené znaky.", 400);
  }

  // Conditional phone requirement: Hovor / SMS / WhatsApp need a number.
  // Mirror of the client-side check (single source of truth in
  // src/lib/contactPolicy.ts).
  if (requiresPhone(preferredContact) && !phone) {
    return jsonError(
      "Pro zvolený způsob kontaktu prosím vyplňte telefonní číslo.",
      400,
    );
  }

  // Rate limit by IP (best-effort; see header comment).
  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return jsonError(
      "Zkuste to prosím za chvíli — bezpečnostní limit dočasně zablokoval odeslání.",
      429,
    );
  }

  const fromAddress = process.env.CONTACT_FROM_EMAIL;
  const toAddress = process.env.CONTACT_TO_EMAIL;
  if (!fromAddress || !toAddress) {
    console.error(
      "contact: mail config missing (CONTACT_FROM_EMAIL/CONTACT_TO_EMAIL)",
    );
    return jsonError(
      "Server není kompletně nakonfigurovaný. Zkuste to prosím později.",
      500,
    );
  }

  const lines: string[] = [`Jméno: ${name}`, `E-mail: ${email}`];
  if (phone) lines.push(`Telefon: ${phone}`);
  if (sector) lines.push(`Co zajímá: ${sector}`);
  // Phase D 2026-05-26: label sjednoceno s formulářovou otázkou
  // („O co máte zájem?") — interní e-mail teď čte stejně jako odesilatel formulář.
  if (product) lines.push(`O co má zájem: ${product}`);
  if (preferredContact) lines.push(`Preferovaný kontakt: ${preferredContact}`);
  if (preferredTime) lines.push(`Preferovaný čas: ${preferredTime}`);
  lines.push(
    "",
    "Zpráva:",
    message,
    "",
    "--",
    "Odesláno přes /api/contact (autosmartweb.cz)",
  );

  const resend = getResendClient();
  const { error } = await resend.emails.send({
    from: fromAddress,
    to: toAddress,
    replyTo: email,
    subject: product
      ? `Nová poptávka [${product}] — ${name}`
      : `Nová poptávka z Autosmartweby.cz — ${name}`,
    text: lines.join("\n"),
  });

  if (error) {
    // Log only the technical reject reason, never the user's payload.
    console.error("contact: Resend rejected message", { code: error.name });
    return jsonError(
      "Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo napište přímo.",
      502,
    );
  }

  return NextResponse.json({ success: true });
}

export function GET() {
  return jsonError("Method Not Allowed", 405);
}
