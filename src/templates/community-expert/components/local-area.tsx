import type { ClientBrief } from "@/templates/core/types";
import { getLocationsFor } from "../data/locations";
import styles from "../styles.module.css";

function PinIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function LocalArea({ brief }: { brief: ClientBrief }) {
  const locations = getLocationsFor(brief.city);
  return (
    <section className={styles.localArea} id="local-area">
      <div className={styles.container}>
        <div className={styles.localAreaHeader}>
          <div className={styles.localAreaBadge} aria-hidden="true">
            <PinIcon />
          </div>
          <h2>Kde působíme</h2>
          <p>
            Poskytujeme služby především v těchto lokalitách. Pokud se váš region
            nenachází v seznamu, neváhejte nás kontaktovat.
          </p>
        </div>
        <ul className={styles.localAreaGrid} role="list">
          {locations.map((loc) => (
            <li key={loc}>{loc}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
