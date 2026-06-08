import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/asw/Header";
import Footer from "@/components/asw/Footer";
import { Section } from "@/components/asw/Section";
import { ConsultationForm } from "@/components/asw/ConsultationForm";
import { Icon, CheckIcon } from "@/components/asw/icons";
import { seo, konzultacePage, contact } from "@/data/site";

export const metadata: Metadata = {
  title: seo.konzultace.title,
  description: seo.konzultace.description,
  alternates: { canonical: seo.konzultace.path },
  openGraph: {
    title: seo.konzultace.title,
    description: seo.konzultace.description,
    url: seo.konzultace.path,
    siteName: contact.brandName,
    locale: "cs_CZ",
    type: "website",
  },
};

export const revalidate = 3600;

export default function KonzultacePage() {
  return (
    <>
      <Header variant="dark" />
      <main id="main" className="pt-12 sm:pt-14 md:pt-16">
        <Section id="konzultace">
          {/* Real H1 (audit Phase A 2026-05-25). Dříve heading byl renderovaný
              přes <SectionHeading> jako H2 — stránka neměla žádné H1, což byl
              a11y/SEO problém. Inline H1 + lead drží stejný vizuální rytmus. */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-[2rem]">
              {konzultacePage.hero.headline}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-fg-muted">
              {konzultacePage.hero.subheadline}
            </p>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-fg-soft">
            {konzultacePage.trust}
          </p>
          {/* sr-only H2 keeps a sequential H1→H2→(footer H3) order without
              adding a visible heading above the form. */}
          <h2 className="sr-only">Nezávazný poptávkový formulář</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            {/* Form */}
            <Suspense
              fallback={
                /* min-h reserves ~the rendered form height (≈1080px 1-col mobile,
                   ≈800px 2-col ≥sm) so the form swap on hydration doesn't shift
                   layout — fixes the mobile CLS measured in QA. */
                <div className="flex min-h-[1080px] items-center justify-center rounded-2xl border border-border bg-surface p-8 text-fg-muted shadow-md sm:min-h-[800px]">
                  Načítám formulář…
                </div>
              }
            >
              <ConsultationForm />
            </Suspense>

            {/* Reassurance + „Co se stane po odeslání" + direct contact.
                Audit Phase C 2026-05-26: explicitní 3-krokový blok snižuje
                nejistotu před submitem („podíváme se → ozveme se → doporučíme"),
                bez zásahu do formuláře/validace/prefill. */}
            <div>
              <ul role="list" className="space-y-3">
                {konzultacePage.reassurance.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-fg-muted">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-light" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-border bg-surface p-6 shadow-md">
                <p className="text-sm font-semibold text-foreground">
                  {konzultacePage.whatHappensAfter.title}
                </p>
                <ol role="list" className="mt-4 space-y-3 text-sm">
                  {konzultacePage.whatHappensAfter.steps.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-3 text-fg-muted"
                    >
                      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft font-display text-xs font-bold text-brand-light">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-surface p-6 shadow-md">
                <p className="text-sm font-semibold text-foreground">
                  Raději rovnou napsat nebo zavolat?
                </p>
                <ul role="list" className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href={contact.phoneHref} className="inline-flex items-center gap-3 text-foreground hover:text-brand-light">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand-light">
                        <Icon name="phone" className="h-4 w-4" />
                      </span>
                      {contact.phone}
                    </a>
                  </li>
                  <li>
                    <a href={contact.emailHref} className="inline-flex items-center gap-3 text-foreground hover:text-brand-light">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand-light">
                        <Icon name="file-text" className="h-4 w-4" />
                      </span>
                      {contact.email}
                    </a>
                  </li>
                  <li className="text-fg-soft">{contact.responseTime}</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
