import type { Metadata } from "next";
import Header from "@/components/asw/Header";
import Footer from "@/components/asw/Footer";
import { HomeHero } from "@/components/asw/HomeHero";
import { PortfolioShowcase } from "@/components/asw/PortfolioShowcase";
import { Section, SectionHeading } from "@/components/asw/Section";
import { ServiceCard, ProcessStep, PricingCard } from "@/components/asw/cards";
import { Faq } from "@/components/asw/Faq";
import { FaqJsonLd } from "@/components/asw/FaqJsonLd";
import { Button } from "@/components/asw/Button";
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

        {/* 11. Pricing */}
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

        {/* 14. Final CTA band */}
        <section className="bg-[linear-gradient(135deg,#0D47A1_0%,#1E5FBF_100%)] px-5 py-16 sm:px-8 md:py-20">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-[2rem]">
              {finalCta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">
              {finalCta.text}
            </p>
            <div className="mt-8">
              <Button
                href={finalCta.ctaHref}
                variant="secondary"
                ctaLabel="final_cta"
                ctaLocation="final_cta"
                className="border-white/70 hover:border-white"
              >
                {finalCta.ctaLabel}
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
              <a href={contact.phoneHref} className="font-medium hover:text-white">
                {contact.phone}
              </a>
              <a href={contact.emailHref} className="font-medium hover:text-white">
                {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
