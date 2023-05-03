import { Todo } from "../App";

type FilterProps = {
  filter: string;
  onHandleFilter: (filter: string) => void;
  todos: Todo[];
  onHandleClear: () => void;
};

function Filter(props: FilterProps) {
  return (
    <div className="footer">
      <span className="todos-count">
        <strong>{props.todos.length === 0 ? "No" : props.todos.length}</strong>{" "}
        item left
      </span>
      <div className="filters">
        <button
          className={props.filter === "All" ? "btn-clear active" : "btn-clear"}
          onClick={() => props.onHandleFilter("All")}
        >
          All
        </button>
        <button
          className={
            props.filter === "Active" ? "btn-clear active" : "btn-clear"
          }
          onClick={() => props.onHandleFilter("Active")}
        >
          Active
        </button>
        <button
          className={
            props.filter === "Completed" ? "btn-clear active" : "btn-clear"
          }
          onClick={() => props.onHandleFilter("Completed")}
        >
          Completed
        </button>
      </div>

      {props.todos.length !== 0 && (
        <button className="btn-clear" onClick={() => props.onHandleClear()}>
          Clear completed
        </button>
      )}
    </div>
  );
}

export default Filter;
