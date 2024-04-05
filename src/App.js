import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Optional for your custom styling

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      setTodos([...todos, { text: todoText, completed: false }]);
      setTodoText('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const markTodoComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="newTodoInput"
            placeholder="Add a new todo..."
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
            <div className="d-flex">
              <button
                className="btn btn-sm btn-outline-success me-2"
                onClick={() => markTodoComplete(index)}
              >
                {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => removeTodo(index)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
