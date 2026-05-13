"use client";

import { useSyncExternalStore } from "react";
import {
  CONSENT_ESSENTIAL,
  CONSENT_GRANTED,
  type ConsentValue,
  getConsentServerSnapshot,
  getConsentSnapshot,
  setConsent,
  subscribeConsent,
} from "@/lib/consent";

/**
 * Fair cookie banner. Both choices are equally prominent (primary brand
 * button for accept, outlined secondary for reject) — no dark patterns.
 *
 * Layout: fixed bottom strip, max width, page remains usable behind it.
 *
 * Hydration model: server snapshot is null (no localStorage on the server),
 * which matches the first client render during hydration. Once React picks
 * up the real client snapshot, returning visitors who already chose are
 * unmounted; new visitors see the banner. Worst case is a one-frame flash
 * of the banner for consented returning visitors — acceptable trade-off
 * for a no-FOUC-script implementation.
 */
export default function ConsentBanner() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot,
  );

  if (consent !== null) return null;

  function choose(value: ConsentValue) {
    setConsent(value);
  }

  return (
    <div
      role="region"
      aria-label="Souhlas s cookies"
      style={{
        position: "fixed",
        left: "1rem",
        right: "1rem",
        bottom: "1rem",
        zIndex: 90,
        maxWidth: "44rem",
        margin: "0 auto",
        background: "#ffffff",
        color: "var(--fg)",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow-md)",
        padding: "1.1rem 1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.85rem",
      }}
    >
      <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.5 }}>
        Používáme cookies a podobné technologie pro fungování webu. Analytiku
        zapneme jen s vaším souhlasem, abychom věděli, co na webu zlepšit.{" "}
        <a
          href="/zasady-ochrany-osobnich-udaju"
          style={{
            color: "var(--brand)",
            textDecoration: "underline",
            textUnderlineOffset: "0.2em",
          }}
        >
          Více v zásadách ochrany osobních údajů.
        </a>
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.6rem",
        }}
      >
        <button
          type="button"
          onClick={() => choose(CONSENT_GRANTED)}
          className="btn btn-primary btn-sm"
        >
          Povolit analytiku
        </button>
        <button
          type="button"
          onClick={() => choose(CONSENT_ESSENTIAL)}
          className="btn btn-secondary btn-sm"
        >
          Jen nezbytné
        </button>
      </div>
    </div>
  );
}
