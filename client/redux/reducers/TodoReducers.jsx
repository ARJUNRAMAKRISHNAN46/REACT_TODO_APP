import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "../actions/TodoActions";

const initialState = {
  loading: false,
  error: false,
  message: "",
  data: [],
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = false;
        state.todo = payload.todo;
      })
      .addCase(addTodo.rejected, (state, { payload }) => {
        state.loading = false;
        const errorPayload = payload.error;
        state.error = errorPayload;
      });
  },
});

export default todoReducer.reducer;
export const { resetMessage } = todoReducer.actions;
