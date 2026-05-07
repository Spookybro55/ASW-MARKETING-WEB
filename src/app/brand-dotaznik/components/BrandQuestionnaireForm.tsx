"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { contactFields, sections } from "../questions";
import QuestionnaireSection from "./QuestionnaireSection";
import BottomCTA from "./BottomCTA";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-[var(--brand)]/50 focus:ring-1 focus:ring-[var(--brand)]/30";

type Props = {
  uploadUrl: string;
};

export default function BrandQuestionnaireForm({ uploadUrl }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/brand-questionnaire", {
        method: "POST",
        body: formData,
      });

      const json = (await res.json().catch(() => null)) as
        | { success?: boolean; error?: string }
        | null;

      if (!res.ok || !json?.success) {
        setErrorMsg(
          json?.error ??
            "Něco se pokazilo. Zkuste to prosím znovu nebo nám napište přímo na e-mail.",
        );
        setStatus("error");
        trackEvent({
          name: "brand_questionnaire_error",
          params: {
            form_location: "brand-dotaznik",
            error_type:
              res.status >= 400 && res.status < 500 ? "validation" : "api",
          },
        });
        return;
      }

      setStatus("success");
      form.reset();
      trackEvent({
        name: "brand_questionnaire_submit",
        params: { form_location: "brand-dotaznik" },
      });
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setErrorMsg(
        "Nepodařilo se odeslat dotazník. Zkontrolujte připojení a zkuste to znovu.",
      );
      setStatus("error");
      trackEvent({
        name: "brand_questionnaire_error",
        params: { form_location: "brand-dotaznik", error_type: "network" },
      });
    }
  }

  if (status === "success") {
    return (
      <section className="border-t border-white/[0.06] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand)]/[0.08] p-8 text-center md:p-12">
            <svg
              aria-hidden="true"
              className="mx-auto mb-5 h-12 w-12 text-[var(--brand)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Děkujeme, odpovědi jsme zaznamenali.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-7 text-gray-300">
              Brzy se vám ozveme s dalším postupem.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={uploadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button inline-flex items-center justify-center gap-2 text-sm"
              >
                Nahrát audio/video odpovědi
              </a>
              <Link
                href="/"
                className="text-sm text-[var(--brand)] underline underline-offset-4 transition hover:text-white"
              >
                Zpět na hlavní stránku
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="_honey"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden opacity-0"
      />

      {/* ÚVODNÍ POVINNÉ ÚDAJE */}
      <section
        id="kontaktni-udaje"
        className="border-t border-white/[0.06] px-6 py-16 md:py-24"
      >
        <div className="mx-auto max-w-4xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-7 items-center justify-center rounded-md border border-[var(--brand)]/25 bg-[var(--brand)]/10 px-2 text-xs font-bold text-[var(--brand)]">
                Úvod
              </span>
              <span className="h-px flex-1 bg-white/[0.08]" />
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Úvodní údaje
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-400 md:text-base md:leading-7">
              Krátké kontaktní informace, abychom vás mohli zastihnout a
              odpovědi přiřadit ke správnému projektu.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-7">
            <div className="grid gap-5 md:grid-cols-2">
              {contactFields.map((field) => {
                const fieldId = `bd-${field.name}`;
                return (
                  <div key={field.name}>
                    <label
                      htmlFor={fieldId}
                      className="mb-1.5 flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span>{field.label}</span>
                      {field.required ? (
                        <span
                          aria-label="povinné pole"
                          className="text-[var(--brand)]"
                        >
                          *
                        </span>
                      ) : (
                        <span className="text-xs text-gray-500">
                          (nepovinné)
                        </span>
                      )}
                    </label>
                    <input
                      id={fieldId}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      autoComplete={
                        field.type === "email"
                          ? "email"
                          : field.type === "tel"
                            ? "tel"
                            : field.name === "contact_person"
                              ? "name"
                              : "organization"
                      }
                      className={inputClass}
                    />
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-xs leading-5 text-gray-500">
              <span className="text-[var(--brand)]">*</span> Povinná pole.
              Ostatní otázky níže jsou nepovinné — můžete na ně odpovědět také
              audio nebo video nahrávkou.
            </p>
          </div>
        </div>
      </section>

      {/* Sekce 1–8 */}
      {sections.map((section) => (
        <QuestionnaireSection key={section.id} section={section} />
      ))}

      <BottomCTA
        uploadUrl={uploadUrl}
        isSubmitting={status === "loading"}
        errorMessage={status === "error" ? errorMsg : undefined}
      />
    </form>
  );
}
