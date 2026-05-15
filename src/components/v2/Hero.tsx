import { heroV0 } from "@/data/siteContent";
import { ArrowRightIcon } from "./icons";

/**
 * v0 dark hero (Commit 3 of v0 redesign).
 *
 * Centered composition: large H1 split into a lead line and an italic
 * brand-sky accent ("Online do 7 dní."), a calm lead paragraph, single
 * primary pill CTA, and a small note that scopes the 7-day claim so it
 * cannot read as a blanket guarantee (CLAUDE.md §4).
 *
 * Intentionally light on this commit:
 *   - no problem cards under the hero (next commit)
 *   - no trust strip in dark variant (next commit)
 *   - no browser mockup (the mockup-heavy split layout is replaced by
 *     the v0 centered composition)
 *
 * Padding-top is large (asw-v0-hero in globals.css) to leave room for
 * the floating navbar that lives in <body> as a sibling above <main>.
 */
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
      </div>
    </section>
  );
}
