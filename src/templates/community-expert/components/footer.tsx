import type { ClientBrief } from "@/templates/core/types";
import { COMMUNITY_SERVICES } from "../data/services";
import styles from "../styles.module.css";
import { telHref, mailHref, logoInitial } from "../utils";

export default function Footer({ brief }: { brief: ClientBrief }) {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.container}>
        <div className={styles.siteFooterInner}>
          <div className={styles.siteFooterBrand}>
            <a href="#" className={`${styles.logo} ${styles.logoLight}`}>
              <span className={styles.logoMark}>{logoInitial(brief.business_name)}</span>
              <span className={styles.logoText}>{brief.business_name}</span>
            </a>
            <p>Lokální řemeslné služby pro váš domov.</p>
          </div>
          <div className={styles.siteFooterCol}>
            <h4>Služby</h4>
            <ul>
              {COMMUNITY_SERVICES.slice(0, 4).map((s) => (
                <li key={s.title}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.siteFooterCol}>
            <h4>Odkazy</h4>
            <ul>
              <li>
                <a href="#how-it-works">Jak to funguje</a>
              </li>
              <li>
                <a href="#reviews">Recenze</a>
              </li>
              <li>
                <a href="#faq">Časté otázky</a>
              </li>
              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>
          <div className={styles.siteFooterCol}>
            <h4>Kontakt</h4>
            <ul>
              <li>
                <a href={telHref(brief.phone)}>{brief.phone}</a>
              </li>
              <li>
                <a href={mailHref(brief.email)}>{brief.email}</a>
              </li>
              <li>{brief.city}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.siteFooterMeta}>
        <div className={styles.container}>
          <span>
            © 2026 {brief.business_name}. Všechna práva vyhrazena.
          </span>
        </div>
      </div>
    </footer>
  );
}
