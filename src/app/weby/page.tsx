import type { Metadata } from "next";
import Header from "@/components/asw/Header";
import Footer from "@/components/asw/Footer";
import { HeroSection } from "@/components/asw/HeroSection";
import { Section, SectionHeading } from "@/components/asw/Section";
import { BenefitCard, ProcessStep, PricingCard } from "@/components/asw/cards";
import { CtaSection } from "@/components/asw/CtaSection";
import { WebsiteShowcase } from "./_WebsiteShowcase";
import { seo, webyPage, process, pricing, contact } from "@/data/site";

export const metadata: Metadata = {
  title: seo.weby.title,
  description: seo.weby.description,
  alternates: { canonical: seo.weby.path },
  openGraph: {
    title: seo.weby.title,
    description: seo.weby.description,
    url: seo.weby.path,
    siteName: contact.brandName,
    locale: "cs_CZ",
    type: "website",
  },
};

export const revalidate = 3600;

export default function WebyPage() {
  return (
    <>
      <Header variant="dark" />
      <main id="main">
        <HeroSection
          eyebrow="Webové stránky"
          headline={webyPage.hero.headline}
          subheadline={webyPage.hero.subheadline}
          ctaText={webyPage.hero.ctaText}
          ctaUrl={webyPage.hero.ctaUrl}
          secondaryText="Zobrazit ceník"
          secondaryUrl="/cenik"
        />

        {/* Why invest into a website */}
        <Section id="proc-web">
          <SectionHeading eyebrow={webyPage.why.eyebrow} title={webyPage.why.title} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {webyPage.why.points.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-md"
              >
                <h3 className="font-display text-lg font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-fg-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Modelové ukázky webů — 3 browser-frame mockupy s „Modelová ukázka"
            pillem. Žádné reálné klientské reference. Animace v izolované
            client komponentě, stránka zůstává server component. */}
        <Section tone="muted" id="ukazky">
          <SectionHeading
            eyebrow={webyPage.portfolio.eyebrow}
            title={webyPage.portfolio.title}
            lead={webyPage.portfolio.lead}
          />
          <WebsiteShowcase
            items={webyPage.portfolio.items}
            cta={webyPage.portfolio.cta}
          />
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-fg-soft">
            {webyPage.portfolio.note}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-center text-xs leading-relaxed text-fg-soft/80">
            {webyPage.portfolio.fairUseDisclaimer}
          </p>
        </Section>

        {/* Process */}
        <Section id="jak-to-funguje">
          <SectionHeading eyebrow={process.eyebrow} title={process.title} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step) => (
              <ProcessStep key={step.stepNumber} {...step} />
            ))}
          </div>
        </Section>

        {/* Packages */}
        <Section tone="muted" id="cenik">
          <SectionHeading
            eyebrow={pricing.eyebrow}
            title={pricing.title}
            lead={pricing.lead}
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {pricing.packages.map((p) => (
              <PricingCard
                key={p.id}
                planName={p.planName}
                price={p.price}
                tagline={p.tagline}
                features={p.features}
                isFeatured={p.isFeatured}
                badge={p.badge}
                ctaText={p.ctaText}
                ctaUrl={p.ctaUrl}
              />
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-fg-soft">
            {pricing.note}
          </p>
        </Section>

        {/* Benefits */}
        <Section id="benefity">
          <SectionHeading
            eyebrow={webyPage.benefits.eyebrow}
            title={webyPage.benefits.title}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {webyPage.benefits.items.map((b) => (
              <BenefitCard key={b.title} {...b} />
            ))}
          </div>
        </Section>

        <CtaSection
          title="Pojďme probrat váš web"
          lead="Řekněte nám pár vět o vaší firmě. Ozveme se a doporučíme rozsah i orientační cenu."
          ctaText="Nezávazně probrat web"
          ctaUrl="/konzultace?produkt=web-standard"
          ctaLocation="weby_final"
        />
      </main>
      <Footer />
    </>
  );
}
