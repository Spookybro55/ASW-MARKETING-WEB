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

export default function Header({ brief }: { brief: ClientBrief }) {
  const tel = telHref(brief.phone);
  return (
    <header className={styles.siteHeader}>
      <div className={`${styles.container} ${styles.siteHeaderInner}`}>
        <a
          href="#"
          className={styles.logo}
          aria-label={`${brief.business_name} ${brief.service_type} — domovská stránka`}
        >
          <span className={styles.logoPrimary}>{brief.business_name}</span>
          <span className={styles.logoSecondary}>
            {brief.service_type.toUpperCase()}
          </span>
        </a>
        <div className={styles.siteHeaderActions}>
          <a
            href={tel}
            className={styles.phoneLink}
            aria-label={`Zavolat ${brief.phone}`}
          >
            <PhoneIcon />
            <span>{brief.phone}</span>
          </a>
          <a
            href={tel}
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSm}`}
          >
            ZAVOLAT HNED
          </a>
        </div>
      </div>
    </header>
  );
}
