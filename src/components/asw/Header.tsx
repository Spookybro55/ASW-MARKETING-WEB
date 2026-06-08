"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/data/site";
import { Button } from "./Button";
import { MenuIcon, CloseIcon } from "./icons";

/*
 * Shared header with two variants:
 *   - "dark"  → floating glass pill, absolutely positioned over the dark
 *               homepage hero. Light text, centered nav, blue CTA.
 *   - "light" → sticky white header for the light detail pages.
 * Both share nav data, the mobile drawer and active-route logic.
 */
export default function Header({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isDark = variant === "dark";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const Brand = (
    <Link
      href="/"
      className={`flex items-center gap-2 font-display font-extrabold tracking-tight ${
        isDark ? "text-white" : "text-foreground"
      }`}
      aria-label={`${nav.brand} — domů`}
    >
      <Image src="/logo-mark.svg" alt="" width={29} height={29} priority />
      <span className="text-[1.05rem] uppercase tracking-tight">
        AUTO<span className="text-brand-light">SMART</span>WEB
      </span>
    </Link>
  );

  const Toggle = (
    <button
      type="button"
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden ${
        isDark
          ? "border-white/15 text-white"
          : "border-border text-foreground"
      }`}
      aria-expanded={open}
      aria-controls="mobile-nav"
      aria-label={open ? "Zavřít menu" : "Otevřít menu"}
      onClick={() => setOpen((v) => !v)}
    >
      {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
    </button>
  );

  // ── Dark floating pill ────────────────────────────────────────────────
  if (isDark) {
    return (
      <header className="absolute inset-x-0 top-4 z-50 px-4 sm:top-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.06] py-2 pl-5 pr-2 shadow-lg shadow-black/30 ring-1 ring-inset ring-white/5 backdrop-blur-md">
          {Brand}
          <nav
            className="hidden flex-1 items-center justify-center gap-0.5 lg:flex"
            aria-label="Hlavní navigace"
          >
            {nav.items.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-white/10 text-white ring-1 ring-inset ring-white/15"
                      : "text-white/65 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button href={nav.cta.href} size="md" ctaLabel="header" ctaLocation="header">
                {nav.cta.label}
              </Button>
            </div>
            {Toggle}
          </div>
        </div>

        {open && (
          <div
            id="mobile-nav"
            onClick={() => setOpen(false)}
            className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/10 bg-[#0B1220]/95 p-3 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobilní navigace">
              {nav.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-lg px-3 py-2.5 text-base font-medium ${
                    isActive(item.href)
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2">
                <Button
                  href={nav.cta.href}
                  ctaLabel="header_mobile"
                  ctaLocation="header_mobile"
                  className="w-full"
                >
                  {nav.cta.label}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    );
  }

  // ── Light sticky header ───────────────────────────────────────────────
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070D]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        {Brand}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hlavní navigace">
          {nav.items.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-lg px-3 py-2 text-[0.95rem] font-medium transition-colors ${
                  active
                    ? "bg-white/10 text-white ring-1 ring-inset ring-white/15"
                    : "text-white/65 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button href={nav.cta.href} size="md" ctaLabel="header" ctaLocation="header">
              {nav.cta.label}
            </Button>
          </div>
          {Toggle}
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          onClick={() => setOpen(false)}
          className="border-t border-white/10 bg-[#05070D] px-5 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobilní navigace">
            {nav.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-2.5 text-base font-medium ${
                  isActive(item.href)
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2">
              <Button
                href={nav.cta.href}
                ctaLabel="header_mobile"
                ctaLocation="header_mobile"
                className="w-full"
              >
                {nav.cta.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
