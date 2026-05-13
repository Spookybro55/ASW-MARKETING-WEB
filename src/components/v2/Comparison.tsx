import { comparison } from "@/data/siteContent";

export default function Comparison() {
  return (
    <section id="srovnani" className="section">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{comparison.eyebrow}</span>
          <h2 className="h2 mt-2">{comparison.title}</h2>
          <p className="lead mt-4">{comparison.lead}</p>
        </div>

        <div className="mt-12 grid gap-5 md:gap-0 md:grid-cols-3 items-stretch">
          {comparison.columns.map((col) => {
            // Type-safe narrowing: `featured` is present only on the ASW
            // column in siteContent.ts (TypeScript const-asserts it).
            const isFeatured = "featured" in col && col.featured === true;
            return (
              <div
                key={col.id}
                className={
                  isFeatured ? "card card-accent card-accent-featured" : "card"
                }
                style={{
                  padding: "1.85rem 1.6rem",
                  position: "relative",
                  ...(isFeatured
                    ? {}
                    : {
                        background: "transparent",
                        boxShadow: "none",
                        borderColor: "transparent",
                      }),
                }}
              >
                <h3
                  className="h3"
                  style={{
                    fontSize: "1.05rem",
                    color: isFeatured
                      ? "var(--brand-hover)"
                      : "var(--fg-muted)",
                  }}
                >
                  {col.title}
                </h3>
                <dl className="mt-4 space-y-3">
                  {col.points.map((p) => (
                    <div
                      key={p.label}
                      style={{
                        paddingBottom: "0.75rem",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      <dt
                        className="text-xs soft"
                        style={{
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {p.label}
                      </dt>
                      <dd
                        className="mt-1 font-semibold"
                        style={{
                          color: isFeatured ? "var(--fg)" : "var(--fg-muted)",
                        }}
                      >
                        {p.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
