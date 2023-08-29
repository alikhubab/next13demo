import React from "react";

function TodoPage({ params: { todoId } }) {
  return <div>Todo {todoId}</div>;
}

export default TodoPage;
