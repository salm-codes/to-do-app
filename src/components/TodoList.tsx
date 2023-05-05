import { useDispatch } from "react-redux";
import { Todo } from "../App";
import {
  editTodoAction,
  removeTodoAction,
  toggleTodoAction,
} from "../store/reducer";
import { MdOutlineEdit } from "react-icons/md";

type TodoListProps = {
  filterState: string;
  todos: Todo[];
};

type ListProps = {
  todo: Todo;
};

function List(props: ListProps) {
  const dispatch = useDispatch();

  const handleEdit = (e: any) => {
    e.preventDefault();
    let editTask;
    if (props.todo.completed !== true) {
      editTask = prompt("Edit task", props.todo.task);
    }
    if (editTask && editTask !== props.todo.task)
      dispatch(editTodoAction({ id: props.todo.id, task: editTask }));
  };

  return (
    <div>
      <ul>
        <li key={props.todo.id}>
          <label className="label-container">
            <input
              type="checkbox"
              checked={props.todo.completed}
              onChange={() => dispatch(toggleTodoAction({ id: props.todo.id }))}
            />
            <span className="checkmark"></span>
            <span className="todo">{props.todo.task}</span>
          </label>
          <button
            className="btn-edit"
            style={{ color: props.todo.completed ? "grey" : "black" }}
            onClick={handleEdit}
          >
            <MdOutlineEdit size={21} />
          </button>
          <button
            className="btn-delete"
            onClick={() => dispatch(removeTodoAction({ id: props.todo.id }))}
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
        {props.filterState === "All" &&
          props.todos.map((todo) => <List key={todo.id} todo={todo} />)}

        {props.filterState === "Active" &&
          props.todos
            .filter((todo) => todo.completed !== true)
            .map((filteredTodo) => (
              <List key={filteredTodo.id} todo={filteredTodo} />
            ))}

        {props.filterState === "Completed" &&
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
