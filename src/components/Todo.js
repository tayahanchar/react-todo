import { RiBookletFill } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({item}) {
  return (
    <li className={styles.elem}>
      <RiBookletFill className={styles.icon}/>
      {item}
      </li>
  )
}

export default Todo;