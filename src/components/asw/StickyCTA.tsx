import { Button } from "./Button";
import { cta } from "@/data/site";

/*
 * Optional mobile-only sticky CTA bar (CLAUDE.md §8 — use only if it does not
 * overlap content). Fixed to the bottom on < sm screens. Not mounted by
 * default; opt in per page and add bottom padding to the page so it never
 * covers the footer or consent banner.
 */
export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#05070D]/95 p-3 backdrop-blur-md sm:hidden">
      <Button
        href={cta.href}
        ctaLabel="sticky"
        ctaLocation="sticky_mobile"
        className="w-full"
      >
        {cta.primary}
      </Button>
    </div>
  );
}
