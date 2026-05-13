import { audience } from "@/data/siteContent";

export default function Audience() {
  return (
    <section
      id="pro-koho"
      className="section section-muted"
      style={{ paddingTop: "3.5rem" }}
    >
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{audience.eyebrow}</span>
          <h2 className="h2 mt-2">{audience.title}</h2>
          <p className="lead mt-4">{audience.lead}</p>
        </div>

        <ul className="mt-12 grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audience.items.map((item, i) => (
            <li
              key={item.title}
              className="card card-interactive"
              style={{ padding: "1.75rem", position: "relative" }}
            >
              <div
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
                  fontSize: "0.95rem",
                  letterSpacing: "-0.01em",
                  boxShadow: "0 0 0 6px rgba(10, 102, 255, 0.05)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="h3 mt-4" style={{ fontSize: "1.1rem" }}>
                {item.title}
              </h3>
              <p className="muted text-[0.95rem] mt-2">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
