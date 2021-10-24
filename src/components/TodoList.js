import TodoItem from "./TodoItem";

function TodoList({
  todos,
  setTodos,
  todoEditing,
  setTodoEditing,
  editingText,
  setEditingText,
}) {
  function compare(a, b) {
    if (a.title < b.title) {
      return 1;
    }
    if (a.title > b.title) {
      return -1;
    }
    return 0;
  }
  return (
    <div className="todo__list">
      {todos.sort(compare).map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          todoEditing={todoEditing}
          setTodoEditing={setTodoEditing}
          editingText={editingText}
          setEditingText={setEditingText}
        />
      ))}
    </div>
  );
}

export default TodoList;
