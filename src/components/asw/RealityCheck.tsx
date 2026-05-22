import { Section } from "./Section";
import { Button } from "./Button";
import { Icon } from "./icons";
import { realityCheck } from "@/data/site";

/*
 * Homepage "Reality check" section. Calm, credible framing of what a weak
 * online presence costs a small business — no statistics, no fearmongering,
 * no guarantees. Sits between the hero (problem cards) and the portfolio
 * showcase. Cards reuse the unified surface system (bg-surface / border-border
 * / rounded-2xl) and the shared blue icon container. The only non-blue accent
 * is the small warm "Reality check" eyebrow badge.
 */
export function RealityCheck() {
  return (
    <Section id="reality-check">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full border border-[#FBBF24]/25 bg-[#FBBF24]/10 px-3 py-1 text-sm font-semibold text-[#FBBF24]">
          {realityCheck.badge}
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-[2rem]">
          {realityCheck.headline}
        </h2>
        <p className="mt-3 font-display text-lg font-semibold text-brand-light sm:text-xl">
          {realityCheck.highlight}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-fg-muted">
          {realityCheck.subheadline}
        </p>
      </div>

      <ul
        role="list"
        className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {realityCheck.cards.map((card) => (
          <li
            key={card.title}
            className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-md"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-light">
                <Icon name={card.icon} className="h-5 w-5" />
              </span>
              <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-fg-soft">
                {card.badge}
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-foreground">
              {card.title}
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-fg-muted">
              {card.text}
            </p>
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-12 max-w-2xl text-center">
        <p className="leading-relaxed text-fg-muted">{realityCheck.ctaMicrocopy}</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            href={realityCheck.primaryCta.href}
            ctaLabel="reality_check"
            ctaLocation="reality_check"
          >
            {realityCheck.primaryCta.label}
          </Button>
          <Button
            href={realityCheck.secondaryCta.href}
            variant="secondary"
            ctaLabel="reality_check_secondary"
            ctaLocation="reality_check"
          >
            {realityCheck.secondaryCta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
