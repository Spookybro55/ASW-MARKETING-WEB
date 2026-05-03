"use client";

import type { ClientBrief } from "@/templates/core/types";
import styles from "../styles.module.css";
import { telHref, mailHref } from "../utils";

function PhoneIcon() {
  return (
    <svg className={styles.contactCardIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.05l-2.2 2.17z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className={styles.contactCardIcon} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className={styles.contactCardIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22 2L11 13M22 2l-7 20-4-9-9-4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact({ brief }: { brief: ClientBrief }) {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <header className={`${styles.sectionHeading} ${styles.sectionHeadingLeft}`}>
          <h2>Máte dotaz nebo zakázku?</h2>
          <p>Ozvěte se nám, rádi vám pomůžeme</p>
        </header>
        <div className={styles.contactGrid}>
          <aside className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <PhoneIcon />
              <div>
                <h4>Telefon</h4>
                <a href={telHref(brief.phone)}>{brief.phone}</a>
                <span>Po–Pá 7:00–18:00</span>
              </div>
            </div>
            <div className={styles.contactCard}>
              <MailIcon />
              <div>
                <h4>E-mail</h4>
                <a href={mailHref(brief.email)}>{brief.email}</a>
                <span>Odpovídáme do 24 hodin</span>
              </div>
            </div>
            <div className={styles.contactCard}>
              <PinIcon />
              <div>
                <h4>Adresa</h4>
                <span>{brief.city}</span>
              </div>
            </div>
          </aside>
          <form
            className={styles.contactForm}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Pro rychlý kontakt použijte telefonní číslo nebo email.");
            }}
            aria-label="Poptávkový formulář"
          >
            <h3>Poptávkový formulář</h3>
            <label className={styles.field}>
              <span>Jméno a příjmení</span>
              <input type="text" name="name" placeholder="Vaše jméno" />
            </label>
            <label className={styles.field}>
              <span>Telefon</span>
              <input type="tel" name="phone" placeholder={brief.phone} />
            </label>
            <label className={styles.field}>
              <span>E-mail</span>
              <input type="email" name="email" placeholder="vas@email.cz" />
            </label>
            <label className={styles.field}>
              <span>Zpráva</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Popište, co potřebujete vyřešit…"
              />
            </label>
            <button
              type="submit"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.btnFull} ${styles.btnLg}`}
            >
              <SendIcon />
              Odeslat poptávku
            </button>
            <p className={styles.formNote}>
              Odesláním souhlasíte se zpracováním osobních údajů za účelem odpovědi.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
