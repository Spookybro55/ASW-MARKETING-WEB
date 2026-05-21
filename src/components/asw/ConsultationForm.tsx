"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { konzultacePage } from "@/data/site";
import { Icon } from "./icons";

/*
 * Consultation / lead form for /konzultace. Posts to the existing hardened
 * /api/contact (POST only, server-side validation, honeypot, rate limit).
 * Fields: jméno, firma, e-mail, telefon, služba (select), zpráva + required
 * GDPR consent checkbox. Maps to the API as { name, email, phone, sector
 * (=service), message (firma prepended) }. Dark premium styling.
 */
type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-bg-soft px-4 py-2.5 text-foreground placeholder:text-fg-soft focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--brand-2)] focus-visible:border-[#1976D2]";

export function ConsultationForm() {
  const params = useSearchParams();
  const balicek = params.get("balicek");
  const defaultService =
    balicek === "web-standard" || balicek === "web-pro" ? "Webové stránky" : "";

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const firma = String(data.get("firma") ?? "").trim();
    const zprava = String(data.get("message") ?? "").trim();
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      sector: String(data.get("service") ?? ""),
      message: firma ? `Firma: ${firma}\n\n${zprava}` : zprava,
      _honey: String(data.get("_honey") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(json.error ?? "Nepodařilo se odeslat. Zkuste to prosím znovu.");
        trackEvent({ name: "contact_form_error", params: { form_location: "konzultace", error_type: "api" } });
        setStatus("error");
        return;
      }
      trackEvent({ name: "contact_form_submit", params: { form_location: "konzultace" } });
      setStatus("success");
      form.reset();
    } catch {
      setError("Spojení selhalo. Zkuste to prosím znovu nebo nám zavolejte.");
      trackEvent({ name: "contact_form_error", params: { form_location: "konzultace", error_type: "network" } });
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
        <p className="mt-2 text-fg-muted">
          Ozveme se vám co nejdříve s doporučením dalšího postupu.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-surface p-6 shadow-md sm:p-8"
    >
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Nevyplňujte
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="kf-name" className="mb-1.5 block text-sm font-medium text-foreground">
            Jméno *
          </label>
          <input id="kf-name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="kf-firma" className="mb-1.5 block text-sm font-medium text-foreground">
            Firma
          </label>
          <input id="kf-firma" name="firma" autoComplete="organization" className={inputClass} />
        </div>
        <div>
          <label htmlFor="kf-email" className="mb-1.5 block text-sm font-medium text-foreground">
            E-mail *
          </label>
          <input id="kf-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="kf-phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Telefon
          </label>
          <input id="kf-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="kf-service" className="mb-1.5 block text-sm font-medium text-foreground">
            Co vás zajímá?
          </label>
          <select
            id="kf-service"
            name="service"
            defaultValue={defaultService}
            className={inputClass}
          >
            <option value="">Vyberte službu (nepovinné)</option>
            {konzultacePage.services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="kf-message" className="mb-1.5 block text-sm font-medium text-foreground">
            Zpráva *
          </label>
          <textarea id="kf-message" name="message" required rows={4} className={inputClass} />
        </div>
      </div>

      <label className="mt-4 flex items-start gap-2.5 text-sm text-fg-muted">
        <input type="checkbox" name="gdpr" required className="mt-1 h-4 w-4 shrink-0 accent-[#1976D2]" />
        <span>{konzultacePage.gdpr}</span>
      </label>

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
    </form>
  );
}
