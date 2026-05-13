import type { CSSProperties } from "react";
import { CheckIcon, PhoneIcon } from "./icons";

const HERO = {
  eyebrow: "Pro živnostníky, řemeslníky a malé firmy",
  h1: "Profesionální web pro živnostníky a malé firmy bez zbytečných starostí.",
  lead:
    "Řeknete nám, co děláte. My vám pomůžeme s texty, strukturou a spuštěním webu, který dobře vypadá, funguje na mobilu a zákazníkům usnadní ozvat se. Nejčastěji kolem 10 000 Kč podle rozsahu.",
  microcopy:
    "Nemusíte mít připravené texty ani přesné zadání. Stačí pár informací o vaší službě.",
  primaryCta: { label: "Nezávazně probrat web", href: "#kontakt" },
  secondaryCta: { label: "Podívat se na ukázky", href: "#ukazky" },
} as const;

// Page-architecture sidebar items — each one corresponds to a real
// chunk of the rendered mockup on the right, so the showcase reads as
// a thoughtful website plan, not a SaaS feature callout.
const STRUCTURE = [
  { code: "01", label: "Hlavička", hint: "logo · kontakt" },
  { code: "02", label: "Hero", hint: "claim + CTA" },
  { code: "03", label: "Služby", hint: "co děláte" },
  { code: "04", label: "Kontakt", hint: "telefon · e-mail" },
] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="section section-soft-gradient"
      style={{
        paddingTop: "2.5rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <BrandDecoration />

      <div
        className="container-wide px-5"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-[1fr_1.25fr] items-stretch">
          <LeftPanel />
          <ShowcasePanel />
        </div>
      </div>
    </section>
  );
}

function LeftPanel() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem 2.1rem",
        background: "rgba(255, 255, 255, 0.7)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-sm)",
        backdropFilter: "saturate(140%) blur(4px)",
      }}
    >
      <span className="eyebrow">{HERO.eyebrow}</span>
      <h1 className="h1 mt-2">{HERO.h1}</h1>
      <p className="lead mt-5 max-w-[54ch]">{HERO.lead}</p>

      <div className="mt-7 flex flex-col sm:flex-row gap-3">
        <a
          href={HERO.primaryCta.href}
          className="btn btn-primary btn-lg"
          data-cta-label="hero_primary"
          data-cta-location="hero"
        >
          {HERO.primaryCta.label}
        </a>
        <a
          href={HERO.secondaryCta.href}
          className="btn btn-secondary btn-lg"
          data-cta-label="hero_secondary"
          data-cta-location="hero"
        >
          {HERO.secondaryCta.label}
        </a>
      </div>

      <p className="mt-4 text-sm soft max-w-[48ch]">{HERO.microcopy}</p>

      <div
        className="mt-6 pt-5"
        style={{
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.25rem 1.75rem",
          alignItems: "center",
        }}
      >
        {[
          { num: "3", label: "kroky ke spuštění" },
          { num: "1", label: "domluvená cena předem" },
          { num: "0", label: "skrytých poplatků" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "28px",
                height: "28px",
                borderRadius: "999px",
                background: "var(--brand)",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.85rem",
              }}
            >
              {s.num}
            </span>
            <span
              style={{
                color: "var(--fg-muted)",
                fontSize: "0.88rem",
                fontWeight: 500,
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShowcasePanel() {
  return (
    <div
      style={{
        position: "relative",
        padding: "2rem 1.75rem",
        background: "#FFFFFF",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        boxShadow:
          "0 24px 60px rgba(7, 17, 31, 0.10), 0 4px 14px rgba(7, 17, 31, 0.04)",
        minHeight: "720px",
        overflow: "hidden",
      }}
    >
      <ShowcaseGrid />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1.5rem",
        }}
      >
        <span
          className="eyebrow"
          style={{ marginBottom: 0, fontSize: "0.7rem" }}
        >
          Stavba webu
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "var(--fg-soft)",
            fontSize: "0.72rem",
            fontFamily:
              "var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--brand)",
            }}
          />
          ukázkový koncept
        </span>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gap: "1.25rem",
        }}
        className="lg:grid-cols-[180px_1fr]"
      >
        <StructureStack />
        <MockupColumn />
      </div>
    </div>
  );
}

function StructureStack() {
  // Vertical stack of labelled page-section blocks — reads as the
  // architectural plan of the website rendered to the right. Hidden on
  // smaller breakpoints to keep the mockup uncluttered.
  return (
    <ol
      role="list"
      className="hidden lg:flex"
      style={{
        flexDirection: "column",
        gap: "0.7rem",
        padding: "0.25rem 0",
      }}
    >
      {STRUCTURE.map((s, i) => (
        <li
          key={s.code}
          style={{
            position: "relative",
            padding: "0.85rem 0.95rem",
            background: "rgba(244, 248, 255, 0.85)",
            border: "1px solid var(--brand-soft)",
            borderRadius: "10px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--brand)",
              fontSize: "0.66rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              fontFamily:
                "var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace",
            }}
          >
            <span>{s.code}</span>
            <span
              aria-hidden="true"
              style={{
                flex: 1,
                height: "1px",
                background:
                  "repeating-linear-gradient(to right, var(--brand-soft) 0 4px, transparent 4px 7px)",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "0.92rem",
              fontWeight: 700,
              color: "var(--fg)",
              marginTop: "0.3rem",
              letterSpacing: "-0.005em",
            }}
          >
            {s.label}
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              color: "var(--fg-muted)",
              marginTop: "0.15rem",
            }}
          >
            {s.hint}
          </div>

          {/* Connector line emerging to the right, points toward the
              corresponding section of the rendered mockup */}
          {i < STRUCTURE.length && (
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "50%",
                right: "-22px",
                width: "20px",
                height: "1px",
                background:
                  "repeating-linear-gradient(to right, var(--brand) 0 4px, transparent 4px 7px)",
              }}
            />
          )}
        </li>
      ))}
    </ol>
  );
}

function MockupColumn() {
  return (
    <div style={{ position: "relative", minHeight: "560px" }}>
      <Mockup />
      <MobilePreview />
    </div>
  );
}

function Mockup() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "relative",
        width: "min(100%, 560px)",
        margin: "0 auto",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "#FFFFFF",
        border: "1px solid var(--border)",
        boxShadow:
          "0 30px 70px rgba(7, 17, 31, 0.16), 0 8px 24px rgba(7, 17, 31, 0.06)",
        transform: "rotate(-0.5deg)",
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "14px 22px",
          background: "var(--bg-muted)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span style={dot("#ff5f57")} />
        <span style={dot("#ffbd2e")} />
        <span style={dot("#28c840")} />
        <span
          style={{
            marginLeft: "12px",
            fontSize: "0.86rem",
            color: "var(--fg-soft)",
          }}
        >
          elektro-novak.cz
        </span>
      </div>

      <div style={{ padding: "2rem 2rem 2.25rem" }}>
        <div
          style={{
            fontSize: "0.78rem",
            fontWeight: 600,
            color: "var(--brand)",
            letterSpacing: "0.09em",
            textTransform: "uppercase",
          }}
        >
          Elektrikář Praha
        </div>
        <div
          style={{
            fontSize: "2.1rem",
            fontWeight: 700,
            lineHeight: 1.12,
            color: "var(--fg)",
            marginTop: "0.55rem",
            maxWidth: "16ch",
            letterSpacing: "-0.02em",
          }}
        >
          Elektroinstalace bez zbytečných starostí.
        </div>
        <div
          style={{
            fontSize: "1rem",
            color: "var(--fg-muted)",
            marginTop: "0.85rem",
            maxWidth: "32ch",
          }}
        >
          Revize, rekonstrukce, nové rozvody. Reagujeme do 24 hodin.
        </div>
        <div style={{ marginTop: "1.4rem", display: "flex", gap: "10px" }}>
          <span
            style={{
              background: "var(--brand)",
              color: "#ffffff",
              fontSize: "0.85rem",
              fontWeight: 600,
              padding: "0.65rem 1.15rem",
              borderRadius: "10px",
            }}
          >
            Zavolat
          </span>
          <span
            style={{
              background: "#ffffff",
              color: "var(--fg)",
              fontSize: "0.85rem",
              fontWeight: 600,
              padding: "0.65rem 1.15rem",
              borderRadius: "10px",
              border: "1px solid var(--border-strong)",
            }}
          >
            Reference
          </span>
        </div>
        <div
          style={{
            marginTop: "1.6rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "0.55rem",
          }}
        >
          {[
            "Revize",
            "Rekonstrukce",
            "Rozvody",
            "Smart home",
            "Bytová",
            "Průmyslová",
          ].map((s) => (
            <div
              key={s}
              style={{
                fontSize: "0.78rem",
                padding: "0.55rem 0.7rem",
                background: "var(--bg-muted)",
                borderRadius: "8px",
                color: "var(--fg-muted)",
                textAlign: "center",
              }}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Contact strip at the bottom — mirrors the "Kontakt" structure
            block on the left */}
        <div
          style={{
            marginTop: "1.6rem",
            paddingTop: "1.2rem",
            borderTop: "1px dashed var(--border-strong)",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontSize: "0.78rem",
            color: "var(--fg-muted)",
          }}
        >
          <PhoneIcon
            style={{
              width: "14px",
              height: "14px",
              color: "var(--brand)",
            }}
          />
          <span style={{ fontWeight: 600, color: "var(--fg)" }}>
            +420 777 123 456
          </span>
          <span style={{ marginLeft: "auto" }}>Po–Pá 8:00–18:00</span>
        </div>
      </div>
    </div>
  );
}

function MobilePreview() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: "-26px",
        right: "-12px",
        width: "164px",
        padding: "0.95rem",
        background: "#FFFFFF",
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
        boxShadow:
          "0 18px 36px rgba(7, 17, 31, 0.18), 0 4px 10px rgba(7, 17, 31, 0.06)",
        transform: "rotate(5deg)",
        zIndex: 2,
      }}
    >
      <div
        style={{
          fontSize: "0.7rem",
          color: "var(--fg-soft)",
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        Mobil
        <CheckIcon
          style={{ width: "12px", height: "12px", color: "var(--success)" }}
        />
      </div>
      <div
        style={{
          fontSize: "0.88rem",
          fontWeight: 700,
          color: "var(--fg)",
          marginTop: "0.3rem",
          lineHeight: 1.2,
        }}
      >
        Elektrikář Praha
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          marginTop: "0.55rem",
        }}
      >
        <div
          style={{
            height: "5px",
            borderRadius: "2px",
            background: "var(--brand-soft)",
          }}
        />
        <div
          style={{
            height: "5px",
            borderRadius: "2px",
            background: "rgba(7,17,31,0.06)",
          }}
        />
        <div
          style={{
            height: "5px",
            borderRadius: "2px",
            background: "rgba(7,17,31,0.06)",
            width: "70%",
          }}
        />
      </div>
      <div
        style={{
          background: "var(--brand)",
          color: "#fff",
          fontSize: "0.7rem",
          fontWeight: 600,
          padding: "0.4rem 0.6rem",
          borderRadius: "7px",
          marginTop: "0.55rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <PhoneIcon style={{ width: "11px", height: "11px" }} />
        <span>Zavolat</span>
      </div>
    </div>
  );
}

function ShowcaseGrid() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 700 720"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.5,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {Array.from({ length: 7 }, (_, i) => i + 1).map((i) => (
        <line
          key={`v-${i}`}
          x1={(700 / 8) * i}
          x2={(700 / 8) * i}
          y1={0}
          y2={720}
          stroke="var(--brand-soft)"
          strokeWidth="1"
        />
      ))}
      {Array.from({ length: 7 }, (_, i) => i + 1).map((i) => (
        <line
          key={`h-${i}`}
          x1={0}
          x2={700}
          y1={(720 / 8) * i}
          y2={(720 / 8) * i}
          stroke="var(--brand-soft)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function BrandDecoration() {
  return (
    <svg
      aria-hidden="true"
      width="320"
      height="120"
      viewBox="0 0 320 120"
      fill="none"
      style={{
        position: "absolute",
        top: "1.5rem",
        left: "-2rem",
        zIndex: 0,
        opacity: 0.4,
        pointerEvents: "none",
      }}
    >
      <path
        d="M 30 60 L 160 60 L 290 60"
        stroke="var(--brand-soft)"
        strokeWidth="2"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
      <circle cx="30" cy="60" r="10" fill="var(--brand-soft)" />
      <circle cx="30" cy="60" r="4" fill="var(--brand)" />
      <circle cx="160" cy="60" r="10" fill="var(--brand-soft)" />
      <circle cx="160" cy="60" r="4" fill="var(--brand)" />
      <circle cx="290" cy="60" r="10" fill="var(--brand-soft)" />
      <circle cx="290" cy="60" r="4" fill="var(--brand)" />
    </svg>
  );
}

function dot(color: string): CSSProperties {
  return {
    width: "11px",
    height: "11px",
    borderRadius: "50%",
    background: color,
    display: "inline-block",
  };
}
