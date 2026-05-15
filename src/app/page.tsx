import type { Metadata } from "next";
import Navbar from "@/components/v2/Navbar";
import Hero from "@/components/v2/Hero";
import TrustStrip from "@/components/v2/TrustStrip";
import Services from "@/components/v2/Services";
import ProblemSolution from "@/components/v2/ProblemSolution";
import Deliverables from "@/components/v2/Deliverables";
import Results from "@/components/v2/Results";
import Pricing from "@/components/v2/Pricing";
import Portfolio from "@/components/v2/Portfolio";
import References from "@/components/v2/References";
import Comparison from "@/components/v2/Comparison";
import MidCta from "@/components/v2/MidCta";
import Faq from "@/components/v2/Faq";
import Team from "@/components/v2/Team";
import FinalCta from "@/components/v2/FinalCta";
import Footer from "@/components/v2/Footer";

// Homepage metadata overrides the v1 layout.tsx defaults (which still
// carry AI-laden copy). layout.tsx will be rewritten in Commit 9; this
// page-level override fixes the homepage <title> / OG immediately.

const siteUrl = "https://autosmartweb.cz";

const title =
  "Autosmartweby.cz | Profesionální weby pro živnostníky a malé firmy";

const description =
  "Dostupné weby pro živnostníky, řemeslníky a malé firmy. Pomůžeme s texty, strukturou, základním SEO a spuštěním. Jasná cena a jednoduchý proces.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Autosmartweby",
    locale: "cs_CZ",
    type: "website",
    // og:image is auto-discovered from src/app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    // twitter:image is auto-discovered from src/app/twitter-image.tsx
  },
};

// ISR — homepage copy is static-ish, recompute every hour at the edge.
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <ProblemSolution />
        <Deliverables />
        <Results />
        <Pricing />
        <Portfolio />
        <References />
        <Comparison />
        <MidCta />
        <Faq />
        <Team />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
