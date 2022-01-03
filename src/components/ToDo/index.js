import React from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";

import {
  Container,
  // Form,
  List,
  Item,
  CheckBox,
  // Input,
  Btn,
  Div,
} from "./ToDoElements";

export default function ToDo() {
  const [todos, setTodos] = useState([
    { text: "Task 1" },
    { text: "Task 2" },
    { text: "Task 3" },
  ]);
  // const [value, setValue] = useState("");

  // const addTodo = (text) => {
  //   const newTodos = [...todos, { text }];
  //   setTodos(newTodos);
  // };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  // const handleAdd = (e) => {
  //   e.preventDefault();
  //   if (!value) return;
  //   addTodo(value);
  //   setValue("");
  // };

  return (
    <Container>
      <AddTodo />
      {/* <Form>
        <Input
          type="text"
          placeholder="Create a new todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Btn role="button" Function="Add" onClick={handleAdd} />
      </Form> */}
      <List>
        {todos.map((todo, index) => (
          <Item key={index} index={index}>
            <CheckBox type="checkbox" onClick={() => completeTodo(index)} />
            <Div
              style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
            >
              {todo.text}
            </Div>
            <Btn
              role="button"
              Function="Remove"
              onClick={() => removeTodo(index)}
            />
          </Item>
        ))}
      </List>
    </Container>
  );
}
