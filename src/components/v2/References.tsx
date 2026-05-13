import { references } from "@/data/siteContent";
import { CheckIcon } from "./icons";

/**
 * Launch-safe references section (Commit 9d).
 * Renders principles of the collaboration instead of invented testimonials.
 * Real client references will replace this content one card at a time as
 * we collect written consent from each client.
 */
export default function References() {
  return (
    <section id="reference" className="section section-muted">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{references.eyebrow}</span>
          <h2 className="h2 mt-2">{references.title}</h2>
          <p className="lead mt-4">{references.lead}</p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {references.items.map((item) => (
            <li
              key={item.title}
              className="card"
              style={{ padding: "1.75rem" }}
            >
              <div
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "var(--radius-pill)",
                  background: "var(--brand-soft)",
                  color: "var(--brand)",
                }}
              >
                <CheckIcon width={16} height={16} />
              </div>
              <h3
                className="mt-3"
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "var(--fg)",
                  margin: "0.75rem 0 0.5rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--fg-muted)",
                  fontSize: "0.97rem",
                  lineHeight: 1.6,
                }}
              >
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <p
          className="mt-6 text-xs soft max-w-[60ch]"
          style={{ fontStyle: "italic" }}
        >
          {references.microcopy}
        </p>
      </div>
    </section>
  );
}
