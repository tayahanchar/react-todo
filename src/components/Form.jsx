import { useState } from 'react';
import styles from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';

function Form({addTodo}) {

  const [todo, setTodo] = useState('');

  function changeTodo(event) {
    setTodo(event.target.value);
  }

  function submitTodo(event) {
    event.preventDefault();
    addTodo({title: todo, isCompleted: false, id: uuidv4()});
    setTodo('');
  }

  return(
    <form onSubmit={submitTodo} className={styles.form}>
      <input onChange={changeTodo} value={todo} className={styles.form__input} type="text" />
      <button className={styles.form__button} type="submit">Submit</button>
    </form>
  )
}

export default Form;