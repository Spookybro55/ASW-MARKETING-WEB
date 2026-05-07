"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Tracks engagement signals — scroll depth + section view.
 *
 * scroll_depth fires once per page load when user reaches each
 * 25 / 50 / 75 / 100 % threshold (debounced + idempotent — no
 * duplicate fires per session per threshold).
 *
 * view_section fires once per page load when an element with
 * `data-track-view="<section_id>"` enters viewport (50% intersection).
 *
 * Both events include `page_path` (location.pathname) so reports can
 * filter scroll depth per landing page.
 *
 * Mounted globally in root layout. SSR-safe (use client + window guards).
 */
export default function EngagementSignals() {
  useEffect(() => {
    const path = window.location.pathname;

    // ── scroll_depth ──────────────────────────────────────────────
    const fired = new Set<25 | 50 | 75 | 100>();
    const thresholds: Array<25 | 50 | 75 | 100> = [25, 50, 75, 100];

    function onScroll() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;
      for (const t of thresholds) {
        if (!fired.has(t) && pct >= t) {
          fired.add(t);
          trackEvent({ name: "scroll_depth", params: { percent: t, page_path: path } });
        }
      }
    }

    let raf = 0;
    function rafScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        onScroll();
      });
    }

    window.addEventListener("scroll", rafScroll, { passive: true });
    onScroll(); // fire for short pages where 100% is already visible

    // ── view_section (IntersectionObserver) ───────────────────────
    const seen = new Set<string>();
    const trackedNodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-track-view]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute("data-track-view");
          if (!id || seen.has(id)) continue;
          seen.add(id);
          trackEvent({ name: "view_section", params: { section_id: id, page_path: path } });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );

    for (const node of trackedNodes) observer.observe(node);

    return () => {
      window.removeEventListener("scroll", rafScroll);
      if (raf) cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return null;
}
