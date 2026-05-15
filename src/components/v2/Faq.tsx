import { faq } from "@/data/siteContent";

/**
 * Faq — v0-aligned accordion (Commit 12 of v0 redesign).
 *
 * Visual restyle only — no copy or data layer changes. The previous layout
 * used a left-aligned header, small-radius `card` shells and a tight
 * inter-item gap that read as a legacy block in the middle of the new
 * v0 sections (bento, dark band, etc.). This restyle adopts:
 *
 *   - centered header with eyebrow + H2 + lead, matching Results /
 *     Deliverables / Philosophy headers
 *   - accordion items with --radius-lg, soft surface ring, generous
 *     padding (1.4rem 1.6rem), gap between items raised from .6rem to
 *     .9rem so the rhythm reads like the bento grid above
 *   - blue circular plus toggle on the right that rotates to "×" when
 *     open, mirroring the v0 "round disclosure" treatment
 *   - keyboard / accessibility behaviour preserved via native
 *     <details>/<summary> — Tab to focus, Enter/Space toggles, focus
 *     ring inherited from the global :focus-visible rule
 *
 * Closing micro-CTA below the list keeps the same conversion path
 * (#kontakt) and analytics dataset attributes.
 *
 * Constraint: globals.css must NOT change in this commit, so all visual
 * tokens are inline or use existing utilities (card, btn-secondary,
 * --radius-lg, --brand-soft, …).
 */
export default function Faq() {
  return (
    <section id="faq" className="section section-muted">
      <div className="container-wide px-5">
        <header
          style={{
            maxWidth: "60ch",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="h2 mt-2">{faq.title}</h2>
          <p className="lead mt-4">{faq.lead}</p>
        </header>

        <div
          style={{
            marginTop: "3rem",
            maxWidth: "820px",
            marginInline: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.9rem",
          }}
        >
          {faq.items.map((item, i) => (
            <details
              key={item.q}
              className="asw-faq-item"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-sm)",
                overflow: "hidden",
              }}
              {...(i === 0 ? { open: true } : {})}
            >
              <summary
                style={{
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  padding: "1.25rem 1.5rem",
                  fontWeight: 600,
                  color: "var(--fg)",
                  fontSize: "1.02rem",
                  lineHeight: 1.4,
                  letterSpacing: "-0.005em",
                }}
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="asw-faq-toggle"
                  style={{
                    flexShrink: 0,
                    width: "32px",
                    height: "32px",
                    borderRadius: "999px",
                    background: "var(--brand-soft)",
                    color: "var(--brand)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </summary>
              <div
                style={{
                  padding: "0 1.5rem 1.4rem",
                  color: "var(--fg-muted)",
                  fontSize: "0.97rem",
                  lineHeight: 1.7,
                }}
              >
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.85rem 1.25rem",
            textAlign: "center",
          }}
        >
          <p className="muted" style={{ fontSize: "0.97rem", margin: 0 }}>
            {faq.closing.text}
          </p>
          <a
            href={faq.closing.ctaHref}
            className="btn btn-secondary"
            data-cta-label="faq_closing"
            data-cta-location="faq"
          >
            {faq.closing.ctaLabel}
          </a>
        </div>

        <style>
          {`
            .asw-faq-item summary::-webkit-details-marker { display: none; }
            .asw-faq-item .asw-faq-toggle {
              transition: transform 0.18s ease, background-color 0.18s ease, color 0.18s ease;
            }
            .asw-faq-item[open] .asw-faq-toggle {
              transform: rotate(45deg);
              background: var(--brand);
              color: #fff;
            }
            .asw-faq-item:hover { border-color: var(--brand-soft); }
            .asw-faq-item summary:focus-visible {
              outline: 2px solid var(--brand);
              outline-offset: -2px;
              border-radius: var(--radius-lg);
            }
          `}
        </style>
      </div>
    </section>
  );
}
