import { COMMUNITY_TRUST, type TrustIcon } from "../data/trust";
import styles from "../styles.module.css";

function TrustIconSvg({ icon }: { icon: TrustIcon }) {
  switch (icon) {
    case "shield":
      return (
        <svg className={styles.trustItemIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "users":
      return (
        <svg className={styles.trustItemIcon} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path
            d="M3 20c0-3 2.5-5 6-5s6 2 6 5M14 20c0-2 1.5-4 4-4s3.5 1.5 3.5 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "clock":
      return (
        <svg className={styles.trustItemIcon} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 7v5l3 2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "star":
      return (
        <svg className={styles.trustItemIcon} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2l3 6 6 1-4.5 4 1 6-5.5-3-5.5 3 1-6L3 9l6-1z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default function TrustStrip() {
  return (
    <section className={styles.trustStrip} aria-label="Proč s námi">
      <div className={`${styles.container} ${styles.trustStripInner}`}>
        {COMMUNITY_TRUST.map((item) => (
          <div key={item.label} className={styles.trustItem}>
            <TrustIconSvg icon={item.icon} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
