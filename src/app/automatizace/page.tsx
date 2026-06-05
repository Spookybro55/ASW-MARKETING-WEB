import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/asw/Header";
import Footer from "@/components/asw/Footer";
import { HeroSection } from "@/components/asw/HeroSection";
import { Section, SectionHeading } from "@/components/asw/Section";
import { CtaSection } from "@/components/asw/CtaSection";
import { Icon, CheckIcon } from "@/components/asw/icons";
import { seo, automatizacePage, contact } from "@/data/site";
import { HeroWorkflowPanel } from "./_HeroWorkflowPanel";

export const metadata: Metadata = {
  title: seo.automatizace.title,
  description: seo.automatizace.description,
  alternates: { canonical: seo.automatizace.path },
  openGraph: {
    title: seo.automatizace.title,
    description: seo.automatizace.description,
    url: seo.automatizace.path,
    siteName: contact.brandName,
    locale: "cs_CZ",
    type: "website",
  },
};

export const revalidate = 3600;

export default function AutomatizacePage() {
  const p = automatizacePage;
  const compare = p.when.compare;
  return (
    <>
      <Header variant="dark" />
      <main id="main">
        <HeroSection
          eyebrow="Automatizace pro malé firmy"
          headline={p.hero.headline}
          subheadline={p.hero.subheadline}
          ctaText={p.hero.ctaText}
          ctaUrl={p.hero.ctaUrl}
          pills={p.hero.pills}
          wide
          media={
            <HeroWorkflowPanel
              label={p.hero.workflow.label}
              steps={p.hero.workflow.steps}
            />
          }
        />

        {/* 1. Co umíme automatizovat — concrete examples FIRST.
            Top padding tightened ~30 % so the hero leads straight into the
            grid; the wider container gives the cards more presence on
            desktop without losing rhythm. */}
        <Section
          tone="muted"
          id="co-umime"
          density="compact"
          wide
          className="!pt-6 md:!pt-10"
        >
          <SectionHeading
            eyebrow={p.whatWeAutomate.eyebrow}
            title={p.whatWeAutomate.title}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {p.whatWeAutomate.items.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-border bg-surface p-7 shadow-md sm:p-8"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-light">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-fg-muted">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* AI asistent callout — outside the grid, deliberately smaller */}
          <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-white/10 bg-white/[0.03] p-6 sm:flex sm:items-start sm:gap-5">
            <span className="mb-3 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-light sm:mb-0">
              <Icon name={p.whatWeAutomate.aiCallout.icon} className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-base font-bold text-foreground">
                {p.whatWeAutomate.aiCallout.title}
              </h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-fg-muted">
                {p.whatWeAutomate.aiCallout.text}
              </p>
              <Link
                href={p.whatWeAutomate.aiCallout.linkHref}
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light hover:text-white"
              >
                {p.whatWeAutomate.aiCallout.linkLabel}
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Section>

        {/* 2. Kdy to dává smysl — comparison block (ručně vs. automatizovat) */}
        <Section id="kdy-to-dava-smysl" density="compact">
          <SectionHeading eyebrow={p.when.eyebrow} title={p.when.title} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {/* Manual column — kept deliberately quieter */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-md sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70">
                  <Icon name="users" className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {compare.manual.title}
                </h3>
              </div>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-fg-soft">
                {compare.manual.caption}
              </p>
              <ul role="list" className="mt-5 space-y-2.5">
                {compare.manual.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2.5 text-[0.95rem] text-fg-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/40"
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Automate column — brand-blue accent, denotes preferred path */}
            <div className="rounded-2xl border border-[#1976D2]/40 bg-[linear-gradient(180deg,rgba(25,118,210,0.08)_0%,rgba(25,118,210,0.02)_100%)] p-6 shadow-[0_24px_60px_-30px_rgba(25,118,210,0.45)] sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand-light">
                  <Icon name="zap" className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {compare.auto.title}
                </h3>
              </div>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-fg-soft">
                {compare.auto.caption}
              </p>
              <ul role="list" className="mt-5 space-y-2.5">
                {compare.auto.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2.5 text-[0.95rem] text-fg-muted"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* 3. Nezačínáme technologií */}
        <Section tone="muted" id="nezaciname-technologii" density="compact">
          <SectionHeading
            eyebrow={p.notTech.eyebrow}
            title={p.notTech.title}
            lead={p.notTech.lead}
          />
        </Section>

        {/* 4. Jak to probíhá — vertical timeline (flow, ne tři boxy) */}
        <Section id="jak-to-funguje" density="compact">
          <SectionHeading eyebrow={p.process.eyebrow} title={p.process.title} />
          <ol className="relative mx-auto mt-10 max-w-3xl">
            {p.process.steps.map((step, i) => (
              <li key={step.stepNumber} className="relative pl-16 pb-10 last:pb-0">
                {/* Connector line — runs from this step's circle down to next */}
                {i < p.process.steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[1.4375rem] top-12 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#1976D2]/40 via-white/10 to-transparent"
                  />
                )}
                <span className="absolute left-0 top-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white font-display text-lg font-bold shadow-[0_10px_30px_-12px_rgba(13,71,161,0.7)]">
                  {step.stepNumber}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-fg-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 5. Final CTA — sjednocený dark elevated panel přes <CtaSection>. */}
        <CtaSection
          title={p.finalCta.title}
          lead={p.finalCta.lead}
          ctaText={p.finalCta.ctaText}
          ctaUrl={p.finalCta.ctaUrl}
          ctaLocation="automatizace_final"
        />
      </main>
      <Footer />
    </>
  );
}
