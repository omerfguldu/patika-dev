import { useState } from "react";

import Input from "./Input";
import Footer from "./Footer";
import Main from "./Main";

function Components() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [hide, setHide] = useState("All");

  return (
    <div className="todoapp">
      <Input tasks={tasks} setTasks={setTasks} />
      <Main tasks={tasks} setTasks={setTasks} hide={hide} />
      <Footer tasks={tasks} setTasks={setTasks} setHide={setHide} />
    </div>
  );
}

export default Components;
