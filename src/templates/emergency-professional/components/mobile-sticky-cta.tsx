import type { ClientBrief } from "@/templates/core/types";
import styles from "../styles.module.css";
import { mailHref, telHref } from "../utils";

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

export default function MobileStickyCta({ brief }: { brief: ClientBrief }) {
  return (
    <aside className={styles.stickyCta} aria-label="Rychlý kontakt">
      <a
        href={telHref(brief.phone)}
        className={`${styles.stickyCtaBtn} ${styles.stickyCtaBtnPrimary}`}
      >
        <PhoneIcon />
        Zavolat
      </a>
      <a
        href={mailHref(brief.email)}
        className={`${styles.stickyCtaBtn} ${styles.stickyCtaBtnGhost}`}
      >
        Napsat
      </a>
    </aside>
  );
}
