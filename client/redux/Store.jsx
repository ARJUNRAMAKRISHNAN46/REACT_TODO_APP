import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./reducers/TodoReducers";

const store = configureStore({
  reducer: {
    todoData: TodoReducer,  
  },
});

export default store;
