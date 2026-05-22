import type { Metadata } from "next";
import Header from "@/components/asw/Header";
import Footer from "@/components/asw/Footer";
import { HeroSection } from "@/components/asw/HeroSection";
import { Section, SectionHeading } from "@/components/asw/Section";
import { PricingCard } from "@/components/asw/cards";
import { Faq } from "@/components/asw/Faq";
import { FaqJsonLd } from "@/components/asw/FaqJsonLd";
import { CtaSection } from "@/components/asw/CtaSection";
import { seo, pricing, faq, contact, cta } from "@/data/site";

export const metadata: Metadata = {
  title: seo.cenik.title,
  description: seo.cenik.description,
  alternates: { canonical: seo.cenik.path },
  openGraph: {
    title: seo.cenik.title,
    description: seo.cenik.description,
    url: seo.cenik.path,
    siteName: contact.brandName,
    locale: "cs_CZ",
    type: "website",
  },
};

export const revalidate = 3600;

export default function CenikPage() {
  return (
    <>
      <Header variant="dark" />
      <main id="main">
        <HeroSection
          eyebrow="Ceník"
          headline="Jasná cena předem, žádné překvapení"
          subheadline="Vyberte si balíček podle rozsahu. Finální cenu i rozsah vždy potvrdíme předem — externí náklady řešíme transparentně."
          ctaText={cta.poptatWeb}
          ctaUrl={cta.href}
        />

        {/* Pricing cards */}
        <Section id="balicky">
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
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
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-fg-soft">
            {pricing.note}
          </p>
        </Section>

        {/* Comparison table */}
        <Section tone="muted" id="srovnani">
          <SectionHeading title={pricing.comparison.title} />
          <div className="mx-auto mt-10 max-w-3xl overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-display font-semibold text-fg-muted" scope="col">
                    Co je v ceně
                  </th>
                  <th className="px-4 py-3 font-display font-semibold text-foreground" scope="col">
                    Web Standard
                  </th>
                  <th className="rounded-t-lg bg-brand-soft px-4 py-3 font-display font-semibold text-brand-light" scope="col">
                    Web Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.comparison.rows.map((row) => (
                  <tr key={row.label} className="border-b border-border/60 align-top">
                    <th
                      scope="row"
                      className="py-3 pr-4 font-medium text-fg-muted"
                    >
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-foreground">{row.standard}</td>
                    <td className="bg-brand-soft/40 px-4 py-3 text-foreground">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-3 text-sm text-fg-soft">
            <p>{pricing.individualNote}</p>
            <p>{pricing.seoNote}</p>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <SectionHeading eyebrow={faq.eyebrow} title={faq.title} lead={faq.lead} />
          <Faq items={faq.items} />
          <FaqJsonLd items={faq.items} />
        </Section>

        <CtaSection
          title="Nejste si jistí, který balíček zvolit?"
          lead="Napište nám pár vět o vaší firmě. Doporučíme rozsah a potvrdíme cenu předem."
          ctaText={cta.primary}
          ctaUrl={cta.href}
        />
      </main>
      <Footer />
    </>
  );
}
