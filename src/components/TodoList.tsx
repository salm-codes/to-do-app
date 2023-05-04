import { useDispatch } from "react-redux";
import { Todo } from "../App";
import { removeTodoAction, toggleTodoAction } from "../store/actions";

type TodoListProps = {
  filter: string;
  todos: Todo[];
};

type ListProps = {
  todo: Todo;
};

function List(props: ListProps) {
  const dispatch = useDispatch();

  return (
    <div className="todo-list-container">
      <ul>
        <li key={props.todo.id}>
          <label className="label-container">
            <input
              type="checkbox"
              checked={props.todo.completed}
              onChange={() => dispatch(toggleTodoAction(props.todo.id))}
            />
            <span className="checkmark"></span>
            <span className="todo">{props.todo.task}</span>
          </label>
          <button
            className="btn-delete"
            onClick={() => dispatch(removeTodoAction(props.todo.id))}
          ></button>
        </li>
      </ul>
    </div>
  );
}

const TodoList = (props: TodoListProps) => {
  return (
    <div className="todo-list-container">
      <ul>
        {props.filter === "All" &&
          props.todos.map((todo) => <List key={todo.id} todo={todo} />)}

        {props.filter === "Active" &&
          props.todos
            .filter((todo) => todo.completed !== true)
            .map((filteredTodo) => (
              <List key={filteredTodo.id} todo={filteredTodo} />
            ))}

        {props.filter === "Completed" &&
          props.todos
            .filter((todo) => todo.completed !== false)
            .map((filteredTodo) => (
              <List key={filteredTodo.id} todo={filteredTodo} />
            ))}
      </ul>
    </div>
  );
};

export default TodoList;
