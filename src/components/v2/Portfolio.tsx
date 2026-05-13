import Link from "next/link";
import { portfolio } from "@/data/siteContent";

type PortfolioItem = (typeof portfolio.items)[number];

export default function Portfolio() {
  const [featured, ...rest] = portfolio.items;

  return (
    <section id="ukazky" className="section">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{portfolio.eyebrow}</span>
          <h2 className="h2 mt-2">{portfolio.title}</h2>
          <p className="lead mt-4">{portfolio.lead}</p>
        </div>

        {/* Bento grid: featured card spans 2 cols x 2 rows on lg+, the
            remaining items sit alongside it. On mobile everything stacks. */}
        <div
          className="mt-12 grid gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[1fr]"
          role="list"
        >
          <Card item={featured} featured />
          {rest.map((item) => (
            <Card key={item.slug} item={item} />
          ))}
        </div>

        <p
          className="mt-8 max-w-[70ch] text-base soft"
          style={{ fontStyle: "italic" }}
        >
          {portfolio.fallbackNote}
        </p>
      </div>
    </section>
  );
}

function Card({ item, featured = false }: { item: PortfolioItem; featured?: boolean }) {
  return (
    <article
      role="listitem"
      className={
        featured
          ? "card card-interactive md:col-span-2 lg:col-span-2 lg:row-span-2"
          : "card card-interactive"
      }
      style={{
        padding: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Thumbnail item={item} featured={featured} />

      <div
        style={{
          padding: featured ? "1.5rem 1.85rem 1.85rem" : "1.25rem 1.5rem 1.5rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
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
        <div className="text-sm soft" style={{ marginTop: "0.25rem" }}>
          {item.city}
        </div>
        <p
          className="mt-2"
          style={{
            color: "var(--fg)",
            flex: 1,
            fontSize: featured ? "1.05rem" : "0.95rem",
            lineHeight: 1.55,
          }}
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
    </article>
  );
}

function Thumbnail({
  item,
  featured,
}: {
  item: PortfolioItem;
  featured: boolean;
}) {
  const palette =
    item.template === "emergency-professional"
      ? { from: "#e8f0fc", to: "#cfdcf3", panel: "#dde9f8" }
      : item.template === "community-expert"
      ? { from: "#eef6ee", to: "#d6e9d6", panel: "#deedde" }
      : { from: "#fdf2e6", to: "#f4dbb6", panel: "#f6e2c0" };

  return (
    <div
      style={{
        position: "relative",
        background: `linear-gradient(135deg, ${palette.from} 0%, ${palette.to} 100%)`,
        aspectRatio: featured ? "16 / 9" : "16 / 10",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: featured ? "2rem" : "1.5rem",
      }}
    >
      {/* "Ukázkový koncept" chip — overlay top-left, transparent about
          the demo nature of every thumbnail */}
      <span
        className="chip"
        style={{
          position: "absolute",
          top: "0.85rem",
          left: "0.85rem",
          background: "rgba(255,255,255,0.92)",
          border: "1px solid rgba(7,17,31,0.08)",
          color: "var(--fg-muted)",
          fontSize: "0.72rem",
          fontWeight: 600,
          backdropFilter: "blur(4px)",
        }}
      >
        Ukázkový koncept
      </span>

      {/* Mini browser mockup */}
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          boxShadow:
            "0 24px 50px rgba(11, 23, 48, 0.16), 0 4px 12px rgba(11, 23, 48, 0.06)",
          padding: featured ? "1.1rem 1.2rem" : "0.9rem 1rem",
          width: featured ? "78%" : "82%",
          maxWidth: featured ? "360px" : "260px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "5px",
            marginBottom: featured ? "0.85rem" : "0.6rem",
          }}
        >
          <span style={dot("#ddd")} />
          <span style={dot("#ddd")} />
          <span style={dot("#ddd")} />
        </div>
        <div
          style={{
            fontSize: featured ? "0.86rem" : "0.72rem",
            fontWeight: 700,
            color: "var(--fg)",
            lineHeight: 1.3,
          }}
        >
          {item.sector}
        </div>
        <div
          style={{
            fontSize: featured ? "0.72rem" : "0.62rem",
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
            fontSize: featured ? "0.7rem" : "0.6rem",
            fontWeight: 600,
            padding: featured ? "0.4rem 0.7rem" : "0.3rem 0.5rem",
            borderRadius: "6px",
            marginTop: featured ? "0.75rem" : "0.55rem",
            display: "inline-block",
          }}
        >
          Kontakt
        </div>
      </div>

      {/* Floating mobile chip on featured only — desktop + mobile preview
          in one bento cell */}
      {featured && (
        <div
          style={{
            position: "absolute",
            right: "1.25rem",
            bottom: "1.25rem",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 14px 30px rgba(11,23,48,0.18)",
            padding: "0.6rem 0.75rem",
            width: "96px",
            transform: "rotate(3deg)",
            border: `1px solid ${palette.panel}`,
          }}
        >
          <div
            style={{
              fontSize: "0.56rem",
              fontWeight: 700,
              color: "var(--fg)",
              lineHeight: 1.2,
            }}
          >
            {item.sector.split(" ")[0]}
          </div>
          <div
            style={{
              background: "var(--brand)",
              color: "white",
              fontSize: "0.52rem",
              fontWeight: 600,
              padding: "0.22rem 0.4rem",
              borderRadius: "4px",
              marginTop: "0.35rem",
              display: "inline-block",
            }}
          >
            Mobil
          </div>
        </div>
      )}
    </div>
  );
}

function dot(color: string) {
  return {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: color,
    display: "inline-block",
  } as const;
}
