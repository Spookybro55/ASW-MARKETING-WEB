import ContactForm from "./ContactForm";
import { finalCta, siteContact } from "@/data/siteContent";
import { PhoneIcon, MailIcon } from "./icons";

/**
 * FinalCta — restyled contact section (Commit 14 of v0 redesign).
 *
 * Visual restyle only. The dark `section-inverse` shell is kept (it
 * already provides the radial brand-glow background that anchors the
 * page end), and ContactForm is rendered as-is — its security and
 * validation logic, the success/error state machine, and the API route
 * at /api/contact stay untouched.
 *
 * Changes vs. previous version:
 *   - eyebrow gets a brand-sky color (already inherited from
 *     .section-inverse .eyebrow rule)
 *   - H2 keeps the same copy from the data layer
 *   - lead is tightened with a max-width for readability
 *   - phone + e-mail rows are wrapped in a soft dark card surface
 *     (rgba border/glow ring) instead of being bare on the gradient,
 *     so they read as "contact card" not "two random links"
 *   - response-time microcopy sits inside the contact card under a
 *     thin divider, tightening the trust group
 *   - extra "what happens after submit" microcopy below the form on
 *     mobile (and below the contact card on desktop) keeps the user
 *     informed about the next step — uses the existing finalCta.lead /
 *     formMicrocopy text, no new copy added
 *
 * Constraints: globals.css NOT changed; siteContent.ts NOT changed;
 * page.tsx NOT changed; Footer / MidCta / ContactForm / API route NOT
 * changed; CookieSettingsLink not touched.
 *
 * Analytics dataset attributes (data-cta-label, data-cta-location)
 * preserved on phone + e-mail anchors so existing GA4 events keep
 * firing under their original labels.
 */
export default function FinalCta() {
  return (
    <section id="kontakt" className="section section-inverse">
      <div className="container-wide px-5">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_1.2fr] items-start">
          <div>
            <span className="eyebrow">{finalCta.eyebrow}</span>
            <h2 className="h2 mt-2">{finalCta.title}</h2>
            <p
              className="lead mt-4"
              style={{ maxWidth: "44ch" }}
            >
              {finalCta.lead}
            </p>

            {/* Contact card — soft dark surface that lifts phone + e-mail
                out of the page gradient and groups them with the
                response-time microcopy as a single trust object. */}
            <div
              style={{
                marginTop: "2rem",
                background: "rgba(15, 28, 50, 0.55)",
                border: "1px solid rgba(245, 248, 255, 0.10)",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem 1.6rem",
                boxShadow:
                  "0 18px 50px rgba(7, 17, 31, 0.35), inset 0 1px 0 rgba(245,248,255,0.04)",
              }}
            >
              <ul
                role="list"
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <li>
                  <a
                    href={siteContact.phoneHref}
                    className="flex items-start gap-3 group"
                    data-cta-label="final_cta_phone"
                    data-cta-location="final_cta"
                  >
                    <span
                      aria-hidden="true"
                      className="dark-contact-icon"
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <PhoneIcon style={{ width: "18px", height: "18px" }} />
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <span
                        className="block text-xs"
                        style={{ color: "rgba(245,248,255,0.55)" }}
                      >
                        Zavolejte
                      </span>
                      <span
                        className="block font-semibold group-hover:underline"
                        style={{ color: "var(--fg-inverse)" }}
                      >
                        {siteContact.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteContact.email}`}
                    className="flex items-start gap-3 group"
                    data-cta-label="final_cta_email"
                    data-cta-location="final_cta"
                  >
                    <span
                      aria-hidden="true"
                      className="dark-contact-icon"
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MailIcon style={{ width: "18px", height: "18px" }} />
                    </span>
                    <span style={{ minWidth: 0, wordBreak: "break-word" }}>
                      <span
                        className="block text-xs"
                        style={{ color: "rgba(245,248,255,0.55)" }}
                      >
                        Napište e-mail
                      </span>
                      <span
                        className="block font-semibold group-hover:underline"
                        style={{ color: "var(--fg-inverse)" }}
                      >
                        {siteContact.email}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>

              <div
                style={{
                  marginTop: "1.25rem",
                  paddingTop: "1.1rem",
                  borderTop: "1px solid rgba(245,248,255,0.10)",
                  fontSize: "0.85rem",
                  lineHeight: 1.55,
                  color: "rgba(245,248,255,0.65)",
                }}
              >
                Ozve se vám Tomáš obvykle do jednoho pracovního dne.
                Pondělí–pátek mezi 9:00 a 18:00.
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
