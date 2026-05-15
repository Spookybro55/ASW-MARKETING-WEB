"use client";

import { useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  CONSENT_GRANTED,
  getConsentServerSnapshot,
  getConsentSnapshot,
  subscribeConsent,
} from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-E2WG8LP9DV";

/**
 * Renders <GoogleAnalytics /> only after the visitor has chosen
 * "Povolit analytiku". SSR and the no-consent client state both return
 * null so the GA script never appears in the document before consent.
 * In-tab consent changes flip GA on without a reload via the shared
 * external store.
 */
export default function AnalyticsGate() {
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot,
  );

  if (consent !== CONSENT_GRANTED) return null;
  return <GoogleAnalytics gaId={GA_ID} />;
}
