import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

export default function App() {
  return (
    <>
      <div className="todoapp">
        <h1>Todos</h1>
        <div className="card">
          <Form />
          <TodoList />
          <Filter />
        </div>
      </div>
    </>
  );
}
