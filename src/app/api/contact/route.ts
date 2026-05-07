import { NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy init — `new Resend(undefined)` throws at module-load time, which
// breaks `next build` "Collecting page data" step in any clone without
// RESEND_API_KEY (per `resend-lazy-init-v1` plan in autosmartweby BACKLOG).
// Defer instantiation to the request handler so module-load stays pure.
function getResendClient(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not configured");
  return new Resend(key);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Neplatný požadavek." }, { status: 400 });
  }

  const { name, email, message, _honey } = body as {
    name?: string;
    email?: string;
    message?: string;
    _honey?: string;
  };

  // Honeypot — if filled, silently succeed
  if (_honey) {
    return NextResponse.json({ success: true });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Vyplňte prosím všechna pole." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Zadejte platný e-mail." },
      { status: 400 },
    );
  }

  const resend = getResendClient();

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL!,
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: email.trim(),
    subject: `Nová zpráva z formuláře – autosmartweb.cz`,
    text: [
      `Jméno: ${name.trim()}`,
      `E-mail: ${email.trim()}`,
      ``,
      `Zpráva:`,
      message.trim(),
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Nepodařilo se odeslat zprávu. Zkuste to prosím znovu." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
