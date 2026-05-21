import type { Metadata } from "next";
import Header from "@/components/asw/Header";
import Footer from "@/components/asw/Footer";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů — Autosmartweby",
  description:
    "Jak nakládáme s údaji z kontaktního formuláře, jak funguje souhlas s analytikou a jak svou volbu kdykoli změnit.",
  alternates: {
    canonical: "/zasady-ochrany-osobnich-udaju",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Privacy policy — changes very rarely (legal updates). 24h ISR.
export const revalidate = 86400;

const PRIVACY_CONTACT = contact.email; // info@ general
const HUMAN_CONTACT = contact.email; // info@ general

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="section" style={{ background: "var(--bg)" }}>
        <article
          style={{
            maxWidth: "44rem",
            margin: "0 auto",
            color: "var(--fg)",
          }}
        >
          <p
            style={{
              color: "var(--fg-muted)",
              fontSize: "0.9rem",
              marginBottom: "0.5rem",
            }}
          >
            Aktualizováno: květen 2026
          </p>
          <h1
            style={{
              fontSize: "2.1rem",
              lineHeight: 1.2,
              fontWeight: 700,
              margin: "0 0 1.5rem",
            }}
          >
            Zásady ochrany osobních údajů
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--fg-muted)" }}>
            Tato stránka popisuje, jak nakládáme s údaji, které nám pošlete přes
            kontaktní formulář, a jak fungují cookies a podobné technologie na
            webu autosmartweb.cz. Píšeme to lidsky a snažíme se nepřehánět —
            pokud cokoli nedává smysl, napište nám.
          </p>

          <Section title="1. Kdo je správce">
            <p>
              Správcem osobních údajů je{" "}
              <strong>{contact.legalName}</strong>, se sídlem{" "}
              {contact.address.street}, {contact.address.zip}{" "}
              {contact.address.city}, IČO {contact.ico}. {" "}
              {contact.brandName} je obchodní označení této společnosti.
            </p>
            <p>
              Ve věcech ochrany osobních údajů nás zastihnete na{" "}
              <a
                href={`mailto:${PRIVACY_CONTACT}`}
                style={linkStyle}
              >
                {PRIVACY_CONTACT}
              </a>
              . Pro běžnou poptávku služeb pište na{" "}
              <a
                href={`mailto:${HUMAN_CONTACT}`}
                style={linkStyle}
              >
                {HUMAN_CONTACT}
              </a>
              .
            </p>
          </Section>

          <Section title="2. Údaje z kontaktního formuláře">
            <p>
              Když vyplníte kontaktní formulář na hlavní stránce, posíláte nám
              tyto údaje:
            </p>
            <ul style={listStyle}>
              <li>jméno,</li>
              <li>e-mail,</li>
              <li>telefon (nepovinné),</li>
              <li>obor / čím se zabýváte (nepovinné),</li>
              <li>text vaší zprávy.</li>
            </ul>
            <p>
              <strong>Účel:</strong> reagovat na vaši poptávku a domluvit se na
              dalším postupu. Údaje nepoužíváme k marketingu ani je nepředáváme
              třetím stranám pro jejich vlastní účely.
            </p>
            <p>
              <strong>Právní základ:</strong> jednání o smlouvě, popřípadě náš
              oprávněný zájem na zodpovězení vaší poptávky (čl. 6 odst. 1 písm.
              b) a f) GDPR).
            </p>
            <p>
              <strong>Zpracovatel:</strong> formulář předá obsah na náš firemní
              e-mail prostřednictvím služby{" "}
              <a
                href="https://resend.com/legal"
                rel="noopener noreferrer"
                target="_blank"
                style={linkStyle}
              >
                Resend
              </a>{" "}
              (Resend, Inc., provozující transakční odesílání e-mailů). Mimo
              tento přenos nevedeme žádnou samostatnou databázi poptávek.
            </p>
            <p>
              <strong>Bezpečnost:</strong> formulář má serverovou validaci,
              skrytou kontrolu proti botům (honeypot) a základní omezení počtu
              odeslání ze stejné IP adresy v krátkém čase. Cílem je
              minimalizovat spam.
            </p>
            <p>
              <strong>Doba uchování:</strong> e-maily s poptávkou si necháváme
              po dobu potřebnou k vyřízení vašeho dotazu a navazující
              komunikace, případně po dobu vyžadovanou právními předpisy. Pokud
              chcete, abychom konkrétní e-mail dříve smazali, dejte nám vědět.
            </p>
          </Section>

          <Section title="3. Nezbytné technické úložiště">
            <p>
              Pro fungování webu používáme základní technické úložiště
              v prohlížeči — konkrétně klíč{" "}
              <code style={codeStyle}>asw_cookie_consent</code> v{" "}
              <em>localStorage</em>.
            </p>
            <ul style={listStyle}>
              <li>
                Možné hodnoty: <code style={codeStyle}>analytics_granted</code>{" "}
                (povolili jste analytiku) nebo{" "}
                <code style={codeStyle}>essential_only</code> (chcete jen
                nezbytné).
              </li>
              <li>
                Účel: zapamatovat si vaši volbu, abychom vám neukazovali stejnou
                cookie lištu pořád dokola.
              </li>
              <li>
                Bez této položky se vám banner se souhlasem zobrazoval znovu při
                každé návštěvě.
              </li>
            </ul>
            <p>
              Tato volba samotná neobsahuje žádné údaje, podle kterých by vás
              šlo identifikovat.
            </p>
          </Section>

          <Section title="4. Google Analytics 4 (jen po vašem souhlasu)">
            <p>
              Pokud kliknete na „Povolit analytiku“ v cookie liště, načteme
              Google Analytics 4. Měření používáme jen k souhrnnému přehledu —
              kolik lidí web navštíví, které stránky si lidé prohlédnou a kde
              odcházejí. Pomáhá nám to web zlepšovat.
            </p>
            <ul style={listStyle}>
              <li>Měřící ID: <code style={codeStyle}>G-E2WG8LP9DV</code>.</li>
              <li>
                Po souhlasu může Google Analytics ukládat ve vašem prohlížeči
                vlastní analytické cookies (typicky <code style={codeStyle}>_ga</code>{" "}
                a další cookies začínající <code style={codeStyle}>_ga_</code>).
                Přesnou expiraci a aktuální seznam najdete v dokumentaci Google.
              </li>
              <li>
                Podle dokumentace Google Analytics 4 nejsou IP adresy v GA4
                logovány ani ukládány tak, jako to bylo v původním Universal
                Analytics. Nedáváme to jako právní záruku — informace pochází
                z oficiální dokumentace Google.
              </li>
              <li>Právní základ: váš souhlas.</li>
              <li>
                Bez souhlasu se Google Analytics na web vůbec nenačítá a žádné
                jeho cookies nevznikají.
              </li>
            </ul>
          </Section>

          <Section title="5. Hosting a technický provoz">
            <p>
              Web běží na hostingové infrastruktuře (aktuálně Vercel). Server
              při zpracování požadavku může technicky vidět IP adresu,
              uživatelského agenta a čas požadavku — to je standardní součást
              jakékoli komunikace přes internet a využíváme to pro dostupnost,
              bezpečnost a ochranu proti spamu.
            </p>
            <p>
              U kontaktního formuláře používáme IP adresu pouze dočasně,
              v paměti aplikace, pro krátkodobé omezení počtu odeslání. Tyto
              údaje neukládáme do trvalé databáze.
            </p>
          </Section>

          <Section title="6. Jak souhlas změnit nebo odvolat">
            <p>
              Svou volbu můžete kdykoli změnit — odkaz{" "}
              <strong>„Změnit nastavení cookies“</strong> najdete v patičce
              webu. Po kliknutí se objeví krátký panel s aktuální volbou a
              s tlačítky pro povolení nebo odmítnutí analytiky.
            </p>
            <p>
              Pokud analytiku odvoláte, nová měření se už nespustí. Některé
              cookies, které si Google Analytics dříve uložil ve vašem
              prohlížeči, mohou ještě po nějakou dobu existovat. Plně se změna
              projeví po obnovení stránky, případně po vypršení nebo ručním
              smazání cookies v nastavení prohlížeče.
            </p>
          </Section>

          <Section title="7. Vaše práva">
            <p>Ve vztahu k údajům, které o vás zpracováváme, máte právo:</p>
            <ul style={listStyle}>
              <li>požádat o přístup ke svým údajům,</li>
              <li>požádat o opravu nebo výmaz,</li>
              <li>požádat o omezení zpracování,</li>
              <li>vznést námitku proti zpracování,</li>
              <li>kdykoli odvolat souhlas s analytikou,</li>
              <li>
                podat stížnost u{" "}
                <a
                  href="https://uoou.gov.cz"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={linkStyle}
                >
                  Úřadu pro ochranu osobních údajů
                </a>
                .
              </li>
            </ul>
            <p>
              S žádostí se obraťte na{" "}
              <a href={`mailto:${PRIVACY_CONTACT}`} style={linkStyle}>
                {PRIVACY_CONTACT}
              </a>
              . Ozveme se obvykle do několika pracovních dnů.
            </p>
          </Section>

          <Section title="8. Kontakt">
            <p>
              Něco vám nesedí, něco není jasné, nebo si chcete jen ověřit, jak
              to máme nastavené? Napište nám. Píšeme zpátky lidsky.
            </p>
            <p>
              <a href={`mailto:${PRIVACY_CONTACT}`} style={linkStyle}>
                {PRIVACY_CONTACT}
              </a>
            </p>
          </Section>

          <p
            style={{
              marginTop: "3rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid var(--border)",
              color: "var(--fg-soft)",
              fontSize: "0.85rem",
            }}
          >
            Tento dokument upravujeme, když se mění to, co popisuje. Posledně
            jsme ho aktualizovali v květnu 2026.
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: "2.5rem" }}>
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          margin: "0 0 0.75rem",
          color: "var(--fg)",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.85rem",
          fontSize: "1rem",
          lineHeight: 1.65,
          color: "var(--fg)",
        }}
      >
        {children}
      </div>
    </section>
  );
}

const linkStyle: React.CSSProperties = {
  color: "var(--brand)",
  textDecoration: "underline",
  textUnderlineOffset: "0.2em",
};

const listStyle: React.CSSProperties = {
  margin: "0",
  paddingLeft: "1.2rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.35rem",
};

const codeStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono), ui-monospace, SFMono-Regular, monospace",
  fontSize: "0.92em",
  background: "var(--bg-muted)",
  padding: "0.1em 0.4em",
  borderRadius: "4px",
};
