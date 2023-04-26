import styles from './Todo.module.css';

function Todo({item}) {
  return (
    <li className={styles.elem}>{item}</li>
  )
}

export default Todo;