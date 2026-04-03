import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AudienceSection from "@/components/AudienceSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import ContactCtaSection from "@/components/ContactCtaSection";

function ProofStrip() {
  const items = [
    { value: "3–5 dní", label: "průměrná doba dodání webu" },
    { value: "100 %", label: "platba až po spokojenosti" },
    { value: "0 Kč", label: "za úvodní konzultaci" },
  ];

  return (
    <section className="px-6 py-14 md:py-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">
          {items.map((item) => (
            <div key={item.label}>
              <div className="text-2xl font-bold text-white md:text-3xl">{item.value}</div>
              <div className="mt-1 text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="main" className="bg-[#050B1F] text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#36E2A3]/10 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Navbar />
      <HeroSection />
      <AudienceSection />
      <ServicesSection />
      <ProofStrip />
      <PricingSection />
      <ProcessSection />
      <ContactCtaSection />

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-400">
        <div className="mx-auto max-w-6xl space-y-2">
          <div>© {new Date().getFullYear()} Synkedo s.r.o. Všechna práva vyhrazena.</div>
          <div>
            <a
              href="/zasady-ochrany-osobnich-udaju"
              className="underline underline-offset-2 transition hover:text-white"
            >
              Zásady ochrany osobních údajů
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
