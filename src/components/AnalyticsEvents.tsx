"use client";

import { useEffect } from "react";

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const text = anchor.textContent?.trim() ?? "";
      const section = anchor.closest("section")?.id ?? "unknown";

      if (href.startsWith("tel:")) {
        window.gtag?.("event", "click_phone", {
          link_url: href,
          link_text: text,
          location: section,
        });
      } else if (href.startsWith("mailto:")) {
        window.gtag?.("event", "click_email", {
          link_url: href,
          link_text: text,
          location: section,
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
