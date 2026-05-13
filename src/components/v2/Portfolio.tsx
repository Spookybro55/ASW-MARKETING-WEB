import Link from "next/link";
import { portfolio } from "@/data/siteContent";

type PortfolioItem = (typeof portfolio.items)[number];

export default function Portfolio() {
  return (
    <section
      id="ukazky"
      className="section section-showroom"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        className="container-wide px-5"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="max-w-[60ch]">
          <span className="eyebrow">{portfolio.eyebrow}</span>
          <h2 className="h2 mt-2">{portfolio.title}</h2>
          <p className="lead mt-4">{portfolio.lead}</p>
        </div>

        <div className="mt-12 flex flex-col gap-8 md:gap-10">
          {portfolio.items.map((item, i) => (
            <ShowcaseRow key={item.slug} item={item} index={i} />
          ))}
        </div>

        <p
          className="mt-10 max-w-[70ch] text-sm soft"
          style={{ fontStyle: "italic" }}
        >
          {portfolio.fallbackNote}
        </p>
      </div>
    </section>
  );
}

function ShowcaseRow({ item, index }: { item: PortfolioItem; index: number }) {
  // Alternate desktop/mobile side on every other row so the showroom
  // doesn't read like a stacked list of identical tiles.
  const visualOnLeft = index % 2 === 0;

  const Visual = <ShowcaseVisual item={item} />;
  const Context = <ShowcaseContext item={item} index={index} />;

  return (
    <article
      className="card card-interactive"
      style={{
        padding: 0,
        overflow: "hidden",
        display: "grid",
        gap: 0,
        gridTemplateColumns: "1fr",
      }}
    >
      <div
        className="grid items-stretch"
        style={{
          gridTemplateColumns: "1fr",
          gap: 0,
        }}
      >
        <div className="md:grid md:grid-cols-[1.25fr_1fr] md:gap-0">
          {visualOnLeft ? (
            <>
              {Visual}
              {Context}
            </>
          ) : (
            <>
              <div className="hidden md:block">{Visual}</div>
              {Context}
              <div className="md:hidden">{Visual}</div>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

function ShowcaseVisual({ item }: { item: PortfolioItem }) {
  const palette =
    item.template === "emergency-professional"
      ? { from: "#e8f0fc", to: "#cfdcf3", accent: "#dde9f8" }
      : item.template === "community-expert"
      ? { from: "#eef6ee", to: "#d6e9d6", accent: "#deedde" }
      : { from: "#fdf2e6", to: "#f4dbb6", accent: "#f6e2c0" };

  return (
    <div
      style={{
        position: "relative",
        background: `linear-gradient(135deg, ${palette.from} 0%, ${palette.to} 100%)`,
        minHeight: "320px",
        padding: "2.25rem 2rem 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: "1px solid var(--border)",
      }}
      className="md:border-b-0 md:border-r md:border-r-[var(--border)]"
    >
      <span
        className="chip"
        style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          background: "rgba(255,255,255,0.95)",
          border: "1px solid rgba(7,17,31,0.08)",
          color: "var(--fg-muted)",
          fontSize: "0.72rem",
          fontWeight: 600,
          backdropFilter: "blur(4px)",
        }}
      >
        Ukázkový koncept
      </span>

      {/* Desktop mockup — substantial */}
      <div
        style={{
          position: "relative",
          width: "min(100%, 360px)",
          background: "#FFFFFF",
          borderRadius: "12px",
          boxShadow:
            "0 24px 50px rgba(11, 23, 48, 0.18), 0 4px 12px rgba(11, 23, 48, 0.06)",
          overflow: "hidden",
          transform: "rotate(-1deg)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "4px",
            padding: "9px 12px",
            background: palette.accent,
            borderBottom: "1px solid rgba(7,17,31,0.06)",
          }}
        >
          <span style={dot("#ddd")} />
          <span style={dot("#ddd")} />
          <span style={dot("#ddd")} />
          <span
            style={{
              marginLeft: "8px",
              fontSize: "0.6rem",
              color: "var(--fg-soft)",
            }}
          >
            {item.slug.replace(/^demo-/, "").replace(/-/g, "-")}.cz
          </span>
        </div>
        <div style={{ padding: "1rem 1.1rem 1.2rem" }}>
          <div
            style={{
              fontSize: "0.62rem",
              fontWeight: 700,
              color: "var(--brand)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {item.sector}
          </div>
          <div
            style={{
              fontSize: "0.95rem",
              fontWeight: 700,
              lineHeight: 1.25,
              color: "var(--fg)",
              marginTop: "0.45rem",
            }}
          >
            {item.goal}
          </div>
          <div style={{ marginTop: "0.7rem", display: "flex", gap: "5px" }}>
            <span
              style={{
                background: "var(--brand)",
                color: "#FFFFFF",
                fontSize: "0.55rem",
                fontWeight: 600,
                padding: "0.3rem 0.55rem",
                borderRadius: "5px",
              }}
            >
              Zavolat
            </span>
            <span
              style={{
                background: "#FFFFFF",
                color: "var(--fg)",
                fontSize: "0.55rem",
                fontWeight: 600,
                padding: "0.3rem 0.55rem",
                borderRadius: "5px",
                border: "1px solid var(--border-strong)",
              }}
            >
              Reference
            </span>
          </div>
          <div
            style={{
              marginTop: "0.7rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "3px",
            }}
          >
            {["A", "B", "C", "D", "E", "F"].map((s, i) => (
              <div
                key={s}
                style={{
                  height: "10px",
                  background: i === 0 ? "var(--brand-soft)" : "rgba(7,17,31,0.06)",
                  borderRadius: "3px",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile mockup beside the desktop one */}
      <div
        style={{
          position: "absolute",
          right: "1.5rem",
          bottom: "1.5rem",
          width: "92px",
          background: "#FFFFFF",
          borderRadius: "10px",
          boxShadow: "0 14px 30px rgba(11,23,48,0.20)",
          overflow: "hidden",
          transform: "rotate(4deg)",
          border: `1px solid ${palette.accent}`,
        }}
      >
        <div
          style={{
            padding: "0.5rem 0.55rem 0.7rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <div
            style={{
              fontSize: "0.52rem",
              fontWeight: 700,
              color: "var(--brand)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              lineHeight: 1.1,
            }}
          >
            {item.sector.split(" ")[0]}
          </div>
          <div
            style={{
              fontSize: "0.55rem",
              fontWeight: 700,
              color: "var(--fg)",
              lineHeight: 1.15,
            }}
          >
            {item.city}
          </div>
          <div
            style={{
              background: "var(--brand)",
              color: "#FFFFFF",
              fontSize: "0.5rem",
              fontWeight: 600,
              padding: "0.22rem 0.35rem",
              borderRadius: "4px",
              display: "inline-block",
              alignSelf: "flex-start",
            }}
          >
            Kontakt
          </div>
          <div
            style={{
              height: "5px",
              background: "rgba(7,17,31,0.06)",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              height: "5px",
              background: "rgba(7,17,31,0.06)",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ShowcaseContext({
  item,
  index,
}: {
  item: PortfolioItem;
  index: number;
}) {
  return (
    <div
      style={{
        padding: "1.85rem 1.85rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.55rem",
        background: "var(--bg-card)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          color: "var(--fg-soft)",
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontFamily:
            "var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace",
        }}
      >
        <span style={{ color: "var(--brand)" }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>ukázka</span>
      </div>

      <h3
        style={{
          fontSize: "1.3rem",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          color: "var(--fg)",
          lineHeight: 1.25,
          margin: "0.3rem 0 0.6rem",
        }}
      >
        {item.sector}
      </h3>

      <dl
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          rowGap: "0.45rem",
          columnGap: "1rem",
          fontSize: "0.92rem",
        }}
      >
        <dt
          style={{
            color: "var(--fg-soft)",
            fontSize: "0.78rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            paddingTop: "0.1rem",
          }}
        >
          Lokalita
        </dt>
        <dd style={{ margin: 0, color: "var(--fg)" }}>{item.city}</dd>

        <dt
          style={{
            color: "var(--fg-soft)",
            fontSize: "0.78rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            paddingTop: "0.1rem",
          }}
        >
          Cíl webu
        </dt>
        <dd style={{ margin: 0, color: "var(--fg)", lineHeight: 1.55 }}>
          {item.goal}
        </dd>
      </dl>

      <Link
        href={item.previewPath}
        className="btn btn-secondary btn-sm self-start mt-4"
        data-cta-label={`portfolio_${item.slug}`}
        data-cta-location="portfolio"
      >
        Zobrazit ukázku →
      </Link>
    </div>
  );
}

function dot(color: string) {
  return {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: color,
    display: "inline-block",
  } as const;
}
