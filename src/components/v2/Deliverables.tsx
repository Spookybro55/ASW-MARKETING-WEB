import { deliverables } from "@/data/siteContent";
import { CheckIcon } from "./icons";

export default function Deliverables() {
  return (
    <section id="sluzby" className="section">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{deliverables.eyebrow}</span>
          <h2 className="h2 mt-2">{deliverables.title}</h2>
          <p className="lead mt-4">{deliverables.lead}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="card" style={{ padding: "2rem" }}>
            <h3 className="h3">Co je v ceně</h3>
            <ul className="mt-4 space-y-3">
              {deliverables.included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.97rem]"
                >
                  <CheckIcon
                    style={{
                      color: "var(--brand)",
                      width: "18px",
                      height: "18px",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="card"
            style={{ padding: "2rem", background: "var(--bg-muted)" }}
          >
            <h3 className="h3">{deliverables.notIncludedTitle}</h3>
            <ul className="mt-4 space-y-3">
              {deliverables.notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[0.95rem]"
                  style={{ color: "var(--fg-muted)" }}
                >
                  <span
                    aria-hidden
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  >
                    +
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p
              className="mt-5 text-sm soft"
              style={{ paddingTop: "1rem", borderTop: "1px solid var(--border)" }}
            >
              Naceníme předem, žádné překvapení po spuštění.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
