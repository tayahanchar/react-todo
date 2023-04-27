import { RiBookletFill, RiCheckboxCircleLine, RiCloseCircleLine} from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({item, id, isCompleted, deleteTodo, toggleTodo}) {
  return (
    <li className={`${styles.elem} ${isCompleted ? styles.completed: ''}`} id={id}>
      <span className={styles.elem__left}>
        <RiBookletFill className={styles.icon}/>
        <p>{item}</p>
      </span>
      <span>
        <RiCheckboxCircleLine className={styles.icon__complite} onClick={() => toggleTodo(id)}/>
        <RiCloseCircleLine className={styles.icon__delete} onClick={() => deleteTodo(id)}/>
      </span>
    </li>
  )
}

export default Todo;