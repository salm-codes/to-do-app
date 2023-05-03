export default function Filter() {
  return (
    <div className="footer">
      <span className="todo-count">
        <strong>0</strong> item left
      </span>
      <div className="filters">
        <button className="btn-clear">All</button>
        <button className="btn-clear">Active</button>
        <button className="btn-clear">Completed</button>
      </div>
      <button className="btn-clear">Clear completed</button>
    </div>
  );
}
