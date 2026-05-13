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

export default function Hero() {
  return (
    <section
      id="hero"
      className="section section-soft-gradient"
      style={{
        paddingTop: "3rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container-wide px-5" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-[1fr_1.1fr] items-center">
          <LeftCopy />
          <Showcase />
        </div>
      </div>
    </section>
  );
}

function LeftCopy() {
  return (
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

      <div
        className="mt-8 pt-6"
        style={{
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.25rem 2rem",
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
                width: "30px",
                height: "30px",
                borderRadius: "999px",
                background: "var(--brand)",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.9rem",
              }}
            >
              {s.num}
            </span>
            <span
              style={{
                color: "var(--fg-muted)",
                fontSize: "0.9rem",
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

function Showcase() {
  // Clean product showcase — single dominant browser mockup with a
  // proportional mobile preview beside it. No blueprint grid, no
  // architectural sidebar, no annotations. The mockup itself is the
  // proof.
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "1rem",
        paddingBottom: "1.5rem",
      }}
    >
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
        width: "min(100%, 580px)",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "#FFFFFF",
        border: "1px solid var(--border)",
        boxShadow:
          "0 30px 70px rgba(7, 17, 31, 0.14), 0 8px 24px rgba(7, 17, 31, 0.05)",
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

      <div style={{ padding: "2.1rem 2.1rem 2.25rem" }}>
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
            fontSize: "2rem",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "var(--fg)",
            marginTop: "0.55rem",
            maxWidth: "17ch",
            letterSpacing: "-0.018em",
          }}
        >
          Elektroinstalace bez zbytečných starostí.
        </div>
        <div
          style={{
            fontSize: "1rem",
            color: "var(--fg-muted)",
            marginTop: "0.85rem",
            maxWidth: "34ch",
          }}
        >
          Revize, rekonstrukce, nové rozvody. Reagujeme do 24 hodin.
        </div>
        <div style={{ marginTop: "1.35rem", display: "flex", gap: "10px" }}>
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
          {["Revize", "Rekonstrukce", "Rozvody", "Smart home", "Bytová", "Průmyslová"].map((s) => (
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
        bottom: "-12px",
        right: "-8px",
        width: "150px",
        padding: "0.9rem",
        background: "#FFFFFF",
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
        boxShadow:
          "0 14px 28px rgba(7, 17, 31, 0.16), 0 3px 8px rgba(7, 17, 31, 0.04)",
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
          fontSize: "0.86rem",
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

function dot(color: string): CSSProperties {
  return {
    width: "11px",
    height: "11px",
    borderRadius: "50%",
    background: color,
    display: "inline-block",
  };
}
