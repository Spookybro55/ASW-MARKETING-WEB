import { heroV0 } from "@/data/siteContent";
import {
  ArrowRightIcon,
  BrowserOffIcon,
  ChevronRightIcon,
  PhoneOffIcon,
  SearchWarnIcon,
} from "./icons";

/**
 * v0 dark hero (Commit 4: now with problem cards).
 *
 * Centered composition: large H1 split into a lead line and an italic
 * brand-sky accent ("Online do 7 dní."), a calm lead paragraph, single
 * primary pill CTA, scope microcopy under it, then the "Co vás brzdí?"
 * badge and three problem cards (heroV0.problemCards) that bridge into
 * the dark TrustStrip below.
 *
 * Padding-top is large (asw-v0-hero in globals.css) to leave room for
 * the floating navbar that lives in <body> as a sibling above <main>.
 */

// Map heroV0.problemCards[].icon string → icon component. Keeping the
// data layer string-keyed (instead of importing components in
// siteContent.ts) keeps siteContent.ts pure data.
const PROBLEM_ICONS = {
  "browser-x": BrowserOffIcon,
  "search-warn": SearchWarnIcon,
  "phone-missed": PhoneOffIcon,
} as const;

type ProblemIconKey = keyof typeof PROBLEM_ICONS;

export default function Hero() {
  return (
    <section id="hero" className="asw-v0-hero">
      <div className="asw-v0-hero-inner">
        <h1 className="asw-v0-hero-h1">
          {heroV0.h1Lead}
          <br />
          <span className="asw-v0-accent">{heroV0.h1Accent}</span>
        </h1>

        <p className="asw-v0-hero-lead">{heroV0.lead}</p>

        <div className="asw-v0-hero-actions">
          <a
            href={heroV0.primaryCta.href}
            className="asw-v0-hero-pill"
            data-cta-label="hero_primary"
            data-cta-location="hero"
          >
            {heroV0.primaryCta.label}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>

        <p className="asw-v0-hero-note">{heroV0.accentNote}</p>

        <span className="asw-v0-problems-badge">{heroV0.problemsBadge}</span>

        <ul className="asw-v0-problems" role="list">
          {heroV0.problemCards.map((card) => {
            const Icon = PROBLEM_ICONS[card.icon as ProblemIconKey];
            return (
              <li key={card.title} className="asw-v0-problem-card">
                <span className="asw-v0-problem-icon" aria-hidden="true">
                  {Icon ? <Icon className="h-5 w-5" /> : null}
                </span>
                <h3 className="asw-v0-problem-title">{card.title}</h3>
                <p className="asw-v0-problem-text">{card.text}</p>
                <a
                  href={card.ctaHref}
                  className="asw-v0-problem-link"
                  data-cta-label={`hero_problem_${card.icon}`}
                  data-cta-location="hero_problems"
                >
                  {card.ctaLabel}
                  <ChevronRightIcon className="h-3.5 w-3.5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
