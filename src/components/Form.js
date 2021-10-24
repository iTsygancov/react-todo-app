function Form({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodosHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        title: inputText,
        completed: false,
        id: Math.floor(Math.random * 100000),
      },
    ]);
  };

  return (
    <form className="todo__form">
      <input
        className="todo__form-input"
        type="text"
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
