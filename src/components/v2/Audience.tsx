import { audience } from "@/data/siteContent";

export default function Audience() {
  const [first, ...rest] = audience.items;

  return (
    <section
      id="pro-koho"
      className="section section-muted"
      style={{ paddingTop: "3.5rem", position: "relative", overflow: "hidden" }}
    >
      <AudienceDecoration />

      <div
        className="container-wide px-5"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="max-w-[60ch]">
          <span className="eyebrow">{audience.eyebrow}</span>
          <h2 className="h2 mt-2">{audience.title}</h2>
          <p className="lead mt-4">{audience.lead}</p>
        </div>

        {/* Asymmetric bento: featured 1st card spans 2x2 on lg, 2x1 on md.
            Remaining 3 cards sit around it in varied sizes. */}
        <ul
          className="mt-12 grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[1fr]"
          role="list"
        >
          <FeaturedCard item={first} index={0} />
          <RegularCard item={rest[0]} index={1} />
          <RegularCard item={rest[1]} index={2} />
          <RegularCard item={rest[2]} index={3} wide />
        </ul>
      </div>
    </section>
  );
}

type Item = (typeof audience.items)[number];

function FeaturedCard({ item, index }: { item: Item; index: number }) {
  return (
    <li
      className="card card-interactive sm:col-span-2 lg:col-span-2 lg:row-span-2"
      style={{
        padding: "2rem",
        position: "relative",
        background:
          "linear-gradient(160deg, var(--bg-card) 0%, rgba(230,239,255,0.45) 100%)",
        borderColor: "var(--brand-soft)",
      }}
    >
      <IndexTile index={index} large />
      <h3
        className="mt-5"
        style={{
          fontSize: "1.45rem",
          fontWeight: 700,
          color: "var(--fg)",
          letterSpacing: "-0.015em",
          lineHeight: 1.2,
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          marginTop: "0.8rem",
          color: "var(--fg-muted)",
          fontSize: "1.05rem",
          lineHeight: 1.6,
          maxWidth: "44ch",
        }}
      >
        {item.text}
      </p>
    </li>
  );
}

function RegularCard({
  item,
  index,
  wide = false,
}: {
  item: Item;
  index: number;
  wide?: boolean;
}) {
  return (
    <li
      className={
        wide
          ? "card card-interactive sm:col-span-2 lg:col-span-2"
          : "card card-interactive"
      }
      style={{ padding: "1.65rem", position: "relative" }}
    >
      <IndexTile index={index} />
      <h3
        className="mt-3.5"
        style={{
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "var(--fg)",
          letterSpacing: "-0.005em",
        }}
      >
        {item.title}
      </h3>
      <p
        className="muted"
        style={{
          marginTop: "0.5rem",
          fontSize: "0.95rem",
          lineHeight: 1.6,
        }}
      >
        {item.text}
      </p>
    </li>
  );
}

function IndexTile({ index, large = false }: { index: number; large?: boolean }) {
  const size = large ? "52px" : "40px";
  const fontSize = large ? "1.05rem" : "0.9rem";
  return (
    <div
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "12px",
        background: "var(--brand-soft)",
        color: "var(--brand)",
        fontWeight: 700,
        fontSize,
        letterSpacing: "-0.01em",
        boxShadow: "0 0 0 6px rgba(10, 102, 255, 0.05)",
      }}
    >
      {String(index + 1).padStart(2, "0")}
    </div>
  );
}

function AudienceDecoration() {
  // Brand-derived dot pattern — soft grid of small brand-tinted dots
  // anchored bottom-right. Geometric, not generic.
  return (
    <svg
      aria-hidden="true"
      width="240"
      height="160"
      viewBox="0 0 240 160"
      fill="none"
      style={{
        position: "absolute",
        bottom: "-1rem",
        right: "-2rem",
        zIndex: 0,
        opacity: 0.6,
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={20 + col * 28}
            cy={20 + row * 24}
            r={2.5}
            fill="var(--brand-soft)"
          />
        )),
      )}
    </svg>
  );
}
