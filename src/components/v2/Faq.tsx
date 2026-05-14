import { faq } from "@/data/siteContent";

export default function Faq() {
  return (
    <section id="faq" className="section section-muted">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="h2 mt-2">{faq.title}</h2>
          <p className="lead mt-4">{faq.lead}</p>
        </div>

        <div className="mt-10 max-w-[78ch]">
          {faq.items.map((item, i) => (
            <details
              key={item.q}
              className="card"
              style={{
                marginBottom: "0.6rem",
                padding: 0,
                borderRadius: "var(--radius)",
              }}
              {...(i === 0 ? { open: true } : {})}
            >
              <summary
                className="cursor-pointer font-semibold flex items-start justify-between gap-3"
                style={{
                  padding: "1.05rem 1.25rem",
                  listStyle: "none",
                  color: "var(--fg)",
                }}
              >
                <span>{item.q}</span>
                <span
                  aria-hidden
                  style={{
                    color: "var(--brand)",
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                  className="details-marker"
                >
                  +
                </span>
              </summary>
              <div
                className="muted text-[0.95rem]"
                style={{
                  padding: "0 1.25rem 1.25rem",
                  borderTop: "1px solid var(--border)",
                  paddingTop: "1rem",
                  lineHeight: 1.6,
                }}
              >
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
          <p className="muted" style={{ fontSize: "0.97rem" }}>
            {faq.closing.text}
          </p>
          <a
            href={faq.closing.ctaHref}
            className="btn btn-secondary"
            data-cta-label="faq_closing"
            data-cta-location="faq"
          >
            {faq.closing.ctaLabel}
          </a>
        </div>

        <style>
          {`
            details summary::-webkit-details-marker { display: none; }
            details[open] .details-marker { transform: rotate(45deg); transition: transform 0.15s ease; }
            .details-marker { transition: transform 0.15s ease; display: inline-block; }
          `}
        </style>
      </div>
    </section>
  );
}
