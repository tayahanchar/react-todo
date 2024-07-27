import styles from './Todo.module.css';
import { TfiClipboard } from "react-icons/tfi";
import { TfiCheckBox } from "react-icons/tfi";
import { TfiTrash } from "react-icons/tfi";

function Todo({title, id, deleteTodo}) {
  return (
    <li className={styles.item}>
      <span>
        <TfiClipboard className={styles.icon}/>
        {title}
      </span>
      <span>
        <TfiCheckBox className={styles.icon} />
        <TfiTrash className={styles.icon} onClick={() => deleteTodo(id)} />
      </span>
    </li>
  )
}

export default Todo;