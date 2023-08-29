import React from "react";

const fetchTodo = async (todoId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const todo = await res.json();
  console.log("todo**************>>", todo);
  return todo;
};

async function TodoPage({ params: { todoId } }) {
  const todo = await fetchTodo(todoId);

  return (
    <div>
      Todo {todoId}
      <h3>{todo.title}</h3>
      <h5>Completed: {todo.completed ? "true" : "false"}</h5>
    </div>
  );

export async function generateStaticParams() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos = await res.json();
  const trimmedTodos = todos.splice(0, 10);

  return trimmedTodos.map((todo) => ({ todoId: todo.id.toString() }));
}

export default TodoPage;
