import type { Metadata } from "next";
import Header from "@/components/asw/Header";
import Footer from "@/components/asw/Footer";
import { HomeHero } from "@/components/asw/HomeHero";
import { PortfolioShowcase } from "@/components/asw/PortfolioShowcase";
import { WhyNow } from "@/components/asw/WhyNow";
import { Section, SectionHeading } from "@/components/asw/Section";
import { ServiceCard, ProcessStep } from "@/components/asw/cards";
import { Button } from "@/components/asw/Button";
import { Faq } from "@/components/asw/Faq";
import { FaqJsonLd } from "@/components/asw/FaqJsonLd";
import { CtaSection } from "@/components/asw/CtaSection";
import { Icon, CheckIcon } from "@/components/asw/icons";
import {
  seo,
  services,
  whatYouGet,
  process,
  pricing,
  proof,
  faq,
  finalCta,
  contact,
  cta,
} from "@/data/site";

export const metadata: Metadata = {
  title: seo.home.title,
  description: seo.home.description,
  alternates: { canonical: seo.home.path },
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: seo.home.path,
    siteName: contact.brandName,
    locale: "cs_CZ",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      {/* 1. Floating dark pill nav, positioned over the hero */}
      <Header variant="dark" />
      <main id="main">
        {/* 2–6. Dark hero: H1, subheadline, CTAs, trust, problem cards */}
        <HomeHero />

        {/* 7. Portfolio device showcase — tilt-straighten on scroll */}
        <PortfolioShowcase />

        {/* 7b. Proč teď — kompaktní argument pro odkladače */}
        <WhyNow />

        {/* 8. Services — "Co pro vás zařídíme" */}
        <Section id="sluzby">
          <SectionHeading
            eyebrow={services.eyebrow}
            title={services.title}
            lead={services.lead}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.items.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </Section>

        {/* 9. What you get — "Co dostanete v základu" */}
        <Section tone="muted" id="co-dostanete">
          <SectionHeading
            eyebrow={whatYouGet.eyebrow}
            title={whatYouGet.title}
            lead={whatYouGet.lead}
          />
          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2"
          >
            {whatYouGet.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 shadow-md"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-light">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <span className="font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 10. Process — "Jak to probíhá" (secondary hero CTA anchor) */}
        <Section id="jak-to-funguje">
          <SectionHeading eyebrow={process.eyebrow} title={process.title} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step) => (
              <ProcessStep key={step.stepNumber} {...step} />
            ))}
          </div>
        </Section>

        {/* 11. Ceník teaser — detailní ceny a balíčky žijí jen na /cenik.
            Homepage se neopakuje s pricingem; drží jen krátkou konverzní
            cestu na ceník nebo rovnou na nezávaznou poptávku. */}
        <Section tone="muted" id="cenik">
          <SectionHeading
            eyebrow={pricing.eyebrow}
            title="Chcete znát cenu?"
            lead="Podívejte se na přehledný ceník nebo nám rovnou napište."
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/cenik" ctaLabel="pricing_teaser" ctaLocation="home_cenik">
              Zobrazit ceník
            </Button>
            <Button
              href={cta.href}
              variant="secondary"
              ctaLabel="pricing_teaser_poptat"
              ctaLocation="home_cenik"
            >
              {cta.poptatWeb}
            </Button>
          </div>
        </Section>

        {/* 12. Trust / proof (launch-safe) */}
        <Section id="duvera">
          <SectionHeading eyebrow={proof.eyebrow} title={proof.title} />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {proof.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-border bg-surface p-6 text-center shadow-md"
              >
                <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-light">
                  <Icon name={card.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center leading-relaxed text-fg-muted">
            {proof.text}
          </p>
        </Section>

        {/* 13. FAQ */}
        <Section tone="muted" id="faq">
          <SectionHeading eyebrow={faq.eyebrow} title={faq.title} lead={faq.lead} />
          <Faq items={faq.items} />
          <FaqJsonLd items={faq.items} />
        </Section>

        {/* 14. Final CTA band — sjednocený dark elevated panel. `#kontakt`
            anchor zachován (linky z headeru a fragment URL na něj cílily). */}
        <div id="kontakt">
          <CtaSection
            title={finalCta.title}
            lead={finalCta.text}
            ctaText={finalCta.ctaLabel}
            ctaUrl={finalCta.ctaHref}
            ctaLocation="final_cta"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
