import Todo from "./Todo";
import styles from './List.module.css';

function List({todoList, deleteTodo, completeTodo}) {

  return (
    todoList.length ?
    <ul className={styles.list}>
      {todoList.map((todo) => <Todo key={todo.id} deleteTodo={deleteTodo} completeTodo={completeTodo} {...todo} />)}
    </ul>
    : <div className={styles.noList}>There is no todos</div>
  )
}

export default List;