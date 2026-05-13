const BUILD = {
  eyebrow: "Co hlídáme",
  title: "Co hlídáme u každého webu.",
  lead:
    "Čtyři pilíře, na kterých web stojí. U každého klienta je řešíme bez ohledu na to, jestli se baví o malé hlavní stránce nebo o rozsáhlejším projektu.",
  pillars: [
    {
      key: "struktura",
      label: "Struktura",
      title: "Web jako přehledný příběh.",
      text:
        "Návštěvník musí během chvíle pochopit, co děláte, pro koho, a co má udělat dál. Sekce skládáme jako příběh, ne jako sklad informací.",
    },
    {
      key: "texty",
      label: "Texty",
      title: "Lidský jazyk, žádná vata.",
      text:
        "Krátké odstavce, srozumitelný jazyk, nula marketingových frází. Texty pomůžeme sepsat z toho, co o své práci řeknete jednou větou.",
    },
    {
      key: "mobil",
      label: "Mobil",
      title: "Vyladěné pro telefon.",
      text:
        "Většina lidí web otevře v ruce. Hlídáme, aby se načítal rychle, vypadal dobře a šel pohodlně použít palcem.",
    },
    {
      key: "kontakt",
      label: "Kontakt",
      title: "Ozvat se má být snadné.",
      text:
        "Telefon, e-mail a formulář jsou dostupné z každé stránky. Kdo se chce ozvat, nemá hledat — má kliknout.",
    },
  ],
} as const;

export default function BuildQuality() {
  return (
    <section
      id="kvalita"
      className="section section-brand-soft"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        className="container-wide px-5"
        style={{ position: "relative", zIndex: 1 }}
      >
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
                padding: "0",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <PillarIllustration kind={pillar.key} />
              <div
                style={{
                  padding: "1.6rem 1.6rem 1.85rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    color: "var(--fg-soft)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily:
                      "var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ color: "var(--brand)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ flex: 1 }}>{pillar.label}</span>
                </div>
                <h3
                  style={{
                    fontSize: "1.18rem",
                    fontWeight: 700,
                    color: "var(--fg)",
                    margin: "0.75rem 0 0.6rem",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.25,
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

function PillarIllustration({ kind }: { kind: string }) {
  // Pillar-specific signature illustration. Brand colour palette only,
  // geometric, no stock icons. Each one is a hint at what that pillar
  // does (stacked sections, paragraph lines, phone outline, contact pin).
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        height: "140px",
        background:
          "linear-gradient(160deg, #F4F8FF 0%, rgba(230,239,255,0.5) 100%)",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      {kind === "struktura" && <StrukturaArt />}
      {kind === "texty" && <TextyArt />}
      {kind === "mobil" && <MobilArt />}
      {kind === "kontakt" && <KontaktArt />}
    </div>
  );
}

function StrukturaArt() {
  // Stack of page sections — header, hero, services, footer — as the
  // architecture of a page laid out cleanly.
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 220 140"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="60" y="22" width="100" height="14" rx="3" fill="var(--brand-soft)" stroke="var(--brand)" strokeWidth="1.2" />
      <rect x="60" y="42" width="100" height="28" rx="3" fill="#FFFFFF" stroke="var(--brand-soft)" strokeWidth="1.2" />
      <rect x="68" y="50" width="40" height="4" rx="1.5" fill="var(--brand)" />
      <rect x="68" y="58" width="68" height="3" rx="1.5" fill="var(--fg-soft)" opacity="0.6" />
      <rect x="68" y="63" width="56" height="3" rx="1.5" fill="var(--fg-soft)" opacity="0.5" />
      <rect x="60" y="76" width="48" height="22" rx="3" fill="#FFFFFF" stroke="var(--brand-soft)" strokeWidth="1.2" />
      <rect x="112" y="76" width="48" height="22" rx="3" fill="#FFFFFF" stroke="var(--brand-soft)" strokeWidth="1.2" />
      <rect x="60" y="104" width="100" height="10" rx="3" fill="var(--brand-soft)" opacity="0.6" />
    </svg>
  );
}

function TextyArt() {
  // Paragraphs of text indicated as horizontal bars — first line bolder
  // (a heading), rest tapering off (body lines).
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 220 140"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="40" y="32" width="84" height="8" rx="2" fill="var(--brand)" />
      <rect x="40" y="50" width="140" height="3.5" rx="1.5" fill="var(--fg-soft)" opacity="0.65" />
      <rect x="40" y="60" width="130" height="3.5" rx="1.5" fill="var(--fg-soft)" opacity="0.55" />
      <rect x="40" y="70" width="116" height="3.5" rx="1.5" fill="var(--fg-soft)" opacity="0.55" />
      <rect x="40" y="80" width="92" height="3.5" rx="1.5" fill="var(--fg-soft)" opacity="0.45" />
      <rect x="40" y="98" width="42" height="3.5" rx="1.5" fill="var(--brand)" opacity="0.65" />
      <rect x="86" y="98" width="42" height="3.5" rx="1.5" fill="var(--brand)" opacity="0.45" />
    </svg>
  );
}

function MobilArt() {
  // Phone outline with a tiny rendered layout inside — mockup-on-mockup
  // hint.
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 220 140"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect x="78" y="14" width="64" height="112" rx="9" fill="#FFFFFF" stroke="var(--brand)" strokeWidth="1.4" />
      <rect x="98" y="20" width="24" height="3" rx="1.5" fill="var(--brand-soft)" />
      <rect x="84" y="32" width="52" height="22" rx="3" fill="var(--brand-soft)" />
      <rect x="90" y="38" width="32" height="3" rx="1.5" fill="var(--brand)" />
      <rect x="90" y="45" width="22" height="2.5" rx="1.25" fill="var(--fg-soft)" opacity="0.6" />
      <rect x="84" y="60" width="24" height="20" rx="3" fill="#FFFFFF" stroke="var(--brand-soft)" strokeWidth="1" />
      <rect x="112" y="60" width="24" height="20" rx="3" fill="#FFFFFF" stroke="var(--brand-soft)" strokeWidth="1" />
      <rect x="84" y="86" width="52" height="6" rx="2" fill="var(--brand)" />
      <rect x="84" y="98" width="32" height="3" rx="1.5" fill="var(--fg-soft)" opacity="0.5" />
      <rect x="84" y="106" width="38" height="3" rx="1.5" fill="var(--fg-soft)" opacity="0.4" />
    </svg>
  );
}

function KontaktArt() {
  // Phone handset + map pin + signal line — "we put the contact path
  // first". No stock icons; geometric primitives only.
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 220 140"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle cx="68" cy="70" r="34" fill="#FFFFFF" stroke="var(--brand-soft)" strokeWidth="1.4" />
      <path
        d="M 55 60 L 60 58 L 68 66 L 64 72 C 70 78 76 84 82 90 L 88 86 L 96 94 L 94 99 C 90 106 78 106 70 100 C 60 92 50 80 50 70 C 50 65 52 62 55 60 Z"
        fill="var(--brand)"
      />
      <path
        d="M 110 96 L 110 74 L 130 60 L 150 74 L 150 96 Z"
        fill="#FFFFFF"
        stroke="var(--brand)"
        strokeWidth="1.4"
      />
      <rect x="124" y="80" width="12" height="16" rx="1.5" fill="var(--brand-soft)" />
      <circle cx="170" cy="58" r="6" fill="var(--brand)" />
      <path
        d="M 170 64 C 170 70 165 74 165 80 C 165 84 168 87 170 87"
        stroke="var(--brand)"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
    </svg>
  );
}
