import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import EngagementSignals from "@/components/EngagementSignals";
import AnalyticsGate from "@/components/site/AnalyticsGate";
import ConsentBanner from "@/components/site/ConsentBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Autosmartweby — weby pro živnostníky a malé firmy",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: rootTitle,
    description: rootDescription,
    images: ["/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-[var(--brand)] focus:text-black focus:rounded-lg focus:font-semibold"
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
                  logo: "https://autosmartweb.cz/og-image.png",
                  email: "sebastian@autosmartweb.cz",
                  telephone: "+420722525872",
                  sameAs: [],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://autosmartweb.cz/#localbusiness",
                  name: "Autosmartweby (Synkedo s.r.o.)",
                  url: "https://autosmartweb.cz",
                  telephone: "+420722525872",
                  email: "sebastian@autosmartweb.cz",
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
