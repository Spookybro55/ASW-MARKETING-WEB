import { CheckIcon } from "./icons";

const BUILD = {
  eyebrow: "Jak weby stavíme",
  title: "Nejen hezký web. Promyšlená stavba.",
  lead:
    "U každého webu řešíme, aby návštěvník rychle pochopil, co nabízíte, proč vám má věřit a jak se vám ozvat. Proto připravujeme strukturu, texty, mobilní zobrazení, kontaktní prvky i základní nastavení pro vyhledávače.",
  items: [
    {
      title: "Struktura stránky",
      text:
        "Návštěvník musí během chvíle pochopit, co děláte, pro koho, a co má udělat dál. Hlavní stránku skládáme jako přehledný příběh, ne jako sklad informací.",
    },
    {
      title: "Texty bez vaty",
      text:
        "Krátké odstavce, srozumitelný jazyk, žádné marketingové fráze. Pomůžeme texty sepsat z toho, co o své práci řeknete jednou větou.",
    },
    {
      title: "Mobil a rychlost",
      text:
        "Většina lidí web otevře v telefonu. Hlídáme, aby se načítal rychle, vypadal dobře a šel pohodlně použít palcem.",
    },
    {
      title: "Kontakt bez hledání",
      text:
        "Telefon, e-mail a formulář jsou dostupné z každé stránky. Kdo se chce ozvat, nemá hledat — má kliknout.",
    },
  ],
} as const;

export default function BuildQuality() {
  return (
    <section id="kvalita" className="section">
      <div className="container-wide px-5">
        <div className="max-w-[60ch]">
          <span className="eyebrow">{BUILD.eyebrow}</span>
          <h2 className="h2 mt-2">{BUILD.title}</h2>
          <p className="lead mt-4">{BUILD.lead}</p>
        </div>

        <ul className="mt-12 grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BUILD.items.map((item) => (
            <li
              key={item.title}
              className="card card-interactive"
              style={{ padding: "1.85rem", position: "relative" }}
            >
              <div
                aria-hidden="true"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "var(--brand-soft)",
                  color: "var(--brand)",
                  boxShadow: "0 0 0 6px rgba(10, 102, 255, 0.05)",
                }}
              >
                <CheckIcon style={{ width: "20px", height: "20px" }} />
              </div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--fg)",
                  margin: "1.1rem 0 0.55rem",
                  letterSpacing: "-0.005em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "var(--fg-muted)",
                  fontSize: "0.97rem",
                  lineHeight: 1.6,
                }}
              >
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
