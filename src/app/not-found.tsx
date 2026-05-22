import type { Metadata } from "next";
import Link from "next/link";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Stránka nenalezena – Autosmartweby",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#050B1F] text-white text-center"
      style={{ fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}
    >
      <div className="max-w-lg">
        <p className="text-sm font-semibold tracking-widest text-[#36E2A3] uppercase mb-4">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Tahle stránka tady není
        </h1>
        <p className="text-gray-400 mb-8 leading-7">
          Mohla být přesunuta, smazaná nebo jste se ke mně dostali přes
          starý odkaz. Vraťte se na úvod nebo nám napište — rádi pomůžeme.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#36E2A3] text-[#0A1629] font-semibold hover:opacity-90 transition"
          >
            Zpět na úvod
          </Link>
          <a
            href={`mailto:${contact.email}?subject=Hlas%C3%AD%C5%A1%20chybnou%20stranku`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition"
          >
            Napsat e-mail
          </a>
        </div>
      </div>
    </main>
  );
}
