import styles from './Todo.module.css';

function Todo({title, id, deleteTodo}) {
  return (
    <li className={styles.item}>{title}
    <button onClick={() => deleteTodo(id)}>del</button>
    </li>
  )
}

export default Todo;