import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import styles from "./TodoForm.module.css";

function TodoForm() {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: text,
    });

    setText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className={styles.button} type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;