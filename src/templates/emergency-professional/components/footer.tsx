import type { ClientBrief } from "@/templates/core/types";
import { EMERGENCY_SERVICES } from "../data/services";
import styles from "../styles.module.css";
import { telHref, mailHref } from "../utils";

export default function Footer({ brief }: { brief: ClientBrief }) {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.siteFooterInner}>
          <div className={styles.siteFooterBrand}>
            <span className={styles.siteFooterBrandName}>
              {brief.business_name}
            </span>
            <p className={styles.siteFooterTagline}>
              Nonstop {brief.service_type} pohotovost — {brief.city}.
              <br />
              Havárie i plánované opravy.
            </p>
          </div>

          <div>
            <h4 className={styles.siteFooterColTitle}>Rychlé odkazy</h4>
            <nav className={styles.siteFooterNav} aria-label="Patička – odkazy">
              <a href="#services">Služby</a>
              <a href="#pricing">Ceník</a>
              <a href="#locations">Oblast působení</a>
              <a href="#faq">Časté otázky</a>
            </nav>
          </div>

          <div>
            <h4 className={styles.siteFooterColTitle}>Naše služby</h4>
            <ul className={styles.siteFooterServices}>
              {EMERGENCY_SERVICES.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.siteFooterColTitle}>Kontakt</h4>
            <div className={styles.siteFooterContact}>
              <a href={telHref(brief.phone)}>{brief.phone}</a>
              <a href={mailHref(brief.email)}>{brief.email}</a>
              <span>Nonstop linka, Dostupní každý den</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.siteFooterMeta}>
        <div className={styles.container}>
          <div className={styles.siteFooterMetaInner}>
            <span className={styles.siteFooterCopyright}>
              © 2026 {brief.business_name}. Všechna práva vyhrazena.
            </span>
            <nav className={styles.siteFooterLegal} aria-label="Patička – právní">
              <a href="/zasady-ochrany-osobnich-udaju" target="_blank" rel="noopener noreferrer">
                Ochrana osobních údajů
              </a>
              <span className={styles.siteFooterDot}>·</span>
              <a href="/obchodni-podminky" target="_blank" rel="noopener noreferrer">
                Obchodní podmínky
              </a>
            </nav>
            <span className={styles.siteFooterCredit}>
              Návrh:{" "}
              <a href="https://autosmartweb.cz" target="_blank" rel="noopener noreferrer">
                Autosmartweb
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
