import type { CSSProperties } from "react";
import { CheckIcon, PhoneIcon } from "./icons";

// Hero copy is owned by Hero. The historical hero/trustStrip exports in
// siteContent.ts stay unused for now and will be reconciled in a later
// cleanup commit.
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

// Process-/promise-based trust points only. No invented metrics, no
// unverifiable counts. Each value is a commitment we can deliver on
// without external proof.
const TRUST_STRIP = [
  { label: "Pomoc s texty", hint: "Nemusíte mít připravené zadání" },
  { label: "Jasná cena předem", hint: "0 skrytých poplatků" },
  { label: "Web pro mobil", hint: "Včetně rychlosti načítání" },
  { label: "Základní SEO", hint: "Struktura, meta, sitemap" },
  { label: "Spuštění po odsouhlasení", hint: "Bez tlaku, bez závazku" },
] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="section section-soft-gradient"
      style={{ paddingTop: "3rem" }}
    >
      <div className="container-wide px-5">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1.08fr_0.92fr] items-center">
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

      <div className="container-wide px-5 mt-14 md:mt-20" aria-label="Co vám slíbíme">
        <ul className="trust-strip">
          {TRUST_STRIP.map((item) => (
            <li key={item.label} className="trust-strip-item">
              <span className="trust-strip-icon" aria-hidden="true">
                <CheckIcon style={{ width: "18px", height: "18px" }} />
              </span>
              <span>
                <span className="trust-strip-label">{item.label}</span>
                <span className="trust-strip-hint">{item.hint}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HeroVisual() {
  // On-brand CSS browser-mockup hint at a clean SMB website — no agency
  // showreel, no stock photo of a person with a laptop. The strategy
  // explicitly bans both. Sized up versus the previous compact version.
  return (
    <div
      className="relative"
      aria-hidden="true"
      style={{ minHeight: "380px" }}
    >
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
            padding: "12px 18px",
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
              fontSize: "0.82rem",
              color: "var(--fg-soft)",
            }}
          >
            elektro-novak.cz
          </span>
        </div>
        <div style={{ padding: "1.75rem 1.75rem 2rem" }}>
          <div
            style={{
              fontSize: "0.72rem",
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
              fontSize: "1.55rem",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "var(--fg)",
              marginTop: "0.45rem",
              maxWidth: "20ch",
            }}
          >
            Elektroinstalace bez zbytečných starostí.
          </div>
          <div
            style={{
              fontSize: "0.92rem",
              color: "var(--fg-muted)",
              marginTop: "0.7rem",
              maxWidth: "34ch",
            }}
          >
            Revize, rekonstrukce, nové rozvody. Reagujeme do 24 hodin.
          </div>
          <div style={{ marginTop: "1.1rem", display: "flex", gap: "8px" }}>
            <span
              style={{
                background: "var(--brand)",
                color: "#ffffff",
                fontSize: "0.78rem",
                fontWeight: 600,
                padding: "0.55rem 0.95rem",
                borderRadius: "10px",
              }}
            >
              Zavolat
            </span>
            <span
              style={{
                background: "#ffffff",
                color: "var(--fg)",
                fontSize: "0.78rem",
                fontWeight: 600,
                padding: "0.55rem 0.95rem",
                borderRadius: "10px",
                border: "1px solid var(--border-strong)",
              }}
            >
              Reference
            </span>
          </div>
          <div
            style={{
              marginTop: "1.4rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.55rem",
            }}
          >
            {["Revize", "Rekonstrukce", "Rozvody", "Smart home"].map((s) => (
              <div
                key={s}
                style={{
                  fontSize: "0.78rem",
                  padding: "0.5rem 0.7rem",
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

      <div
        className="card"
        style={{
          position: "absolute",
          bottom: "-18px",
          right: "-10px",
          width: "172px",
          padding: "0.95rem",
          transform: "rotate(4deg)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <div
          style={{
            fontSize: "0.72rem",
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
            fontSize: "0.85rem",
            fontWeight: 700,
            color: "var(--fg)",
            marginTop: "0.25rem",
            lineHeight: 1.2,
          }}
        >
          Elektrikář Praha
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
            gap: "4px",
          }}
        >
          <PhoneIcon style={{ width: "11px", height: "11px" }} />
          <span>777 123 456</span>
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-30px",
          left: "-30px",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--brand-soft) 0%, rgba(230,239,255,0) 70%)",
          zIndex: -1,
        }}
      />
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
