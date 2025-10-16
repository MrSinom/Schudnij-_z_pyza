import { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";

function StatsSection() {
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2023;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animacja tylko raz
        }
      },
      { threshold: 0.2 } // 20% widoczności sekcji
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`${styles.wrapper} ${isVisible ? styles.visible : ""}`}
      id="stats"
    >
      <div className={styles.stats}>
        <div className={styles.statBox}>
          <span className={styles.value}>{experienceYears}+</span>
          <span className={styles.label}>Lata doświadczenia</span>
        </div>
        <div className={styles.statBox}>
          <span className={styles.value}>100+</span>
          <span className={styles.label}>Zaufanych osób</span>
        </div>
        <div className={styles.statBox}>
          <span className={styles.value}>100%</span>
          <span className={styles.label}>Zaangażowania</span>
        </div>
      </div>

      <div className={styles.description}>
        <p>
          Od 2023 roku wspieram kobiety w ich drodze do zdrowia, równowagi i pewności siebie. 
          Każdy plan, każde działanie — to efekt doświadczenia, empatii i konkretu.
        </p>
        <a href="#contact" className={styles.cta}>Dołącz do społeczności</a>
      </div>
    </section>
  );
}

export default StatsSection;
