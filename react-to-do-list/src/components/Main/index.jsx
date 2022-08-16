import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Main({ tasks, setTasks, hide }) {
  const [allSelected, setAllSelected] = useState(false);

  const checkTask = (e) => {
    let tasksArr = tasks.map((task) => {
      if (e.target.id === task.id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    setTasks(tasksArr);
  };

  const isCompleted = (task) => {
    if (task.checked && hide === "All") {
      return "completed";
    } else if (task.checked && hide === "Active") {
      return "completed hidden";
    } else if (!task.checked && hide === "Completed") {
      return "hidden";
    }
  };

  const deleteTask = (e) => {
    setTasks(tasks.filter((task) => task.id !== e.target.id));
  };

  const selectAll = () => {
    setAllSelected((prev) => !prev);
    if (!allSelected) {
      setTasks(tasks.map((task) => ({ ...task, checked: false })));
    } else {
      setTasks(tasks.map((task) => ({ ...task, checked: true })));
    }
  };

  return (
    <div className="main">
      <input onClick={selectAll} className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={uuidv4()} id={task.id} className={isCompleted(task)}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={task.checked}
                id={task.id}
                onClick={checkTask}
              />
              <label>{task.task}</label>
              <button
                id={task.id}
                className="destroy"
                onClick={deleteTask}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
