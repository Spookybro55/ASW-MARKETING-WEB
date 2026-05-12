import { references } from "@/data/siteContent";

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
          {references.items.map((ref, i) => (
            <li
              key={i}
              className="card"
              data-status={ref.status}
              style={{ padding: "2rem" }}
            >
              <div
                aria-hidden
                style={{
                  fontSize: "2rem",
                  color: "var(--brand)",
                  lineHeight: 1,
                  fontFamily: "Georgia, serif",
                }}
              >
                &ldquo;
              </div>
              <p
                className="mt-2 text-[1.02rem]"
                style={{ color: "var(--fg)", lineHeight: 1.55 }}
              >
                {ref.quote}
              </p>
              <div
                className="mt-4 pt-4 flex items-center justify-between"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div className="text-sm">
                  <div className="font-semibold" style={{ color: "var(--fg)" }}>
                    {ref.author}
                  </div>
                  <div className="soft text-xs">{ref.city}</div>
                </div>
                {ref.status === "placeholder" && (
                  <span
                    className="chip"
                    style={{
                      fontSize: "0.7rem",
                      background: "#fff4d6",
                      borderColor: "#f0d97c",
                      color: "#8b6500",
                    }}
                    title="Placeholder — čeká na souhlas reálného klienta"
                  >
                    Placeholder
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <p
          className="mt-6 text-xs soft max-w-[60ch]"
          style={{ fontStyle: "italic" }}
        >
          Reference doplňujeme až po písemném souhlasu klienta. Nevymýšlíme
          citace ani jména.
        </p>
      </div>
    </section>
  );
}
