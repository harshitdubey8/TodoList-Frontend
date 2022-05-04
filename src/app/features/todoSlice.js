import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        { title: action.payload, id: Math.random().toString(), status: false },
      ];
    },
    todoCompleteStatus: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, status: true } : todo
      );
    },
    todoUncompleteStatus: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, status: false } : todo
      );
    },
  },
});

export const { createTodo, todoCompleteStatus, todoUncompleteStatus } =
  todoSlice.actions;

export const selectTodos = (state) =>
  state.todoList.todos.filter((todo) => !todo.status);
export const selectCompletedTodos = (state) =>
  state.todoList.todos.filter((todo) => todo.status);

export default todoSlice.reducer;
