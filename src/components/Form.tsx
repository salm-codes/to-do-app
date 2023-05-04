import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/actions";

export default function Form() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodoAction(input));
    setInput("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="todo_input"
        autoComplete="off"
        placeholder="What needs to be done?"
        maxLength={36}
        value={input}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="btn btn-clear"
        disabled={input.length === 0}
      >
        Add
      </button>
    </form>
  );
}
