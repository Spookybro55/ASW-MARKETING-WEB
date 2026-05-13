import { process } from "@/data/siteContent";

export default function Process() {
  return (
    <section id="jak-to-probiha" className="section">
      <div className="container-wide px-5">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div className="lg:sticky lg:top-24">
            <span className="eyebrow">{process.eyebrow}</span>
            <h2 className="h2 mt-2">{process.title}</h2>
            <p className="lead mt-4 max-w-[42ch]">{process.lead}</p>
          </div>

          <ol className="relative" role="list">
            {/* Vertical connecting rail — fades at top and bottom so it
                blends into the surrounding section without a hard edge. */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "27px",
                top: "1.5rem",
                bottom: "1.5rem",
                width: "2px",
                background:
                  "linear-gradient(to bottom, transparent 0%, var(--brand-soft) 8%, var(--brand-soft) 92%, transparent 100%)",
              }}
            />

            {process.steps.map((step, i) => (
              <li
                key={step.number}
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  columnGap: "1.5rem",
                  paddingBottom: i === process.steps.length - 1 ? 0 : "2.5rem",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "56px",
                    height: "56px",
                    borderRadius: "999px",
                    background: "var(--bg-card)",
                    border: "2px solid var(--brand-soft)",
                    color: "var(--brand)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    letterSpacing: "-0.01em",
                    boxShadow:
                      "0 0 0 6px rgba(10, 102, 255, 0.06), var(--shadow-sm)",
                    flexShrink: 0,
                    zIndex: 1,
                  }}
                >
                  {step.number}
                </div>

                <div
                  className="card card-interactive"
                  style={{
                    padding: "1.5rem 1.75rem",
                    flex: 1,
                  }}
                >
                  <h3
                    className="h3"
                    style={{
                      fontSize: "1.2rem",
                      letterSpacing: "-0.01em",
                      marginTop: "0.15rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="muted"
                    style={{
                      marginTop: "0.55rem",
                      fontSize: "0.97rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
