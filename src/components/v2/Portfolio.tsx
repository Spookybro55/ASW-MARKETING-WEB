import Link from "next/link";
import { portfolio } from "@/data/siteContent";

type PortfolioItem = (typeof portfolio.items)[number];

export default function Portfolio() {
  return (
    <section id="ukazky" className="section section-showroom">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{portfolio.eyebrow}</span>
          <h2 className="h2 mt-2">{portfolio.title}</h2>
          <p className="lead mt-4">{portfolio.lead}</p>
        </div>

        <div className="mt-12 flex flex-col gap-6 md:gap-8">
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
  return (
    <article
      className="card card-interactive"
      style={{
        padding: 0,
        overflow: "hidden",
        display: "grid",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] items-stretch">
        <ShowcaseVisual item={item} />
        <ShowcaseContext item={item} index={index} />
      </div>
    </article>
  );
}

function ShowcaseVisual({ item }: { item: PortfolioItem }) {
  const palette =
    item.template === "emergency-professional"
      ? { from: "#eef3fb", to: "#dde7f4", chrome: "#e3ebf6" }
      : item.template === "community-expert"
      ? { from: "#eef5ee", to: "#dde9dd", chrome: "#e4ecdf" }
      : { from: "#fbf3e8", to: "#f3e1c2", chrome: "#f1e2cb" };

  return (
    <div
      style={{
        position: "relative",
        background: `linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
        minHeight: "340px",
        padding: "1.85rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.25rem",
        borderBottom: "1px solid var(--border)",
      }}
      className="md:border-b-0 md:border-r md:border-r-[var(--border)]"
    >
      {/* Demo concept chip */}
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
        }}
      >
        Ukázkový koncept
      </span>

      {/* Desktop mockup — flat, centered, no rotation */}
      <div
        style={{
          flex: "1 1 auto",
          maxWidth: "320px",
          background: "#FFFFFF",
          borderRadius: "10px",
          boxShadow: "0 16px 36px rgba(11, 23, 48, 0.12)",
          overflow: "hidden",
          border: `1px solid ${palette.chrome}`,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "5px",
            padding: "9px 12px",
            background: palette.chrome,
            borderBottom: "1px solid rgba(7,17,31,0.06)",
          }}
        >
          <span style={dot()} />
          <span style={dot()} />
          <span style={dot()} />
        </div>
        <div style={{ padding: "1rem 1.1rem 1.15rem" }}>
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
          <div style={{ marginTop: "0.75rem", display: "flex", gap: "5px" }}>
            <span
              style={{
                background: "var(--brand)",
                color: "#FFFFFF",
                fontSize: "0.6rem",
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
                fontSize: "0.6rem",
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
              marginTop: "0.85rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "4px",
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                style={{
                  height: "10px",
                  background:
                    i === 0 ? "var(--brand-soft)" : "rgba(7,17,31,0.06)",
                  borderRadius: "3px",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile mockup — beside the desktop one, no rotation, no overlap */}
      <div
        style={{
          flex: "0 0 96px",
          background: "#FFFFFF",
          borderRadius: "10px",
          boxShadow: "0 12px 28px rgba(11,23,48,0.14)",
          overflow: "hidden",
          border: `1px solid ${palette.chrome}`,
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            background: palette.chrome,
            height: "12px",
            borderBottom: "1px solid rgba(7,17,31,0.06)",
          }}
        />
        <div
          style={{
            padding: "0.65rem",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: "0.52rem",
              fontWeight: 700,
              color: "var(--brand)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              lineHeight: 1.15,
            }}
          >
            {item.sector.split(" ")[0]}
          </div>
          <div
            style={{
              fontSize: "0.58rem",
              fontWeight: 700,
              color: "var(--fg)",
              lineHeight: 1.2,
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
              padding: "0.22rem 0.4rem",
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
              width: "70%",
            }}
          />
          <div
            style={{
              height: "5px",
              background: "rgba(7,17,31,0.06)",
              borderRadius: "2px",
              width: "55%",
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
          margin: "0.6rem 0 0.9rem",
        }}
      >
        {item.sector}
      </h3>

      <dl
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          rowGap: "0.5rem",
          columnGap: "1rem",
          fontSize: "0.92rem",
          margin: 0,
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
        className="btn btn-secondary btn-sm mt-6 self-start"
        data-cta-label={`portfolio_${item.slug}`}
        data-cta-location="portfolio"
      >
        Zobrazit ukázku →
      </Link>
    </div>
  );
}

function dot() {
  return {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "rgba(7,17,31,0.18)",
    display: "inline-block",
  } as const;
}
