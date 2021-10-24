function App() {
  return (
    <div className="todo">
      <form className="todo__form">
        <input className="todo__form-input" type="text" />
        <button className="button todo__form--button">Create</button>
      </form>
      <div className="todo__list">
        <div className="todo__item">
          <input className="todo__item-completed" type="checkbox" />
          <p className="todo__title">Some text</p>
          <button className="button todo__item-edit">Edit</button>
          <button className="button todo__item-delete">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default App;
