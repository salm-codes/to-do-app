export default function List() {
  return (
    <div className="todo-list-container">
      <ul>
        <li>
          <label className="label-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
            <span className="todo">Taste JavaScript</span>
          </label>

          <button className="btn-delete"></button>
        </li>

        <li>
          <label className="label-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
            <span className="todo">Taste JavaScript</span>
          </label>

          <button className="btn-delete"></button>
        </li>
      </ul>
    </div>
  );
}
