import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todo) {
    setTodoList((prev) => {
      return [...prev, todo];
    });
  }

  function completeTodo(id) {
    setTodoList((prev) => {
      return prev.map((item) => {
        return item.id === id
          ? { ...item, isCompleted: !item.isCompleted }
          : { ...item };
      });
    });
  }

  function deleteTodo(id) {
    setTodoList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="App">
      <h1>TODO app</h1>
      <Form addTodo={addTodo} />
      <List
        todoList={todoList}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default App;
