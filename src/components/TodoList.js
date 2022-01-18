import React from "react";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

import styled from "styled-components";
// import { clr } from "../utils/variables";
// import checkIcon from "../../images/icon-check.svg";

import AddTodo from "./AddTodo";
import Todo from "./Todo";

export const Container = styled.main``;

export const List = styled.ul`
  list-style: none;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  margin-bottom: 50px;
`;

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <Container>
      <AddTodo />
      <List>
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            completed={todo.data.completed}
            value={todo.data.value}
          />
        ))}
      </List>
    </Container>
  );
}

export default TodoList;
