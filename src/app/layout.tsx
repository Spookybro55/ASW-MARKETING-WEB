import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import AnalyticsEvents from "@/components/AnalyticsEvents";
import EngagementSignals from "@/components/EngagementSignals";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://autosmartweb.cz";

export const metadata: Metadata = {
  title: "Autosmartweby — Weby, automatizace a AI pro malé firmy",
  description:
    "Tvoříme profesionální weby, automatizace a AI řešení pro živnostníky a malé firmy. Rychle, férově a na klíč.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Autosmartweby — Weby, automatizace a AI pro malé firmy",
    description:
      "Tvoříme profesionální weby, automatizace a AI řešení pro živnostníky a malé firmy. Rychle, férově a na klíč.",
    url: siteUrl,
    siteName: "Autosmartweby",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Autosmartweby — Weby, automatizace a AI pro malé firmy",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autosmartweby — Weby, automatizace a AI pro malé firmy",
    description:
      "Tvoříme profesionální weby, automatizace a AI řešení pro živnostníky a malé firmy. Rychle, férově a na klíč.",
    images: [`${siteUrl}/og-image.png`],
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
      </body>
      <GoogleAnalytics gaId="G-E2WG8LP9DV" />
    </html>
  );
}
