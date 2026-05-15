"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navV0, siteContact } from "@/data/siteContent";
import { MenuIcon, CloseIcon } from "./icons";

/**
 * v0 floating dark navbar (Commit 3 of v0 redesign).
 *
 * Sticky pill that floats away from the page edges. The outer <header>
 * carries .asw-v0-navbar-wrap (sticky, max-width centred) so it sits
 * directly under <body>; sticky positioning then works across the whole
 * page, not just inside the hero. The pill itself owns its dark
 * background — header is layout-only and transparent, so the navbar
 * looks correct on both the dark hero and the light sections below.
 *
 * Mobile (<768px): collapses to a brand mark + CTA + hamburger that
 * reveals .asw-v0-navbar-drawer below the pill.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#hero");

  // Reflect the URL hash in the active nav item so the user sees where
  // they are. A proper IntersectionObserver-based scroll-spy can land in
  // a follow-up commit; this keeps the active state honest at minimum.
  useEffect(() => {
    const updateHash = () => {
      if (typeof window !== "undefined" && window.location.hash) {
        setActiveHash(window.location.hash);
      }
    };
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Close mobile drawer on any outside click (incl. anchor navigation).
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  return (
    <header className="asw-v0-navbar-wrap">
      <nav className="asw-v0-navbar" aria-label="Hlavní navigace">
        <Link
          href="/"
          className="asw-v0-navbar-brand"
          aria-label={`${siteContact.brandName} — domů`}
        >
          <span className="asw-v0-navbar-brand-mark" aria-hidden="true">
            <Image
              src="/logo-on-dark.svg"
              alt=""
              width={22}
              height={23}
              priority
            />
          </span>
        </Link>

        <div className="asw-v0-navbar-links">
          {navV0.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="asw-v0-navbar-link"
              data-active={activeHash === link.href ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexShrink: 0,
          }}
        >
          <a
            href={navV0.ctaHref}
            className="asw-v0-navbar-cta"
            data-cta-label="navbar_primary"
            data-cta-location="navbar"
          >
            {navV0.ctaLabel}
          </a>

          <button
            type="button"
            className="asw-v0-navbar-toggle"
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
      </nav>

      {open && (
        <div id="mobile-nav" className="asw-v0-navbar-drawer">
          {navV0.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="asw-v0-navbar-link"
              data-active={activeHash === link.href ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteContact.phoneHref}
            className="asw-v0-navbar-link"
            data-cta-label="mobile_phone"
            data-cta-location="navbar_mobile"
          >
            {siteContact.phone}
          </a>
        </div>
      )}
    </header>
  );
}
