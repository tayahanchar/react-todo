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

  return (
    <div className="App">
      <h1>TODO app</h1>
      <Form addTodo={addTodo} />
      <List todoList={todoList} />
    </div>
  );
}

export default App;
