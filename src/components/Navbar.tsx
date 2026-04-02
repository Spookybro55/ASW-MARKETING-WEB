import { homepageData } from "@/data/homepage";

export default function Navbar() {
  const primaryContact = homepageData.contactInfo.people[0];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-[#050B1F]/80 border-b border-white/10">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <a href="/" className="text-lg font-bold tracking-tight text-white">
          Auto<span style={{ color: "var(--brand)" }}>smart</span>weby
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#services" className="hover:text-white transition">Služby</a>
          <a href="#pricing" className="hover:text-white transition">Ceník</a>
          <a href="#process" className="hover:text-white transition">Jak to funguje</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${primaryContact.email}`}
            className="hidden md:inline-flex secondary-button text-sm px-5 py-2.5"
          >
            Napsat e-mail
          </a>
          <a
            href={`tel:${primaryContact.phone.replace(/\s+/g, "")}`}
            className="primary-button text-sm px-5 py-2.5"
          >
            Zavolat
          </a>
        </div>
      </div>
    </nav>
  );
}
