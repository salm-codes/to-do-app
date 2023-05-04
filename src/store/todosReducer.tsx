type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

function todosReducer(
  state: Todo[] = [
    { id: "todo-ldlm73jq", task: "pay wifi bill", completed: true },
    { id: "todo-ldlm53fs", task: "read a book", completed: true },
    { id: "todo-ldlmfb1q", task: "push code to github", completed: true },
    { id: "todo-ldlm21fd", task: "buy eggs", completed: false },
    { id: "todo-ldlm7abs", task: "Hit the Gym", completed: false },
  ],
  action: any = {}
) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          task: action.payload.task,
          completed: false,
        },
      ];

    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);

    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
}

export default todosReducer;
