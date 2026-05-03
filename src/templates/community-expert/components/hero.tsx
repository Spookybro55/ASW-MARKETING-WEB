import Image from "next/image";
import type { ClientBrief } from "@/templates/core/types";
import { getStockPhoto } from "@/templates/core/stock-photos";
import styles from "../styles.module.css";
import { telHref, getHeroHeadline, getHeroLead } from "../utils";

function MailIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

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

function CheckCircleIcon() {
  return (
    <svg
      className={`${styles.icon} ${styles.iconSm} ${styles.checkCircle}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 12l3 3 5-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero({ brief }: { brief: ClientBrief }) {
  const tel = telHref(brief.phone);
  const headline = getHeroHeadline(brief);
  const lead = getHeroLead(brief);
  const photo = getStockPhoto(brief.service_type);

  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.heroInner}`}>
        <div>
          <h1 className={styles.heroTitle}>{headline}</h1>
          <p className={styles.heroLead}>{lead}</p>
          <div className={styles.heroCtas}>
            <a href="#contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>
              <MailIcon />
              Nezávazná poptávka
            </a>
            <a href={tel} className={`${styles.btn} ${styles.btnOutline} ${styles.btnLg}`}>
              <PhoneIcon />
              {brief.phone}
            </a>
          </div>
          <ul className={styles.heroFeatures}>
            <li>
              <CheckCircleIcon />
              Profesionální přístup
            </li>
            <li>
              <CheckCircleIcon />
              Férové ceny
            </li>
            <li>
              <CheckCircleIcon />
              Lokální firma
            </li>
          </ul>
        </div>
        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.heroImageFrame}>
            {photo.source !== "placeholder" && photo.src && (
              <Image
                src={photo.src}
                alt={photo.altText}
                width={800}
                height={600}
                priority
                className={styles.heroImage}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
