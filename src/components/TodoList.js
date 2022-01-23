import React from "react";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

import styled from "styled-components";
// import { clr } from "../utils/variables";
// import checkIcon from "../../images/icon-check.svg";

import AddTodo from "./AddTodo";
import Todo from "./Todo";
import Modal from "./Modal";

export const Container = styled.main``;

export const List = styled.ul`
  list-style: none;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  margin-bottom: 50px;
  box-shadow: 0px 20px 30px -10px ${({ theme }) => theme.shadow};
  position: relative;
  z-index: 1;
`;

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

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
            openModal={openModal}
          />
        ))}
      </List>
      <Modal show={modal} />
    </Container>
  );
}

export default TodoList;
