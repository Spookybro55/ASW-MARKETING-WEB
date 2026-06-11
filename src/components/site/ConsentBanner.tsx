"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isPreviewPath } from "@/lib/preview-routes";
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
 * Compact cookie consent strip pinned to the bottom of the viewport
 * (audit Phase A 2026-05-25). Dříve to byl floating white card přes fold;
 * předchozí design zakrýval kritická CTA. Teď je to thin dark strip
 * s border-top, ~60–80 px na desktopu, full-width.
 *
 * Layout:
 *  - desktop: text vlevo, 3 buttony vpravo (Povolit / Pouze nezbytné / Nastavení)
 *  - mobile:  text nahoře, buttons stacked horizontally pod ním
 *
 * Hydration: server snapshot null → first client render skryté pro konsentující
 * návštěvníky. Worst-case 1 frame flash. „Nastavení" link vede na privacy page,
 * kde má návštěvník popis cookie politiky a může změnit volbu ve footeru
 * (CookieSettingsLink).
 */
export default function ConsentBanner() {
  const pathname = usePathname();
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentSnapshot,
    getConsentServerSnapshot,
  );

  // Klientské preview routy nezobrazují cookie lištu AutoSmartweby.
  if (isPreviewPath(pathname)) return null;
  if (consent !== null) return null;

  function choose(value: ConsentValue) {
    setConsent(value);
  }

  return (
    <div
      role="region"
      aria-label="Souhlas s cookies"
      className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/10 bg-[#0B1322]/95 px-4 py-3 backdrop-blur-md sm:px-6"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="text-sm leading-relaxed text-white/75">
          Používáme cookies pro správné fungování webu a měření návštěvnosti.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => choose(CONSENT_GRANTED)}
            className="inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
          >
            Povolit
          </button>
          <button
            type="button"
            onClick={() => choose(CONSENT_ESSENTIAL)}
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Pouze nezbytné
          </button>
          <Link
            href="/zasady-ochrany-osobnich-udaju"
            className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Nastavení
          </Link>
        </div>
      </div>
    </div>
  );
}
