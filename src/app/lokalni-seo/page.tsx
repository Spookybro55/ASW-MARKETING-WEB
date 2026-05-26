import type { Metadata } from "next";
import Header from "@/components/asw/Header";
import Footer from "@/components/asw/Footer";
import { HeroSection } from "@/components/asw/HeroSection";
import { Section, SectionHeading } from "@/components/asw/Section";
import { ProcessStep } from "@/components/asw/cards";
import { Faq } from "@/components/asw/Faq";
import { FaqJsonLd } from "@/components/asw/FaqJsonLd";
import { CtaSection } from "@/components/asw/CtaSection";
import { CheckIcon } from "@/components/asw/icons";
import { LocalSearchPanel } from "./_LocalSearchPanel";
import { seo, lokalniSeoPage, contact } from "@/data/site";

export const metadata: Metadata = {
  title: seo.lokalniSeo.title,
  description: seo.lokalniSeo.description,
  alternates: { canonical: seo.lokalniSeo.path },
  openGraph: {
    title: seo.lokalniSeo.title,
    description: seo.lokalniSeo.description,
    url: seo.lokalniSeo.path,
    siteName: contact.brandName,
    locale: "cs_CZ",
    type: "website",
  },
};

export const revalidate = 3600;

export default function LokalniSeoPage() {
  const p = lokalniSeoPage;
  return (
    <>
      <Header variant="dark" />
      <main id="main">
        <HeroSection
          eyebrow="Lokální SEO"
          headline={p.hero.headline}
          subheadline={p.hero.subheadline}
          ctaText={p.hero.ctaText}
          ctaUrl={p.hero.ctaUrl}
        />

        {/* Modelový místní vyhledávací panel — vizuální vysvětlení toho, jak
            zákazník firmu najde. Custom UI, žádné Google logo, žádné metriky. */}
        <Section id="modelovy-panel" density="compact">
          <SectionHeading
            eyebrow={p.localPanel.eyebrow}
            title={p.localPanel.title}
            lead={p.localPanel.lead}
            tone="dark"
          />
          <LocalSearchPanel
            searchQuery={p.localPanel.searchQuery}
            companyCard={p.localPanel.companyCard}
            nearbyPins={p.localPanel.nearbyPins}
            checklist={p.localPanel.checklist}
            measureNote={p.localPanel.measureNote}
          />
        </Section>

        {/* Problem */}
        <Section id="problem">
          <SectionHeading
            eyebrow={p.problem.eyebrow}
            title={p.problem.title}
            lead={p.problem.lead}
          />
        </Section>

        {/* Solution */}
        <Section tone="muted" id="reseni">
          <SectionHeading eyebrow={p.solution.eyebrow} title={p.solution.title} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {p.solution.items.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-border bg-surface p-6 shadow-md"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-light">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-fg-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Results */}
        <Section id="vysledky">
          <SectionHeading eyebrow={p.results.eyebrow} title={p.results.title} />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {p.results.tiles.map((t) => (
              <div
                key={t.metric}
                className="rounded-2xl border border-border bg-surface p-6 text-center shadow-md"
              >
                <div className="font-display text-xl font-extrabold text-brand-light">
                  {t.metric}
                </div>
                <p className="mt-2 text-sm text-fg-muted">{t.label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-fg-soft">
            {p.results.note}
          </p>
        </Section>

        {/* Process */}
        <Section tone="muted" id="jak-to-funguje">
          <SectionHeading eyebrow={p.process.eyebrow} title={p.process.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {p.process.steps.map((step) => (
              <ProcessStep key={step.stepNumber} {...step} />
            ))}
          </div>
        </Section>

        {/* SEO FAQ */}
        <Section id="faq">
          <SectionHeading eyebrow={p.faq.eyebrow} title={p.faq.title} />
          <Faq items={p.faq.items} />
          <FaqJsonLd items={p.faq.items} />
        </Section>

        <CtaSection
          title="Chcete být ve svém okolí vidět?"
          lead="Ozvěte se nám. Projdeme váš obor a navrhneme, co dává smysl pro lepší lokální viditelnost."
          ctaText="Nezávazně probrat lokální SEO"
          ctaUrl="/konzultace?produkt=lokalni-seo"
          ctaLocation="lokalni_seo_final"
        />
      </main>
      <Footer />
    </>
  );
}
