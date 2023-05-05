import { useDispatch } from "react-redux";
import { Todo } from "../App";
import { clearCompletedAction, setFilterAction } from "../store/reducer";

type FilterProps = {
  filterState: string;
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
        task left
      </span>
      <div className="filters">
        <button
          className={
            props.filterState === "All" ? "btn-clear active" : "btn-clear"
          }
          onClick={() => dispatch(setFilterAction({ filter: "All" }))}
        >
          All
        </button>
        <button
          className={
            props.filterState === "Active" ? "btn-clear active" : "btn-clear"
          }
          onClick={() => dispatch(setFilterAction({ filter: "Active" }))}
        >
          Active
        </button>
        <button
          className={
            props.filterState === "Completed" ? "btn-clear active" : "btn-clear"
          }
          onClick={() => {
            dispatch(setFilterAction({ filter: "Completed" }));
          }}
        >
          Completed
        </button>
      </div>

      {props.todos.filter((x) => x.completed).length !== 0 && (
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
