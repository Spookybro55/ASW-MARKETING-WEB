"use client";

import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  // Logical location identifier sent to GA4 (form_location parameter).
  // Defaults to "homepage" for the contact CTA section; pass an explicit
  // value when this form is reused on a landing page (e.g. "instalater").
  location?: string;
};

export default function ContactForm({ location = "homepage" }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? "Něco se pokazilo.");
        setStatus("error");
        trackEvent({
          name: "contact_form_error",
          params: {
            form_location: location,
            error_type: res.status >= 400 && res.status < 500 ? "validation" : "api",
          },
        });
        return;
      }

      setStatus("success");
      form.reset();
      trackEvent({
        name: "contact_form_submit",
        params: { form_location: location },
      });
    } catch {
      setErrorMsg("Nepodařilo se odeslat zprávu. Zkuste to znovu.");
      setStatus("error");
      trackEvent({
        name: "contact_form_error",
        params: { form_location: location, error_type: "network" },
      });
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand)]/[0.08] p-8 text-center">
        <svg
          aria-hidden="true"
          className="mx-auto mb-4 h-10 w-10 text-[var(--brand)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
        <p className="text-lg font-semibold text-white">Zpráva odeslána!</p>
        <p className="mt-2 text-sm text-gray-300">
          Ozveme se vám co nejdříve.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-[var(--brand)] underline underline-offset-4 transition hover:text-white"
        >
          Odeslat další zprávu
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="_honey"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      />

      <div>
        <label htmlFor="cf-name" className="mb-1.5 block text-sm text-gray-300">
          Jméno
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-[var(--brand)]/50 focus:ring-1 focus:ring-[var(--brand)]/30"
          placeholder="Jan Novák"
        />
      </div>

      <div>
        <label
          htmlFor="cf-email"
          className="mb-1.5 block text-sm text-gray-300"
        >
          E-mail
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-[var(--brand)]/50 focus:ring-1 focus:ring-[var(--brand)]/30"
          placeholder="jan@firma.cz"
        />
      </div>

      <div>
        <label
          htmlFor="cf-message"
          className="mb-1.5 block text-sm text-gray-300"
        >
          Zpráva
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-[var(--brand)]/50 focus:ring-1 focus:ring-[var(--brand)]/30"
          placeholder="Popište, co potřebujete..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="primary-button w-full justify-center disabled:opacity-60"
      >
        {status === "loading" ? "Odesílám..." : "Odeslat zprávu"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Vaše údaje zpracujeme za účelem vyřízení vaší poptávky. Více v{" "}
        <a
          href="/zasady-ochrany-osobnich-udaju"
          className="text-gray-400 underline underline-offset-2 transition hover:text-[var(--brand)]"
        >
          zásadách ochrany osobních údajů
        </a>
        .
      </p>
    </form>
  );
}
