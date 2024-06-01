import React from "react";
import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    taskName: "",
    description: "",
    status: "not completed",
  });

  const [filter, setFilter] = useState("all");

  const handleChange = (e) => {
    setNewTodo({
      ...newTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo({ taskName: "", description: "", status: "not completed" });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-success text-center mb-4">My todo</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          name="taskName"
          placeholder="Task name"
          value={newTodo.taskName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          name="description"
          placeholder="Description"
          value={newTodo.description}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-success mb-3" onClick={handleCreateTodo}>
        Add Todo
      </button>
      <div className="mb-3">
        <select
          className="form-select"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="not completed">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="row"></div>
    </div>
  );
}

export default TodoApp;
