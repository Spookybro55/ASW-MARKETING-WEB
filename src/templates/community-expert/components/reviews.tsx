import { COMMUNITY_REVIEWS } from "../data/reviews";
import styles from "../styles.module.css";

export default function Reviews() {
  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.container}>
        <header className={styles.sectionHeading}>
          <h2>Co říkají naši klienti</h2>
          <p>Ohlasy od skutečných zákazníků z regionu</p>
        </header>
        <div className={styles.reviewsGrid}>
          {COMMUNITY_REVIEWS.map((r) => (
            <article key={r.name} className={styles.reviewCard}>
              <div className={styles.reviewCardQuote} aria-hidden="true">
                „
              </div>
              <p className={styles.reviewCardText}>{r.text}</p>
              <footer className={styles.reviewCardAuthor}>
                <div className={styles.avatar} aria-hidden="true">
                  {r.initials}
                </div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.city}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
