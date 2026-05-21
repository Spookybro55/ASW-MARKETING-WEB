import type { MetadataRoute } from "next";

const BASE = "https://autosmartweb.cz";

// Indexable public routes only. Excluded:
//   - /brand-dotaznik (noindex,nofollow per page metadata — internal questionnaire)
//   - /preview/[slug], /preview2/[slug] (per-lead noindex previews)
//   - /web-pro-instalatera (temporarily disabled — redirects to /#kontakt;
//     re-add once the v2 vertical landing rewrite ships)
//   - /api/* (server endpoints)
// When adding a new public marketing page, add it here.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ) => ({ url: `${BASE}${path}`, lastModified: now, changeFrequency, priority });

  return [
    page("", 1, "weekly"),
    page("/weby", 0.9),
    page("/lokalni-seo", 0.9),
    page("/ai-asistent", 0.9),
    page("/cenik", 0.8),
    page("/konzultace", 0.8),
    page("/kontakt", 0.7),
    page("/zasady-ochrany-osobnich-udaju", 0.3, "yearly"),
  ];
}
