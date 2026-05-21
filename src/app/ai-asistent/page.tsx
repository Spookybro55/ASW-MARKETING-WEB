import type { Metadata } from "next";
import Header from "@/components/asw/Header";
import Footer from "@/components/asw/Footer";
import { HeroSection } from "@/components/asw/HeroSection";
import { Section, SectionHeading } from "@/components/asw/Section";
import { BenefitCard } from "@/components/asw/cards";
import { CtaSection } from "@/components/asw/CtaSection";
import { seo, aiAsistentPage, contact } from "@/data/site";

export const metadata: Metadata = {
  title: seo.aiAsistent.title,
  description: seo.aiAsistent.description,
  alternates: { canonical: seo.aiAsistent.path },
  openGraph: {
    title: seo.aiAsistent.title,
    description: seo.aiAsistent.description,
    url: seo.aiAsistent.path,
    siteName: contact.brandName,
    locale: "cs_CZ",
    type: "website",
  },
};

export const revalidate = 3600;

export default function AiAsistentPage() {
  const p = aiAsistentPage;
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection
          eyebrow="AI asistent"
          headline={p.hero.headline}
          subheadline={p.hero.subheadline}
          ctaText={p.hero.ctaText}
          ctaUrl={p.hero.ctaUrl}
          secondaryText="Objednat konzultaci"
          secondaryUrl="/konzultace"
        />

        {/* Explanation */}
        <Section id="co-to-je">
          <SectionHeading
            eyebrow={p.explain.eyebrow}
            title={p.explain.title}
            lead={p.explain.lead}
          />
        </Section>

        {/* Use cases */}
        <Section tone="muted" id="pro-koho">
          <SectionHeading eyebrow={p.useCases.eyebrow} title={p.useCases.title} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.useCases.items.map((u) => (
              <BenefitCard key={u.title} {...u} />
            ))}
          </div>
        </Section>

        {/* Benefits */}
        <Section id="benefity">
          <SectionHeading eyebrow={p.benefits.eyebrow} title={p.benefits.title} />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {p.benefits.items.map((b) => (
              <BenefitCard key={b.title} {...b} />
            ))}
          </div>
        </Section>

        {/* Pricing teaser / CTA */}
        <CtaSection
          title={p.pricingTeaser.title}
          lead={p.pricingTeaser.lead}
          ctaText={p.pricingTeaser.ctaText}
          ctaUrl={p.pricingTeaser.ctaUrl}
        />
      </main>
      <Footer />
    </>
  );
}
