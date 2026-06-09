import type { Metadata } from "next";
import Header from "@/components/asw/Header";
import Footer from "@/components/asw/Footer";
import { Section } from "@/components/asw/Section";
import { Icon } from "@/components/asw/icons";
import FormularForm from "./FormularForm";

// Klientský onboarding formulář — NENÍ to SEO landing page, proto noindex
// (vyhledávače ho nemají indexovat ani sledovat odkazy). Title/description
// dle zadání.
export const metadata: Metadata = {
  title: "Podklady pro nový web | AutoSmartWeby",
  description:
    "Krátký formulář pro získání podkladů k tvorbě webu. Vyplňte informace o firmě, službách, textech, fotkách, referencích a doméně.",
  robots: {
    index: false,
    follow: false,
  },
};

const trustItems = [
  { icon: "clock", text: "Zabere přibližně 10–15 minut" },
  { icon: "file-text", text: "Nemusíte mít hotové texty ani fotky" },
  { icon: "check", text: "Podklady nám přijdou rovnou do e-mailu" },
  { icon: "users", text: "Chybějící věci si případně doplníme společně" },
] as const;

export default function FormularPage() {
  return (
    <>
      {/* Stejná floating dark navigace jako na ostatních veřejných stránkách
          (homepage, /weby, /kontakt…) — konzistentní header napříč webem. */}
      <Header variant="dark" />
      <main id="main">
        {/* Hero / úvod. pt-24 clearance pod floating header (mirror HeroSection). */}
        <section className="relative px-5 pt-24 pb-6 sm:px-8 md:pt-28">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-light">
                Podklady k webu
              </p>
              <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Podklady pro váš nový web
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-fg-muted">
                Vyplňte prosím informace, které nám pomůžou připravit web
                rychleji a přesněji. Nemusíte nic psát marketingově — stačí
                jednoduše vlastními slovy. Pokud něco nevíte, napište „nevím“
                nebo pole přeskočte, pokud není povinné.
              </p>
            </div>

            {/* Trust box */}
            <ul
              role="list"
              className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
              {trustItems.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 shadow-sm"
                >
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-light">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Formulář */}
        <Section density="compact">
          <FormularForm />
        </Section>
      </main>
      <Footer />
    </>
  );
}
