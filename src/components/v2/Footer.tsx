import Link from "next/link";
import Image from "next/image";
import { footer, siteContact } from "@/data/siteContent";

// Footer link columns are owned by Footer in Commit 3. The historical
// `footer.columns` export in siteContent.ts stays unused for now and
// will be reconciled in a later cleanup commit. Kept intentionally
// minimal: direct contact + privacy. No fake social profiles, no
// /obchodni-podminky link until a real page exists.
const COLUMNS = [
  {
    title: "Kontakt",
    links: [
      { href: "tel:+420722525872", label: "+420 722 525 872" },
      { href: "mailto:tomas@autosmartweb.cz", label: "tomas@autosmartweb.cz" },
    ],
  },
  {
    title: "Právní",
    links: [
      {
        href: "/zasady-ochrany-osobnich-udaju",
        label: "Zásady ochrany osobních údajů",
      },
    ],
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="section-inverse"
      style={{ paddingTop: "4.5rem", paddingBottom: "2.5rem" }}
    >
      <div className="container-wide px-5">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <Image
                src="/logo-on-dark.svg"
                alt=""
                width={28}
                height={29}
              />
              <span
                className="text-lg"
                style={{ letterSpacing: "0.04em", textTransform: "uppercase" }}
              >
                {siteContact.brandName}
              </span>
            </div>
            <p
              className="mt-3 text-sm"
              style={{ color: "rgba(245,248,255,0.72)", maxWidth: "32ch" }}
            >
              {footer.description}
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div
                className="text-xs font-semibold tracking-wider uppercase"
                style={{ color: "rgba(245,248,255,0.55)" }}
              >
                {col.title}
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors"
                        style={{ color: "rgba(245,248,255,0.85)" }}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="hover:text-white transition-colors"
                        style={{ color: "rgba(245,248,255,0.85)" }}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs"
          style={{
            borderTop: "1px solid rgba(245,248,255,0.12)",
            color: "rgba(245,248,255,0.55)",
          }}
        >
          <div>
            {/* IČO carried over from /zasady-ochrany-osobnich-udaju via
                siteContact.ico — TODO(owner): verify in ARES before launch. */}
            © {year} {siteContact.legalName} — IČO {siteContact.ico} ·{" "}
            {siteContact.address.street}, {siteContact.address.zip}{" "}
            {siteContact.address.city}
          </div>
          <div>
            {siteContact.brandName} je obchodní označení {siteContact.legalName}.
          </div>
        </div>
      </div>
    </footer>
  );
}
