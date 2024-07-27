import styles from './Todo.module.css';

function Todo({title}) {
  return (
    <li className={styles.item}>{title}</li>
  )
}

export default Todo;