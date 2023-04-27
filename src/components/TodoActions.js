import { RiLoader3Fill, RiDeleteBin2Line } from "react-icons/ri";
import styles from './TodoActions.module.css';
import TodoButton from "./TodoButton";

function TodoActions({reset, clean, hasComplitedTodo}) {
  return (
    <div className={styles.actions}>
      <TodoButton title='Reset' onClick={reset}>
        <RiLoader3Fill />
      </TodoButton>
      <TodoButton title='Delete completed todos' onClick={clean} disabled={!hasComplitedTodo}>
        <RiDeleteBin2Line />
      </TodoButton>
    </div>
  )
}

export default TodoActions;