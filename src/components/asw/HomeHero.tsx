import { Button } from "./Button";
import { Icon } from "./icons";
import { homeHero } from "@/data/site";

/*
 * Dark premium homepage hero — reference-fidelity pass (2026-05-21). Strong
 * landing-page impact: large outcome H1 with a soft blue-accent phrase, tight
 * rhythm, decision-style problem cards, and a LARGE browser mockup acting as
 * the main visual proof. Layered depth from three subtle radial blue glows
 * (behind the H1, lower-left, and behind the mockup) + faint dot grid + bottom
 * vignette. Blue only — no neon, no gold. The floating <Header variant="dark" />
 * is positioned over this section by the page; top padding leaves room for it.
 */
export function HomeHero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#05070D] px-5 pb-16 pt-24 sm:px-8 md:pb-20 md:pt-24"
    >
      {/* Radial blue glows — behind H1 (top center), lower-left, behind mockup */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(46%_36%_at_50%_4%,rgba(25,118,210,0.32),transparent_70%),radial-gradient(36%_36%_at_10%_72%,rgba(13,71,161,0.18),transparent_70%),radial-gradient(48%_30%_at_50%_94%,rgba(25,118,210,0.22),transparent_72%)]"
      />
      {/* Faint dot grid, masked toward the top */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_at_50%_22%,black,transparent_70%)]"
      />
      {/* Soft bottom vignette → eases the dark/light transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-black/40"
      />

      <div className="mx-auto flex max-w-[95rem] flex-col items-center text-center">
        {/* One inline text flow: white claim + blue italic accent flowing
            straight after it (like the reference). The accent is inline, never
            forced onto its own line via block — it wraps naturally only if the
            viewport is too narrow. clamp() keeps it on one line at ~1920 and
            allows an elegant 2-line wrap around 1440. */}
        <h1 className="mx-auto max-w-[95rem] font-display text-[clamp(2.05rem,4.4vw,3.55rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-balance text-white">
          <span>{homeHero.h1Lead}</span>{" "}
          <span className="bg-gradient-to-r from-[#8FBEF7] to-[#5E97EA] bg-clip-text font-bold italic text-transparent">
            {homeHero.h1Accent}
          </span>
        </h1>

        <p className="mt-5 max-w-[46rem] text-[1.0625rem] leading-relaxed text-white/65 sm:text-lg">
          {homeHero.subheadline}
        </p>

        <div className="mt-6 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
          <Button
            href={homeHero.primaryCta.href}
            ctaLabel="hero"
            ctaLocation="hero"
            className="shadow-[0_12px_34px_-10px_rgba(25,118,210,0.7)]"
          >
            {homeHero.primaryCta.label}
          </Button>
          <a
            href={homeHero.secondaryCta.href}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 font-display font-semibold text-white transition-colors duration-150 hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            data-cta-label="hero_secondary"
            data-cta-location="hero"
          >
            {homeHero.secondaryCta.label}
          </a>
        </div>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/45">
          {homeHero.trustMicrocopy}
        </p>

        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-white/45">
          <span>{homeHero.contactLine.prefix}</span>
          <a
            href={homeHero.contactLine.emailHref}
            className="font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            data-cta-label="hero_email"
            data-cta-location="hero"
          >
            {homeHero.contactLine.email}
          </a>
          <span aria-hidden="true" className="text-white/30">·</span>
          <a
            href={homeHero.contactLine.phoneHref}
            className="font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            data-cta-label="hero_phone"
            data-cta-location="hero"
          >
            {homeHero.contactLine.phone}
          </a>
        </p>

        <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-2">
          {homeHero.problemsLabel}
        </p>
        <ul role="list" className="mt-4 grid w-full max-w-5xl gap-4 sm:grid-cols-3">
          {homeHero.problemCards.map((card) => (
            <li
              key={card.title}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1976D2]/45 hover:bg-surface-elevated hover:shadow-[0_22px_48px_-22px_rgba(25,118,210,0.65)] motion-reduce:transform-none"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-light">
                <Icon name={card.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-white">
                {card.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                {card.text}
              </p>
              <a
                href={card.ctaHref}
                className="mt-5 inline-flex items-center gap-1.5 self-start rounded-lg border border-[#1976D2]/40 bg-[#1976D2]/[0.10] px-3 py-1.5 text-sm font-semibold text-brand-light transition-colors duration-150 hover:border-[#1976D2]/60 hover:bg-[#1976D2]/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-2)]"
                data-cta-label="hero_problem"
                data-cta-location="hero"
              >
                {card.ctaLabel}
                <Icon name="arrow-right" className="h-3.5 w-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}
