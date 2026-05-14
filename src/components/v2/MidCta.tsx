import { midCta } from "@/data/siteContent";

/**
 * Mid-funnel CTA band (Commit: launch-fix P1-4).
 * Light, single-row prompt placed after the comparison so the visitor
 * isn't left without a conversion path through Portfolio → FAQ.
 * Intentionally not a full dramatic section.
 */
export default function MidCta() {
  return (
    <section
      aria-label="Nezávazná konzultace"
      style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
    >
      <div className="container-wide px-5">
        <div
          className="card"
          style={{
            padding: "1.75rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.25rem",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--fg)",
                letterSpacing: "-0.01em",
              }}
            >
              {midCta.title}
            </p>
            <p
              className="muted"
              style={{ marginTop: "0.3rem", fontSize: "0.97rem" }}
            >
              {midCta.lead}
            </p>
          </div>
          <a
            href={midCta.ctaHref}
            className="btn btn-primary"
            data-cta-label="mid_cta"
            data-cta-location="mid_cta"
          >
            {midCta.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
