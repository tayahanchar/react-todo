import styles from './TodoButton.module.css';

function TodoButton({onClick, children, title, disabled}) {
  return (
    <button className={styles.button} onClick={onClick} title={title} disabled={disabled}>{children}</button>
  )
}

export default TodoButton;