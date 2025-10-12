import styles from "./StatsSection.module.css";

function StatsSection() {
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2023;

  return (
    <section className={styles.wrapper}>
      <div className={styles.stats}>
        <div className={styles.statBox}>
          <span className={styles.value}>{experienceYears}+</span>
          <span className={styles.label}>Lata doświadczenia</span>
        </div>
        <div className={styles.statBox}>
          <span className={styles.value}>10+</span>
          <span className={styles.label}>Zaufanych osób</span>
        </div>
        <div className={styles.statBox}>
          <span className={styles.value}>100%</span>
          <span className={styles.label}>Zaangażowania</span>
        </div>
      </div>

      <div className={styles.description}>
        <p>
          Od 2023 roku wspieram kobiety w ich drodze do zdrowia, równowagi i pewności siebie. Każdy plan, każde działanie — to efekt doświadczenia, empatii i konkretu.
        </p>
        <a href="#join" className={styles.cta}>Dołącz do społeczności</a>
      </div>
    </section>
  );
}

export default StatsSection;
