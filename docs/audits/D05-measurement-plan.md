# D-05 — Analytika a konverzní měření marketing webu (2026-05-07)

> **Source:** D-stream master plán z `Spookybro55/autosmartweby` D-05 row.
> **Property:** GA4 `G-E2WG8LP9DV` (loaded via `@next/third-parties/google` v `src/app/layout.tsx`).
> **Tracker:** `src/lib/analytics.ts` typed wrapper `trackEvent({ name, params })`.

---

## 1. Event catalog

### 1.1 Engagement events (auto-fired, no code change needed at call sites)

| Event | Source | Fires when | Parameters |
|---|---|---|---|
| `click_phone` | `src/components/AnalyticsEvents.tsx` | User clicks any `<a href="tel:...">` | `link_url`, `link_text`, `location` (section ID) |
| `click_email` | `src/components/AnalyticsEvents.tsx` | User clicks any `<a href="mailto:...">` | `link_url`, `link_text`, `location` (section ID) |

Implementation: global click listener in `AnalyticsEvents` mounted in root layout, walks up DOM to nearest `<section id="...">` for `location` context.

### 1.2 Conversion events (form submissions)

| Event | Fires when | Parameters | Where |
|---|---|---|---|
| `contact_form_submit` | `/api/contact` returns success (`res.ok`) | `form_location` ("homepage" \| "instalater") | `src/components/ContactForm.tsx` |
| `contact_form_error` | `/api/contact` returns error OR network failure | `form_location`, `error_type` ("validation" \| "api" \| "network") | same |
| `brand_questionnaire_submit` | `/api/brand-questionnaire` returns success | `form_location` ("brand-dotaznik") | `src/app/brand-dotaznik/components/BrandQuestionnaireForm.tsx` |
| `brand_questionnaire_error` | `/api/brand-questionnaire` returns error OR network failure | `form_location`, `error_type` | same |

`error_type` derivation:
- `4xx` HTTP → `"validation"` (server rejected payload — validation failure or honeypot trip)
- `5xx` HTTP → `"api"` (Resend API failure or unexpected server error)
- Network exception (no HTTP response) → `"network"`

### 1.3 CTA events (data-attribute-driven, opt-in per element)

`AnalyticsEvents.tsx` global click listener fires `cta_click` when an `<a>` or `<button>` element has `data-cta-label="..."`. Optional `data-cta-location="..."` overrides the default (nearest `<section id>`).

| `cta_label` | `cta_location` | Element | Purpose |
|---|---|---|---|
| `pricing-web` | `pricing` | "Chci web — ozvěte se mi" link | Web tier interest |
| `pricing-automatizace` | `pricing` | Featured "Chci automatizaci" button | Automation tier interest |
| `pricing-chatbot` | `pricing` | "Chci chatbota" link | AI chatbot tier interest |

Add more over time by tagging elements with both `data-cta-label` and `data-cta-location` (or rely on auto-derived location from nearest `<section id>`).

### 1.4 Engagement signals (auto-fired by EngagementSignals.tsx)

| Event | Fires when | Parameters |
|---|---|---|
| `scroll_depth` | User scrolls past 25%, 50%, 75%, 100% of page (once each per page load) | `percent` (25/50/75/100), `page_path` |
| `view_section` | Element with `data-track-view="<id>"` enters viewport (50% intersection threshold) | `section_id`, `page_path` |

Wired (this batch):
- `data-track-view="services"` on ServicesSection
- `data-track-view="pricing"` on PricingSection
- `data-track-view="contact"` on ContactCtaSection

Funnel: `view_section[services]` → `view_section[pricing]` → `view_section[contact]` → `cta_click[pricing-*]` → `contact_form_submit`. GA4 Funnel Exploration can chain these.

### 1.5 Future / TODO events (not yet wired)

| Event | Should fire when | Why deferred |
|---|---|---|
| `outbound_link_click` | User clicks external `<a href="https://...">` | Currently auto-fired by GA4 enhanced measurement (verify in GA4 admin) |

---

## 2. Configure in GA4 admin

After deploy, in GA4 Property → Admin:

### 2.1 Mark conversion events

GA4 Admin → **Events** → toggle "Mark as conversion" for:
- `contact_form_submit` ⭐ (primary conversion)
- `brand_questionnaire_submit` ⭐ (primary conversion)
- `click_phone` (secondary — engagement intent)
- `click_email` (secondary)

### 2.2 Custom dimensions (recommended)

Admin → **Custom definitions** → **Custom dimensions** → Create:

| Dimension name | Scope | Event parameter |
|---|---|---|
| Form Location | Event | `form_location` |
| Error Type | Event | `error_type` |
| CTA Label | Event | `cta_label` |
| CTA Location | Event | `cta_location` |

This makes the event params filterable in Reports → Engagement → Events.

### 2.3 Suggested reports

- **Conversion funnel:** Hits → Phone/email click OR form submit
- **Form success rate:** `contact_form_submit` / (`contact_form_submit` + `contact_form_error`)
- **Top error types:** `contact_form_error` grouped by `error_type` (validation should dominate; spike in `api` or `network` = real problem)
- **Per-page contact rate:** filter `form_location` (homepage vs instalater landing page)

---

## 3. Debug + verify

### 3.1 Browser console

GA4 events log to browser console when `?debug_mode=1` is added to URL OR when GA Debugger Chrome extension is active.

```
DevTools → Console → see "gtag('event', 'contact_form_submit', { form_location: 'homepage' })"
```

### 3.2 GA4 DebugView

GA4 Admin → **DebugView** shows real-time events from sessions matching:
- `?debug_mode=1` query param OR
- Chrome GA Debugger extension active

Use this to validate new events end-to-end (browser → GA4) within seconds of merge.

### 3.3 Realtime report

GA4 Reports → **Realtime** shows event stream from production traffic with ~30s latency. Look for `event_count` per event_name during a real form submit.

---

## 4. Privacy + GDPR

Per `docs/operations/D-stream-...` D-07 security standard + `/zasady-ochrany-osobnich-udaju`:

- **No PII in event params.** `link_url` for `click_email` contains the company email (`mailto:sebastian@autosmartweb.cz`) — that's the destination, not the sender. No customer email or message body in any event.
- **Consent banner not currently active.** GA4 fires on every page load. If a cookie consent banner is added (D-07 § Forms & GDPR), wrap GA4 init in consent check.
- **IP anonymization** enabled by default in GA4 (no opt-in needed).

---

## 5. Out of scope (this measurement plan)

- **Server-side conversion API** (Measurement Protocol direct from `/api/contact` route) — defers attribution race conditions; needed only at high traffic / paid ad scale.
- **A/B testing infrastructure** (Optimize successor) — separate decision.
- **Custom funnel exploration / cohort analysis** — done in GA4 UI per analyst, not in code.
- **Heatmap / session recording** (Hotjar / Microsoft Clarity) — separate tool, not GA4.

---

## 6. Files

| File | Role |
|---|---|
| `src/lib/analytics.ts` | Typed `trackEvent({ name, params })` wrapper. Single source of truth for event names + parameter shapes. |
| `src/types/gtag.d.ts` | `window.gtag` type augmentation (already existed). |
| `src/components/AnalyticsEvents.tsx` | Auto-fires `click_phone` / `click_email` from global click listener. |
| `src/app/layout.tsx` | `<GoogleAnalytics gaId="G-E2WG8LP9DV" />` from `@next/third-parties/google`. |
| `src/components/ContactForm.tsx` | Fires `contact_form_submit` / `contact_form_error`. |
| `src/app/brand-dotaznik/components/BrandQuestionnaireForm.tsx` | Fires `brand_questionnaire_submit` / `brand_questionnaire_error`. |

## 7. Cross-refs

- D-stream master plán D-05 row: was `BLOCKED-WRONG-REPO` in autosmartweby; correctly executed here.
- D-01 audit (`docs/audits/D01-marketing-web-audit-2026-05-07.md`) — established GA4 setup baseline.
- D-07 security standard (in autosmartweby) § Forms & GDPR — consent banner future work.
