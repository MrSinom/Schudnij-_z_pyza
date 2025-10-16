import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <NavLink to="/about" className={styles.link}>O mnie</NavLink>
        <NavLink to="/training" className={styles.link}>Trening</NavLink>
        <NavLink to="/ebook" className={styles.link}>E-book</NavLink>
        <NavLink to="/cookingd" className={styles.link}>Kuchnia</NavLink>
        <NavLink to="/contact" className={styles.link}>Kontakt</NavLink>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} Schudnij z Pyzą — Wszystkie prawa zastrzeżone
      </p>
    </footer>
  );
}

export default Footer;
