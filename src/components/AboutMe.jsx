import { NavLink } from "react-router-dom";
import styles from "./AboutMe.module.css";

function AboutMe({ preview = false }) {
  return (
    <div className={`${styles.container} ${preview ? styles.preview : ""}`}>
      <h1>Poznajmy się</h1>
      <p>
        Cześć! Jestem Pyza — kobieta, która postanowiła wziąć sprawy w swoje ręce i schudnąć… ale po swojemu. Bez presji, bez cudownych diet, za to z dystansem, uśmiechem i konkretnym planem. Na Instagramie <strong>@schudnij_z_pyza</strong> dzielę się swoją drogą do lepszego zdrowia, sylwetki i samopoczucia.
      </p>
      <ul>
        <li>realne efekty — zdjęcia „przed i po”, bez filtrów i ściemy,</li>
        <li>jadłospisy, przepisy i pomysły na zdrowe posiłki,</li>
        <li>motywację na gorsze dni i wsparcie dla tych, którzy zaczynają od zera,</li>
        <li>szczerość — bo nie zawsze jest łatwo, ale zawsze warto.</li>
      </ul>
      <p>
        Nie jestem dietetyczką ani trenerką — jestem kobietą, która przeszła przez to wszystko i wie, jak to smakuje. Dlatego stworzyłam przestrzeń, w której możesz poczuć się bezpiecznie, zainspirować się i zacząć działać.
      </p>
      <p>
        Jeśli chcesz schudnąć z głową, bez wyrzeczeń i z uśmiechem — jesteś w dobrym miejscu. <strong>Schudnij z Pyzą</strong> to nie tylko profil, to społeczność kobiet, które wspierają się nawzajem i pokazują, że zmiana jest możliwa.
      </p>

      {!preview && (
        <NavLink to="/about" className={styles.viewMore}>
          Zobacz więcej
        </NavLink>
      )}
    </div>
  );
}

export default AboutMe;
