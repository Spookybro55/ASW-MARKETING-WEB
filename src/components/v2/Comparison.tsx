import { comparison } from "@/data/siteContent";

/**
 * Comparison — v0-aligned 3-column comparison (Commit 13b of v0 redesign).
 *
 * Visual restyle only. The previous version rendered the two non-ASW
 * columns as fully transparent ghost cards which read as broken next to
 * the new bento + tier cards. This refresh:
 *
 *   - centers the section header to match Pricing / Faq / Results
 *   - gives every column a real surface (soft tinted background +
 *     1px border + sm shadow) so the comparison reads as one structured
 *     block rather than three loose lists
 *   - keeps the ASW column visually featured (brand border + brand-ring
 *     + slight lift), but tones it down vs. the previous full
 *     `card-accent-featured` lift so it doesn't compete with the
 *     Pricing featured card directly above it on long-scroll views
 *   - tightens the dl/dt/dd rhythm (0.85rem gap, last item without a
 *     trailing border)
 *   - no copy changes, no new claims, no fake guarantees
 *
 * Constraint: globals.css is not modified — all surfaces use existing
 * tokens (--brand, --brand-ring, --bg-card, --border, --shadow-sm,
 * --radius-lg).
 */
export default function Comparison() {
  return (
    <section id="srovnani" className="section">
      <div className="container-wide px-5">
        <header
          style={{
            maxWidth: "60ch",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span className="eyebrow">{comparison.eyebrow}</span>
          <h2 className="h2 mt-2">{comparison.title}</h2>
          <p className="lead mt-4">{comparison.lead}</p>
        </header>

        <div className="mt-12 grid gap-5 md:grid-cols-3 items-stretch">
          {comparison.columns.map((col) => {
            // `featured` exists only on the ASW column per the data shape.
            const isFeatured = "featured" in col && col.featured === true;
            return (
              <div
                key={col.id}
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.85rem 1.6rem",
                  background: isFeatured
                    ? "var(--bg-card)"
                    : "rgba(245, 248, 255, 0.6)",
                  border: isFeatured
                    ? "1px solid var(--brand)"
                    : "1px solid var(--border)",
                  boxShadow: isFeatured
                    ? "0 0 0 3px var(--brand-ring), var(--shadow-md)"
                    : "var(--shadow-sm)",
                  transform: isFeatured ? "translateY(-4px)" : undefined,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: isFeatured
                      ? "var(--brand-hover)"
                      : "var(--fg-muted)",
                    letterSpacing: "-0.005em",
                  }}
                >
                  {col.title}
                </h3>
                <dl
                  style={{
                    margin: "1.25rem 0 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                  }}
                >
                  {col.points.map((p, idx) => {
                    const isLast = idx === col.points.length - 1;
                    return (
                      <div
                        key={p.label}
                        style={{
                          paddingTop: idx === 0 ? 0 : "0.85rem",
                          paddingBottom: isLast ? 0 : "0.85rem",
                          borderBottom: isLast
                            ? "none"
                            : "1px solid var(--border)",
                        }}
                      >
                        <dt
                          style={{
                            fontSize: "0.7rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            color: "var(--fg-soft)",
                            fontWeight: 600,
                          }}
                        >
                          {p.label}
                        </dt>
                        <dd
                          style={{
                            margin: "0.25rem 0 0",
                            fontSize: "0.97rem",
                            fontWeight: 600,
                            color: isFeatured
                              ? "var(--fg)"
                              : "var(--fg-muted)",
                            lineHeight: 1.45,
                          }}
                        >
                          {p.value}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
