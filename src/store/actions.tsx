import { v4 } from "uuid";

const addTodoAction = (task: string) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: v4(),
      task,
    },
  };
};

const removeTodoAction = (id: string) => {
  return {
    type: "REMOVE_TODO",
    payload: {
      id,
    },
  };
};

const toggleTodoAction = (id: string) => {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id,
    },
  };
};

const clearCompletedAction = () => {
  return {
    type: "CLEAR_COMPLETED",
  };
};

const filterAction = (filter: string) => {
  return {
    type: "FILTER",
    payload: {
      filter,
    },
  };
};

export {
  addTodoAction,
  removeTodoAction,
  toggleTodoAction,
  clearCompletedAction,
  filterAction,
};
