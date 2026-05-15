import type { Metadata } from "next";
import { redirect } from "next/navigation";

// TODO: Rebuild /web-pro-instalatera as a v2 vertical landing page before re-enabling.
// The previous v1 dark version relied on CSS utility classes
// (primary-button, secondary-button, section-shell, section-container)
// that were removed in the v2 globals.css rewrite. Until a v2 rewrite
// ships, this route redirects to the homepage contact section so any
// existing inbound link still lands the visitor at something useful.

export const metadata: Metadata = {
  // Keep this route out of search indexes while it is disabled. Pair the
  // robots directive with a redirect so the URL also disappears from the
  // user-facing surface, not just the index.
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function WebProInstalateraPage() {
  redirect("/#kontakt");
}
