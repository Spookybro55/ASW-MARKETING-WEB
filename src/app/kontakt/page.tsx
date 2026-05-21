import type { Metadata } from "next";
import Header from "@/components/asw/Header";
import Footer from "@/components/asw/Footer";
import { HeroSection } from "@/components/asw/HeroSection";
import { Section, SectionHeading } from "@/components/asw/Section";
import { ContactForm } from "@/components/asw/ContactForm";
import { Icon } from "@/components/asw/icons";
import { seo, kontaktPage, contactSection, contact } from "@/data/site";

export const metadata: Metadata = {
  title: seo.kontakt.title,
  description: seo.kontakt.description,
  alternates: { canonical: seo.kontakt.path },
  openGraph: {
    title: seo.kontakt.title,
    description: seo.kontakt.description,
    url: seo.kontakt.path,
    siteName: contact.brandName,
    locale: "cs_CZ",
    type: "website",
  },
};

export const revalidate = 3600;

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection
          eyebrow="Kontakt"
          headline={kontaktPage.hero.headline}
          subheadline={kontaktPage.hero.subheadline}
          ctaText={`Zavolat ${contact.phone}`}
          ctaUrl={contact.phoneHref}
        />

        <Section id="kontakt-form">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <SectionHeading
                eyebrow={contactSection.eyebrow}
                title={contactSection.title}
                lead={contactSection.lead}
                align="left"
              />
              <ul role="list" className="mt-8 space-y-4">
                <li>
                  <a
                    href={contact.phoneHref}
                    className="inline-flex items-center gap-3 text-foreground hover:text-brand-light"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-light">
                      <Icon name="phone" className="h-5 w-5" />
                    </span>
                    <span className="font-medium">{contact.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={contact.emailHref}
                    className="inline-flex items-center gap-3 text-foreground hover:text-brand-light"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-light">
                      <Icon name="file-text" className="h-5 w-5" />
                    </span>
                    <span className="font-medium">{contact.email}</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-fg-muted">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-light">
                    <Icon name="map-pin" className="h-5 w-5" />
                  </span>
                  <span>{contact.region}</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-fg-soft">
                {contact.legalName} · IČO {contact.ico}
                <br />
                {kontaktPage.companyPlaceholder.note}
              </p>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
