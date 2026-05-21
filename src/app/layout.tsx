import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import EngagementSignals from "@/components/EngagementSignals";
import AnalyticsGate from "@/components/site/AnalyticsGate";
import ConsentBanner from "@/components/site/ConsentBanner";
import "./globals.css";

// Source-of-truth spec (2026-05-21): Montserrat = headings/display,
// Roboto = body/UI. The spec offers "Poppins or Montserrat" for headings;
// Montserrat is chosen because Poppins lacks full Czech diacritics
// (ě š č ř ž ů …). latin-ext is required so those glyphs render in the
// real face, not a fallback. Both are variable fonts (no weight array).
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://autosmartweb.cz";

const rootTitle =
  "Autosmartweby.cz | Profesionální weby pro živnostníky a malé firmy";
const rootDescription =
  "Dostupné weby pro živnostníky, řemeslníky a malé firmy. Pomůžeme s texty, strukturou, základním SEO a spuštěním. Jasná cena a jednoduchý proces.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: rootTitle,
  description: rootDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: rootTitle,
    description: rootDescription,
    url: "/",
    siteName: "Autosmartweby",
    locale: "cs_CZ",
    type: "website",
    // og:image, twitter:image are auto-discovered from
    // src/app/opengraph-image.tsx / twitter-image.tsx.
  },
  // Favicon + apple touch icon are auto-discovered from src/app/icon.tsx and
  // src/app/apple-icon.tsx (white logo mark on a brand-blue tile). The legacy
  // public/favicon.ico is kept as a static fallback but no longer linked.
  twitter: {
    card: "summary_large_image",
    title: rootTitle,
    description: rootDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs-CZ"
      className={`${montserrat.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-[var(--brand)] focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Přeskočit na obsah
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://autosmartweb.cz/#organization",
                  name: "Autosmartweby",
                  legalName: "Synkedo s.r.o.",
                  url: "https://autosmartweb.cz",
                  logo: "https://autosmartweb.cz/logo.svg",
                  email: "info@autosmartweb.cz",
                  telephone: "+420722525872",
                  sameAs: [],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://autosmartweb.cz/#localbusiness",
                  name: "Autosmartweby (Synkedo s.r.o.)",
                  url: "https://autosmartweb.cz",
                  telephone: "+420722525872",
                  email: "info@autosmartweb.cz",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Příčná 1892/4",
                    addressLocality: "Praha 1",
                    postalCode: "110 00",
                    addressCountry: "CZ",
                  },
                  parentOrganization: {
                    "@id": "https://autosmartweb.cz/#organization",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://autosmartweb.cz/#website",
                  url: "https://autosmartweb.cz",
                  name: "Autosmartweby",
                  inLanguage: "cs-CZ",
                  publisher: {
                    "@id": "https://autosmartweb.cz/#organization",
                  },
                },
              ],
            }),
          }}
        />
        <AnalyticsEvents />
        <EngagementSignals />
        {children}
        <ConsentBanner />
      </body>
      <AnalyticsGate />
    </html>
  );
}
