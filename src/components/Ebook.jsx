import styles from "./Ebook.module.css";

function Ebook() {
  return (
   <section className={styles.container}>
      <h2 className={styles.title}>📘 Mój e-book — Twoja droga do zmiany</h2>
      <p className={styles.description}>
        Ten e-book to nie tylko zbiór przepisów i porad — to moja osobista historia, doświadczenie i konkretne narzędzia, które pomogły mi schudnąć z głową. Znajdziesz tu:
      </p>
      <ul className={styles.list}>
        <li>✔️ Jadłospisy na każdy dzień</li>
        <li>✔️ Przepisy, które naprawdę smakują</li>
        <li>✔️ Motywację i wsparcie na gorsze momenty</li>
        <li>✔️ Autentyczne zdjęcia i efekty</li>
      </ul>
      <p className={styles.note}>
        Jeśli chcesz zacząć swoją zmianę — zacznij od wiedzy, która działa. Ten e-book to pierwszy krok.
      </p>
      <a href="/kup-ebook" className={styles.button}>Kup teraz</a>
    </section>
  );
};

export default Ebook
