import { useState } from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodoHandler(newTodo) {
    setTodoList([...todoList, newTodo]);
    console.log(todoList)
  }

  return (
    <main className='main'>
      <h1 className='title'>Todo App</h1>
      <TodoForm addTodo={addTodoHandler}/>
      <TodoList list={todoList}/>
    </main>
  )
}

export default App;