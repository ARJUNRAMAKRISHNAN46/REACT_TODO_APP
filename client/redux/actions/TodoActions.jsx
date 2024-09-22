import { createAsyncThunk } from "@reduxjs/toolkit";
import { HandleErrors } from "../../src/utils/HandleErrors";

export const addTodo = createAsyncThunk(
  "addTodo",
  async (todo, { rejectWithValue }) => {
    try {
      console.log(todo);
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(HandleErrors);
    }
  }
);
