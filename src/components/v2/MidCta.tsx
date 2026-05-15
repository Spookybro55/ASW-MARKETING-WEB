import { ctaBand } from "@/data/siteContent";
import { ArrowRightIcon, CheckIcon } from "./icons";

/**
 * MidCta — modrý CTA band „Připraveni získat více poptávek?"
 * (Commit 10 of v0 redesign).
 *
 * Replaces the previous light single-row card with the full-width brand-
 * blue gradient band from the v0 mockup (06-about-cta-footer.png). Sits
 * between the philosophy section and the contact form so the visitor has
 * a clear, low-pressure conversion path before scrolling further.
 *
 * Layout (driven by .asw-v0-cta-band* utilities in globals.css):
 *   - mobile: stacked column — title + lead + checks, then white pill
 *   - ≥768px: row — title block on the left, white pill CTA on the right
 *
 * Content rules (CLAUDE.md §7 + project guardrails):
 *   - low-pressure copy ("Nezávazná konzultace") — no sales pressure
 *   - three trust pointers (Rychlá odpověď / Žádné závazky / Lidský
 *     přístup) — qualitative only, no fake response-time numbers
 *   - target stays #kontakt; ContactForm and the API route are untouched
 *
 * Analytics dataset attributes (data-cta-label / data-cta-location) are
 * preserved so existing GA4 funnel events continue to fire.
 */
export default function MidCta() {
  return (
    <section
      aria-label={ctaBand.title}
      style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
    >
      <div className="container-wide px-5">
        <div className="asw-v0-cta-band" role="region">
          <div style={{ minWidth: 0 }}>
            <p className="asw-v0-cta-band-title">{ctaBand.title}</p>
            <p className="asw-v0-cta-band-lead">{ctaBand.lead}</p>
            <ul className="asw-v0-cta-band-checks" role="list">
              {ctaBand.features.map((feature) => (
                <li key={feature}>
                  <CheckIcon
                    width={14}
                    height={14}
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={ctaBand.ctaHref}
            className="asw-v0-cta-band-pill"
            data-cta-label="mid_cta"
            data-cta-location="mid_cta"
          >
            <span>{ctaBand.ctaLabel}</span>
            <ArrowRightIcon
              width={16}
              height={16}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
