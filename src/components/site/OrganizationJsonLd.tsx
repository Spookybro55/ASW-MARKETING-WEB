"use client";

import { usePathname } from "next/navigation";
import { contact } from "@/data/site";
import { isPreviewPath } from "@/lib/preview-routes";

/**
 * Organization / LocalBusiness / WebSite structured data pro AutoSmartweby.
 *
 * Dříve renderováno inline v root layoutu. Vyčleněno do klientské komponenty,
 * aby šlo přes `usePathname()` vynechat na klientských preview routách
 * (viz `isPreviewPath`) — tam patří klientovi, ne AutoSmartweby.
 *
 * SSR-safe: `usePathname` se renderuje do HTML už při initial loadu (projekt
 * nemá rewrites/proxy → žádný hydration mismatch), takže na reálných stránkách
 * (/, /cenik, …) zůstává JSON-LD v prerenderovaném HTML beze změny. Na preview
 * routě se vrací null.
 */
export default function OrganizationJsonLd() {
  const pathname = usePathname();
  if (isPreviewPath(pathname)) return null;

  // Normalizované E.164-style číslo pro schema.org telephone (bez mezer).
  const telephone = contact.phone.replace(/\s+/g, "");

  return (
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
              legalName: contact.legalName,
              url: "https://autosmartweb.cz",
              logo: "https://autosmartweb.cz/icon-512x512.png",
              email: contact.email,
              telephone,
              sameAs: [],
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://autosmartweb.cz/#localbusiness",
              name: `Autosmartweby (${contact.legalName})`,
              url: "https://autosmartweb.cz",
              telephone,
              email: contact.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: contact.address.street,
                addressLocality: contact.address.city,
                postalCode: contact.address.zip,
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
  );
}
