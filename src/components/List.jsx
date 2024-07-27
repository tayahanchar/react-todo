import Todo from "./Todo";
import styles from './List.module.css';

function List({todoList}) {

  return (
    <ul className={styles.list}>
      {todoList.map((todo, index) => <Todo key={index} {...todo} />)}
    </ul>
  )
}

export default List;