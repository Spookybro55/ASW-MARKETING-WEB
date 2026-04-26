"use client";

import type { ClientBrief } from "@/templates/core/types";
import styles from "../styles.module.css";
import { telHref } from "../utils";

function PhoneIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
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

function ClockIcon() {
  return (
    <svg className={styles.contactCardIcon} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className={styles.contactCardIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function Contact({ brief }: { brief: ClientBrief }) {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <header className={styles.sectionHeading}>
          <h2>Kontaktujte nás</h2>
          <p>Volejte nonstop nebo nám napište</p>
        </header>
        <div className={styles.contactGrid}>
          <aside className={styles.contactInfo}>
            <div className={`${styles.contactCard} ${styles.contactCardRed}`}>
              <h3>Nonstop linka</h3>
              <a href={telHref(brief.phone)} className={styles.contactCardPhone}>
                <PhoneIcon />
                {brief.phone}
              </a>
              <p>Havárie? Volejte ihned. Jsme dostupní 24/7.</p>
            </div>
            <div className={styles.contactCard}>
              <MailIcon />
              <div>
                <h4>Email</h4>
                <p>{brief.email}</p>
              </div>
            </div>
            <div className={styles.contactCard}>
              <ClockIcon />
              <div>
                <h4>Provozní doba</h4>
                <p>
                  Nonstop linka
                  <br />
                  Dostupní každý den
                </p>
              </div>
            </div>
            <div className={styles.contactCard}>
              <PinIcon />
              <div>
                <h4>Oblast působení</h4>
                <p>
                  {brief.city} a okolí
                  <br />
                  Rychlý příjezd
                </p>
              </div>
            </div>
          </aside>
          <form
            className={styles.contactForm}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Pro rychlý kontakt použijte telefonní číslo nebo email.");
            }}
            aria-label="Napište nám"
          >
            <h3>Napište nám</h3>
            <label className={styles.field}>
              <span>Jméno *</span>
              <input type="text" name="name" required />
            </label>
            <label className={styles.field}>
              <span>Telefon *</span>
              <input type="tel" name="phone" required />
            </label>
            <label className={styles.field}>
              <span>Email</span>
              <input type="email" name="email" />
            </label>
            <label className={styles.field}>
              <span>Zpráva *</span>
              <textarea name="message" rows={5} required />
            </label>
            <button
              type="submit"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.btnFull}`}
            >
              ODESLAT ZPRÁVU
            </button>
            <p className={styles.formNote}>
              * Povinná pole. Vaše data budou použita pouze pro odpověď na dotaz.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
