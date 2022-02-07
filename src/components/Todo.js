import React from "react";
import styles from "./Button.module.css";

function Todo({ todo, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button className= {styles.button} onClick={() => completeTodo(todo.id)}>
          {todo.isCompleted ? "Not Done" : "Done"}
        </button>
        <button className= {styles.button} onClick={() => removeTodo(todo.id)}>x</button>
      </div>
    </div>
  );
}

export default Todo;