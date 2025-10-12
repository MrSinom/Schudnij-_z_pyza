import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    reset();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Twoje imię"
          className={styles.input}
        />

        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Twój adres e-mail"
          className={styles.input}
        />

        <textarea
          {...register("message", { required: true })}
          placeholder="Wpisz wiadomość..."
          className={styles.textarea}
          rows={5}
        />

        <button type="submit" className={styles.button}>
          Wyślij wiadomość
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
