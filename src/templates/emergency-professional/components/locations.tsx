import type { ClientBrief } from "@/templates/core/types";
import { PRAGUE_LOCATIONS } from "../data/prague-locations";
import styles from "../styles.module.css";
import { telHref } from "../utils";

function PinIcon() {
  return (
    <svg className={`${styles.icon} ${styles.iconSm}`} viewBox="0 0 24 24" aria-hidden="true">
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

export default function Locations({ brief }: { brief: ClientBrief }) {
  const isPraha = brief.city.trim().toLowerCase() === "praha";
  return (
    <section className={styles.locations} id="locations">
      <div className={styles.container}>
        <span className={`${styles.pill} ${styles.pillRed}`}>
          <PinIcon />
          MÍSTNÍ SLUŽBA
        </span>
        <h2 className={styles.sectionHeadingTitle}>
          Pokrýváme {brief.city} a okolí
        </h2>
        <p className={styles.sectionHeadingLead}>
          Pracujeme v {brief.city} a blízkém okolí. Rychlý dojezd a jasná komunikace.
        </p>

        {isPraha ? (
          <>
            <ul className={styles.locationsGrid}>
              {PRAGUE_LOCATIONS.map((loc) => (
                <li key={loc}>{loc}</li>
              ))}
            </ul>
            <div className={styles.locationsCallout}>
              <p>Nevidíte svou lokalitu? Obsloužíme i okolí Prahy.</p>
              <a href={telHref(brief.phone)} className={`${styles.btn} ${styles.btnPrimary}`}>
                ZAVOLEJTE A OVĚŘTE DOSTUPNOST
              </a>
            </div>
          </>
        ) : (
          <div className={styles.locationsSingle}>
            <span className={styles.locationsSingleChip}>{brief.city} a okolí</span>
            <a
              href={telHref(brief.phone)}
              className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg}`}
            >
              ZAVOLEJTE A OVĚŘTE DOSTUPNOST
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
