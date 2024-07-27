import { useState } from 'react';
import styles from './Form.module.css';

function Form({addTodo}) {

  const [todo, setTodo] = useState('');

  function changeTodo(event) {
    setTodo(event.target.value);
  }

  function submitTodo(event) {
    event.preventDefault();
    addTodo({title: todo, isCompleted: false});
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