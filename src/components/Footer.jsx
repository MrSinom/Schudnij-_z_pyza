import styles from "./Footer.module.css";

function Footer({ setActiveComponent }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <span className={styles.link} onMouseEnter={() => setActiveComponent("about")}>
          O mnie
        </span>
        <span className={styles.link} onMouseEnter={() => setActiveComponent("training")}>
          Trening
        </span>
        <span className={styles.link} onMouseEnter={() => setActiveComponent("ebook")}>
          E-book
        </span>
        <span className={styles.link} onMouseEnter={() => setActiveComponent("cooking")}>
          Kuchnia
        </span>
        <span className={styles.link} onMouseEnter={() => setActiveComponent("contact")}>
          Kontakt
        </span>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Schudnij z Pyzą — Wszystkie prawa zastrzeżone
      </p>
    </footer>
  );
}

export default Footer;
