import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/asw/Header";
import Footer from "@/components/asw/Footer";
import { Section, SectionHeading } from "@/components/asw/Section";
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
          <SectionHeading
            eyebrow="Konzultace zdarma"
            title={konzultacePage.hero.headline}
            lead={konzultacePage.hero.subheadline}
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-fg-soft">
            {konzultacePage.trust}
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            {/* Form */}
            <Suspense
              fallback={
                <div className="rounded-2xl border border-border bg-surface p-8 text-fg-muted shadow-md">
                  Načítám formulář…
                </div>
              }
            >
              <ConsultationForm />
            </Suspense>

            {/* Reassurance + direct contact */}
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
