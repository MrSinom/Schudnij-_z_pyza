import { useState } from "react";
import styles from "./Header.module.css";
import logo from "../assets/name_withoutLOGO.svg";

function Header({ setActiveComponent }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo} onMouseEnter={() => setActiveComponent("main")}>
          <img src={logo} alt="Logo" />
        </div>

        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

    <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
  <span onMouseEnter={() => setActiveComponent("about")}>O mnie</span>
  <span onMouseEnter={() => setActiveComponent("training")}>Treningi</span>
  <span onMouseEnter={() => setActiveComponent("ebook")}>E-book</span>
  <span onMouseEnter={() => setActiveComponent("cooking")}>Kuchnia</span>
  <span onMouseEnter={() => setActiveComponent("contact")}>Kontakt</span>
</nav>


        <span className={styles.login} onMouseEnter={() => setActiveComponent("login")}>
          Zaloguj
        </span>
      </div>
    </header>
  );
}

export default Header;
