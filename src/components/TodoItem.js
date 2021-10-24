function TodoItem() {
  return (
    <div className="todo__item">
      <input className="todo__item-completed" type="checkbox" />
      <p className="todo__title">Some text</p>
      <button className="button todo__item-edit">Edit</button>
      <button className="button todo__item-delete">Delete</button>
    </div>
  );
}

export default TodoItem;
