import { deliverablesBento } from "@/data/siteContent";
import {
  AtSignIcon,
  BoltIcon,
  BrowserIcon,
  BuildingIcon,
  MapPinIcon,
  QrCodeIcon,
  StarIcon,
} from "./icons";

/**
 * Deliverables — „Váš kompletní růstový balíček" (Commit 6 of v0 redesign).
 *
 * Replaces the previous linear "co dostanete / co naceníme zvlášť" layout
 * with the v0 bento grid (7 product/service tiles). Each tile carries an
 * icon, a name, a short description and an optional "Doplněk" badge that
 * marks features which ship in higher Web+ chytrý proces / Lokální tier
 * — so visitors do not assume every tile is part of the Start balíček.
 *
 * Section id="balicek" — anchor target for:
 *   - navbar "AI Recepční" (navV0.links[3])
 *   - hero problem card 3 "Zmeškáváte hovory" (heroV0.problemCards[2].ctaHref)
 *   - services row 3 "Automatizace" (services.items[2].ctaHref)
 *
 * Previous id="sluzby" intentionally retired here. Legacy `nav.links` and
 * `footer.columns` exports in siteContent.ts still reference #sluzby but
 * are not rendered by any current component (Navbar uses navV0, Footer
 * uses local COLUMNS). They will be cleaned up in a later cleanup commit.
 */

// Map deliverablesBento.items[].icon → icon component. Keeps siteContent
// pure data; component layer owns the visual mapping.
const BENTO_ICONS = {
  browser: BrowserIcon,
  "map-pin": MapPinIcon,
  "phone-circle": BoltIcon,
  star: StarIcon,
  "google-business": BuildingIcon,
  "mail-business": AtSignIcon,
  "qr-code": QrCodeIcon,
} as const;

type IconKey = keyof typeof BENTO_ICONS;

export default function Deliverables() {
  return (
    <section id="balicek" className="section section-muted">
      <div className="container-wide px-5">
        <header
          style={{
            maxWidth: "60ch",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span className="eyebrow">{deliverablesBento.eyebrow}</span>
          <h2 className="h2 mt-2">
            {deliverablesBento.titleLead}{" "}
            <span className="asw-v0-accent">{deliverablesBento.titleAccent}</span>
          </h2>
          <p className="lead mt-4">{deliverablesBento.lead}</p>
        </header>

        <ul
          className="asw-v0-bento"
          role="list"
          style={{ marginTop: "3rem", listStyle: "none", padding: 0 }}
        >
          {deliverablesBento.items.map((item) => {
            const Icon = BENTO_ICONS[item.icon as IconKey];
            return (
              <li key={item.title} className="asw-v0-bento-card">
                {item.badge && (
                  <span
                    className="asw-v0-bento-badge"
                    title={item.badge.tier}
                  >
                    {item.badge.label}
                  </span>
                )}
                <span className="asw-v0-bento-icon" aria-hidden="true">
                  {Icon ? <Icon className="h-5 w-5" /> : null}
                </span>
                <h3 className="asw-v0-bento-title">{item.title}</h3>
                <p className="asw-v0-bento-text">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
