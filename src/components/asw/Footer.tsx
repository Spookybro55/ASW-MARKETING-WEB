import Link from "next/link";
import Image from "next/image";
import { contact, footer } from "@/data/site";
import CookieSettingsLink from "@/components/site/CookieSettingsLink";

/*
 * Dark footer (#212121). Brand block + link columns + contact, then a bottom
 * strip with copyright, legal links and the cookie settings trigger. Real
 * company details (Synkedo s.r.o., IČO, address) per CLAUDE.md trust rules.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const copyright = footer.copyrightTemplate.replace("{year}", String(year));

  return (
    <footer className="border-t border-white/10 bg-bg-inverse text-foreground">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-extrabold">
              <Image
                src="/logo-mark.svg"
                alt=""
                width={26}
                height={26}
                aria-hidden="true"
              />
              <span className="uppercase tracking-tight">
                AUTO<span className="text-brand-light">SMART</span>WEB
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              {footer.description}
            </p>
            <p className="mt-5 text-xs leading-relaxed text-white/60">
              {contact.legalName} · IČO {contact.ico}
              <br />
              {contact.address.street}, {contact.address.zip}{" "}
              {contact.address.city}
            </p>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">
                {col.title}
              </h3>
              <ul role="list" className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">
              Kontakt
            </h3>
            <ul role="list" className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={contact.phoneHref}
                  className="text-white/65 transition-colors hover:text-white"
                >
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className="text-white/65 transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li className="text-white/60">{contact.region}</li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/12 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>{copyright}</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footer.legal.map((entry) => (
              <Link
                key={entry.href}
                href={entry.href}
                className="transition-colors hover:text-white"
              >
                {entry.label}
              </Link>
            ))}
            <CookieSettingsLink />
          </div>
        </div>
      </div>
    </footer>
  );
}
