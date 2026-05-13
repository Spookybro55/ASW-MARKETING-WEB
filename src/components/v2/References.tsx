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

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-7">
          {references.items.map((item) => (
            <li
              key={item.title}
              className="card card-interactive"
              style={{ padding: "2rem" }}
            >
              <div
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "14px",
                  background: "var(--brand-soft)",
                  color: "var(--brand)",
                  boxShadow: "0 0 0 6px rgba(10, 102, 255, 0.06)",
                }}
              >
                <CheckIcon width={22} height={22} />
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--fg)",
                  margin: "1.1rem 0 0.55rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--fg-muted)",
                  fontSize: "1rem",
                  lineHeight: 1.65,
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
