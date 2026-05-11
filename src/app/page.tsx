const audience = [
  "živnostníky a OSVČ",
  "řemeslníky a montážníky",
  "lokální služby a provozovny",
  "malé firmy bez marketingového týmu",
];

const deliverables = [
  "návrh struktury podle vašeho oboru",
  "pomoc se základními texty bez marketingové vaty",
  "responzivní web pro mobil i počítač",
  "kontaktní formulář, telefon a jasné CTA",
  "základní SEO nastavení pro služby a lokalitu",
  "spuštění, napojení domény a férové předání",
];

const packages = [
  {
    name: "Start web",
    price: "od 10 000 Kč",
    text: "Pro živnostníka, který potřebuje důvěryhodnou prezentaci a jednoduchou cestu ke kontaktu.",
    items: ["1 stránka nebo menší web", "základní textová pomoc", "mobilní zobrazení", "kontakt a SEO základ"],
  },
  {
    name: "Lokální web",
    price: "15 000–25 000 Kč",
    text: "Nejčastější volba pro službu nebo řemeslo, které chce jasně ukázat nabídku, lokality a reference.",
    items: ["více sekcí nebo podstránek", "služby, FAQ a reference", "lokální SEO základ", "jasná poptávková cesta"],
    highlighted: true,
  },
  {
    name: "Web + chytrý proces",
    price: "25 000–45 000 Kč",
    text: "Pro firmy, které chtějí k webu přidat formulář, automatickou odpověď, rezervaci nebo jednoduchý CRM zápis.",
    items: ["web + rozšíření", "automatická odpověď", "poptávkový formulář", "praktická úspora času"],
  },
];

const faqs = [
  ["Kolik web stojí?", "Menší weby pro živnostníky a malé firmy se obvykle pohybují kolem 10 000 Kč. Přesnou cenu řekneme po krátkém zjištění potřeb a vždy předem vysvětlíme, co je v ceně."],
  ["Co když nemám texty?", "Nevadí. Zeptáme se vás na služby, zákazníky, lokalitu a časté otázky. Z toho připravíme srozumitelný základ webu."],
  ["Co když nemám fotky?", "Můžeme začít i bez nich. Doporučíme, jaké fotky dodat, případně připravíme dočasné realistické vizuály a později je vyměníme."],
  ["Budu web vlastnit?", "Model vlastnictví, domény, hostingu a přístupů si řekneme předem. Cílem není držet klienta jako rukojmí."],
  ["Děláte i SEO?", "Ano, základní SEO struktura je součástí nabídky. Neslibujeme garantované pozice, ale připravíme web tak, aby lidé i vyhledávače dobře pochopili služby a lokalitu."],
  ["Musím platit měsíční paušál?", "Žádné skryté paušály. Provozní náklady, hosting, doménu a případnou péči po spuštění vysvětlíme předem."],
];

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.25-3.25a1 1 0 111.42-1.42l2.54 2.54 6.54-6.54a1 1 0 011.42 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="main" className="bg-[#f7f4ee] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f4ee]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3 font-bold tracking-tight">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-lg text-white">AS</span>
            <span>Autosmartweby</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
            <a href="#proces" className="hover:text-slate-950">Jak to funguje</a>
            <a href="#cena" className="hover:text-slate-950">Cena</a>
            <a href="#ukazky" className="hover:text-slate-950">Ukázky</a>
            <a href="#faq" className="hover:text-slate-950">FAQ</a>
          </nav>
          <a href="tel:+420601557018" className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800">
            Zavolat
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
              Weby pro živnostníky, řemeslníky a malé firmy
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-7xl">
              Profesionální web bez zbytečných starostí.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              Pomůžeme vám s obsahem, strukturou i spuštěním webu, který působí důvěryhodně, funguje na mobilu a zákazníkům usnadní ozvat se. Nejčastěji od 10 000 Kč podle rozsahu.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#kontakt" className="rounded-full bg-emerald-600 px-6 py-3 text-center font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700">
                Chci nezávazně zjistit cenu
              </a>
              <a href="#proces" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-bold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-500">
                Podívat se, jak to funguje
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-600">Nemusíte mít hotové texty ani přesné zadání. Stačí pár informací o vaší službě.</p>
          </div>

          <div className="rounded-[2rem] border border-white bg-white/80 p-4 shadow-2xl shadow-slate-900/10">
            <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="font-bold">Ukázka struktury webu</div>
                <div className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-200">mobile-first</div>
              </div>
              <div className="space-y-4">
                {["Jasně vysvětlená služba", "Viditelné kontakty", "Reference a důvěra", "Cena a rozsah předem"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-400" />{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-6 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 text-sm font-semibold text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
          {['Jasná cena předem', 'Pomoc s texty', 'Web pod vaší kontrolou', 'Bez agenturního žargonu'].map((item) => (
            <div key={item} className="flex items-center gap-2"><CheckIcon />{item}</div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold text-emerald-700">Pro koho to je</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Pro malé podnikatele, kteří potřebují konečně vyřešit web.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {audience.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 h-10 w-10 rounded-2xl bg-emerald-100" />
                <h3 className="text-lg font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proces" className="bg-slate-950 px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-emerald-300">Jednoduchý proces</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">Žádné složité zadání. Provedeme vás krok za krokem.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["1", "Řeknete nám, co děláte", "Krátce zjistíme služby, lokalitu, zákazníky a cíl webu. Marketingově psát nemusíte."],
              ["2", "Připravíme strukturu a obsah", "Navrhneme, jak web poskládat, co má říkat a jak má vést návštěvníka ke kontaktu."],
              ["3", "Spustíme web po odsouhlasení", "Doladíme úpravy, napojíme doménu a vysvětlíme, co bude dál po spuštění."],
            ].map(([num, title, text]) => (
              <div key={num} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 font-black text-slate-950">{num}</div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-bold text-emerald-700">Co dostanete</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Ne jen hezký obrázek. Praktický web připravený na poptávky.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">Stavíme na ověřené struktuře, kterou upravíme podle vašeho oboru. Díky tomu je proces rychlý, čitelný a cenově dostupný.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><CheckIcon /><span className="font-semibold text-slate-800">{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="cena" className="bg-white px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold text-emerald-700">Cena a rozsah</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Dostupné neznamená odfláknuté.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">Cena je dostupná díky ověřenému postupu, ne díky anonymní šabloně. Finální rozsah a cenu vždy potvrdíme předem.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`rounded-[2rem] border p-7 ${pkg.highlighted ? 'border-emerald-500 bg-emerald-50 shadow-xl shadow-emerald-600/10' : 'border-slate-200 bg-[#f7f4ee]'}`}>
                {pkg.highlighted && <div className="mb-4 inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">Doporučená volba</div>}
                <h3 className="text-2xl font-black">{pkg.name}</h3>
                <div className="mt-3 text-3xl font-black text-emerald-700">{pkg.price}</div>
                <p className="mt-4 leading-7 text-slate-700">{pkg.text}</p>
                <ul className="mt-6 space-y-3">
                  {pkg.items.map((item) => <li key={item} className="flex gap-2 text-sm font-semibold text-slate-800"><CheckIcon />{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ukazky" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold text-emerald-700">Ukázky a důvěra</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">Web musí působit reálně, ne jako generická šablona.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Řemeslník", "Lokální služba", "Malá firma"].map((item) => (
              <div key={item} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-slate-900 to-slate-700 p-5 text-white">
                  <div className="h-3 w-24 rounded-full bg-emerald-300" />
                  <div className="mt-8 h-8 w-3/4 rounded-xl bg-white/80" />
                  <div className="mt-4 h-3 w-full rounded-full bg-white/30" />
                  <div className="mt-2 h-3 w-2/3 rounded-full bg-white/30" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Web pro obor: {item}</h3>
                <p className="mt-2 text-slate-600">Připraveno pro ukázku oborového řešení: služby, důvěra, reference, kontakt a lokální dohledatelnost.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-3xl font-black tracking-tight md:text-5xl">Praktická cesta mezi DIY editorem a drahou agenturou.</h2>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10">
            {[['DIY editor', 'Levný začátek, ale texty, strukturu, důvěru i techniku řešíte sami.'], ['Drahá agentura', 'Silný tým a custom výstup, ale často vysoká cena, dlouhý proces a zbytečná složitost.'], ['Autosmartweby', 'Ověřený postup, pomoc s obsahem, jasná cena a profesionální výsledek bez agenturního projektu.']].map(([name, text]) => (
              <div key={name} className="grid gap-3 border-b border-white/10 p-6 last:border-b-0 md:grid-cols-[220px_1fr]">
                <div className="font-black text-emerald-300">{name}</div>
                <div className="text-slate-300">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="font-bold text-emerald-700">Časté otázky</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Věci, které je lepší vědět předem.</h2>
          <div className="mt-10 divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group p-6 open:bg-emerald-50/40">
                <summary className="cursor-pointer list-none text-lg font-bold">{question}</summary>
                <p className="mt-3 leading-7 text-slate-700">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="px-5 pb-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-900/10 md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="font-bold text-emerald-700">Nezávazný první krok</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">Napište pár vět. Řekneme vám na rovinu, co dává smysl.</h2>
            <p className="mt-5 leading-8 text-slate-700">Po odeslání se ozveme s doplňujícími otázkami nebo orientačním návrhem dalšího postupu. Nejde o závaznou objednávku.</p>
            <div className="mt-6 space-y-2 text-slate-700">
              <a href="tel:+420601557018" className="block font-bold hover:text-emerald-700">+420 601 557 018</a>
              <a href="mailto:sebastian@autosmartweb.cz" className="block font-bold hover:text-emerald-700">sebastian@autosmartweb.cz</a>
            </div>
          </div>
          <form action="/api/contact" method="post" className="grid gap-4">
            <label className="grid gap-2 text-sm font-bold">Jméno<input name="name" required className="rounded-2xl border border-slate-300 px-4 py-3 font-normal" /></label>
            <label className="grid gap-2 text-sm font-bold">E-mail nebo telefon<input name="contact" required className="rounded-2xl border border-slate-300 px-4 py-3 font-normal" /></label>
            <label className="grid gap-2 text-sm font-bold">Obor / firma<input name="company" className="rounded-2xl border border-slate-300 px-4 py-3 font-normal" placeholder="např. elektrikář, salon, servis" /></label>
            <label className="grid gap-2 text-sm font-bold">Co potřebujete?<textarea name="message" required rows={5} className="rounded-2xl border border-slate-300 px-4 py-3 font-normal" placeholder="Stačí jednoduše: co děláte, jestli máte web a co má nový web řešit." /></label>
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" />
            <button className="rounded-full bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700">Poslat nezávaznou poptávku</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 px-5 py-10 text-slate-300 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-xl font-black text-white">Autosmartweby</div>
            <p className="mt-3 max-w-xl leading-7">Profesionální weby pro malé firmy bez zbytečných starostí. Jasná cena, lidský proces a důvěryhodný výsledek.</p>
          </div>
          <div>
            <div className="font-bold text-white">Kontakt</div>
            <a href="tel:+420601557018" className="mt-3 block hover:text-white">+420 601 557 018</a>
            <a href="mailto:sebastian@autosmartweb.cz" className="mt-2 block hover:text-white">sebastian@autosmartweb.cz</a>
          </div>
          <div>
            <div className="font-bold text-white">Firma</div>
            <p className="mt-3">Synkedo s.r.o.</p>
            <p>IČO a fakturační údaje doplnit podle finálních podkladů.</p>
            <a href="/zasady-ochrany-osobnich-udaju" className="mt-2 block underline underline-offset-4">Ochrana osobních údajů</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
