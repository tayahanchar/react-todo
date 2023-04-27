import { useState } from "react";
import Todo from "./Todo";
import styles from './TodoList.module.css';

function TodoList({list}) {

  return (
   list.length
   ? <ul className={styles.list}>
      {list.map((item, index) => <Todo item={item} key={index}/>)}
    </ul>
    : <p>Todo list is empty</p>
  )
}

export default TodoList;
