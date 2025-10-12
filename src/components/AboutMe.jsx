import { NavLink } from "react-router-dom";
import style from "./AboutMe.module.css"
function AboutMe() {
  return (
    <div className="sectionWrapper">
      <div className="sectionContent">
        <h2>Poznajmy się</h2>
        <p>
          Cześć! Jestem Pyza — kobieta, która postanowiła wziąć sprawy w swoje ręce i schudnąć… ale po swojemu. Bez presji, bez cudownych diet, za to z dystansem, uśmiechem i konkretnym planem. Na Instagramie <strong>@schudnij_z_pyza</strong> dzielę się swoją drogą do lepszego zdrowia, sylwetki i samopoczucia.
        </p>
        <p>
          Znajdziesz u mnie:
          <ul>
            <li>realne efekty — zdjęcia „przed i po”, bez filtrów i ściemy,</li>
            <li>jadłospisy, przepisy i pomysły na zdrowe posiłki,</li>
            <li>motywację na gorsze dni i wsparcie dla tych, którzy zaczynają od zera,</li>
            <li>szczerość — bo nie zawsze jest łatwo, ale zawsze warto.</li>
          </ul>
        </p>
        <p>
          Nie jestem dietetyczką ani trenerką — jestem kobietą, która przeszła przez to wszystko i wie, jak to smakuje. Dlatego stworzyłam przestrzeń, w której możesz poczuć się bezpiecznie, zainspirować się i zacząć działać.
        </p>
        <p>
          Jeśli chcesz schudnąć z głową, bez wyrzeczeń i z uśmiechem — jesteś w dobrym miejscu. <strong>Schudnij z Pyzą</strong> to nie tylko profil, to społeczność kobiet, które wspierają się nawzajem i pokazują, że zmiana jest możliwa.
        </p>
        <NavLink to="/about" className="viewMore">Zobacz więcej</NavLink>
      </div>
    </div>
  );
}

export default AboutMe;
