/**
 * Lightweight consent storage shared by the banner and the analytics gate.
 *
 * Scope (Commit 9b): one localStorage key with two values. No Consent Mode v2,
 * no GTM, no event queueing — analytics events fired before consent silently
 * no-op through `window.gtag?.(...)` in src/lib/analytics.ts.
 *
 * Banner writes the choice; AnalyticsGate reads it on mount and listens for
 * the custom `CONSENT_CHANGED_EVENT` so a same-tab change toggles GA without
 * a reload. Storage access is wrapped in try/catch — Safari private mode and
 * quota errors must never crash the UI.
 */

export const CONSENT_STORAGE_KEY = "asw_cookie_consent";
export const CONSENT_GRANTED = "analytics_granted";
export const CONSENT_ESSENTIAL = "essential_only";
export const CONSENT_CHANGED_EVENT = "asw:consent:changed";

export type ConsentValue = typeof CONSENT_GRANTED | typeof CONSENT_ESSENTIAL;

export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (raw === CONSENT_GRANTED || raw === CONSENT_ESSENTIAL) return raw;
    return null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // localStorage unavailable (private mode, quota) — banner still hides
    // for this session via component state, just won't persist across loads.
  }
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGED_EVENT, { detail: { value } }),
  );
}

/**
 * useSyncExternalStore helpers. Subscribe to in-tab consent changes;
 * the snapshot is the current localStorage value. Server snapshot is
 * always null so SSR renders the no-consent state and hydration is
 * stable until the client effect runs.
 */
export function subscribeConsent(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CONSENT_CHANGED_EVENT, callback);
  return () => window.removeEventListener(CONSENT_CHANGED_EVENT, callback);
}

export function getConsentSnapshot(): ConsentValue | null {
  return readConsent();
}

export function getConsentServerSnapshot(): ConsentValue | null {
  return null;
}
