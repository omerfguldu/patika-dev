import { useEffect, useState } from "react";

const CHECKED =
  "url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E)";
const UNCHECKED =
  "url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E)";

function ListItem({ todoItems }) {
  useEffect(() => {
    const toggleAllEl = document.querySelector(".toggle-all");
    const liElements = document.querySelectorAll("li");
    const labelToggleEls = document.querySelectorAll(".label-toggle");
    toggleAllEl.addEventListener("click", () => {
      liElements.forEach((li) => {
        li.classList.toggle("completed");
        labelToggleEls.forEach((label) => {
          li.classList.contains("completed")
            ? (label.style.backgroundImage = CHECKED)
            : (label.style.backgroundImage = UNCHECKED);
        });
      });
    });
  });

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todoItems.map((item, index) => (
            <li key={index}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label className="label-toggle">{item}</label>
                <button className="destroy"></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ListItem;
