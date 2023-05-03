import { Todo } from "../App";

type TodoListProps = {
  todos: Todo[];
  onHandleCompleted: (id: string) => void;
  onHandleDelete: (id: string) => void;
};

function TodoList(props: TodoListProps) {
  const handleChangeCheckbox = (id: string) => {
    props.onHandleCompleted(id);
  };

  const handleDelete = (id: string) => {
    props.onHandleDelete(id);
  };

  return (
    <div className="todo-list-container">
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <label className="label-container">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleChangeCheckbox(todo.id)}
              />
              <span className="checkmark"></span>
              <span className="todo">{todo.task}</span>
            </label>

            <button
              className="btn-delete"
              onClick={() => handleDelete(todo.id)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
