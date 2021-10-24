import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo__list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </div>
  );
}

export default TodoList;
