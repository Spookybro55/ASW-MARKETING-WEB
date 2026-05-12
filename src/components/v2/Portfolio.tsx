import Link from "next/link";
import { portfolio } from "@/data/siteContent";

export default function Portfolio() {
  return (
    <section id="ukazky" className="section">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{portfolio.eyebrow}</span>
          <h2 className="h2 mt-2">{portfolio.title}</h2>
          <p className="lead mt-4">{portfolio.lead}</p>
        </div>

        <ul className="mt-10 grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.items.map((item) => (
            <li key={item.slug} className="card card-interactive" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <Thumbnail item={item} />
              <div style={{ padding: "1.25rem 1.5rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <div
                  className="text-xs font-semibold"
                  style={{
                    color: "var(--brand)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.sector}
                </div>
                <div
                  className="text-sm soft"
                  style={{ marginTop: "0.25rem" }}
                >
                  {item.city}
                </div>
                <p
                  className="mt-2 text-[0.95rem]"
                  style={{ color: "var(--fg)", flex: 1 }}
                >
                  {item.goal}
                </p>
                <Link
                  href={item.previewPath}
                  className="btn btn-ghost btn-sm mt-3 self-start"
                  style={{ paddingLeft: 0 }}
                  data-cta-label={`portfolio_${item.slug}`}
                  data-cta-location="portfolio"
                >
                  Zobrazit ukázku →
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <p className="lead mt-8 max-w-[70ch] text-base">
          {portfolio.fallbackNote}
        </p>
      </div>
    </section>
  );
}

function Thumbnail({ item }: { item: (typeof portfolio.items)[number] }) {
  // Visual placeholder per ukázka — colored gradient + sector label.
  // Real screenshots can replace this when production renders the
  // templates and we capture them.
  const palette =
    item.template === "emergency-professional"
      ? { from: "#e8f0fc", to: "#cfdcf3" }
      : item.template === "community-expert"
      ? { from: "#eef6ee", to: "#d6e9d6" }
      : { from: "#fdf2e6", to: "#f4dbb6" };

  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${palette.from} 0%, ${palette.to} 100%)`,
        aspectRatio: "16 / 10",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 14px 30px rgba(11,23,48,0.12)",
          padding: "0.9rem 1rem",
          width: "82%",
          maxWidth: "260px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "5px",
            marginBottom: "0.6rem",
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ddd" }} />
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ddd" }} />
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ddd" }} />
        </div>
        <div
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "var(--fg)",
            lineHeight: 1.3,
          }}
        >
          {item.sector}
        </div>
        <div
          style={{
            fontSize: "0.62rem",
            color: "var(--fg-soft)",
            marginTop: "3px",
          }}
        >
          {item.city}
        </div>
        <div
          style={{
            background: "var(--brand)",
            color: "white",
            fontSize: "0.6rem",
            fontWeight: 600,
            padding: "0.3rem 0.5rem",
            borderRadius: "5px",
            marginTop: "0.55rem",
            display: "inline-block",
          }}
        >
          Kontakt
        </div>
      </div>
    </div>
  );
}
