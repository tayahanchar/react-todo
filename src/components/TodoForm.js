import styles from './TodoForm.module.css'

function TodoForm() {
  return (
    <form>
      <input className={styles.input}></input>
      <button className={styles.button}>Submit</button>
    </form>
  )
}

export default TodoForm;