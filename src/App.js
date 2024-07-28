import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import ButtonWrapper from "./components/ButtonWrapper";
import { TfiTrash } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";

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

  function deleteAllTodos() {
    setTodoList([]);
  }

  function deleteCompletedTodos() {
    setTodoList((prev) => {
      return prev.filter((todo) => !todo.isCompleted);
    });
  }

  return (
    <div className="App">
      <h1>TODO app</h1>
      <Form addTodo={addTodo} />
      {!!todoList.length && (
        <div className="buttons">
          <ButtonWrapper
            title="Delete all todos"
            className="buttonWrapper"
            onClick={deleteAllTodos}
          >
            <TfiTrash />
          </ButtonWrapper>
          <ButtonWrapper
            title="Delete completed todos"
            className="buttonWrapper"
            onClick={deleteCompletedTodos}
          >
            <TfiClose />
          </ButtonWrapper>
        </div>
      )}
      <List
        todoList={todoList}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
      {!!todoList.length && (
        <p>
          Completed todos: {todoList.filter((todo) => todo.isCompleted).length}
        </p>
      )}
    </div>
  );
}

export default App;
