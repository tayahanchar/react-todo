import { useState } from 'react';
import styles from './TodoForm.module.css'

function TodoForm({addTodo}) {

  const [todoText, setTodoText] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();
    addTodo(todoText);
    setTodoText('');
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input className={styles.input} placeholder='Enter new todo' value={todoText} onChange={(e) => setTodoText(e.target.value)}></input>
      <button className={styles.button} type='submit'>Submit</button>
    </form>
  )
}

export default TodoForm;