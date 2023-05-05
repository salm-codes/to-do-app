import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer";

const store = configureStore({
  reducer: {
    todosSlice: todoReducer,
  },
});

export default store;
