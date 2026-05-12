import ContactForm from "./ContactForm";
import { finalCta, siteContact } from "@/data/siteContent";
import { PhoneIcon, MailIcon } from "./icons";

export default function FinalCta() {
  return (
    <section id="kontakt" className="section">
      <div className="container-wide px-5">
        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[1fr_1.2fr] items-start">
          <div>
            <span className="eyebrow">{finalCta.eyebrow}</span>
            <h2 className="h2 mt-2">{finalCta.title}</h2>
            <p className="lead mt-4">{finalCta.lead}</p>

            <ul className="mt-7 space-y-3">
              <li>
                <a
                  href={siteContact.phoneHref}
                  className="flex items-start gap-3 group"
                  data-cta-label="final_cta_phone"
                  data-cta-location="final_cta"
                >
                  <span
                    aria-hidden
                    style={{
                      background: "var(--brand-soft)",
                      color: "var(--brand)",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <PhoneIcon style={{ width: "18px", height: "18px" }} />
                  </span>
                  <span>
                    <span className="block text-xs soft">Zavolejte</span>
                    <span
                      className="block font-semibold group-hover:underline"
                      style={{ color: "var(--fg)" }}
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
                    aria-hidden
                    style={{
                      background: "var(--brand-soft)",
                      color: "var(--brand)",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MailIcon style={{ width: "18px", height: "18px" }} />
                  </span>
                  <span>
                    <span className="block text-xs soft">Napište e-mail</span>
                    <span
                      className="block font-semibold group-hover:underline"
                      style={{ color: "var(--fg)" }}
                    >
                      {siteContact.email}
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <p className="mt-6 text-sm soft max-w-[42ch]">
              Reagujeme typicky do jednoho pracovního dne. Pondělí–pátek mezi
              9:00 a 18:00.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
