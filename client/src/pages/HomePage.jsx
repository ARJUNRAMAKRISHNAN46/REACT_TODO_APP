import React, { useState } from "react";
import TodoList from "../components/TodoList";
import Navbar from "../components/Navbar";
import AddTodo from "../components/AddTodo";

const HomePage = () => {
  const [state, setState] = useState(false);
  const handleModal = () => {
    setState(!state);
  };
  return (
    <div>
      <Navbar setState={handleModal} state={state} />
      {state ? <AddTodo setState={handleModal} /> : <TodoList />}
    </div>
  );
};

export default HomePage;
