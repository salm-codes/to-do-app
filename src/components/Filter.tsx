import { useDispatch } from "react-redux";
import { Todo } from "../App";
import { clearCompletedAction, filterAction } from "../store/actions";

type FilterProps = {
  filter: string;
  todos: Todo[];
};

function Filter(props: FilterProps) {
  const dispatch = useDispatch();
  return (
    <div className="footer">
      <span className="todos-count">
        <strong>
          {props.todos.length === 0
            ? "No"
            : props.todos.filter((x) => !x.completed).length}
        </strong>{" "}
        item left
      </span>
      <div className="filters">
        <button
          className={props.filter === "All" ? "btn-clear active" : "btn-clear"}
          onClick={() => dispatch(filterAction("All"))}
        >
          All
        </button>
        <button
          className={
            props.filter === "Active" ? "btn-clear active" : "btn-clear"
          }
          onClick={() => dispatch(filterAction("Active"))}
        >
          Active
        </button>
        <button
          className={
            props.filter === "Completed" ? "btn-clear active" : "btn-clear"
          }
          onClick={() => {
            dispatch(filterAction("Completed"));
          }}
        >
          Completed
        </button>
      </div>

      {props.todos.length !== 0 && (
        <button
          className="btn-clear"
          onClick={() => dispatch(clearCompletedAction())}
        >
          Clear completed
        </button>
      )}
    </div>
  );
}

export default Filter;
