import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import { homepageData } from "@/data/homepage";

const siteUrl = "https://autosmartweb.cz";

export const metadata: Metadata = {
  title: "Web pro instalatéra na klíč – od 8 900 Kč | Autosmartweby",
  description:
    "Profesionální web pro instalatéra na klíč. Texty, design, SEO i spuštění na doméně. Hotovo za 3–5 dní, platíte až po schválení.",
  alternates: {
    canonical: `${siteUrl}/web-pro-instalatera`,
  },
  openGraph: {
    title: "Web pro instalatéra na klíč – od 8 900 Kč | Autosmartweby",
    description:
      "Profesionální web pro instalatéra na klíč. Texty, design, SEO i spuštění na doméně. Hotovo za 3–5 dní, platíte až po schválení.",
    url: `${siteUrl}/web-pro-instalatera`,
    siteName: "Autosmartweby",
    locale: "cs_CZ",
    type: "website",
  },
};

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    className="mt-0.5 h-4 w-4 shrink-0 text-[#36E2A3]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

export default function WebProInstalateraPage() {
  const primaryContact = homepageData.contactInfo.people[0];
  const centralEmail = homepageData.contactInfo.centralEmail;

  return (
    <main className="bg-[#050B1F] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#36E2A3]/10 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="relative px-6 pt-28 pb-16 md:pt-48 md:pb-28">
        <div className="pointer-events-none absolute top-[-120px] left-[-80px] h-[500px] w-[500px] rounded-full bg-[#36E2A3]/[0.07] blur-[120px]" />
        <div className="pointer-events-none absolute bottom-[-100px] right-[10%] h-[300px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[100px]" />

        <div className="mx-auto max-w-6xl relative">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#36E2A3]/30 bg-[#36E2A3]/[0.08] px-4 py-1.5 text-sm font-medium text-[#36E2A3]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#36E2A3]" />
              Web na klíč pro instalatéra
            </div>

            <h1 className="max-w-5xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] whitespace-pre-line sm:text-5xl md:text-7xl">
              {"Jednoduchý profesionální web\npro instalatéra"}
            </h1>

            <p className="max-w-2xl text-base leading-7 text-gray-300 md:text-xl md:leading-8">
              Zákazník hned uvidí, co děláte, kde působíte a jak se vám ozvat.
              Web připravíme na klíč, bez zbytečné složitosti.
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
              <a
                href={`tel:${primaryContact.phone.replace(/\s+/g, "")}`}
                className="primary-button inline-flex items-center justify-center gap-2 text-base"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Zavolat teď
              </a>

              <a
                href="#contact"
                className="secondary-button inline-flex items-center justify-center gap-2 text-base"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Nechat si poslat návrh
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 text-sm text-gray-400">
              {[
                "Od 8 900 Kč",
                "Hotovo obvykle za 3–5 pracovních dní",
                "Platíte až po schválení",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckIcon />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROČ TO DÁVÁ SMYSL */}
      <section className="section-shell border-t border-white/10">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="mb-4 h-1 w-10 rounded-full bg-[var(--brand)]" />
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Když vás zákazník najde, musí hned vědět, kam volat
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
              Doporučení, Firmy.cz nebo Google často přivedou člověka, který už
              službu hledá. Když ale nenajde přehledný web, často si není jistý,
              co přesně děláte, kde působíte a jak se vám nejrychleji ozvat.
            </p>
          </div>

          <div className="mt-12 space-y-4 max-w-2xl">
            {[
              "Zákazník si během pár vteřin ověří, že působíte důvěryhodně",
              "Hned vidí služby, kontakt a oblast, kde pracujete",
              "Může vám rovnou zavolat nebo poslat poptávku",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-base text-gray-300 md:text-lg"
              >
                <CheckIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CO DOSTANE */}
      <section className="section-shell border-t border-white/10">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="mb-4 h-1 w-10 rounded-full bg-[var(--brand)]" />
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Co v tom dostanete
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
              Jednoduchý profesionální web na klíč, připravený tak, aby zákazník
              rychle pochopil, co děláte, a mohl se vám snadno ozvat.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 max-w-3xl">
            {[
              "Hlavní stránku na míru pro vaše služby",
              "Přehled toho, co děláte a pro koho",
              "Klikací telefon a e-mail",
              "Kontaktní formulář",
              "Mobilní verzi i prohlížení na počítači",
              "Základní SEO a spuštění na vaší doméně",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-base text-gray-300"
              >
                <CheckIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JAK TO PROBÍHÁ */}
      <section className="section-shell border-t border-white/10">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="mb-4 h-1 w-10 rounded-full bg-[var(--brand)]" />
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Jak probíhá spolupráce
            </h2>
          </div>

          <div className="mt-12 space-y-4 max-w-3xl">
            {[
              {
                step: "01",
                title: "Řeknete nám, co děláte",
                text: "Krátce si zavoláme nebo napíšeme. Zjistíme, jaké služby nabízíte a co má být na webu.",
              },
              {
                step: "02",
                title: "Připravíme návrh webu",
                text: "Sepíšeme texty, připravíme strukturu a pošleme vám hotový návrh ke schválení.",
              },
              {
                step: "03",
                title: "Po schválení spustíme",
                text: "Doladíme úpravy, napojíme doménu a web spustíme live.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-[var(--brand)]/25 hover:bg-white/[0.05]"
              >
                <div className="grid gap-4 md:grid-cols-[56px_1fr] md:items-start">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--brand)]/25 bg-[var(--brand)]/10 text-sm font-bold"
                    style={{ color: "var(--brand)" }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-white md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CENA */}
      <section className="section-shell border-t border-white/10">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="mb-4 h-1 w-10 rounded-full bg-[var(--brand)]" />
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Kolik to stojí
            </h2>
          </div>

          <div className="mt-14 max-w-lg">
            <div className="rounded-2xl border border-[var(--brand)]/25 bg-[linear-gradient(180deg,rgba(54,226,163,0.08)_0%,rgba(255,255,255,0.02)_100%)] p-8 shadow-[0_0_0_1px_rgba(54,226,163,0.06),0_20px_60px_rgba(54,226,163,0.10)]">
              <div className="text-sm font-semibold uppercase tracking-widest text-gray-300">
                Web na klíč pro instalatéra
              </div>

              <div className="mt-6 text-3xl font-bold text-white md:text-4xl">
                od 8 900 Kč
              </div>

              <p className="mt-4 text-base leading-7 text-gray-300">
                Kompletní profesionální web včetně struktury, textů, designu
                a základního SEO. Nasadíme ho na vaši doménu a spustíme.
              </p>

              <div className="mt-6 space-y-2 text-sm text-gray-400">
                {[
                  "Hotovo za 3–5 pracovních dní",
                  "2 kola úprav v ceně",
                  "Platíte až po schválení",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckIcon />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="primary-button inline-flex items-center justify-center gap-2 text-sm px-6 py-3"
                >
                  Chci web — ozvěte se mi
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Přesnou cenu vždy domluvíme podle rozsahu. Žádné skryté poplatky,
              žádné překvapení.
            </p>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="contact" className="section-shell border-t border-white/10">
        <div className="section-container">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-5 h-1 w-10 rounded-full bg-[var(--brand)]" />

              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Chcete web, který za vás udělá dobrý první dojem?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 md:text-lg md:leading-8">
                Zavolejte, napište nebo vyplňte formulář. Ozveme se do 24 hodin
                a navrhneme vám jednoduché řešení na míru.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`tel:${primaryContact.phone.replace(/\s+/g, "")}`}
                  className="primary-button inline-flex items-center justify-center gap-2"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Zavolat teď
                </a>

                <a
                  href={`mailto:${centralEmail}`}
                  className="secondary-button inline-flex items-center justify-center gap-2"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Napsat e-mail
                </a>
              </div>

              <div className="mt-4 text-sm text-gray-400">
                Odpovídáme do 24 hodin. Konzultace je zdarma.
              </div>

              <div className="mx-auto mt-10 max-w-md text-left">
                <p className="mb-4 text-sm text-gray-400">
                  Napište nám stručně, co děláte a co by měl web obsahovat.
                  Ozveme se vám s dalším postupem.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-400">
        <div className="mx-auto max-w-6xl space-y-2">
          <div>
            © {new Date().getFullYear()} Synkedo s.r.o. Všechna práva
            vyhrazena.
          </div>
          <div>
            <a
              href="/zasady-ochrany-osobnich-udaju"
              className="underline underline-offset-2 transition hover:text-white"
            >
              Zásady ochrany osobních údajů
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
