function Form({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodosHandler = (e) => {
    e.preventDefault();
    if (!inputText || /^\s*$/.test(inputText)) {
      return;
    }
    setTodos([
      ...todos,
      {
        title: inputText,
        completed: false,
        id: Math.floor(Math.random() * 100000),
      },
    ]);
    setInputText("");
  };

  return (
    <form className="todo__form">
      <input
        className="todo__form-input"
        type="text"
        placeholder="Add todo..."
        value={inputText}
        onChange={inputTextHandler}
      />
      <button
        className="button todo__form--button"
        onClick={submitTodosHandler}
      >
        Create
      </button>
    </form>
  );
}

export default Form;
