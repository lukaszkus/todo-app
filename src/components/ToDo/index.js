import React from "react";

import {
  ToDoContainer,
  ToDoForm,
  ToDoList,
  ToDoItem,
  FormInput,
  FormBtn,
} from "./ToDoElements";

export default function ToDo() {
  return (
    <ToDoContainer>
      <ToDoForm>
        <FormInput />
        <FormBtn>Add</FormBtn>
      </ToDoForm>
      <ToDoList>
        <ToDoItem />
      </ToDoList>
    </ToDoContainer>
  );
}
