import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Input({ tasks, setTasks }) {
  const [form, setForm] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    setTasks([...tasks, { id: uuidv4(), task: form, checked: false }]);
  };

  useEffect(() => {
    setForm("");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={form} // form verisini value'ya eşitliyoruz.
          onChange={(e) => setForm(e.target.value)} // value değiştiğinde form state'ine value'yu set ediyoruz.
        />
      </form>
    </header>
  );
}

export default Input;
