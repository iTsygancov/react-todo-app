function TodoItem({ title, completed, todo, todos, setTodos }) {
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

  return (
    <div className="todo__item">
      <input className="todo__item-completed" type="checkbox" onChange={completedHandler} />
      <p className="todo__title">{title}</p>
      <button className="button todo__item-edit">Edit</button>
      <button className="button todo__item-delete" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
