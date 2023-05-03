import React, { useState } from "react";

type HandleTodoProps = {
  onHandleTodo: (todo: string) => void;
};

export default function Form(props: HandleTodoProps) {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onHandleTodo(input);
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
      <button type="submit" className="btn btn-clear">
        Add
      </button>
    </form>
  );
}
