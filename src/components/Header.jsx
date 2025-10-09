import styles from "./Header.module.css"
import logo_schudnij_example from "../assets/logo_schudnij_example.svg"
function Header() {
  return (
   <header className={styles.header}>
    <img src={logo_schudnij_example} alt="logo" style={{width:"200px", height:"150px"}}/>
    <h1>Schudnij z pyzą </h1>
    <nav className={styles.nav}/>
   </header>
  )
};

export default Header
