"use client";

import { useId, useState, useSyncExternalStore } from "react";
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
 * Footer-mounted control that lets the visitor change or revoke their
 * cookie/analytics choice without diving into DevTools. Closed state is
 * a discreet text-button; open state is an inline panel with the same
 * two equal-weight buttons as ConsentBanner, plus an aria-live
 * confirmation and a friendly note that the change can need a reload
 * to fully take effect (already-set GA cookies expire on their own).
 *
 * Designed to read color from the surrounding text — works inside the
 * dark footer strip without explicit color overrides.
 */
export default function CookieSettingsLink() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot,
  );
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const panelId = useId();

  function choose(value: ConsentValue) {
    setConsent(value);
    setSaved(true);
  }

  function close() {
    setOpen(false);
    setSaved(false);
  }

  const currentLabel =
    consent === CONSENT_GRANTED
      ? "Analytika povolena"
      : consent === CONSENT_ESSENTIAL
        ? "Jen nezbytné"
        : "Zatím nezvoleno";

  return (
    <div style={{ display: "inline-block" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        style={{
          background: "transparent",
          color: "inherit",
          border: 0,
          padding: 0,
          font: "inherit",
          textDecoration: "underline",
          textUnderlineOffset: "0.25em",
          cursor: "pointer",
        }}
      >
        Změnit nastavení cookies
      </button>

      {open && (
        <div
          id={panelId}
          role="region"
          aria-label="Nastavení cookies"
          style={{
            marginTop: "0.75rem",
            background: "#ffffff",
            color: "var(--fg)",
            border: "1px solid var(--border-strong)",
            borderRadius: "var(--radius)",
            padding: "1rem 1.1rem",
            maxWidth: "34rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div style={{ fontSize: "0.9rem", lineHeight: 1.5 }}>
            Vaše současná volba: <strong>{currentLabel}</strong>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
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
              Používat jen nezbytné
            </button>
          </div>
          <div
            aria-live="polite"
            style={{
              minHeight: "1.2em",
              fontSize: "0.85rem",
              color: "var(--fg-muted)",
              lineHeight: 1.5,
            }}
          >
            {saved
              ? "Nastavení cookies bylo uloženo. Změna analytiky se může plně projevit až po obnovení stránky nebo po vypršení dříve uložených cookies prohlížeče."
              : ""}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="button"
              onClick={close}
              className="btn btn-ghost btn-sm"
              style={{ color: "var(--fg-muted)" }}
            >
              Zavřít
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
