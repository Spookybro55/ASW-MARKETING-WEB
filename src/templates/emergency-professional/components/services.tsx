import type { ClientBrief } from "@/templates/core/types";
import { EMERGENCY_SERVICES, type ServiceIcon } from "../data/services";
import styles from "../styles.module.css";
import { toAccusative } from "../utils";

function ServiceIconSvg({ icon }: { icon: ServiceIcon }) {
  switch (icon) {
    case "alert-circle":
      return (
        <svg className={styles.serviceCardIcon} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 7v6M12 16.5v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "droplet":
      return (
        <svg className={styles.serviceCardIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 3c-3 5-6 7-6 11a6 6 0 0012 0c0-4-3-6-6-11z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "flame":
      return (
        <svg className={styles.serviceCardIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2c-3 4-5 6-5 10a5 5 0 0010 0c0-4-2-6-5-10z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="14" r="2" fill="currentColor" />
        </svg>
      );
    case "thermometer":
      return (
        <svg className={styles.serviceCardIcon} viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="4" width="14" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M9 9v6M12 9v6M15 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "wrench":
      return (
        <svg className={styles.serviceCardIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M14.7 6.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-2-2a1 1 0 010-1.4l8-8a1 1 0 011.4 0zM17 13l4 4-3 3-4-4z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
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

export default function Services({ brief }: { brief: ClientBrief }) {
  const tel = `tel:${brief.phone.replace(/\s/g, "")}`;
  const cityAcc = toAccusative(brief.city);
  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <header className={styles.sectionHeading}>
          <h2>Řešíme instalatérské problémy</h2>
          <p>Havárie i plánované opravy. Nonstop služba pro {cityAcc} a okolí.</p>
        </header>
        <div className={styles.servicesGrid}>
          {EMERGENCY_SERVICES.map((service) => (
            <article
              key={service.title}
              className={`${styles.serviceCard}${service.highlight ? " " + styles.serviceCardHighlight : ""}`}
            >
              <ServiceIconSvg icon={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
        <div className={styles.servicesCta}>
          <a
            href={tel}
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg} ${styles.btnWide}`}
          >
            <PhoneIcon />
            POTŘEBUJETE POMOC? ZAVOLEJTE NÁM
          </a>
        </div>
      </div>
    </section>
  );
}
