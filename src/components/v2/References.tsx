import { referencesV0 } from "@/data/siteContent";
import { CheckIcon, StarIcon } from "./icons";

/**
 * References — „Co u nás při spolupráci čekáte" (Commit 8 of v0 redesign).
 *
 * Dark testimonial-style section that visually echoes the v0 mockup
 * (05-references-about.png) but stays launch-safe: the v0 draft ships
 * four invented client testimonials with full names + made-up companies.
 * Per CLAUDE.md §9 and the project guardrails we do NOT publish invented
 * quotes. Until real client references with written consent exist, the
 * data layer (siteContent.referencesV0.items) carries 4 collaboration
 * principles — each marked kind: "principle" — and the renderer uses a
 * principle styling (small check badge + quote, no stars, no author block)
 * instead of a fake 5-star testimonial.
 *
 * Render rules driven by item.kind:
 *   - "principle"   → check badge top-left, quote only. No author. No stars.
 *                     This is what ships at launch.
 *   - "testimonial" → 5-star block (rating-driven), quote, avatar + name +
 *                     role/company. Reserved for the day we publish a
 *                     verified, consented client quote — the markup is in
 *                     place so adding one is a pure data change.
 *
 * Card surface and grid come from globals.css (.asw-v0-references-dark,
 * .asw-v0-reference-card, .asw-v0-reference-{stars,quote,author,…}); the
 * CSS rule .asw-v0-reference-card[data-kind="principle"] hides the stars
 * + author blocks defensively, even if a render path were to forget the
 * conditional.
 *
 * No fake names, companies, ratings, counts, or media mentions are
 * produced here. ContactForm and API routes are untouched.
 */

function initialsOf(name: string | null): string {
  if (!name) return "";
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function References() {
  return (
    <section
      id="reference"
      aria-labelledby="reference-title"
      style={{
        background:
          "linear-gradient(180deg, var(--asw-v0-bg-deep) 0%, var(--asw-v0-bg-deep-2) 100%)",
        color: "var(--fg-inverse)",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 1.25rem",
        }}
      >
        <header
          style={{
            maxWidth: "62ch",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            className="eyebrow"
            style={{ color: "var(--brand-sky)" }}
          >
            {referencesV0.eyebrow}
          </span>
          <h2
            id="reference-title"
            className="h2 mt-2"
            style={{ color: "var(--fg-inverse)" }}
          >
            {referencesV0.titleLead}{" "}
            <span className="asw-v0-accent">{referencesV0.titleAccent}</span>
          </h2>
          <p
            className="lead mt-4"
            style={{ color: "rgba(245, 248, 255, 0.72)" }}
          >
            {referencesV0.lead}
          </p>
        </header>

        <ul
          className="asw-v0-references-dark"
          role="list"
          style={{
            marginTop: "3rem",
            listStyle: "none",
            padding: 0,
          }}
        >
          {referencesV0.items.map((item, idx) => {
            // Widen the literal type so the testimonial branch stays
            // reachable for future data — current data is all "principle"
            // which TS otherwise narrows to a single literal.
            const kind: string = item.kind;
            const isTestimonial = kind === "testimonial";
            const stars =
              isTestimonial && item.rating ? (item.rating as number) : 0;
            return (
              <li
                key={`${item.kind}-${idx}`}
                className="asw-v0-reference-card"
                data-kind={item.kind}
              >
                {isTestimonial ? (
                  <span
                    className="asw-v0-reference-stars"
                    aria-label={`Hodnocení ${stars} z 5`}
                    data-empty={stars === 0 ? "true" : "false"}
                  >
                    {Array.from({ length: stars }).map((_, i) => (
                      <StarIcon key={i} width={14} height={14} />
                    ))}
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2.25rem",
                      height: "2.25rem",
                      borderRadius: "12px",
                      background: "rgba(34, 184, 255, 0.14)",
                      color: "var(--brand-sky)",
                      border: "1px solid rgba(34, 184, 255, 0.22)",
                    }}
                  >
                    <CheckIcon width={16} height={16} />
                  </span>
                )}

                <p className="asw-v0-reference-quote">{item.quote}</p>

                {isTestimonial && item.author && (
                  <div className="asw-v0-reference-author">
                    <span
                      className="asw-v0-reference-avatar"
                      aria-hidden="true"
                    >
                      {initialsOf(item.author)}
                    </span>
                    <div className="asw-v0-reference-meta">
                      <span className="asw-v0-reference-name">
                        {item.author}
                      </span>
                      {(item.role || item.company) && (
                        <span className="asw-v0-reference-role">
                          {[item.role, item.company]
                            .filter(Boolean)
                            .join(" · ")}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <p
          style={{
            marginTop: "2rem",
            maxWidth: "62ch",
            marginInline: "auto",
            textAlign: "center",
            fontStyle: "italic",
            fontSize: "0.85rem",
            color: "rgba(245, 248, 255, 0.55)",
          }}
        >
          {referencesV0.microcopy}
        </p>
      </div>
    </section>
  );
}
