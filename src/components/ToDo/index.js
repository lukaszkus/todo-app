import React from "react";

import {
  Container,
  Form,
  List,
  Item,
  CheckBox,
  Input,
  Btn,
} from "./ToDoElements";

export default function ToDo() {
  return (
    <Container>
      <Form>
        <CheckBox type="checkbox" />
        <Input type="text" placeholder="Create a new todo..." />
        <Btn role="button" Function="Add" />
      </Form>
      <List>
        <Item>
          <CheckBox type="checkbox" />
          <Input type="text" placeholder="Create a new todo..." />
          <Btn role="button" Function="Remove" />
        </Item>
        <Item>
          <CheckBox type="checkbox" />
          <Input type="text" placeholder="Create a new todo..." />
          <Btn role="button" />
        </Item>
        <Item>
          <CheckBox type="checkbox" />
          <Input type="text" placeholder="Create a new todo..." />
          <Btn role="button" />
        </Item>
      </List>
    </Container>
  );
}
