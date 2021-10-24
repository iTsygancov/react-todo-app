function TodoItem({
  title,
  completed,
  todo,
  todos,
  setTodos,
  todoEditing,
  setTodoEditing,
  editingText,
  setEditingText,
}) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.title = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div
      className={`todo__item ${todo.completed ? "todo__item--completed" : ""}`}
    >
      <input
        className="todo__item-completed"
        type="checkbox"
        onChange={completedHandler}
      />
      {todo.id === todoEditing ? (
        <div className="todo__item-editing">
          <input
            className="todo__item-editInput"
            type="text"
            placeholder={todo.title}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button
            className="button todo__item-submitEdits"
            onClick={() => submitEdits(todo.id)}
          >
            Сохранить
          </button>
        </div>
      ) : (
        <div className="todo__item-info">
          <p
            className={`todo__item-title ${
              todo.completed ? "todo__item-title--completed" : ""
            }`}
          >
            {title}
          </p>
          <div className="todo__item-buttons">
            <button
              className="button todo__item-edit"
              disabled={todo.completed ? "disabled" : ""}
              onClick={() => setTodoEditing(todo.id)}
            >
              Изменить
            </button>
            <button className="button todo__item-delete" onClick={deleteHandler}>
              Удалить
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
