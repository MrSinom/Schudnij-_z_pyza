import styles from "./Header.module.css"
function Header() {
  return (
   <header className={styles.header}>
    <h1>Header</h1>
    <nav className={styles.nav}/>
   </header>
  )
};

export default Header
