import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/name_withoutLOGO.svg";

// Importuj komponenty z landing page

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </NavLink>

        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <NavLink to="/about" onClick={closeMenu}>O mnie</NavLink>
          <NavLink to="/training" onClick={closeMenu}>Treningi</NavLink>
          <NavLink to="/ebook" onClick={closeMenu}>E-book</NavLink>
          <NavLink to="/cookingd" onClick={closeMenu}>Kuchnia</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Kontakt</NavLink>
        </nav>

        <NavLink to="/login" className={styles.login} onClick={closeMenu}>
          Zaloguj
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
