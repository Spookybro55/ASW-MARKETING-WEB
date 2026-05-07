import { NextResponse } from "next/server";
import { Resend } from "resend";
import { sections } from "@/app/brand-dotaznik/questions";

// Lazy init — see /api/contact/route.ts for the same pattern + rationale
// (per `resend-lazy-init-v1` plan in autosmartweby BACKLOG).
function getResendClient(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not configured");
  return new Resend(key);
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getSingle(form: FormData, name: string): string {
  const v = form.get(name);
  return typeof v === "string" ? v.trim() : "";
}

function getAll(form: FormData, name: string): string[] {
  return form
    .getAll(name)
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim())
    .filter(Boolean);
}

function indent(text: string): string {
  if (!text) return "   (bez odpovědi)";
  return text
    .split(/\r?\n/)
    .map((line) => `   ${line}`)
    .join("\n");
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Neplatný požadavek." },
      { status: 400 },
    );
  }

  // Honeypot — pokud je vyplněný, předstíráme úspěch
  if (getSingle(form, "_honey")) {
    return NextResponse.json({ success: true });
  }

  const companyName = getSingle(form, "company_name");
  const contactPerson = getSingle(form, "contact_person");
  const email = getSingle(form, "email");
  const phone = getSingle(form, "phone");

  if (!companyName || !contactPerson || !email) {
    return NextResponse.json(
      {
        error:
          "Vyplňte prosím povinné údaje: název firmy, kontaktní osobu a e-mail.",
      },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Zadejte platný e-mail." },
      { status: 400 },
    );
  }

  // Sestavení textu e-mailu
  const lines: string[] = [];
  lines.push("BRANDOVÝ DOTAZNÍK");
  lines.push("=".repeat(50));
  lines.push("");
  lines.push(`Firma:    ${companyName}`);
  lines.push(`Kontakt:  ${contactPerson}`);
  lines.push(`E-mail:   ${email}`);
  if (phone) lines.push(`Telefon:  ${phone}`);
  lines.push("");

  for (const section of sections) {
    lines.push("");
    lines.push("─".repeat(50));
    lines.push(`SEKCE ${section.number}: ${section.title.toUpperCase()}`);
    lines.push("─".repeat(50));
    lines.push("");

    for (const q of section.questions) {
      lines.push(`${q.number}) ${q.label}`);

      if (q.type === "checkbox") {
        const values = getAll(form, q.name);
        if (values.length === 0) {
          lines.push("   (bez odpovědi)");
        } else {
          for (const v of values) {
            lines.push(`   • ${v}`);
          }
        }
      } else {
        const value = getSingle(form, q.name);
        lines.push(indent(value));
      }

      if (q.hasFollowup && q.followupName) {
        const followup = getSingle(form, q.followupName);
        if (followup) {
          lines.push("");
          lines.push(`   ${q.followupLabel ?? "Doplnění"}:`);
          lines.push(indent(followup));
        }
      }

      lines.push("");
    }
  }

  const emailBody = lines.join("\n");

  const subject = `Brand dotazník – ${companyName}`;

  const resend = getResendClient();

  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL!,
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: email,
    subject,
    text: emailBody,
  });

  if (error) {
    console.error("Resend error (brand-questionnaire):", error);
    return NextResponse.json(
      {
        error:
          "Nepodařilo se odeslat dotazník. Zkuste to prosím znovu, nebo nám napište přímo na e-mail.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
