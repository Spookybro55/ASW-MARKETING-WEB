import type { Metadata } from "next";
import Navbar from "@/components/v2/Navbar";
import Hero from "@/components/v2/Hero";
import Audience from "@/components/v2/Audience";
import ProblemSolution from "@/components/v2/ProblemSolution";
import Process from "@/components/v2/Process";
import Deliverables from "@/components/v2/Deliverables";
import Pricing from "@/components/v2/Pricing";
import Portfolio from "@/components/v2/Portfolio";
import References from "@/components/v2/References";
import Comparison from "@/components/v2/Comparison";
import Faq from "@/components/v2/Faq";
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
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Autosmartweby — Profesionální weby pro živnostníky a malé firmy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og-image.png`],
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
        <Audience />
        <ProblemSolution />
        <Process />
        <Deliverables />
        <Pricing />
        <Portfolio />
        <References />
        <Comparison />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
