import Link from "next/link";
import Image from "next/image";
import { footerV0, siteContact, socialLinks } from "@/data/siteContent";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "./icons";
import CookieSettingsLink from "@/components/site/CookieSettingsLink";

/**
 * Footer — v0 4-column layout (Commit 11 of v0 redesign).
 *
 * Replaces the previous 3-column legacy layout with the v0 footer from
 * 06-about-cta-footer.png:
 *   - brand block: logo mark + AUTOSMARTWEBY wordmark, short description,
 *     social icons row, IČO + adresa
 *   - Navigace, Služby, Kontakt — driven by footerV0.columns
 *   - Bottom strip: copyright, legal links inline, cookie settings link
 *
 * Data sources:
 *   - footerV0          (siteContent.ts:952) — columns, legal, copyright
 *   - socialLinks       (siteContent.ts:1031) — FB/IG/LI placeholders
 *   - siteContact       (siteContent.ts:15) — verified IČO, adresa, brand
 *
 * Launch-safety:
 *   - socialLinks all carry status: "planned" → rendered as dimmed
 *     (.asw-v0-social-icon[data-status="planned"] disables pointer
 *     events) with an aria-label that says "v přípravě". Even if a
 *     visitor clicks, the link does nothing — never sends them to a fake
 *     profile.
 *   - footerV0.legal includes Obchodní podmínky as status: "planned" →
 *     CSS appends " · brzy" and disables pointer events. The link
 *     becomes navigable only after the /obchodni-podminky page ships
 *     and the data layer flips status to "live".
 *   - Real Kontakt links keep status: "live" so phone/email remain
 *     fully tappable (preserving direct conversion paths).
 *   - IČO / address shown as required by CLAUDE.md §9.
 *
 * ContactForm and API routes are not touched.
 */

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
} as const;

type SocialPlatform = keyof typeof SOCIAL_ICONS;

export default function Footer() {
  const year = new Date().getFullYear();
  const copyright = footerV0.copyrightTemplate.replace(
    "{year}",
    String(year),
  );

  return (
    <footer
      className="section-inverse"
      style={{ paddingTop: "4.5rem", paddingBottom: "2.5rem" }}
    >
      <div className="container-wide px-5">
        <div className="asw-v0-footer">
          {/* Brand block */}
          <div>
            <div
              className="flex items-center gap-2 font-bold"
              style={{ color: "var(--fg-inverse)" }}
            >
              <Image
                src="/logo-mark.svg"
                alt=""
                width={30}
                height={31}
                aria-hidden="true"
              />
              <span
                className="text-lg whitespace-nowrap"
                style={{
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                <span>{siteContact.brandName.slice(0, 4)}</span>
                <span
                  style={{ color: "var(--brand-sky)", fontWeight: 800 }}
                >
                  {siteContact.brandName.slice(4, 9)}
                </span>
                <span>{siteContact.brandName.slice(9)}</span>
              </span>
            </div>

            <p
              style={{
                marginTop: "0.95rem",
                fontSize: "0.92rem",
                lineHeight: 1.6,
                color: "rgba(245,248,255,0.72)",
                maxWidth: "34ch",
              }}
            >
              {footerV0.description}
            </p>

            {/* Social icons — all currently planned, rendered disabled */}
            <ul
              className="asw-v0-social"
              role="list"
              style={{
                marginTop: "1.25rem",
                listStyle: "none",
                padding: 0,
              }}
            >
              {socialLinks.map((s) => {
                const Icon = SOCIAL_ICONS[s.platform as SocialPlatform];
                if (!Icon) return null;
                const isPlanned = s.status === "planned";
                return (
                  <li key={s.platform}>
                    <a
                      href={s.href}
                      className="asw-v0-social-icon"
                      data-status={s.status}
                      aria-label={s.ariaLabel}
                      aria-disabled={isPlanned ? "true" : undefined}
                      tabIndex={isPlanned ? -1 : undefined}
                      rel={isPlanned ? undefined : "noopener noreferrer"}
                    >
                      <Icon width={16} height={16} />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* IČO + address — required by CLAUDE.md §9 (trust). */}
            <p
              style={{
                marginTop: "1.25rem",
                fontSize: "0.78rem",
                lineHeight: 1.55,
                color: "rgba(245,248,255,0.5)",
              }}
            >
              {siteContact.legalName} · IČO {siteContact.ico}
              <br />
              {siteContact.address.street}, {siteContact.address.zip}{" "}
              {siteContact.address.city}
            </p>
          </div>

          {/* Link columns from data */}
          {footerV0.columns.map((col) => (
            <div key={col.title}>
              <div className="asw-v0-footer-col-title">{col.title}</div>
              <ul className="asw-v0-footer-col-list" role="list">
                {col.links.map((link) => {
                  // Widen literal so the "planned" branch stays reachable
                  // for future column entries (current data has only "live"
                  // and "static" in the columns block).
                  const status: string = link.status;
                  const isInternal = link.href.startsWith("/");
                  const isStatic = status === "static";
                  const isPlanned = status === "planned";
                  const dataStatus =
                    status !== "live" ? status : undefined;
                  const ariaDisabled =
                    isStatic || isPlanned ? "true" : undefined;

                  if (isInternal && !isStatic && !isPlanned) {
                    return (
                      <li key={`${col.title}-${link.href}-${link.label}`}>
                        <Link
                          href={link.href}
                          className="asw-v0-footer-link"
                          data-status={dataStatus}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={`${col.title}-${link.href}-${link.label}`}>
                      <a
                        href={link.href}
                        className="asw-v0-footer-link"
                        data-status={dataStatus}
                        aria-disabled={ariaDisabled}
                        tabIndex={isStatic || isPlanned ? -1 : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip: copyright + legal links + cookie settings */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(245,248,255,0.12)",
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
            fontSize: "0.78rem",
            color: "rgba(245,248,255,0.55)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.85rem 1.5rem",
            }}
          >
            <span>{copyright}</span>
            <ul
              role="list"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.65rem 1.25rem",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {footerV0.legal.map((entry) => {
                const isPlanned = entry.status === "planned";
                const dataStatus =
                  entry.status !== "live" ? entry.status : undefined;

                if (isPlanned) {
                  return (
                    <li key={entry.href}>
                      <a
                        href={entry.href}
                        className="asw-v0-footer-link"
                        data-status={dataStatus}
                        aria-disabled="true"
                        tabIndex={-1}
                        style={{ fontSize: "0.78rem" }}
                      >
                        {entry.label}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={entry.href}>
                    <Link
                      href={entry.href}
                      className="asw-v0-footer-link"
                      style={{ fontSize: "0.78rem" }}
                    >
                      {entry.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <CookieSettingsLink />
        </div>
      </div>
    </footer>
  );
}
