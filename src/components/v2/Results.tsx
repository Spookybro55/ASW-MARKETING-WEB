import { results } from "@/data/siteContent";
import { BoltIcon, ClockIcon, EyeIcon, TrendUpIcon } from "./icons";

/**
 * Results — „Výsledky, na kterých záleží" (Commit 7 of v0 redesign).
 *
 * Four metric tiles after the Růstový balíček bento. Visual layout matches
 * v0 (4-up on desktop, 2-up on mobile, big brand metric + small label +
 * tiny note). All tiles render qualitative benefits — no hard numbers,
 * no fake guarantees — per CLAUDE.md §9 (no unbacked claims). Tile copy
 * lives in siteContent.results; if a tile is ever flipped back to a
 * citable measured uplift, see the doc comment on `results` for the
 * verifyBeforeProd convention.
 *
 * Section id="vysledky". No navbar entry yet — anchor reserved for
 * later use (e.g. CTA links from external campaigns).
 */

const RESULT_ICONS = {
  "trend-up": TrendUpIcon,
  clock: ClockIcon,
  automation: BoltIcon,
  eye: EyeIcon,
} as const;

type IconKey = keyof typeof RESULT_ICONS;

export default function Results() {
  return (
    <section id="vysledky" className="section section-brand-soft">
      <div className="container-wide px-5">
        <header
          style={{
            maxWidth: "60ch",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span className="eyebrow">{results.eyebrow}</span>
          <h2 className="h2 mt-2">{results.title}</h2>
        </header>

        <ul
          className="asw-v0-results"
          role="list"
          style={{
            marginTop: "3rem",
            listStyle: "none",
            padding: 0,
          }}
        >
          {results.tiles.map((tile) => {
            const Icon = RESULT_ICONS[tile.icon as IconKey];
            return (
              <li key={tile.label} className="asw-v0-result-tile">
                <span className="asw-v0-result-icon" aria-hidden="true">
                  {Icon ? <Icon className="h-5 w-5" /> : null}
                </span>
                <div className="asw-v0-result-metric">{tile.metric}</div>
                <div className="asw-v0-result-label">{tile.label}</div>
                <div className="asw-v0-result-note">{tile.note}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
