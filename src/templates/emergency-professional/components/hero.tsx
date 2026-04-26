import Image from "next/image";
import { getStockPhoto } from "@/templates/core/stock-photos";
import type { ClientBrief } from "@/templates/core/types";
import styles from "../styles.module.css";
import { getHeroHeadline, getHeroLead, telHref } from "../utils";

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

function ClockIcon() {
  return (
    <svg className={`${styles.icon} ${styles.iconSm}`} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HeroVisualPlaceholder({ altText }: { altText: string }) {
  return (
    <svg
      viewBox="0 0 400 280"
      preserveAspectRatio="xMidYMid slice"
      style={{ width: "100%", height: "100%" }}
      role="img"
      aria-label={altText}
    >
      <rect width="400" height="280" fill="#0a0e18" />
      <g transform="translate(200 140)" fill="none" stroke="#555" strokeWidth="3">
        <path
          d="M-120 -20 L40 60 L80 40 L100 60 L140 20 L100 -20 L80 0 L40 -20 Z"
          fill="#2a2f3a"
          stroke="#4a4f5a"
        />
        <circle cx="-130" cy="-20" r="18" fill="#2a2f3a" />
      </g>
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
          <span className={styles.heroBadge}>
            <ClockIcon />
            NONSTOP POHOTOVOST
          </span>
          <h1 className={styles.heroTitle}>{headline}</h1>
          <p className={styles.heroLead}>{lead}</p>
          <div className={styles.heroCtas}>
            <a href={tel} className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}>
              <PhoneIcon />
              {brief.phone}
            </a>
            <a href="#contact" className={`${styles.btn} ${styles.btnGhost} ${styles.btnLg}`}>
              NAPIŠTE NÁM
            </a>
          </div>
          <ul className={styles.heroFeatures}>
            <li>
              <span className={styles.check}>✓</span>
              <div>
                <strong>Místní služba</strong>
                <span>{brief.city} a okolí</span>
              </div>
            </li>
            <li>
              <span className={styles.check}>✓</span>
              <div>
                <strong>Nonstop kontakt</strong>
                <span>včetně víkendů</span>
              </div>
            </li>
            <li>
              <span className={styles.check}>✓</span>
              <div>
                <strong>Rychlá pomoc</strong>
                <span>havárie i opravy</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroImageFrame}>
            {photo.source === "placeholder" || !photo.src ? (
              <HeroVisualPlaceholder altText={photo.altText} />
            ) : (
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
