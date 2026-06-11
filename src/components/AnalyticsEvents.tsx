"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { isPreviewPath } from "@/lib/preview-routes";

export default function AnalyticsEvents() {
  useEffect(() => {
    // Klientské preview routy nezapojují analytiku AutoSmartweby.
    if (isPreviewPath(window.location.pathname)) return;

    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a, button");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const text = anchor.textContent?.trim() ?? "";
      const section = anchor.closest("section")?.id ?? "unknown";

      // CTA tracking via data attributes — opt-in per element. Fires
      // alongside any other event (a tel: link inside a CTA gets both
      // click_phone and cta_click). Add data-cta-label="..." to the
      // element to enable. data-cta-location optional (defaults to
      // nearest <section id>).
      const ctaLabel = anchor.getAttribute("data-cta-label");
      if (ctaLabel) {
        trackEvent({
          name: "cta_click",
          params: {
            cta_label: ctaLabel,
            cta_location: anchor.getAttribute("data-cta-location") ?? section,
          },
        });
      }

      if (href.startsWith("tel:")) {
        trackEvent({
          name: "click_phone",
          params: { link_url: href, link_text: text, location: section },
        });
      } else if (href.startsWith("mailto:")) {
        trackEvent({
          name: "click_email",
          params: { link_url: href, link_text: text, location: section },
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
