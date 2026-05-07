import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import AnswerOptionsSection from "./components/AnswerOptionsSection";
import BrandQuestionnaireForm from "./components/BrandQuestionnaireForm";

const siteUrl = "https://autosmartweb.cz";
const uploadUrl =
  "https://drive.google.com/drive/folders/1d1pttb6dwJ7e1hV-WbTFcMxBTsWQ3R5y?usp=drive_link";

// Per-page metadata. Twitter block added per D-01 audit finding P1-1
// (was inheriting generic title from layout — overrides og but kept
// twitter generic). Page-level openGraph.images intentionally omitted —
// `opengraph-image.tsx` + `twitter-image.tsx` siblings in this route
// segment generate dynamic OG/Twitter images via Next App Router convention.
export const metadata: Metadata = {
  title: "Brandový dotazník | Autosmartweby",
  description:
    "Brand discovery dotazník pro tvorbu loga, barevné palety, typografie a vizuálního stylu webu. Vyplnění zabere přibližně 15–25 minut.",
  alternates: {
    canonical: `${siteUrl}/brand-dotaznik`,
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Brandový dotazník | Autosmartweby",
    description:
      "Brand discovery dotazník pro tvorbu loga, barevné palety, typografie a vizuálního stylu webu.",
    url: `${siteUrl}/brand-dotaznik`,
    siteName: "Autosmartweby",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandový dotazník | Autosmartweby",
    description:
      "Brand discovery dotazník pro tvorbu loga, barevné palety, typografie a vizuálního stylu webu.",
  },
};

// Questionnaire content updates occasionally (questions, copy). 1h ISR.
export const revalidate = 3600;

export default function BrandQuestionnairePage() {
  return (
    <main
      id="main"
      className="relative overflow-hidden bg-[#050B1F] text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#36E2A3]/10 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <HeroSection />
      <AnswerOptionsSection uploadUrl={uploadUrl} />
      <BrandQuestionnaireForm uploadUrl={uploadUrl} />

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
