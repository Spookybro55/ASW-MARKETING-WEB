import type { CSSProperties } from "react";
import { CheckIcon, PhoneIcon } from "./icons";

// Hero copy is owned by Hero in Commit 4. The historical hero/trustStrip
// exports in siteContent.ts stay unused for now and will be reconciled
// in a later cleanup commit.
const HERO = {
  eyebrow: "Pro živnostníky, řemeslníky a malé firmy",
  h1: "Profesionální web pro živnostníky a malé firmy bez zbytečných starostí.",
  lead:
    "Pomůžeme vám s texty, strukturou i spuštěním webu, který působí důvěryhodně a zákazníkům usnadní ozvat se. Nejčastěji kolem 10 000 Kč podle rozsahu.",
  microcopy:
    "Nemusíte mít připravené texty ani přesné zadání. Stačí pár informací o vaší službě.",
  primaryCta: { label: "Chci nezávazně zjistit cenu", href: "#kontakt" },
  secondaryCta: { label: "Podívat se, jak to funguje", href: "#jak-to-probiha" },
} as const;

const TRUST_CHIPS = [
  { label: "Pomůžeme s texty", hint: "Nemusíte mít připravené zadání" },
  { label: "Jasná cena předem", hint: "Žádné skryté poplatky" },
  { label: "Web připravený na mobil", hint: "Včetně základního SEO" },
  { label: "Bez technických řečí", hint: "Spuštění až po odsouhlasení" },
] as const;

export default function Hero() {
  return (
    <section id="hero" className="section" style={{ paddingTop: "3.5rem" }}>
      <div className="container-wide px-5">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1.1fr_0.9fr] items-center">
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
          </div>

          <HeroVisual />
        </div>
      </div>

      <div
        className="container-wide px-5 mt-12 md:mt-16"
        aria-label="Důvěryhodnostní body"
      >
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {TRUST_CHIPS.map((item) => (
            <li
              key={item.label}
              className="card"
              style={{ padding: "1rem 1.1rem" }}
            >
              <div className="flex items-start gap-2">
                <CheckIcon
                  style={{
                    color: "var(--brand)",
                    width: "18px",
                    height: "18px",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <div>
                  <div className="font-semibold text-sm">{item.label}</div>
                  <div className="text-xs soft mt-0.5">{item.hint}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HeroVisual() {
  // Simple, on-brand visual: a stylized "browser window" mockup that hints
  // at a clean SMB website — no agency showreel, no stock photo of a
  // person with a laptop. The strategy explicitly bans both.
  return (
    <div className="relative" aria-hidden="true" style={{ minHeight: "320px" }}>
      <div
        className="card"
        style={{
          padding: 0,
          overflow: "hidden",
          boxShadow: "var(--shadow-lg)",
          transform: "rotate(-1deg)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "10px 14px",
            background: "var(--bg-muted)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <span style={dot("#ff5f57")} />
          <span style={dot("#ffbd2e")} />
          <span style={dot("#28c840")} />
          <span
            style={{
              marginLeft: "10px",
              fontSize: "0.78rem",
              color: "var(--fg-soft)",
            }}
          >
            elektro-novak.cz
          </span>
        </div>
        <div style={{ padding: "1.4rem 1.4rem 1.8rem" }}>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "var(--brand)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Elektrikář Praha
          </div>
          <div
            style={{
              fontSize: "1.35rem",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "var(--fg)",
              marginTop: "0.4rem",
              maxWidth: "20ch",
            }}
          >
            Elektroinstalace bez zbytečných starostí.
          </div>
          <div
            style={{
              fontSize: "0.85rem",
              color: "var(--fg-muted)",
              marginTop: "0.6rem",
              maxWidth: "32ch",
            }}
          >
            Revize, rekonstrukce, nové rozvody. Reagujeme do 24 hodin.
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "8px" }}>
            <span
              style={{
                background: "var(--brand)",
                color: "#ffffff",
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "0.5rem 0.8rem",
                borderRadius: "8px",
              }}
            >
              Zavolat
            </span>
            <span
              style={{
                background: "#ffffff",
                color: "var(--fg)",
                fontSize: "0.75rem",
                fontWeight: 600,
                padding: "0.5rem 0.8rem",
                borderRadius: "8px",
                border: "1px solid var(--border-strong)",
              }}
            >
              Reference
            </span>
          </div>
          <div
            style={{
              marginTop: "1.2rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.5rem",
            }}
          >
            {["Revize", "Rekonstrukce", "Rozvody", "Smart home"].map((s) => (
              <div
                key={s}
                style={{
                  fontSize: "0.72rem",
                  padding: "0.4rem 0.6rem",
                  background: "var(--bg-muted)",
                  borderRadius: "6px",
                  color: "var(--fg-muted)",
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="card"
        style={{
          position: "absolute",
          bottom: "-14px",
          right: "-8px",
          width: "150px",
          padding: "0.8rem",
          transform: "rotate(4deg)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            color: "var(--fg-soft)",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          Mobil
          <CheckIcon
            style={{ width: "12px", height: "12px", color: "var(--success)" }}
          />
        </div>
        <div
          style={{
            fontSize: "0.8rem",
            fontWeight: 700,
            color: "var(--fg)",
            marginTop: "0.2rem",
            lineHeight: 1.2,
          }}
        >
          Elektrikář Praha
        </div>
        <div
          style={{
            background: "var(--brand)",
            color: "#fff",
            fontSize: "0.65rem",
            fontWeight: 600,
            padding: "0.3rem 0.5rem",
            borderRadius: "6px",
            marginTop: "0.5rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <PhoneIcon style={{ width: "10px", height: "10px" }} />
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
