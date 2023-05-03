import React from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import { v4 as uuidv4 } from "uuid";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([
    { id: "todo-ldlm73jq", task: "pay wifi bill", completed: true },
    { id: "todo-ldlm53fs", task: "read a book", completed: true },
    { id: "todo-ldlmfb1q", task: "push code to github", completed: true },
    { id: "todo-ldlm21fd", task: "buy eggs", completed: false },
    { id: "todo-ldlm7abs", task: "Hit the Gym", completed: false },
  ]);
  const [filter, setFilter] = React.useState("All");

  const handleNewTodo = (task: string) =>
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), task, completed: false },
    ]);

  const handleCompleted = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleFilter = (filterValue: string) => {
    setFilter(filterValue);
  };

  const handleClear = () => {
    setFilter("All");
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  return (
    <>
      <div className="todoapp">
        <h1>Todos</h1>
        <div className="card">
          <Form onHandleTodo={handleNewTodo} />
          <TodoList
            todos={todos}
            onHandleCompleted={handleCompleted}
            onHandleDelete={handleDelete}
          />
          <Filter
            filter={filter}
            onHandleFilter={handleFilter}
            todos={todos}
            onHandleClear={handleClear}
          />
        </div>
      </div>
    </>
  );
}

export default App;
