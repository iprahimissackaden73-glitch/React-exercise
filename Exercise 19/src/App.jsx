import styles from "./App.module.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className={styles.container}>
        <h1 className={styles.title}>Todo App</h1>

        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;