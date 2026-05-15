import { philosophy, team } from "@/data/siteContent";

/**
 * Team — „Poznejte Autosmartweby" philosophy section (Commit 9 of v0 redesign).
 *
 * The component file is still called Team.tsx because page.tsx imports it
 * under that name; conceptually this is now the brand-narrative block from
 * the v0 mockup (06-about-cta-footer.png): brand mark on the left, three
 * intro paragraphs + filozofie quote on the right, closing slogan + brand
 * line below, and a small two-person team strip at the bottom.
 *
 * The team strip is intentionally kept (not removed in favour of a pure
 * narrative block as v0 ships) because the project guardrails require
 * "visible humans, never look like a faceless tool" — without the strip
 * the section would become abstract corporate copy, which is exactly what
 * CLAUDE.md §2 forbids. Two real people: Sebastián + Tomáš.
 *
 * Data source: `philosophy` (siteContent.ts:902) for the narrative block,
 * `team` (siteContent.ts:416) for the human strip. CSS hooks come from
 * the existing .asw-v0-philosophy* utilities in globals.css.
 *
 * The brand mark inside the philosophy round is rendered as inline SVG
 * with fill="currentColor" so it picks up `.asw-v0-philosophy-mark-inner`'s
 * `color: var(--brand)` — using /logo-mark.svg via <img> would lock the
 * fill at white (the file is the dark-bg variant) and look wrong on the
 * light card.
 */

function PhilosophyMark() {
  // Path data lifted from public/logo-mark.svg, fill switched to
  // currentColor so the parent .asw-v0-philosophy-mark-inner can recolor
  // it via `color: var(--brand)`.
  return (
    <svg
      viewBox="35.5 36.5 150 150"
      width="62%"
      height="62%"
      aria-hidden="true"
      role="presentation"
    >
      <path
        fill="currentColor"
        d="M 45.65 101.00 L 45.57 129.54 L 45.61 138.14 A 2.80 2.75 1.6 0 0 48.25 140.88 L 48.36 140.88 A 2.59 2.43 1.7 0 0 51.10 138.45 L 51.08 133.02 L 51.15 116.45 Q 51.20 102.87 51.14 89.25 Q 51.13 85.24 54.57 81.47 A 1.82 1.63 -81.9 0 1 54.95 81.15 Q 87.79 61.78 106.16 51.14 Q 110.67 48.53 115.59 51.40 Q 135.16 62.84 161.09 77.94 Q 162.98 79.04 166.28 81.07 A 2.92 2.74 84.4 0 1 167.00 81.70 Q 170.19 85.63 170.15 88.78 Q 169.99 101.56 170.11 113.85 L 170.15 135.98 L 170.20 146.04 L 169.70 150.57 Q 164.56 156.69 155.53 160.99 A 0.76 0.75 62.3 0 0 155.20 162.05 L 156.93 165.03 A 0.79 0.79 0.0 0 0 157.91 165.37 Q 162.86 163.38 168.75 159.51 Q 174.28 155.87 175.35 149.65 L 175.56 144.02 L 175.53 122.51 L 175.55 111.72 Q 175.76 101.93 175.59 92.16 Q 175.48 85.95 174.33 83.03 Q 172.52 78.47 168.38 76.06 Q 134.21 56.20 123.78 49.87 Q 116.26 45.31 113.00 44.90 Q 107.17 44.17 101.54 47.55 Q 92.84 52.76 56.64 73.86 Q 50.81 77.26 48.88 79.86 C 44.59 85.62 45.56 92.56 45.65 101.00 Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M 100.31 111.17 L 83.62 140.75 L 77.54 150.50 Q 75.20 153.90 72.79 157.29 Q 71.77 158.74 67.63 160.97 L 65.38 161.91 A 1.27 1.27 0.0 0 1 64.47 161.94 Q 63.83 161.72 63.24 161.20 C 57.59 155.16 48.77 157.27 45.81 164.81 Q 44.43 170.32 47.46 174.17 C 52.67 180.79 62.85 179.04 65.46 170.75 Q 65.55 170.47 66.07 168.57 A 1.73 1.73 0.0 0 1 66.97 167.49 C 70.55 165.75 75.26 163.94 77.61 160.45 L 83.69 151.78 L 92.08 137.86 L 105.96 112.49 L 107.29 110.39 A 1.13 1.12 22.4 0 1 108.48 109.90 Q 111.02 110.48 113.34 109.83 A 0.93 0.92 -19.5 0 1 114.42 110.34 L 121.95 126.74 L 133.18 150.48 L 134.88 154.40 L 140.70 166.47 L 133.15 164.26 A 2.70 2.56 51.8 0 0 132.40 164.15 L 110.12 164.15 A 1.45 1.44 -25.1 0 1 109.20 163.82 C 108.09 162.89 107.35 161.64 105.92 161.29 C 102.81 160.53 99.39 161.11 98.02 164.44 C 94.94 171.90 104.59 177.03 109.18 170.13 A 0.98 0.96 -72.7 0 1 109.98 169.70 Q 128.23 169.63 129.03 169.61 C 135.33 169.50 139.56 171.62 143.03 176.06 C 145.43 179.13 150.29 178.97 151.24 174.78 C 151.91 171.84 150.23 169.57 147.75 167.86 A 2.02 2.01 6.5 0 1 147.07 167.01 L 146.26 165.04 L 139.96 151.74 L 137.52 146.59 L 126.79 123.99 L 119.14 107.60 A 1.89 1.87 48.8 0 1 119.25 105.81 Q 122.57 100.55 120.13 95.31 C 117.92 90.56 111.60 88.49 106.75 90.44 C 100.95 92.76 98.27 100.32 102.19 105.51 A 1.65 1.64 -50.1 0 1 102.34 107.25 L 100.31 111.17 Z M 116.09 99.97 A 5.35 5.35 0.0 0 0 110.74 94.62 A 5.35 5.35 0.0 0 0 105.39 99.97 A 5.35 5.35 0.0 0 0 110.74 105.32 A 5.35 5.35 0.0 0 0 116.09 99.97 Z M 55.00 162.50 A 5.50 5.50 0.0 0 0 55.00 173.50 A 5.50 5.50 0.0 0 0 55.00 162.50 Z"
      />
    </svg>
  );
}

export default function Team() {
  return (
    <section
      id="kdo-za-tim-stoji"
      aria-labelledby="poznejte-title"
      className="section"
    >
      <div className="container-wide px-5">
        <header
          style={{
            maxWidth: "60ch",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span className="eyebrow">{philosophy.eyebrow}</span>
          <h2 id="poznejte-title" className="h2 mt-2">
            {philosophy.titleLead}{" "}
            <span className="asw-v0-accent">{philosophy.titleAccent}</span>
          </h2>
        </header>

        <div className="asw-v0-philosophy" style={{ marginTop: "3rem" }}>
          <div>
            <div className="asw-v0-philosophy-mark">
              <div className="asw-v0-philosophy-mark-inner">
                <PhilosophyMark />
              </div>
            </div>
          </div>

          <div>
            {philosophy.intro.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  margin: idx === 0 ? "0" : "1rem 0 0",
                  color: "var(--fg-muted)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                {paragraph}
              </p>
            ))}

            <div
              className="asw-v0-philosophy-quote"
              role="note"
              aria-label={philosophy.philosophy.eyebrow}
            >
              <span className="asw-v0-philosophy-quote-eyebrow">
                {philosophy.philosophy.eyebrow}
              </span>
              <p
                className="asw-v0-philosophy-quote-body"
                style={{ margin: 0 }}
              >
                „{philosophy.philosophy.quote}&ldquo;
              </p>
            </div>
          </div>
        </div>

        <p
          className="asw-v0-philosophy-slogan"
          style={{ marginTop: "3rem" }}
        >
          {philosophy.closingSlogan.lead}{" "}
          <span className="asw-v0-accent">
            {philosophy.closingSlogan.accent}
          </span>
        </p>
        <div
          aria-hidden="true"
          style={{
            marginTop: "0.4rem",
            textAlign: "center",
            fontSize: "clamp(1.5rem, 1.4vw + 1.05rem, 2.1rem)",
            fontWeight: 700,
            fontStyle: "italic",
            color: "var(--brand)",
            letterSpacing: "-0.01em",
          }}
        >
          Autosmartweby
        </div>

        {/* Visible humans strip — guardrail (CLAUDE.md §2): the brand
            must never look like a faceless tool. Two real people stay. */}
        <ul
          role="list"
          style={{
            listStyle: "none",
            padding: 0,
            margin: "3rem auto 0",
            maxWidth: "720px",
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {team.members.map((member) => (
            <li
              key={member.name}
              className="card"
              style={{
                padding: "1.1rem 1.25rem",
                display: "flex",
                gap: "0.95rem",
                alignItems: "center",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "var(--brand-soft)",
                  color: "var(--brand)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  flexShrink: 0,
                }}
              >
                {member.initials}
              </span>
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 700,
                    color: "var(--fg)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {member.name}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--brand)",
                    fontWeight: 600,
                  }}
                >
                  {member.role}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
