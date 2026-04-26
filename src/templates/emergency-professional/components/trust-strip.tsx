import { EMERGENCY_TRUST, type TrustIcon } from "../data/trust";
import styles from "../styles.module.css";

function TrustIconSvg({ icon }: { icon: TrustIcon }) {
  switch (icon) {
    case "badge":
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
          <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

export default function TrustStrip() {
  return (
    <section className={styles.trustStrip} aria-label="Důvody proč nás volat">
      <div className={`${styles.container} ${styles.trustStripInner}`}>
        {EMERGENCY_TRUST.map((item) => (
          <div key={item.title} className={styles.trustItem}>
            <TrustIconSvg icon={item.icon} />
            <h3 className={styles.trustItemTitle}>{item.title}</h3>
            <p className={styles.trustItemDesc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
