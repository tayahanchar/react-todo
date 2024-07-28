import styles from './Todo.module.css';
import { TfiClipboard } from "react-icons/tfi";
import { TfiCheckBox } from "react-icons/tfi";
import { TfiTrash } from "react-icons/tfi";

function Todo({title, id, deleteTodo, completeTodo, isCompleted}) {
  return (
    <li className={isCompleted ? styles.completedItem : styles.item}>
      <span>
        <TfiClipboard className={styles.icon}/>
        {title}
      </span>
      <span>
        <TfiCheckBox className={isCompleted ? styles.completeIcon : styles.icon} onClick={() => completeTodo(id)} />
        <TfiTrash className={styles.icon} onClick={() => deleteTodo(id)} />
      </span>
    </li>
  )
} 

export default Todo;