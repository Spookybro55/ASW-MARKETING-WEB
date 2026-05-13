"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { siteContact } from "@/data/siteContent";
import { PhoneIcon, MenuIcon, CloseIcon } from "./icons";

// Navigation links are owned by Navbar in Commit 3. The historical
// `nav.links` export in siteContent.ts stays unused for now and will be
// reconciled in a later cleanup commit. Anchor targets correspond to
// section ids in the v2 components that ship in later commits.
const NAV_LINKS = [
  { href: "#jak-to-probiha", label: "Jak to funguje" },
  { href: "#sluzby", label: "Co dostanete" },
  { href: "#cenik", label: "Cena" },
  { href: "#ukazky", label: "Ukázky" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

const PRIMARY_CTA = {
  label: "Chci nezávazně zjistit cenu",
  href: "#kontakt",
} as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when user clicks anywhere (including a nav anchor).
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.85)",
        backdropFilter: "saturate(180%) blur(12px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "border-color 0.2s ease, background-color 0.2s ease",
      }}
    >
      <div className="container-wide flex items-center justify-between gap-6 px-5 py-3 md:py-4 xl:py-4">
        <Link
          href="/"
          className="flex flex-shrink-0 items-center gap-2.5 whitespace-nowrap font-bold tracking-tight"
          style={{ color: "var(--fg)" }}
          aria-label={`${siteContact.brandName} — domů`}
        >
          <Image
            src="/logo.svg"
            alt=""
            width={40}
            height={41}
            priority
            className="h-7 w-auto md:h-8 xl:h-9"
          />
          <span
            className="text-sm md:text-base xl:text-xl"
            style={{ letterSpacing: "0.04em", textTransform: "uppercase" }}
          >
            {/* Wordmark split into Auto + smart + weby so SMART can wear the
                brand colour while the whole thing still reads as one word. */}
            <span>{siteContact.brandName.slice(0, 4)}</span>
            <span style={{ color: "var(--brand)", fontWeight: 800 }}>
              {siteContact.brandName.slice(4, 9)}
            </span>
            <span>{siteContact.brandName.slice(9)}</span>
          </span>
        </Link>

        <nav
          className="hidden xl:flex items-center gap-7 text-[0.95rem]"
          aria-label="Hlavní navigace"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="muted whitespace-nowrap hover:text-[var(--fg)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3">
          <a
            href={siteContact.phoneHref}
            className="btn btn-ghost"
            data-cta-label="navbar_phone"
            data-cta-location="navbar"
            aria-label={`Zavolat — ${siteContact.phone}`}
          >
            <PhoneIcon className="h-4 w-4" />
            <span>{siteContact.phone}</span>
          </a>
          <a
            href={PRIMARY_CTA.href}
            className="btn btn-primary"
            data-cta-label="navbar_primary"
            data-cta-location="navbar"
          >
            {PRIMARY_CTA.label}
          </a>
        </div>

        {/* Wrapper carries the xl:hidden rule so the .btn display:inline-flex
            on the inner button cannot override it via cascade specificity. */}
        <div className="xl:hidden">
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => !v);
            }}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="xl:hidden border-t"
          style={{ borderColor: "var(--border)", background: "white" }}
        >
          <div className="container-wide px-5 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="py-2 muted">
                {link.label}
              </a>
            ))}
            <a
              href={siteContact.phoneHref}
              className="btn btn-secondary mt-2"
              data-cta-label="mobile_phone"
              data-cta-location="navbar_mobile"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>{siteContact.phone}</span>
            </a>
            <a
              href={PRIMARY_CTA.href}
              className="btn btn-primary"
              data-cta-label="mobile_primary"
              data-cta-location="navbar_mobile"
            >
              {PRIMARY_CTA.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
