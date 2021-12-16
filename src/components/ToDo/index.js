import React from "react";

import { ToDoContainer, ToDoForm, ToDoList, ToDoItem } from "./ToDoElements";

export default function ToDo() {
  return (
    <ToDoContainer>
      <ToDoForm />
      <ToDoList>
        <ToDoItem />
      </ToDoList>
    </ToDoContainer>
  );
}
