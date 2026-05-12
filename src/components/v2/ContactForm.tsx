"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

const LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  message: 2000,
} as const;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const sector = String(data.get("sector") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const honey = String(data.get("website") ?? "");

    // Client-side guard: keep server contract clean.
    // (Server still re-validates — never trust the client.)
    if (!name || !email || !message) {
      setError("Vyplňte prosím jméno, e-mail a krátkou zprávu.");
      setStatus("error");
      trackEvent({
        name: "contact_form_error",
        params: { form_location: "homepage", error_type: "validation" },
      });
      return;
    }
    if (name.length > LIMITS.name || email.length > LIMITS.email || message.length > LIMITS.message) {
      setError("Některé pole překračuje povolenou délku.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: assembleMessage({ phone, sector, message }),
          _honey: honey,
        }),
      });

      if (!res.ok) {
        const payload = (await res.json().catch(() => ({}))) as { error?: string };
        setError(payload.error ?? "Nepodařilo se odeslat. Zkuste to prosím znovu.");
        setStatus("error");
        trackEvent({
          name: "contact_form_error",
          params: { form_location: "homepage", error_type: "api" },
        });
        return;
      }

      form.reset();
      setStatus("success");
      trackEvent({
        name: "contact_form_submit",
        params: { form_location: "homepage" },
      });
    } catch {
      setError("Připojení selhalo. Zkuste to prosím znovu.");
      setStatus("error");
      trackEvent({
        name: "contact_form_error",
        params: { form_location: "homepage", error_type: "network" },
      });
    }
  }

  if (status === "success") {
    return (
      <div
        className="card"
        style={{ padding: "2rem", background: "var(--brand-soft)", borderColor: "var(--brand)" }}
      >
        <div className="h3" style={{ color: "var(--brand-hover)" }}>
          Děkujeme, máme to.
        </div>
        <p className="mt-2 text-[0.97rem]">
          Ozveme se obvykle do jednoho pracovního dne — typicky telefonem nebo
          krátkým e-mailem s prvním návrhem dalšího kroku.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-ghost btn-sm mt-4"
          style={{ paddingLeft: 0 }}
        >
          Odeslat další zprávu
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card" style={{ padding: "1.75rem" }}>
      {/* Honeypot — bots fill, humans don't see */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website-trap">Web</label>
        <input
          id="website-trap"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="field">
          <label htmlFor="cf-name" className="field-label">
            Jméno <span style={{ color: "var(--danger)" }}>*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            maxLength={LIMITS.name}
            autoComplete="name"
            className="input"
            placeholder="Jan Novák"
          />
        </div>

        <div className="field">
          <label htmlFor="cf-email" className="field-label">
            E-mail <span style={{ color: "var(--danger)" }}>*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            maxLength={LIMITS.email}
            autoComplete="email"
            inputMode="email"
            className="input"
            placeholder="vy@vasefirma.cz"
          />
        </div>

        <div className="field">
          <label htmlFor="cf-phone" className="field-label">
            Telefon <span className="field-hint" style={{ marginLeft: "0.3em" }}>(nepovinné)</span>
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            maxLength={LIMITS.phone}
            autoComplete="tel"
            inputMode="tel"
            className="input"
            placeholder="+420 ..."
          />
        </div>

        <div className="field">
          <label htmlFor="cf-sector" className="field-label">
            Obor / čím se zabýváte
          </label>
          <input
            id="cf-sector"
            name="sector"
            type="text"
            maxLength={120}
            className="input"
            placeholder="Elektrikář, salon, autoservis…"
          />
        </div>
      </div>

      <div className="field mt-4">
        <label htmlFor="cf-message" className="field-label">
          Co potřebujete <span style={{ color: "var(--danger)" }}>*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          maxLength={LIMITS.message}
          className="textarea"
          placeholder="Stačí pár vět. Co děláte, jakým zákazníkům, co byste od webu potřebovali. Nemusí to být přesné zadání."
        />
        <div className="field-hint">
          Reagujeme typicky do jednoho pracovního dne.
        </div>
      </div>

      {error && (
        <div
          role="alert"
          className="mt-4 text-sm"
          style={{
            color: "var(--danger)",
            background: "#fdecec",
            border: "1px solid #f4c1c1",
            padding: "0.75rem 1rem",
            borderRadius: "var(--radius)",
          }}
        >
          {error}
        </div>
      )}

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={status === "submitting"}
          data-cta-label="contact_form_submit"
          data-cta-location="final_cta"
        >
          {status === "submitting" ? "Odesílám…" : "Odeslat poptávku"}
        </button>
        <p className="text-xs soft sm:max-w-[40ch]">
          Odesláním souhlasíte se zpracováním kontaktních údajů pro vyřízení
          vaší poptávky. Žádný marketing, žádný newsletter.
        </p>
      </div>
    </form>
  );
}

function assembleMessage(parts: { phone: string; sector: string; message: string }): string {
  const lines: string[] = [];
  if (parts.sector) lines.push(`Obor: ${parts.sector}`);
  if (parts.phone) lines.push(`Telefon: ${parts.phone}`);
  if (lines.length) lines.push("");
  lines.push(parts.message);
  return lines.join("\n");
}
