import { trustStrip } from "@/data/siteContent";
import { CheckIcon } from "./icons";

/**
 * Trust strip under the hero (Commit: launch-fix P1-3).
 * Renders only factual collaboration guarantees from siteContent.trustStrip —
 * no numbers, no logos, no certifications, no client references.
 */
export default function TrustStrip() {
  return (
    <section
      aria-label="Proč spolupracovat s Autosmartweby"
      style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
    >
      <div className="container-wide px-5">
        <ul className="trust-strip" role="list">
          {trustStrip.items.map((item) => (
            <li key={item.label} className="trust-strip-item">
              <span className="trust-strip-icon" aria-hidden="true">
                <CheckIcon width={20} height={20} />
              </span>
              <span>
                <span className="trust-strip-label">{item.label}</span>
                <span className="trust-strip-hint">{item.hint}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
