import React from "react";
import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

import styled from "styled-components";
import { clr } from "../utils/variables";
// import checkIcon from "../../images/icon-check.svg";

import Button from "./Button";

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
  &:last-child {
    border: none;
  }
  position: relative;
`;

const CheckBox = styled.input`
  appearance: none;
  margin-right: 15px;
  width: 20px;
  height: 20px;
  // aspect-ratio: 1;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 50%;
  display: grid;
  place-content: center;
  &:hover {
    border: 1px solid ${clr.bright};
    cursor: pointer;
  }
  &::before {
    content: "";
    background-image: ${clr.gradient};
    transform: scale(0);
    border-radius: 50%;
  }
  &:checked::before {
    // transform: scale(1);
  }
`;

const TodoTxt = styled.p`
  width: 100%;
`;

const TestDiv = styled.div``;

function Todo({ value, id }) {
  const [display, setDisplay] = useState(false);

  const showBtn = (e) => {
    e.preventDefault();
    setDisplay(true);
  };

  const hideBtn = (e) => {
    e.preventDefault();
    setDisplay(false);
  };

  const handleDelete = async () => {
    console.log("delete");
    const todoDocRef = doc(db, "todos", id);
    try {
      await deleteDoc(todoDocRef);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <TodoItem onMouseEnter={(e) => showBtn(e)} onMouseLeave={(e) => hideBtn(e)}>
      <CheckBox type="checkbox" />
      <TodoTxt>{value}</TodoTxt>
      {display && <Button btnType="Edit" />}
      <TestDiv onClick={handleDelete}>
        {display && <Button btnType="Remove" />}
      </TestDiv>
    </TodoItem>
  );
}

export default Todo;
