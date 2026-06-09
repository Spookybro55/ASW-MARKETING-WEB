"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  sections,
  allIntakeFields,
  gdprConsent,
  importanceLabel,
  type IntakeField,
  type IntakeImportance,
} from "./fields";
import { contact } from "@/data/site";
import { Icon } from "@/components/asw/icons";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-bg-soft px-4 py-2.5 text-foreground placeholder:text-fg-soft focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--brand-2)] focus-visible:border-[#1976D2]";

const importanceClass: Record<IntakeImportance, string> = {
  required: "bg-brand-soft text-brand-light",
  helpful: "bg-white/[0.05] text-fg-muted",
  optional: "text-fg-soft",
};

function ImportanceBadge({ importance }: { importance: IntakeImportance }) {
  return (
    <span
      className={`ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[0.7rem] font-medium ${importanceClass[importance]}`}
    >
      {importanceLabel[importance]}
    </span>
  );
}

function Field({ field }: { field: IntakeField }) {
  const id = `f-${field.name}`;
  const hintId = field.help ? `${id}-hint` : undefined;

  // ── Radio group ──────────────────────────────────────────────────────────
  if (field.type === "radio") {
    return (
      <fieldset className="min-w-0">
        <legend className="mb-2 flex flex-wrap items-center text-sm font-medium text-foreground">
          <span>{field.label}</span>
          <ImportanceBadge importance={field.importance} />
        </legend>
        {field.help && (
          <p id={hintId} className="mb-2 text-sm text-fg-soft">
            {field.help}
          </p>
        )}
        <div className="grid gap-2 sm:grid-cols-2">
          {field.options?.map((opt, i) => (
            <label
              key={opt}
              htmlFor={`${id}-${i}`}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-bg-soft px-4 py-2.5 text-sm text-foreground transition-colors hover:border-border-strong has-[:checked]:border-[#1976D2] has-[:checked]:bg-brand-soft"
            >
              <input
                type="radio"
                id={`${id}-${i}`}
                name={field.name}
                value={opt}
                required={field.required}
                aria-describedby={hintId}
                className="h-4 w-4 shrink-0 accent-[var(--brand-2)]"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  // ── Checkbox (consent) ─────────────────────────────────────────────────────
  if (field.type === "checkbox") {
    return (
      <label
        htmlFor={id}
        className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-bg-soft p-4"
      >
        <input
          type="checkbox"
          id={id}
          name={field.name}
          required={field.required}
          aria-describedby={hintId}
          className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--brand-2)]"
        />
        <span className="text-sm text-foreground">
          <span className="flex flex-wrap items-center">
            <span>{field.label}</span>
            <ImportanceBadge importance={field.importance} />
          </span>
          {field.help && (
            <span id={hintId} className="mt-1 block text-fg-soft">
              {field.help}
            </span>
          )}
        </span>
      </label>
    );
  }

  // ── Text / email / tel / url / textarea ────────────────────────────────────
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="mb-1.5 flex flex-wrap items-center text-sm font-medium text-foreground"
      >
        <span>{field.label}</span>
        <ImportanceBadge importance={field.importance} />
      </label>
      {field.help && (
        <p id={hintId} className="mb-1.5 text-sm text-fg-soft">
          {field.help}
        </p>
      )}
      {field.type === "textarea" ? (
        <textarea
          id={id}
          name={field.name}
          required={field.required}
          placeholder={field.placeholder}
          aria-describedby={hintId}
          rows={4}
          className={`${inputClass} min-h-[110px] leading-relaxed`}
        />
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type}
          required={field.required}
          placeholder={field.placeholder}
          aria-describedby={hintId}
          inputMode={field.type === "tel" ? "tel" : undefined}
          autoComplete={
            field.type === "email"
              ? "email"
              : field.type === "tel"
                ? "tel"
                : "off"
          }
          className={inputClass}
        />
      )}
    </div>
  );
}

export default function FormularForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload: Record<string, unknown> = {};
    for (const field of allIntakeFields) {
      payload[field.name] =
        field.type === "checkbox"
          ? fd.get(field.name) != null
          : String(fd.get(field.name) ?? "");
    }
    payload[gdprConsent.name] = fd.get(gdprConsent.name) != null;
    payload.website = String(fd.get("website") ?? ""); // honeypot

    try {
      const res = await fetch("/api/intake-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(
          json.error ??
            "Odeslání se nepovedlo. Zkuste to prosím znovu, nebo nám napište na e-mail.",
        );
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setError(
        "Odeslání se nepovedlo. Zkuste to prosím znovu, nebo nám napište na e-mail.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-8 text-center shadow-md md:p-12">
        <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-brand-light">
          <Icon name="check" className="h-6 w-6" />
        </span>
        <h2 className="mt-4 font-display text-2xl font-bold text-foreground">
          Děkujeme, podklady jsme přijali.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-fg-muted">
          Ozveme se vám, pokud bude potřeba něco doplnit.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 font-display font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
          >
            Zpět na hlavní stránku
          </Link>
          <a
            href={contact.emailHref}
            className="text-sm font-semibold text-brand-light underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-12">
      {/* Přehled sekcí — vlevo na desktopu, sticky */}
      <aside className="hidden lg:block">
        <nav
          aria-label="Přehled sekcí formuláře"
          className="sticky top-24 rounded-2xl border border-border bg-surface p-5 shadow-sm"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-light">
            Sekce formuláře
          </p>
          <ol className="space-y-1.5 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex gap-2 rounded-lg px-2 py-1.5 text-fg-muted transition-colors hover:bg-white/[0.04] hover:text-foreground"
                >
                  <span className="font-semibold text-brand-light">
                    {s.number}.
                  </span>
                  <span>{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>

      {/* Formulář */}
      <form onSubmit={handleSubmit} className="min-w-0">
        {/* Honeypot — skrytý před uživateli, boti vyplní. */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label>
            Nevyplňujte toto pole
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="scroll-mt-24 rounded-2xl border border-border bg-surface p-5 shadow-md sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft font-display text-sm font-bold text-brand-light">
                  {section.number}
                </span>
                <h2
                  id={`${section.id}-title`}
                  className="font-display text-lg font-bold text-foreground sm:text-xl"
                >
                  {section.title}
                </h2>
              </div>
              <p className="mt-2.5 text-sm leading-6 text-fg-muted">
                {section.description}
              </p>

              <div className="mt-6 grid gap-5">
                {section.fields.map((field) => (
                  <Field key={field.name} field={field} />
                ))}
              </div>
            </section>
          ))}

          {/* GDPR souhlas + odeslání */}
          <section className="rounded-2xl border border-border bg-surface p-5 shadow-md sm:p-7">
            <label
              htmlFor="f-gdprConsent"
              className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-bg-soft p-4"
            >
              <input
                type="checkbox"
                id="f-gdprConsent"
                name={gdprConsent.name}
                required
                aria-describedby="f-gdprConsent-hint"
                className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--brand-2)]"
              />
              <span className="text-sm text-foreground">
                <span className="flex flex-wrap items-center">
                  <span>{gdprConsent.label}</span>
                  <ImportanceBadge importance="required" />
                </span>
                <span id="f-gdprConsent-hint" className="mt-1 block text-fg-soft">
                  {gdprConsent.note}
                </span>
              </span>
            </label>

            {status === "error" && (
              <p
                role="alert"
                className="mt-5 rounded-lg border border-[var(--danger)]/30 bg-[var(--danger)]/10 px-4 py-3 text-sm text-[var(--danger)]"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-display font-semibold text-white transition-colors hover:bg-brand-hover disabled:opacity-70 sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
            >
              {status === "submitting" ? "Odesílám…" : "Odeslat podklady"}
            </button>

            <p className="mt-4 text-xs leading-relaxed text-fg-soft">
              Pole označená <span className="text-brand-light">„Důležité“</span>{" "}
              potřebujeme vyplnit. „Pomůže nám“ a „Volitelné“ můžete přeskočit a
              doplníme je případně společně.
            </p>
          </section>
        </div>
      </form>
    </div>
  );
}
