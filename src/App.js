import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    saveToLocalStorage();
  }, [todos]);

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getFromLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const test = JSON.parse(localStorage.getItem("todos"));
      setTodos(test);
    }
  };

  return (
    <div className="todo">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        todoEditing={todoEditing}
        setTodoEditing={setTodoEditing}
        editingText={editingText}
        setEditingText={setEditingText}
      />
    </div>
  );
}

export default App;
