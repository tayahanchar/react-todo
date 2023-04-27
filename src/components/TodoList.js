import Todo from "./Todo";
import styles from './TodoList.module.css';

function TodoList({list, deleteOneTodo, toggleOneTodo}) {

  return (
   list.length
   ? <ul className={styles.list}>
      {list.map((item) => <Todo item={item.text} key={item.id} id={item.id} isCompleted={item.isCompleted} deleteTodo={deleteOneTodo} toggleTodo={toggleOneTodo}/>)}
    </ul>
    : <p>Todo list is empty</p>
  )
}

export default TodoList;
