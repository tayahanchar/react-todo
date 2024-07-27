import Todo from "./Todo";
import styles from './List.module.css';

function List({todoList}) {

  return (
    todoList.length ?
    <ul className={styles.list}>
      {todoList.map((todo, index) => <Todo key={index} {...todo} />)}
    </ul>
    : <div className={styles.noList}>There is no todos</div>
  )
}

export default List;