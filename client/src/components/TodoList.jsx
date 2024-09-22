import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todoData = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos([...todoData]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, index) =>
      index === idx ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleDeleteTodo = (idx) => {
    const updatedTodos = todos.filter((_, index) => index !== idx);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="bg-gray-800 h-[92vh] md:px-32 pt-6">
      {todos.map((todo, idx) => (
        <div
          key={idx}
          className={`border border-gray-500 p-2 m-2 mt-0 md:px-10 flex justify-between ${
            todo.completed ? "bg-green-500" : ""
          }`}
        >
          <h1 className="text-white">{idx + 1}</h1>
          <h1
            className={`text-white ${todo.completed ? "line-through" : ""}`}
            onClick={() => handleToggleComplete(idx)}
          >
            {todo.text}
          </h1>
          <div className="flex justify-between">
            <button
              className="text-white px-6 rounded-full font-thin bg-yellow-600"
              onClick={() => handleToggleComplete(idx)}
            >
              {todo.completed ? "Unmark" : "Mark"}
            </button>
            <button
              className="text-white px-6 ml-4 rounded-full font-thin bg-red-600"
              onClick={() => handleDeleteTodo(idx)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
