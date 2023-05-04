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
  const todos = useSelector((state: any = {}) => state.todosSlice);
  const filter = useSelector((state: any = {}) => state.filterSlice);

  return (
    <>
      <div className="todoapp">
        <h1>Todos</h1>
        <div className="card">
          <Form />
          <TodoList filter={filter} todos={todos} />
          <Filter filter={filter} todos={todos} />
        </div>
      </div>
    </>
  );
}

export default App;
