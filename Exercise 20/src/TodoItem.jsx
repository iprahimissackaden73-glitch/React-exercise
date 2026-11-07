// import { useContext } from "react";
// import { TodoContext } from "./TodoContext";
// import styles from "./TodoItem.module.css";

// function TodoItem({ todo }) {
//   const { dispatch } = useContext(TodoContext);

//   return (
//     <li className={styles.item}>
//       <span
//         className={todo.completed ? styles.completed : ""}
//         onClick={() =>
//           dispatch({
//             type: "TOGGLE_TODO",
//             payload: todo.id,
//           })
//         }
//       >
//         {todo.text}
//       </span>

//       <div className="">
//         <button
//           className=""
//           onClick={() =>
//             dispatch({
//               type: "DELETE_TODO",
//               payload: todo.id,
//             })
//           }
//         >
//           Delete
//         </button>
//       </div>
//     </li>
//   );
// }

// export default TodoItem;