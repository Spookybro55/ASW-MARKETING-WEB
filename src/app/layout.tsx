import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      lang="cs"
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
              "@type": "LocalBusiness",
              name: "Autosmartweby (Synkedo s.r.o.)",
              url: "https://autosmartweb.cz",
              telephone: "+420601557018",
              email: "sebastian@autosmartweb.cz",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Příčná 1892/4",
                addressLocality: "Praha 1",
                postalCode: "110 00",
                addressCountry: "CZ",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
