import ListHeader from "./ListHeader";
import ListItem from "./ListItem";
import React from "react";
import ListFooter from "./ListFooter";
import { useState } from "react";

function List() {
  const [listItems, setListItems] = useState([
    "Learn JavaScript",
    "Learn React",
    "Have a life!",
  ]);

  return (
    <section className="todoapp">
      <ListHeader />
      <ListItem todoItems={listItems} />
      <ListFooter />
    </section>
  );
}

export default List;
