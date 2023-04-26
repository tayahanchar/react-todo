import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <main className='App'>
      <h1 className='title'>Todo App</h1>
      <TodoForm />
      <TodoList />
    </main>
  )
}

export default App;