import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

type TodosState = Todo[];

const initialState: TodosState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<{ id: string; text: string }>) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    todoToggled(state, action: PayloadAction<string>) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { todoAdded, todoToggled } = todosSlice.actions;
export default todosSlice.reducer;
