import { useState } from "react";
import Todo from "./Todo";
import styles from './TodoList.module.css';

function TodoList() {
  const [todoList, setTodoList] = useState(['1item', '4dd']);

  return (
    <ul className={styles.list}>
      {todoList.map((item, index) => {
      return <Todo item={item} key={index}/>
      })}
    </ul>
  )
}

export default TodoList;
