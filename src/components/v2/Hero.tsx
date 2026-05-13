import type { CSSProperties } from "react";
import { CheckIcon, PhoneIcon } from "./icons";

// Hero copy is owned by Hero. The historical hero/trustStrip exports in
// siteContent.ts stay unused for now and will be reconciled in a later
// cleanup commit.
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

// Compact trust chips — sit directly under the hero copy as a tight set
// rather than the previous full-width strip. Four points; "Základ pro
// Google" lives in the Deliverables section, not the hero.
const TRUST_CHIPS = [
  "Pomůžeme s texty",
  "Cena předem",
  "Web pro mobil",
  "Spuštění po schválení",
] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="section section-soft-gradient"
      style={{
        // Tighter than the section defaults — hero must not feel sparse,
        // and Audience needs to sit closer underneath.
        paddingTop: "2.5rem",
        paddingBottom: "3.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <BrandDecoration />

      <div className="container-wide px-5" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <span className="eyebrow">{HERO.eyebrow}</span>
            <h1 className="h1 mt-2">{HERO.h1}</h1>
            <p className="lead mt-5 max-w-[58ch]">{HERO.lead}</p>

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

            <p className="mt-4 text-sm soft max-w-[52ch]">{HERO.microcopy}</p>

            <ul
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Co vám slíbíme"
            >
              {TRUST_CHIPS.map((label) => (
                <li key={label}>
                  <span className="chip chip-brand">
                    <CheckIcon style={{ width: "14px", height: "14px" }} />
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function BrandDecoration() {
  // Subtle workflow motif — three soft brand-blue dots connected by a
  // faint line, anchored top-left of the hero. Reads as "krok 1 → 2 → 3"
  // without resorting to a SaaS grid or AI sparkles. Hidden behind the
  // content via zIndex: 0.
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
        opacity: 0.55,
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

function HeroVisual() {
  // Scaled-up browser mockup — concrete "Elektrikář Praha" example so the
  // hero shows a real-looking small-business website, not an abstract
  // dashboard. Stronger shadow + brand background panel for visual weight,
  // no glass / SaaS chrome.
  return (
    <div
      className="relative"
      aria-hidden="true"
      style={{ minHeight: "460px" }}
    >
      {/* Subtle brand panel behind the mockup — gives the card weight
          without a tech grid or glow halo */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-2%",
          bottom: "-2%",
          left: "6%",
          background:
            "linear-gradient(135deg, var(--brand-soft) 0%, rgba(230,239,255,0) 70%)",
          borderRadius: "var(--radius-lg)",
          zIndex: 0,
        }}
      />

      <div
        className="card"
        style={{
          position: "relative",
          zIndex: 1,
          padding: 0,
          overflow: "hidden",
          boxShadow:
            "0 30px 70px rgba(7, 17, 31, 0.14), 0 8px 24px rgba(7, 17, 31, 0.06)",
          transform: "rotate(-0.8deg)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "13px 20px",
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
              fontSize: "0.74rem",
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
              fontSize: "1.75rem",
              fontWeight: 700,
              lineHeight: 1.18,
              color: "var(--fg)",
              marginTop: "0.5rem",
              maxWidth: "20ch",
              letterSpacing: "-0.015em",
            }}
          >
            Elektroinstalace bez zbytečných starostí.
          </div>
          <div
            style={{
              fontSize: "0.98rem",
              color: "var(--fg-muted)",
              marginTop: "0.8rem",
              maxWidth: "34ch",
            }}
          >
            Revize, rekonstrukce, nové rozvody. Reagujeme do 24 hodin.
          </div>
          <div style={{ marginTop: "1.25rem", display: "flex", gap: "10px" }}>
            <span
              style={{
                background: "var(--brand)",
                color: "#ffffff",
                fontSize: "0.82rem",
                fontWeight: 600,
                padding: "0.62rem 1.05rem",
                borderRadius: "10px",
              }}
            >
              Zavolat
            </span>
            <span
              style={{
                background: "#ffffff",
                color: "var(--fg)",
                fontSize: "0.82rem",
                fontWeight: 600,
                padding: "0.62rem 1.05rem",
                borderRadius: "10px",
                border: "1px solid var(--border-strong)",
              }}
            >
              Reference
            </span>
          </div>
          <div
            style={{
              marginTop: "1.5rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.6rem",
            }}
          >
            {["Revize", "Rekonstrukce", "Rozvody", "Smart home"].map((s) => (
              <div
                key={s}
                style={{
                  fontSize: "0.82rem",
                  padding: "0.55rem 0.8rem",
                  background: "var(--bg-muted)",
                  borderRadius: "8px",
                  color: "var(--fg-muted)",
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating mobile preview — proper card, slightly larger */}
      <div
        className="card"
        style={{
          position: "absolute",
          bottom: "-22px",
          right: "-14px",
          width: "200px",
          padding: "1.1rem",
          transform: "rotate(4deg)",
          boxShadow: "var(--shadow-lg)",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontSize: "0.75rem",
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
            fontSize: "0.92rem",
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
            background: "var(--brand)",
            color: "#fff",
            fontSize: "0.74rem",
            fontWeight: 600,
            padding: "0.45rem 0.7rem",
            borderRadius: "8px",
            marginTop: "0.65rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <PhoneIcon style={{ width: "12px", height: "12px" }} />
          <span>777 123 456</span>
        </div>
      </div>
    </div>
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
