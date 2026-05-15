import { services } from "@/data/siteContent";
import { ChevronRightIcon } from "./icons";

/**
 * Services — „Tři cesty k růstu" (Commit 5 of v0 redesign).
 *
 * Three alternating rows under the hero block:
 *   01 Tvorba webu        — copy LEFT,  preview RIGHT
 *   02 Lokální SEO        — preview LEFT, copy RIGHT (data-flip)
 *   03 Automatizace       — copy LEFT,  preview RIGHT
 *
 * Each item carries a `preview` discriminated union that decides which
 * mock is rendered next to the copy:
 *   - "checklist"  → list of bullet pointers + progress bar
 *   - "live-feed"  → status feed (poptávka přijata, lead kvalifikován…)
 *   - "leads-feed" → lead capture rows with state labels (Auto-SMS,
 *                    Schůzka domluvena, …)
 *
 * Replaces the legacy Audience.tsx + BuildQuality.tsx + Process.tsx
 * sections, which conveyed similar information in a less coherent
 * narrative. Process steps stay implicit in the service descriptions
 * for now; if a dedicated process timeline is needed later, it can
 * land as a separate component.
 */
// Section id="weby". Aligns with the navbar/footer "Weby" link target so
// jumping there lands on the centered header ("Tři cesty k růstu") above
// all three service rows. Sub-anchors on individual rows (#lokalni-seo,
// #automatizace) still allow deep links to specific services. Row 1 in
// the data carries `anchorId: "weby"` to keep the data layer in sync
// with the section, but the article-level id is suppressed at render
// time to avoid an HTML duplicate-id error — see SECTION_ID below.
const SECTION_ID = "weby";

export default function Services() {
  return (
    <section id={SECTION_ID} className="section">
      <div className="container-wide px-5">
        <header
          style={{
            maxWidth: "60ch",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span className="eyebrow">{services.eyebrow}</span>
          <h2 className="h2 mt-2">
            {services.titleLead}{" "}
            <span className="asw-v0-accent">{services.titleAccent}</span>
          </h2>
          <p className="lead mt-4">{services.lead}</p>
        </header>

        <div style={{ marginTop: "4rem" }}>
          {services.items.map((item, idx) => (
            <article
              key={item.number}
              id={item.anchorId === SECTION_ID ? undefined : item.anchorId}
              className="asw-v0-service-row"
              data-flip={idx % 2 === 1 ? "true" : undefined}
            >
              <div className="asw-v0-service-copy">
                <div className="asw-v0-service-number">{item.number}</div>
                <h3 className="asw-v0-service-title">{item.title}</h3>
                <p className="asw-v0-service-text">{item.text}</p>
                <a
                  href={item.ctaHref}
                  className="asw-v0-service-link"
                  data-cta-label={`services_${item.anchorId}`}
                  data-cta-location="services"
                >
                  {item.ctaLabel}
                  <ChevronRightIcon className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="asw-v0-service-preview">
                <ServicePreview preview={item.preview} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type Preview = (typeof services.items)[number]["preview"];

function ServicePreview({ preview }: { preview: Preview }) {
  if (preview.kind === "checklist") {
    return (
      <>
        <div className="asw-v0-preview-header" data-tone="brand">
          <span>{preview.title}</span>
        </div>
        <ul className="asw-v0-preview-list">
          {preview.items.map((it) => (
            <li key={it} className="asw-v0-preview-item">
              <span aria-hidden="true" style={{ color: "var(--brand)" }}>
                •
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
        <div className="asw-v0-preview-progress" aria-hidden="true" />
      </>
    );
  }

  if (preview.kind === "live-feed") {
    return (
      <>
        <div className="asw-v0-preview-header">
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
            <span
              aria-hidden="true"
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "999px",
                background: "var(--success)",
                display: "inline-block",
              }}
            />
            {preview.title}
          </span>
        </div>
        <ul className="asw-v0-preview-list">
          {preview.items.map((it) => (
            <li key={it} className="asw-v0-preview-item">
              <span aria-hidden="true" style={{ color: "var(--fg-soft)" }}>
                ›
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }

  // leads-feed
  return (
    <>
      <div className="asw-v0-preview-header">
        <span>{preview.title}</span>
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            color: "var(--brand)",
            background: "var(--brand-soft)",
            padding: "0.2rem 0.5rem",
            borderRadius: "999px",
          }}
        >
          {preview.statusLabel}
        </span>
      </div>
      <ul className="asw-v0-preview-list">
        {preview.items.map((it) => (
          <li key={it.label} className="asw-v0-preview-item">
            <span style={{ flex: 1 }}>{it.label}</span>
            <span className="asw-v0-preview-item-state">{it.state}</span>
          </li>
        ))}
      </ul>
      <div className="asw-v0-preview-progress" aria-hidden="true" />
    </>
  );
}
