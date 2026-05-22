import type { Metadata } from "next";
import Header from "@/components/asw/Header";
import Footer from "@/components/asw/Footer";
import { HeroSection } from "@/components/asw/HeroSection";
import { Section, SectionHeading } from "@/components/asw/Section";
import { CtaSection } from "@/components/asw/CtaSection";
import { Icon, CheckIcon } from "@/components/asw/icons";
import { seo, kontaktPage, team, contact } from "@/data/site";

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
      <Header variant="dark" />
      <main id="main">
        <HeroSection
          eyebrow="Kontakt"
          headline={kontaktPage.hero.headline}
          subheadline={kontaktPage.hero.subheadline}
          ctaText="Objednat konzultaci"
          ctaUrl={kontaktPage.cta.href}
          secondaryText={`Zavolat ${contact.phone}`}
          secondaryUrl={contact.phoneHref}
        />

        {/* Proč AutoSmartWeby */}
        <Section id="proc">
          <SectionHeading eyebrow={kontaktPage.why.eyebrow} title={kontaktPage.why.title} />
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center">
            {kontaktPage.why.paragraphs.map((p) => (
              <p key={p} className="leading-relaxed text-fg-muted">
                {p}
              </p>
            ))}
          </div>
        </Section>

        {/* Kdo za tím stojí — team cards */}
        <Section tone="muted" id="tym">
          <SectionHeading
            eyebrow={kontaktPage.teamSection.eyebrow}
            title={kontaktPage.teamSection.title}
            lead={kontaktPage.teamSection.lead}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.email}
                className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-md"
              >
                {/* avatar placeholder (initials) — ready to swap for a photo */}
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft font-display text-lg font-bold text-brand-light ring-1 ring-inset ring-white/10">
                  {m.initials}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm text-fg-soft">{m.role}</p>
                <div className="mt-4 space-y-2 text-sm">
                  <a href={m.phoneHref} className="flex items-center gap-2.5 text-foreground hover:text-brand-light">
                    <Icon name="phone" className="h-4 w-4 text-brand-light" />
                    {m.phone}
                  </a>
                  <a href={m.emailHref} className="flex items-center gap-2.5 text-foreground hover:text-brand-light">
                    <Icon name="file-text" className="h-4 w-4 text-brand-light" />
                    {m.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* S čím se na nás můžete obrátit */}
        <Section id="s-cim-pomuzeme">
          <SectionHeading
            eyebrow={kontaktPage.topicsSection.eyebrow}
            title={kontaktPage.topicsSection.title}
          />
          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2"
          >
            {kontaktPage.topicsSection.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 shadow-md"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-light">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <span className="font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Obecný kontakt */}
        <Section tone="muted" id="kontakt-info">
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-surface p-8 text-center shadow-md">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-2">
              {kontaktPage.contactSection.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              {kontaktPage.contactSection.title}
            </h2>
            <p className="mt-2 text-fg-muted">{kontaktPage.contactSection.lead}</p>
            <a
              href={contact.emailHref}
              className="mt-4 inline-flex items-center gap-2 font-semibold text-brand-light hover:text-white"
            >
              <Icon name="file-text" className="h-4 w-4" />
              {contact.email}
            </a>
            <p className="mt-4 text-xs text-fg-soft">
              {kontaktPage.contactSection.company} · {contact.address.street},{" "}
              {contact.address.zip} {contact.address.city}
            </p>
          </div>
        </Section>

        <CtaSection
          title={kontaktPage.cta.title}
          lead={kontaktPage.cta.text}
          ctaText={kontaktPage.cta.label}
          ctaUrl={kontaktPage.cta.href}
        />
      </main>
      <Footer />
    </>
  );
}
