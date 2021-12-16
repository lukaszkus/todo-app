import React from "react";

import {
  Container,
  Form,
  List,
  Item,
  CheckInput,
  TodoInput,
  AddBtn,
} from "./ToDoElements";

export default function ToDo() {
  return (
    <Container>
      <Form>
        <CheckInput type="checkbox" />
        <TodoInput type="text" placeholder="Create a new todo..." />
        <AddBtn role="button" />
      </Form>
      <List>
        <Item />
      </List>
    </Container>
  );
}
