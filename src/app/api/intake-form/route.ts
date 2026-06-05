import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  sections,
  allIntakeFields,
  gdprConsent,
  type IntakeField,
} from "@/app/formular/fields";

/*
 * Klientský intake / onboarding formulář — server endpoint (/api/intake-form).
 *
 * Defense in depth (stejný princip jako /api/contact, hardened):
 *   - POST only (GET → 405).
 *   - Plain TypeScript validace řízená sdíleným schématem (src/app/formular/
 *     fields.ts) — žádná nová závislost, stejný vzor jako zbytek projektu.
 *   - Honeypot `website`: když je vyplněný, tichý 200 (žádný e-mail).
 *   - Per-typ max délky + globální strop proti extrémně dlouhým vstupům.
 *   - Odmítnutí control-byte znaků (jednořádková × víceřádková pole).
 *   - Radio hodnoty musí odpovídat povoleným možnostem (odmítne podvržení).
 *   - Povinná pole + GDPR + souhlas s právy k fotkám validované server-side.
 *   - In-memory per-IP rate limit (best-effort; viz /api/contact pozn.).
 *   - Lazy Resend init (build na čistém klonu bez secretů nespadne).
 *   - E-mail se skládá ze SDÍLENÉ definice sekcí; HTML je escapované,
 *     žádná syrová interpolace user inputu.
 *   - Loguje jen requestId + status + technické metadata, nikdy obsah.
 *
 * Konfigurace e-mailu (env):
 *   - CONTACT_FROM_EMAIL   → odesílatel (ověřená doména, sdílený s /api/contact).
 *   - INTAKE_FORM_TO_EMAIL → příjemce podkladů; fallback CONTACT_TO_EMAIL.
 *   Když chybí from i to, endpoint vrací bezpečnou chybu (nic neodešle).
 */

function getResendClient(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not configured");
  return new Resend(key);
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://autosmartweb.cz";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// C0 control byte v jednořádkových polích (diakritika žije ve vyšších rovinách,
// takže projde beze změny). Sestaveno přes \u escapy ve stringu, ne literál.
const CTRL_SINGLE_LINE = new RegExp("[\\u0000-\\u001F]");
// Víceřádková pole: povol \t (U+0009) \n (U+000A) \r (U+000D), zbytek C0 odmítni.
const CTRL_MULTILINE = new RegExp("[\\u0000-\\u0008\\u000B\\u000C\\u000E-\\u001F]");

const MAX = {
  text: 300,
  tel: 300,
  url: 600,
  email: 254,
  radio: 120,
  textarea: 4000,
} as const;

// Globální strop — součet délek všech textových hodnot. Brání extrémně
// velkým payloadům, které by jednotlivě prošly per-field limity.
const TOTAL_MAX = 60_000;

type Bucket = { count: number; firstAt: number };
const buckets = new Map<string, Bucket>();
const RATE_WINDOW_MS = 10 * 60 * 1000;
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

function isSingleLine(type: IntakeField["type"]): boolean {
  return type === "text" || type === "tel" || type === "url" || type === "email";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMPTY = "Nevyplněno";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as
    | Record<string, unknown>
    | null;

  if (!body || typeof body !== "object") {
    return jsonError("Neplatný požadavek.", 400);
  }

  // Honeypot — bot vyplní `website`, předstíráme úspěch (nic neodešleme).
  const honey = body.website;
  if (typeof honey === "string" && honey.length > 0) {
    return NextResponse.json({ success: true });
  }

  // ── Normalizace hodnot dle schématu ──────────────────────────────────────
  const text: Record<string, string> = {};
  const bool: Record<string, boolean> = {};
  let totalLen = 0;

  for (const field of allIntakeFields) {
    if (field.type === "checkbox") {
      bool[field.name] = body[field.name] === true;
      continue;
    }
    let value = asTrimmedString(body[field.name]);
    if (field.type === "email") value = value.toLowerCase();
    if (field.name === "ico") value = value.replace(/\s+/g, "");
    text[field.name] = value;
    totalLen += value.length;
  }
  const gdpr = body[gdprConsent.name] === true;

  if (totalLen > TOTAL_MAX) {
    console.warn("intake-form: payload over total size cap");
    return jsonError("Formulář je příliš dlouhý. Zkraťte prosím odpovědi.", 413);
  }

  // ── Validace dle schématu ─────────────────────────────────────────────────
  for (const field of allIntakeFields) {
    if (field.type === "checkbox") {
      if (field.required && !bool[field.name]) {
        return jsonError("Potvrďte prosím povinné souhlasy.", 400);
      }
      continue;
    }

    const value = text[field.name];

    if (field.required && !value) {
      return jsonError("Vyplňte prosím všechna důležitá pole.", 400);
    }
    if (!value) continue; // prázdné nepovinné pole — přeskoč další kontroly

    // Délka
    if (value.length > MAX[field.type]) {
      console.warn("intake-form: oversize field rejected");
      return jsonError("Některé pole překračuje povolenou délku.", 400);
    }

    // Control byty
    const ctrl = isSingleLine(field.type) ? CTRL_SINGLE_LINE : CTRL_MULTILINE;
    if (ctrl.test(value)) {
      console.warn("intake-form: control char rejected");
      return jsonError("Některé pole obsahuje nepovolené znaky.", 400);
    }

    // E-mail
    if (field.type === "email" && !EMAIL_RE.test(value)) {
      return jsonError("Zadejte prosím platné e-maily.", 400);
    }

    // Radio — hodnota musí být z povolených možností
    if (field.type === "radio" && field.options && !field.options.includes(value)) {
      console.warn("intake-form: invalid radio value rejected");
      return jsonError("Neplatná volba ve formuláři.", 400);
    }
  }

  if (!gdpr) {
    return jsonError(
      "Bez souhlasu se zpracováním údajů nelze podklady odeslat.",
      400,
    );
  }

  // ── Rate limit ─────────────────────────────────────────────────────────────
  const ip = clientIp(request);
  if (isRateLimited(ip)) {
    return jsonError(
      "Zkuste to prosím za chvíli — bezpečnostní limit dočasně zablokoval odeslání.",
      429,
    );
  }

  // ── Mail konfigurace ────────────────────────────────────────────────────────
  const fromAddress = process.env.CONTACT_FROM_EMAIL;
  const toAddress =
    process.env.INTAKE_FORM_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL;
  if (!fromAddress || !toAddress) {
    console.error(
      "intake-form: mail config missing (need CONTACT_FROM_EMAIL + INTAKE_FORM_TO_EMAIL or CONTACT_TO_EMAIL)",
    );
    return jsonError(
      "Server není kompletně nakonfigurovaný. Zkuste to prosím později nebo nám napište na e-mail.",
      500,
    );
  }

  const requestId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${ip}`;
  const sentAt = new Date().toLocaleString("cs-CZ", {
    timeZone: "Europe/Prague",
  });
  const pageUrl = request.headers.get("referer") || `${SITE_URL}/formular`;
  const companyName = text.companyName || "(bez názvu firmy)";

  // ── Sestavení e-mailu z téže definice sekcí ──────────────────────────────
  function valueFor(field: IntakeField): string {
    if (field.type === "checkbox") return bool[field.name] ? "Ano" : "Ne";
    return text[field.name] || EMPTY;
  }

  // Plain text
  const lines: string[] = [];
  lines.push("NOVÉ PODKLADY K WEBU");
  lines.push("=".repeat(50));
  lines.push(`Firma: ${companyName}`);
  lines.push("");
  for (const section of sections) {
    lines.push("");
    lines.push("─".repeat(50));
    lines.push(`SEKCE ${section.number}: ${section.title.toUpperCase()}`);
    lines.push("─".repeat(50));
    for (const field of section.fields) {
      lines.push("");
      lines.push(field.label);
      const v = valueFor(field);
      lines.push(
        v
          .split(/\r?\n/)
          .map((l) => `   ${l}`)
          .join("\n"),
      );
    }
    lines.push("");
  }
  lines.push("");
  lines.push("─".repeat(50));
  lines.push("SOUHLASY");
  lines.push("─".repeat(50));
  lines.push(`Souhlas se zpracováním údajů: ${gdpr ? "Ano" : "Ne"}`);
  lines.push("");
  lines.push("─".repeat(50));
  lines.push(`Odesláno: ${sentAt}`);
  lines.push(`Request ID: ${requestId}`);
  lines.push(`Stránka: ${pageUrl}`);
  lines.push("Odesláno přes /api/intake-form (autosmartweb.cz)");
  const textBody = lines.join("\n");

  // HTML (escapované)
  const htmlParts: string[] = [];
  htmlParts.push(
    `<div style="font-family:Arial,Helvetica,sans-serif;color:#1a1a1a;line-height:1.5">`,
  );
  htmlParts.push(
    `<h1 style="font-size:18px;margin:0 0 4px">Nové podklady k webu</h1>`,
  );
  htmlParts.push(
    `<p style="margin:0 0 16px;color:#555"><strong>Firma:</strong> ${escapeHtml(companyName)}</p>`,
  );
  for (const section of sections) {
    htmlParts.push(
      `<h2 style="font-size:15px;margin:20px 0 8px;padding-bottom:4px;border-bottom:2px solid #0D47A1;color:#0D47A1">Sekce ${section.number}: ${escapeHtml(section.title)}</h2>`,
    );
    for (const field of section.fields) {
      const v = valueFor(field);
      const isEmpty = v === EMPTY || v === "Ne";
      htmlParts.push(
        `<p style="margin:0 0 10px"><strong style="display:block;color:#333">${escapeHtml(field.label)}</strong>` +
          `<span style="color:${isEmpty ? "#999" : "#1a1a1a"}">${escapeHtml(v).replace(/\r?\n/g, "<br>")}</span></p>`,
      );
    }
  }
  htmlParts.push(
    `<h2 style="font-size:15px;margin:20px 0 8px;padding-bottom:4px;border-bottom:2px solid #0D47A1;color:#0D47A1">Souhlasy</h2>`,
  );
  htmlParts.push(
    `<p style="margin:0 0 10px"><strong>Souhlas se zpracováním údajů:</strong> ${gdpr ? "Ano" : "Ne"}</p>`,
  );
  htmlParts.push(
    `<hr style="border:none;border-top:1px solid #ddd;margin:16px 0"><p style="font-size:12px;color:#888;margin:0">` +
      `Odesláno: ${escapeHtml(sentAt)}<br>Request ID: ${escapeHtml(requestId)}<br>Stránka: ${escapeHtml(pageUrl)}</p>`,
  );
  htmlParts.push(`</div>`);
  const htmlBody = htmlParts.join("");

  // Reply-To: kontaktní osoba, fallback hlavní e-mail (oba už validované).
  const replyTo = text.contactEmail || text.mainEmail || undefined;

  const resend = getResendClient();
  const { error } = await resend.emails.send({
    from: fromAddress,
    to: toAddress,
    replyTo,
    subject: `Nové podklady k webu: ${companyName}`,
    text: textBody,
    html: htmlBody,
  });

  if (error) {
    console.error("intake-form: Resend rejected message", {
      requestId,
      code: error.name,
    });
    return jsonError(
      "Odeslání se nepovedlo. Zkuste to prosím znovu, nebo nám napište na e-mail.",
      502,
    );
  }

  console.info("intake-form: submitted", { requestId, status: "ok" });
  return NextResponse.json({ success: true });
}

export function GET() {
  return jsonError("Method Not Allowed", 405);
}
