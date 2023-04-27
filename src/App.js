import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoActions from './components/TodoActions';

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodoHandler(newTodoText) {
    const newTodo = {
      text: newTodoText,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodoList([...todoList, newTodo]);
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
  }

  function toggleTodo(id) {
    setTodoList(todoList.map((item) => item.id === id ? {...item, isCompleted: !item.isCompleted}: {...item}));
  }

  function resetTodo() {
    setTodoList([]);
  }

  function cleanCompletedTodo() {
    setTodoList(todoList.filter((item) => item.isCompleted === false));
  }

  const completedTodoCount = todoList.filter(item => item.isCompleted).length;

  return (
    <main className='main'>
      <h1 className='title'>Todo App</h1>
      <TodoForm addTodo={addTodoHandler}/>
      {todoList.length 
        ? <TodoActions reset={resetTodo} clean={cleanCompletedTodo} hasComplitedTodo={!!completedTodoCount}/>
        : ''}
      <TodoList list={todoList} deleteOneTodo={deleteTodo} toggleOneTodo={toggleTodo}/>
      <p>
        {completedTodoCount
        ? `Completed todo: ${completedTodoCount}`
        : ''}
      </p>
    </main>
  )
}

export default App;