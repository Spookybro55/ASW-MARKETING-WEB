import { pricing } from "@/data/siteContent";
import { CheckIcon, StarIcon } from "./icons";

/**
 * Pricing — v0-aligned 3-tier card section (Commit 13a of v0 redesign).
 *
 * Visual restyle only. Same data, same prices, same packages. The header
 * is centered to match Results / Deliverables / Faq, and each tier card
 * follows the v0 bento aesthetic: --radius-lg surface, soft border,
 * crisp typographic hierarchy. The featured tier (Lokální web,
 * `featured: true` in the data) keeps the existing
 * `.card-accent-featured` lift treatment (brand ring + soft shadow +
 * translateY) and gains a small floating badge above the card top so
 * the "Nejčastější volba" label is the visual anchor without screaming.
 *
 * No CSS additions in this commit (use existing tokens / utilities).
 * No new claims, no fake guarantees, no "nejlevnější" framing.
 *
 * Analytics dataset attributes preserved on every CTA so funnel events
 * keep firing under their existing labels.
 */
export default function Pricing() {
  return (
    <section id="cenik" className="section section-muted">
      <div className="container-wide px-5">
        <header
          style={{
            maxWidth: "60ch",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span className="eyebrow">{pricing.eyebrow}</span>
          <h2 className="h2 mt-2">{pricing.title}</h2>
          <p className="lead mt-4">{pricing.lead}</p>
        </header>

        <div className="mt-12 grid gap-7 md:grid-cols-3 items-stretch">
          {pricing.packages.map((pkg) => (
            <article
              key={pkg.id}
              className={
                pkg.featured
                  ? "card card-accent-featured"
                  : "card card-interactive"
              }
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
                padding: "1.85rem 1.7rem",
                gap: "0.5rem",
              }}
            >
              {pkg.featured && pkg.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--brand)",
                    color: "#fff",
                    padding: "0.32rem 0.85rem",
                    borderRadius: "999px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    whiteSpace: "nowrap",
                    boxShadow: "0 8px 22px rgba(10, 102, 255, 0.32)",
                    zIndex: 1,
                  }}
                >
                  <StarIcon style={{ width: "11px", height: "11px" }} />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "var(--fg)",
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                {pkg.name}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--fg-muted)",
                  fontSize: "0.93rem",
                  lineHeight: 1.55,
                  minHeight: "2.8em",
                }}
              >
                {pkg.tagline}
              </p>

              <div
                style={{
                  marginTop: "0.6rem",
                  paddingTop: "1rem",
                  paddingBottom: "1.1rem",
                  borderTop: "1px solid var(--border)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    color: pkg.featured ? "var(--brand)" : "var(--fg)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.15,
                  }}
                >
                  {pkg.priceFrom}
                </div>
              </div>

              <ul
                style={{
                  marginTop: "1.1rem",
                  marginBottom: "1.6rem",
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                  flex: 1,
                }}
              >
                {pkg.features.map((feat) => (
                  <li
                    key={feat}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.65rem",
                      fontSize: "0.94rem",
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckIcon
                      style={{
                        color: "var(--brand)",
                        width: "16px",
                        height: "16px",
                        flexShrink: 0,
                        marginTop: "3px",
                      }}
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={pkg.featured ? "btn btn-primary" : "btn btn-secondary"}
                data-cta-label={`pricing_${pkg.id}`}
                data-cta-location="pricing"
                style={{ marginTop: "auto" }}
              >
                {pkg.ctaLabel}
              </a>
            </article>
          ))}
        </div>

        <div
          className="mt-10 grid gap-5 md:grid-cols-2"
          style={{
            maxWidth: "88ch",
            marginInline: "auto",
          }}
        >
          <p
            className="muted"
            style={{ fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}
          >
            {pricing.footnote}
          </p>
          <p
            className="muted"
            style={{ fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}
          >
            {pricing.careCopy}
          </p>
        </div>
      </div>
    </section>
  );
}
