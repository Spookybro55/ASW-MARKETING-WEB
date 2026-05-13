const BUILD = {
  eyebrow: "Co hlídáme",
  title: "Co hlídáme u každého webu.",
  lead:
    "Čtyři pilíře, na kterých web stojí. U každého klienta je řešíme bez ohledu na to, jestli se baví o malé hlavní stránce nebo o rozsáhlejším projektu.",
  pillars: [
    {
      key: "struktura",
      label: "Struktura",
      title: "Přehledný příběh.",
      text:
        "Návštěvník během chvíle pochopí, co děláte, pro koho, a co má udělat dál.",
    },
    {
      key: "texty",
      label: "Texty",
      title: "Lidský jazyk.",
      text:
        "Krátké odstavce, žádné fráze. Texty pomůžeme sepsat z toho, co o své práci řeknete.",
    },
    {
      key: "mobil",
      label: "Mobil",
      title: "Vyladěné pro telefon.",
      text:
        "Většina lidí web otevře v ruce. Hlídáme rychlost, čitelnost a pohodlné ovládání palcem.",
    },
    {
      key: "kontakt",
      label: "Kontakt",
      title: "Ozvat se má být snadné.",
      text:
        "Telefon, e-mail a formulář na dosah z každé stránky. Kdo se chce ozvat, klikne, ne hledá.",
    },
  ],
} as const;

export default function BuildQuality() {
  return (
    <section id="kvalita" className="section section-brand-soft">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{BUILD.eyebrow}</span>
          <h2 className="h2 mt-2">{BUILD.title}</h2>
          <p className="lead mt-4">{BUILD.lead}</p>
        </div>

        <ol
          className="mt-12 grid gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {BUILD.pillars.map((pillar, i) => (
            <li
              key={pillar.key}
              className="card card-interactive"
              style={{
                padding: "1.85rem 1.65rem 1.85rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
              }}
            >
              <PillarIcon kind={pillar.key} />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.55rem",
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
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{pillar.label}</span>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--fg)",
                    margin: "0 0 0.55rem",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "var(--fg-muted)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {pillar.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PillarIcon({ kind }: { kind: string }) {
  // Simplified pillar icons — clean geometric shapes, large enough to
  // read at a glance, no decorative band behind them. Each one stays
  // recognisably "Struktura / Texty / Mobil / Kontakt" without the
  // earlier illustrated complexity.
  return (
    <div
      aria-hidden="true"
      style={{
        width: "52px",
        height: "52px",
        borderRadius: "14px",
        background: "var(--brand-soft)",
        color: "var(--brand)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxShadow: "0 0 0 6px rgba(10, 102, 255, 0.05)",
      }}
    >
      {kind === "struktura" && (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="4" rx="1.2" fill="currentColor" />
          <rect x="3" y="10" width="18" height="4" rx="1.2" fill="currentColor" opacity="0.55" />
          <rect x="3" y="16" width="12" height="4" rx="1.2" fill="currentColor" opacity="0.35" />
        </svg>
      )}
      {kind === "texty" && (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="2.4" rx="1.2" fill="currentColor" />
          <rect x="3" y="10" width="14" height="2" rx="1" fill="currentColor" opacity="0.55" />
          <rect x="3" y="14" width="16" height="2" rx="1" fill="currentColor" opacity="0.55" />
          <rect x="3" y="18" width="10" height="2" rx="1" fill="currentColor" opacity="0.35" />
        </svg>
      )}
      {kind === "mobil" && (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <rect
            x="7"
            y="3"
            width="10"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <rect x="10" y="17" width="4" height="1.6" rx="0.8" fill="currentColor" />
        </svg>
      )}
      {kind === "kontakt" && (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 5.5C5 4.67 5.67 4 6.5 4h2.4c.55 0 1.04.37 1.18.9l.85 3.18c.13.5-.06 1.03-.5 1.34l-1.2.85a12 12 0 0 0 5.5 5.5l.85-1.2c.31-.44.85-.63 1.34-.5l3.18.85c.53.14.9.63.9 1.18v2.4c0 .83-.67 1.5-1.5 1.5C10.6 20 4 13.4 4 5.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </div>
  );
}
