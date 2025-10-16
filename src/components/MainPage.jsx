import { NavLink } from "react-router-dom";

import styles from "./MainPage.module.css"

function MainPage() {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.text}>
          <h1>Zmień swoje ciało i umysł</h1>
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
    </div>
  )
};

export default MainPage
