import React, { useState } from "react";

const AddTodo = ({ setState }) => {
  const [todo, setTodo] = useState("");

  const handleClick = () => {
    if (todo.trim() === "") return;

    const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

    const updatedTodos = [...existingTodos, { text: todo, completed: false }];

    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    console.log("Todo added to localStorage:", todo);

    setTodo("");

    if (setState) setState(false);
  };

  return (
    <div className="flex justify-center items-center h-[92vh] w-[100vw] bg-gray-800">
      <div className="w-[400px] h-[200px] bg-rose-500 flex flex-col px-10 py-4">
        <div className="flex justify-end">
          <span
            className="text-white font-bold cursor-pointer"
            onClick={setState}
          >
            X
          </span>
        </div>
        <input
          type="text"
          placeholder="Enter your activity"
          value={todo}
          className="py-2 px-4 outline-none"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="mt-6 px-8 rounded-full bg-green-500 py-1 text-white"
          onClick={handleClick}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
