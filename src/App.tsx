import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import { useSelector } from "react-redux";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

function App() {
  const todosState = useSelector((state: any = {}) => state.todosSlice.todos);
  const filterState = useSelector((state: any = {}) => state.todosSlice.filter);

  return (
    <>
      <div className="todoapp">
        <h1>Todos</h1>
        <div className="card">
          <Form />
          <TodoList filterState={filterState} todos={todosState} />
          <Filter filterState={filterState} todos={todosState} />
        </div>
      </div>
    </>
  );
}

export default App;
