export default function Form() {
  return (
    <form className="form">
      <input
        type="text"
        id="todo_input"
        autoComplete="off"
        placeholder="What needs to be done?"
        maxLength={36}
      />
      <button className="btn btn-clear">Add</button>
    </form>
  );
}
