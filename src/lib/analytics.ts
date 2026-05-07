/**
 * Typed wrapper around window.gtag for GA4 event tracking.
 *
 * Why centralized:
 * - Single source of truth for event names + parameter shapes
 * - Type safety via discriminated union (TS catches typos in event_name)
 * - Easy to swap or extend backend later (Plausible, Mixpanel) without
 *   touching every call site
 * - Server-render safe — checks `typeof window` before calling gtag
 *
 * Event catalog (also documented in docs/audits/D05-measurement-plan.md):
 * - click_phone / click_email — auto-fired by AnalyticsEvents.tsx
 *   (kept here for type completeness)
 * - contact_form_submit / contact_form_error — homepage + landing
 * - brand_questionnaire_submit / brand_questionnaire_error
 * - cta_click — generic CTA tracking when added
 */

type AnalyticsEvent =
  | {
      name: "click_phone";
      params: { link_url: string; link_text: string; location: string };
    }
  | {
      name: "click_email";
      params: { link_url: string; link_text: string; location: string };
    }
  | {
      name: "contact_form_submit";
      params: { form_location: string };
    }
  | {
      name: "contact_form_error";
      params: { form_location: string; error_type: "validation" | "api" | "network" };
    }
  | {
      name: "brand_questionnaire_submit";
      params: { form_location: "brand-dotaznik" };
    }
  | {
      name: "brand_questionnaire_error";
      params: {
        form_location: "brand-dotaznik";
        error_type: "validation" | "api" | "network";
      };
    }
  | {
      name: "cta_click";
      params: { cta_label: string; cta_location: string };
    }
  | {
      name: "scroll_depth";
      params: { percent: 25 | 50 | 75 | 100; page_path: string };
    }
  | {
      name: "view_section";
      params: { section_id: string; page_path: string };
    };

export function trackEvent<E extends AnalyticsEvent>(event: E): void {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event.name, event.params);
}
