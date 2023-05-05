import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  filter: "All" | "Active" | "Completed";
}

const initialState: TodosState = {
  todos: [
    { id: "todo-ldlm73jq", task: "pay wifi bill", completed: true },
    { id: "todo-ldlm53fs", task: "read a book", completed: true },
    { id: "todo-ldlmfb1q", task: "push code to github", completed: true },
    { id: "todo-ldlm21fd", task: "buy eggs", completed: false },
    { id: "todo-ldlm7abs", task: "Hit the Gym", completed: false },
  ],
  filter: "All",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoAction: (state, action) => {
      state.todos.push({
        id: action.payload.id,
        task: action.payload.task,
        completed: false,
      });
    },

    removeTodoAction: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos.splice(index, 1);
    },

    toggleTodoAction: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].completed = !state.todos[index].completed;
    },

    editTodoAction: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].task = action.payload.task;
    },

    clearCompletedAction: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },

    setFilterAction: (state, action) => {
      state.filter = action.payload.filter;
    },
  },
});

export const {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction,
  editTodoAction,
  clearCompletedAction,
  setFilterAction,
} = todosSlice.actions;

export default todosSlice.reducer;
