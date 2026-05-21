"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { contactSection } from "@/data/site";
import { Icon } from "./icons";

/*
 * Lead form. Posts to the existing hardened /api/contact (POST only,
 * server-side validation, honeypot, rate limit). Fields per spec: name,
 * email, phone, companyOrWebsite, message. companyOrWebsite maps to the
 * API's optional `sector` field. Honeypot `_honey` stays visually hidden.
 *
 * Accessible: labelled inputs, aria-invalid on error, focus states, polite
 * status region. Fires the `form_submit` analytics event on success.
 */
type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-bg-soft px-4 py-2.5 text-foreground placeholder:text-fg-soft focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--brand-2)] focus-visible:border-[#1976D2]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      sector: String(data.get("companyOrWebsite") ?? ""),
      message: String(data.get("message") ?? ""),
      _honey: String(data.get("_honey") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setError(json.error ?? "Nepodařilo se odeslat. Zkuste to prosím znovu.");
        trackEvent({
          name: "contact_form_error",
          params: { form_location: "contact", error_type: "api" },
        });
        setStatus("error");
        return;
      }
      trackEvent({ name: "contact_form_submit", params: { form_location: "contact" } });
      setStatus("success");
      form.reset();
    } catch {
      setError("Spojení selhalo. Zkuste to prosím znovu nebo nám zavolejte.");
      trackEvent({
        name: "contact_form_error",
        params: { form_location: "contact", error_type: "network" },
      });
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center shadow-md">
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand-light">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">
          Děkujeme, máme to!
        </h3>
        <p className="mt-2 text-fg-muted">{contactSection.lead}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-surface p-6 shadow-md sm:p-8"
    >
      {/* Honeypot — hidden from users, bots fill it. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Nevyplňujte
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-foreground">
            Jméno *
          </label>
          <input id="cf-name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-foreground">
            E-mail *
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Telefon
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="cf-company" className="mb-1.5 block text-sm font-medium text-foreground">
            Firma / web
          </label>
          <input id="cf-company" name="companyOrWebsite" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-foreground">
            Co potřebujete? *
          </label>
          <textarea id="cf-message" name="message" required rows={4} className={inputClass} />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 rounded-lg border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 font-display font-semibold text-white transition-colors hover:bg-brand-hover disabled:opacity-70 sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
      >
        {status === "submitting" ? "Odesílám…" : "Odeslat poptávku"}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-fg-soft">
        {contactSection.gdpr}
      </p>
    </form>
  );
}
