import { homepageData } from "@/data/homepage";
import ContactForm from "./ContactForm";

export default function ContactCtaSection() {
  const { contactCta, contactInfo } = homepageData;
  const primaryContact = contactInfo.people[0];

  return (
    <section
      id="contact"
      data-track-view="contact"
      className="section-shell border-t border-white/10"
    >
      <div className="section-container">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-[var(--brand)]" />

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              {contactCta.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
              {contactCta.text}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${primaryContact.phone.replace(/\s+/g, "")}`}
                className="primary-button inline-flex items-center justify-center gap-2"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {contactCta.primaryButton}
              </a>

              <a
                href={`mailto:${primaryContact.email}`}
                className="secondary-button inline-flex items-center justify-center gap-2"
              >
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Napsat e-mail
              </a>
            </div>

            <div className="mt-4 text-sm text-gray-400">
              Odpovídáme do 24 hodin. Konzultace je zdarma.
            </div>

            <div className="mx-auto mt-10 max-w-md text-left">
              <ContactForm />
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {contactInfo.people.map((person) => (
              <div
                key={person.email}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-7 transition duration-300 hover:border-[var(--brand)]/25 hover:bg-white/[0.04]"
              >
                <div className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
                  Přímý kontakt
                </div>

                <div className="text-xl font-semibold text-white md:text-2xl">
                  {person.name}
                </div>

                <a
                  href={`tel:${person.phone.replace(/\s+/g, "")}`}
                  className="mt-5 block text-xl font-bold text-white transition hover:text-[var(--brand)] md:text-2xl"
                >
                  {person.phone}
                </a>

                <a
                  href={`mailto:${person.email}`}
                  className="mt-3 block text-sm text-gray-400 transition hover:text-[var(--brand)] md:text-base"
                >
                  {person.email}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-7">
            <div className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
              Společnost
            </div>

            <div className="text-lg font-semibold text-white md:text-xl">
              Synkedo s.r.o.
            </div>

            <div className="mt-4 space-y-2 text-sm text-gray-300 md:text-base">
              <div>
                <span className="text-white">IČO:</span> 24571831
              </div>
              <div>
                <span className="text-white">Adresa:</span> Příčná 1892/4, Nové Město, 110 00 Praha 1
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
