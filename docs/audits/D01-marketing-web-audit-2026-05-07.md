# D-01 — Audit marketingového webu (2026-05-07)

> **Source:** D-stream master plán z `Spookybro55/autosmartweby` (`docs/operations/D-stream-repo-routing-and-execution-plan.md`); D-01 byl označen `BLOCKED-WRONG-REPO` v autosmartweby (správný target = tento repo). Owner re-issued po post-D-stream batch merge — provedeno autonomně.
>
> **Author:** agent (tech-lead) per Honza session 2026-05-07.
> **Method:** HTTP recon (curl + grep raw HTML server response), no browser/DOM testing yet.
> **Scope:** technical SEO + meta + sitemap + redirect chain. Out of scope: performance/CWV (potřeba lighthouse), accessibility (potřeba axe), content quality (owner copy review).

---

## 1. TL;DR

Originally 3 P0 + 4 P1 + 5 P2. **After follow-up PR:** 1 P0 (owner-decision) + 0 P1 (all fixed) + 4 P2.

**V této PR (D01 audit):** sitemap (1 → 3 URLs) + audit doc.
**V follow-up PR (d01-p1-metadata-fixes):** P0-2 marked false positive; P1-1, P1-2, P1-3, P1-4 all fixed (per-page twitter, og:image, explicit robots, og:image existence verified); P2 html lang `cs` → `cs-CZ`.
**Owner-decision pending:** P0-1 (root `/` redirect strategy — D-02 marketing landing vs. keep questionnaire-first).

---

## 2. Findings

### P0-1 — Root `/` redirects to `/brand-dotaznik` (noindex page)

**Evidence:**
```
$ curl -sI https://autosmartweb.cz/
HTTP/1.1 307 Temporary Redirect
Location: /brand-dotaznik
```

`/brand-dotaznik` má v meta:
```html
<meta name="robots" content="noindex, nofollow"/>
```

**Důsledek:** Návštěvník z Google search "autosmartweby" / "weby na klíč" / podobně dostane stránku "Brandový dotazník" místo prodejní landing. Google indexer vidí redirect → noindex page → **nemá co zaindexovat**. Marketing site fakticky nemá public-facing landing.

**Sitemap effect:** Sitemap odkazuje na `https://autosmartweb.cz` (root), což redirectne na noindex. Crawl loop bez indexable target.

**Owner decision required (Honza / Sebastián):**
- (a) Disable root redirect, vytvořit homepage `/` s marketing content (hero, services, pricing, contact CTA)
- (b) Pokud /brand-dotaznik je intentional landing (lead magnet → vyplň dotazník), then odebrat noindex z `/brand-dotaznik` (ale to je internal questionnaire, neindexable je správně)
- (c) Hybrid: `/` = marketing landing s CTA → "Vyplň brand dotazník" linkem na `/brand-dotaznik`

**Recommendation:** (c). Per D-stream master plán D-02 = "Doplnění hlavních sekcí marketing webu" — implementace bude přesně tento landing.

**Cross-ref:** D-02 (sections), D-03 (ceník), D-04 (standard webu) — všechny závisí na řešení P0-1.

---

### ~~P0-2 — Server-rendered `<title>` is empty~~ — **FALSE POSITIVE (resolved 2026-05-07)**

**Re-investigation:** Title is correctly populated. Original audit used `grep -A0 '<title>'` which printed only the next line, but title text is on the **same line** as the opening tag without a newline:

```
$ curl -s https://autosmartweb.cz/web-pro-instalatera | grep -oE '<title>[^<]*</title>'
<title>Web pro instalatéra na klíč – od 8 900 Kč | Autosmartweby</title>

$ curl -s https://autosmartweb.cz/brand-dotaznik | grep -oE '<title>[^<]*</title>'
<title>Brandový dotazník | Autosmartweby</title>
```

Page-specific titles render correctly in server HTML (Next App Router metadata API working as expected). No fix needed.

**Lesson:** Use `grep -oE '<title>[^<]*</title>'` for tag-with-content extraction; not `grep -A0 '<title>'` which is line-context based.

---

### P0-3 — Sitemap has only 1 URL (root only)

**Evidence:**
```
$ curl -s https://autosmartweb.cz/sitemap.xml
<urlset>
  <url><loc>https://autosmartweb.cz</loc><lastmod>2026-05-07T...</lastmod>...</url>
</urlset>
```

Existující public routes neuvedené:
- `/web-pro-instalatera` (200 OK, indexable, classic landing)
- `/zasady-ochrany-osobnich-udaju` (200 OK, GDPR page, indexable)

**Fixed in this PR.** `src/app/sitemap.ts` extends list to 3 URLs. `/brand-dotaznik` excluded (noindex per its own metadata). `/preview/*` excluded (per-lead noindex).

---

### P1-1 — Twitter Card title is generic across all pages

**Evidence:**
- `/brand-dotaznik`: `<meta name="twitter:title" content="Autosmartweby — Weby, automatizace a AI pro malé firmy"/>`
- `/web-pro-instalatera`: `<meta name="twitter:title" content="Autosmartweby — Weby, automatizace a AI pro malé firmy"/>`

OG title je page-specific (`Brandový dotazník | Autosmartweby` vs `Web pro instalatéra na klíč – od 8 900 Kč | Autosmartweby`) ale Twitter generic. Pravděpodobně Twitter metadata definované v root layout.tsx jako fallback, page metadata je přepisuje pro `og:*` ale ne `twitter:*`.

**Fix:** Per-page `metadata.twitter.title` v `page.tsx`. Easy fix, separate PR.

---

### P1-2 — `/web-pro-instalatera` missing `og:image`

**Evidence:** No `<meta property="og:image"/>` in head. Twitter image is `/og-image.png` (static fallback) but social shares of this URL won't show preview image.

**Fix:** Add `metadata.openGraph.images` to `web-pro-instalatera/page.tsx` pointing at `og-image.png` or generated `opengraph-image.tsx` (per Next App Router convention, like `/brand-dotaznik` does it).

---

### P1-3 — `/web-pro-instalatera` missing `meta robots`

**Evidence:** No `<meta name="robots"/>` — defaults to indexable. Aktuálně OK (chceme indexable), ale **explicit better than implicit** pro audit clarity.

**Fix:** Add `metadata.robots = { index: true, follow: true }` for clarity.

---

### P1-4 — `og:image` for `web-pro-instalatera` references `/og-image.png`, status unknown

**Evidence:** Twitter image attribute `https://autosmartweb.cz/og-image.png` — needs verification if this static file exists.

```bash
curl -sI https://autosmartweb.cz/og-image.png
# Did not run during this audit — verify before fix.
```

**Fix:** Either ensure `/og-image.png` exists in `public/`, or remove the reference (Next will generate dynamic OG via `opengraph-image.tsx` if present in route segment).

---

### P2 — Nice-to-have

- **No structured data (JSON-LD):** no `Organization`, `LocalBusiness`, `ContactPage`, `FAQPage` schemas. Google rich results unavailable. Fix: add JSON-LD `<script type="application/ld+json">` in root layout for Organization + per-page schemas.
- **`html lang="cs"`** — should be `cs-CZ` for regional clarity (cosmetic).
- **`/preview/test` returns 404** — expected (no test slug), but consider adding generic informational message in `notFound()` UI for accidental hits.
- **Cache headers conservative:** `Cache-Control: public, max-age=0, must-revalidate` on all routes — every visit goes back to origin. For static marketing pages can be longer (e.g. `s-maxage=300`). Fix: tune `revalidate` per page.
- **Vercel server header exposed:** `Server: Vercel` — informational only, no security impact, but some prefer to hide.

---

## 3. Quick wins fixed in this PR

- ✅ `src/app/sitemap.ts` — extended from 1 to 3 URLs
- ✅ This audit doc

---

## 4. TODOs (separate PRs / owner decisions)

| Priority | Task | Who | Effort |
|---|---|---|---|
| P0 | Decide root `/` strategy (D-02 marketing landing vs. keep questionnaire) | **Honza / Sebastián** | strategy |
| P0 | Investigate empty server `<title>` — verify if real bug or curl artifact | agent | 30 min |
| P1 | Per-page `twitter:title` overrides | agent | 15 min |
| P1 | `/web-pro-instalatera` `metadata.openGraph.images` + verify `/og-image.png` exists | agent | 10 min |
| P1 | `/web-pro-instalatera` explicit `metadata.robots` | agent | 5 min |
| P2 | JSON-LD Organization in root layout | agent | 30 min |
| P2 | `html lang="cs-CZ"` | agent | 1 LOC |
| P2 | Cache header tuning per page | agent | 15 min |

---

## 5. Method limitations

- **No browser DOM testing.** All findings from curl + raw HTML grep. Browser rendering may differ for JavaScript-populated `<title>` (P0-2) — needs Lighthouse or Puppeteer verify.
- **No performance audit.** Lighthouse CWV not run.
- **No accessibility audit.** axe-core / Wave not run.
- **No content review.** Copy quality, conversion funnel, value prop clarity = owner copy review job.
- **No external testing tool authentication.** Did not log into Google Search Console / GA4 / Vercel Analytics for indexed-page list, real Search appearance, traffic data — those would inform P0-1 priority.

## 6. Re-audit cadence

Recommended: re-run this audit after each significant marketing site change (new section, new route, sitemap change). Quick re-run = `curl + grep` per route in §2 evidence. Full re-run = browser-based tools.

---

## Cross-refs

- D-stream master plán: `Spookybro55/autosmartweby:docs/operations/D-stream-repo-routing-and-execution-plan.md` D-01 row
- D-02 (Doplnění hlavních sekcí) — direct dependency on P0-1 resolution
- D-03 (Ceník / Web Starter prezentace) — depends on landing existing
- D-04 (Standard webu) — depends on landing existing
- D-05 (Analytika) — depends on real indexable pages
- Related fixes shipped during this audit session: PR #26 (`resend-lazy-init` /api/contact), PR #27 (`next` 16.2.5 + lazy init /api/brand-questionnaire), PR #28 (lint cleanup)
