import React from "react";
import { useState } from "react";

import styled from "styled-components";
import { clr } from "../utils/variables";
// import checkIcon from "../../images/icon-check.svg";

import AddTodo from "./AddTodo";
import Button from "./Button";

export const Container = styled.main``;

export const CheckBox = styled.input`
  appearance: none;
  margin-right: 15px;
  width: 20px;
  aspect-ratio: 1;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 50%;
  display: grid;
  place-content: center;
  &:hover {
    border: 1px solid ${clr.bright};
    cursor: pointer;
  }
  &::before {
    // content: "";
    background-image: ${clr.gradient};
    transform: scale(0);
    // border-radius: 50%;
  }
  &:checked::before {
    transform: scale(1);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 20px;
  margin-right: 15px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 12px;
  border: none;
  background: transparent;
  outline: none;
`;

export const List = styled.ul`
  list-style: none;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
  &:last-child {
    border: none;
  }
  position: relative;
`;

export const Div = styled.div`
  width: 100%;
`;

function TodoList() {
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

  // const removeTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // };

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
      <List>
        {todos.map((todo, index) => (
          <Item key={index} index={index}>
            <CheckBox type="checkbox" onClick={() => completeTodo(index)} />
            <Div
              style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
            >
              {todo.text}
            </Div>
            <Button Function="Remove" />
          </Item>
        ))}
      </List>
    </Container>
  );
}

export default TodoList;
