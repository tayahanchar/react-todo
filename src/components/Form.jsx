import styles from './Form.module.css';

function Form() {
  return(
    <form className={styles.form}>
      <input className={styles.form__input} type="text" />
      <button className={styles.form__button} type="submit">Submit</button>
    </form>
  )
}

export default Form;