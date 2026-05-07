import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

// Per D-01 audit: page in sitemap, missing canonical + page-specific
// social tags. Keep simple — informational page, no rich social preview
// needed; layout fallback OG image is sufficient.
const siteUrl = "https://autosmartweb.cz";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů – Autosmartweby",
  description:
    "Informace o zpracování osobních údajů na webu autosmartweb.cz.",
  alternates: {
    canonical: `${siteUrl}/zasady-ochrany-osobnich-udaju`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Privacy policy — changes very rarely (legal updates). 24h ISR.
export const revalidate = 86400;

export default function PrivacyPage() {
  return (
    <main className="bg-[#050B1F] text-white relative overflow-hidden min-h-screen">
      <Navbar />

      <div className="px-6 pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Zásady ochrany osobních údajů
          </h1>

          <div className="mt-10 space-y-8 text-gray-300 leading-7">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">
                1. Správce údajů
              </h2>
              <p>
                Správcem osobních údajů je společnost{" "}
                <strong className="text-white">Synkedo s.r.o.</strong>, se
                sídlem Příčná 1892/4, Nové Město, 110 00 Praha 1, IČO:
                24571831.
              </p>
              <p className="mt-2">
                Kontaktní e-mail:{" "}
                <a
                  href="mailto:info@autosmartweb.cz"
                  className="text-[var(--brand)] underline underline-offset-4 transition hover:text-white"
                >
                  info@autosmartweb.cz
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">
                2. Jaké údaje sbíráme
              </h2>
              <p>
                Prostřednictvím kontaktního formuláře na tomto webu sbíráme
                následující údaje:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>jméno,</li>
                <li>e-mailová adresa,</li>
                <li>text zprávy.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">
                3. Účel zpracování
              </h2>
              <p>
                Vaše údaje zpracováváme výhradně za účelem vyřízení vaší
                poptávky nebo dotazu. Údaje nepoužíváme k marketingovým účelům
                ani je nepředáváme třetím stranám.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">
                4. Právní základ
              </h2>
              <p>
                Právním základem pro zpracování vašich údajů z kontaktního
                formuláře je oprávněný zájem správce na zodpovězení poptávek
                a dotazů (čl. 6 odst. 1 písm. f) GDPR). Oprávněným zájmem je
                zajištění komunikace se zájemci o služby správce.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">
                5. Doba uchovávání
              </h2>
              <p>
                Údaje uchováváme po dobu nezbytnou k vyřízení vaší poptávky,
                maximálně však 12 měsíců od odeslání formuláře, pokud
                nevznikne smluvní vztah vyžadující delší dobu uchovávání.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">
                6. Vaše práva
              </h2>
              <p>Máte právo:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>požádat o přístup ke svým údajům,</li>
                <li>požádat o opravu nebo výmaz údajů,</li>
                <li>odvolat svůj souhlas se zpracováním,</li>
                <li>
                  podat stížnost u Úřadu pro ochranu osobních údajů
                  (uoou.gov.cz).
                </li>
              </ul>
              <p className="mt-3">
                Pro uplatnění svých práv nás kontaktujte na{" "}
                <a
                  href="mailto:info@autosmartweb.cz"
                  className="text-[var(--brand)] underline underline-offset-4 transition hover:text-white"
                >
                  info@autosmartweb.cz
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-white">
                7. Technické zpracování
              </h2>
              <p>
                Data z formuláře jsou odeslána na e-mail správce
                prostřednictvím služby Resend. Údaje nejsou ukládány do
                databáze ani sdíleny s dalšími třetími stranami.
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-gray-500">
            Poslední aktualizace: duben 2026
          </div>
        </div>
      </div>
    </main>
  );
}
