import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../assets/logo_schudnij_example_change_color.svg";

// Importuj komponenty z landing page
import AboutMe from "./AboutMe";
import Training from "./Training";
import Ebook from "./Ebook";
import CookingSite from "./CookingSite";
import ContactForm from "./ContactForm";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* Nawigacja */}
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
          Log in
        </NavLink>
      </div>

      {/* Sekcja promocyjna */}
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1>Transform Your Body and Mind</h1>
          <p>
            Join us in transforming your body and mind through our comprehensive yoga and fitness programs.
          </p>
          <div className={styles.buttons}>
            <NavLink to="/join" className={styles.primary}>Join Member</NavLink>
            <NavLink to="/start" className={styles.secondary}>Start for free</NavLink>
          </div>
        </div>
        <div className={styles.image}></div>
      </div>

      {/* Sekcje landing page */}
      <main className={styles.sections}>
        <AboutMe />
        <Training />
        <Ebook />
        <CookingSite />
        <ContactForm />
      </main>
    </header>
  );
}

export default Header;
