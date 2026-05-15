import { trustStrip } from "@/data/siteContent";

/**
 * Dark trust strip under the v0 hero (Commit 4 of v0 redesign).
 *
 * Replaces the previous light card layout with a dark 4-up tile strip
 * that visually continues the hero block. The section background uses
 * --asw-v0-bg-deep-2 (the bottom stop of the hero gradient) so there
 * is no visible seam between Hero and TrustStrip; the trust card itself
 * carries the asw-v0-trust-dark class which renders a slightly
 * lighter, bordered surface inside the dark page background.
 *
 * Content rule (CLAUDE.md §4 + memory: feedback_positioning_guardrails):
 * v0's metric strip ships fake numbers ("80+ Spokojených klientů",
 * "100 % Spokojení zákazníci", "24/7 Automatická podpora",
 * "3× Průměrný nárůst poptávek"). We do NOT publish numbers we cannot
 * back up. The strip therefore uses siteContent.trustStrip.items
 * (label + hint, no numbers) and matches the v0 visual rhythm without
 * inventing data.
 */
export default function TrustStrip() {
  return (
    <section
      aria-label="Proč spolupracovat s Autosmartweby"
      style={{
        background: "var(--asw-v0-bg-deep-2)",
        color: "var(--fg-inverse)",
        paddingTop: 0,
        paddingBottom: "4rem",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 1.25rem",
        }}
      >
        <ul
          className="asw-v0-trust-dark"
          role="list"
          style={{ marginTop: 0 }}
        >
          {trustStrip.items.map((item) => (
            <li key={item.label} className="asw-v0-trust-dark-item">
              <span className="asw-v0-trust-dark-label">{item.label}</span>
              <span className="asw-v0-trust-dark-hint">{item.hint}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
