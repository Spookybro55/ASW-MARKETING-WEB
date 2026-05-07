import type { MetadataRoute } from "next";

const BASE = "https://autosmartweb.cz";

// Indexable public routes only. Excluded:
//   - /brand-dotaznik (noindex,nofollow per page metadata — internal questionnaire)
//   - /preview/[slug], /preview2/[slug] (per-lead noindex previews)
//   - /api/* (server endpoints)
// When adding a new public marketing page, add it here.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE}/web-pro-instalatera`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/zasady-ochrany-osobnich-udaju`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
