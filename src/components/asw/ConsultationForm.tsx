"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { requiresPhone } from "@/lib/contactPolicy";
import { konzultacePage } from "@/data/site";
import { Icon } from "./icons";

/*
 * Consultation / lead form for /konzultace. Posts to the existing hardened
 * /api/contact (POST only, server-side validation, honeypot, rate limit).
 *
 * Supported query params (URL `?produkt=...`, fallback to legacy `?balicek=...`):
 *   web-standard | web-pro       → "Web Standard" / "Web Pro"
 *   lokalni-seo                  → "Lokální SEO"
 *   automatizace                 → "Automatizace pro malé firmy"
 *   ai-asistent                  → "AI asistent jako doplněk"
 * missing / unknown              → "Ještě nevím, potřebuji poradit"
 *
 * The product is editable by the user via a single full-width `<select>` at
 * the top of the form (no banner). When the user leaves it on the default
 * "Ještě nevím..." we omit `product` from the API payload so the e-mail
 * subject doesn't get a noisy bracket.
 *
 * Fields posted to /api/contact:
 *   { name, email, phone, message, product, preferredContact,
 *     preferredTime, _honey }
 */
type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-bg-soft px-4 py-2.5 text-foreground placeholder:text-fg-soft focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--brand-2)] focus-visible:border-[#1976D2]";

const DEFAULT_PRODUCT_LABEL = "Ještě nevím, potřebuji poradit";

/** Order = order shown in the select. Default sits last. */
const PRODUCT_OPTIONS = [
  "Web Standard",
  "Web Pro",
  "Lokální SEO",
  "Automatizace pro malé firmy",
  "AI asistent jako doplněk",
  DEFAULT_PRODUCT_LABEL,
] as const;

/** URL slug → option label. Anything not here falls back to the default. */
const PRODUCT_SLUG_TO_LABEL: Record<string, string> = {
  "web-standard": "Web Standard",
  "web-pro": "Web Pro",
  "lokalni-seo": "Lokální SEO",
  automatizace: "Automatizace pro malé firmy",
  "ai-asistent": "AI asistent jako doplněk",
};

/* Preferred contact options. Value === label by design: the value is what
   travels to /api/contact (which validates as a plain string) and what
   appears in the internal e-mail as "Preferovaný kontakt: <value>", so a
   human-readable Czech label is what we want both client- and server-side. */
const CONTACT_METHODS = [
  { value: "Hovor", label: "Hovor" },
  { value: "SMS", label: "SMS" },
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "E-mail", label: "E-mail" },
] as const;

const CALL_TIMES: { value: string; label: string }[] = [
  { value: "", label: "Nezáleží, ozvěte se mi kdykoli (nepovinné)" },
  { value: "Všední den dopoledne", label: "Všední den dopoledne" },
  { value: "Všední den odpoledne", label: "Všední den odpoledne" },
  { value: "Všední den večer", label: "Všední den večer" },
  { value: "Víkend", label: "Víkend" },
  { value: "Kdykoli", label: "Kdykoli mi to vyhovuje" },
  { value: "Nevolat, jen psát", label: "Raději nevolejte, napište mi" },
];

export function ConsultationForm() {
  const params = useSearchParams();
  // Accept both `?produkt=` (new canonical) and `?balicek=` (legacy URLs that
  // may still be cached/bookmarked). Unknown / missing → default label.
  const rawSlug = (params.get("produkt") ?? params.get("balicek") ?? "")
    .toLowerCase();
  const defaultProduct =
    PRODUCT_SLUG_TO_LABEL[rawSlug] ?? DEFAULT_PRODUCT_LABEL;

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
    const phone = String(data.get("phone") ?? "").trim();
    const preferredContact = String(data.get("preferredContact") ?? "").trim();
    const selectedProduct = String(data.get("product") ?? "").trim();
    // Omit `product` from the payload when the user left it on the default
    // — the e-mail subject and the "Produkt:" line stay clean.
    const productForApi =
      selectedProduct && selectedProduct !== DEFAULT_PRODUCT_LABEL
        ? selectedProduct
        : "";

    // Conditional phone requirement: Hovor / SMS / WhatsApp need a number.
    // Mirror of the server-side check in /api/contact (single source of
    // truth lives in src/lib/contactPolicy.ts).
    if (requiresPhone(preferredContact) && !phone) {
      setError(
        "Pro kontakt přes hovor, SMS nebo WhatsApp prosím vyplňte telefonní číslo.",
      );
      trackEvent({
        name: "contact_form_error",
        params: { form_location: "konzultace", error_type: "validation" },
      });
      setStatus("error");
      return;
    }

    // Firma is UI-only (no backend column), fold it into the message body so
    // it doesn't get lost. product / preferredContact / preferredTime get
    // their own structured fields in /api/contact and DO NOT need to be
    // duplicated into the message.
    const message = firma ? `Firma: ${firma}\n\n${zprava}` : zprava;

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone,
      product: productForApi,
      preferredContact,
      preferredTime: String(data.get("preferredTime") ?? ""),
      message,
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
      trackEvent({
        name: "contact_form_submit",
        params: {
          form_location: "konzultace",
          product: productForApi || "unspecified",
        },
      });
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
      {/* Honeypot: hidden field, bots fill, real users never see it */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Nevyplňujte
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* Product — single full-width select at the top. Pre-filled by ?produkt=
          but always editable; replaces the previous read-only banner. */}
      <div className="mb-4">
        <label
          htmlFor="kf-product"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          O co máte zájem?
        </label>
        <select
          id="kf-product"
          name="product"
          defaultValue={defaultProduct}
          aria-describedby="kf-product-hint"
          className={inputClass}
        >
          {PRODUCT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <p id="kf-product-hint" className="mt-1.5 text-xs text-fg-soft">
          Volbu můžete změnit podle toho, co chcete nezávazně probrat.
        </p>
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
          <input
            id="kf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-describedby="kf-phone-hint"
            className={inputClass}
          />
          <p id="kf-phone-hint" className="mt-1.5 text-xs text-fg-soft">
            Telefon je potřeba, pokud chcete odpověď hovorem, SMS nebo přes WhatsApp.
          </p>
        </div>
        <div>
          <label htmlFor="kf-preferred" className="mb-1.5 block text-sm font-medium text-foreground">
            Jak vám máme odpovědět?
          </label>
          <select
            id="kf-preferred"
            name="preferredContact"
            defaultValue="E-mail"
            required
            className={inputClass}
          >
            {CONTACT_METHODS.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="kf-time" className="mb-1.5 block text-sm font-medium text-foreground">
            Kdy se vám nejlépe ozvat?
          </label>
          <select
            id="kf-time"
            name="preferredTime"
            defaultValue=""
            className={inputClass}
          >
            {CALL_TIMES.map((t) => (
              <option key={t.label} value={t.value}>
                {t.label}
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
        <span>
          {konzultacePage.gdpr} Podrobnosti najdete v{" "}
          <Link
            href="/zasady-ochrany-osobnich-udaju"
            className="text-brand-light underline underline-offset-2 hover:text-white"
          >
            zásadách ochrany osobních údajů
          </Link>
          .
        </span>
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
