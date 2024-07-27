import Todo from "./Todo";
import styles from './List.module.css';

function List() {

  return (
    <ul className={styles.list}>
      <Todo />
    </ul>
  )
}

export default List;