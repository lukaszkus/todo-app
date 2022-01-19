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
  gap: 15px;
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
  &:last-child {
    border: none;
  }
`;

const CheckBox = styled.input`
  appearance: none;
  width: 18px;
  aspect-ratio: 1;
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 50%;
  display: grid;
  place-content: center;
  // &:hover {
  //   border: 1px solid ${clr.bright};
  //   cursor: pointer;
  // }
  // &::before {
  //   content: "";
  //   background-image: ${clr.gradient};
  //   transform: scale(0);
  //   border-radius: 50%;
  // }
  // &:checked::before {
  //   transform: scale(1);
  // }
`;

const Div = styled.div`
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
`;

const TodoTxt = styled.p`
  flex-grow: 2;
  max-width: 400px;
  line-height: 1.5;
  overflow-wrap: anywhere;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const TestDiv = styled.div`
  display: grid;
  place-items: center;
`;

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
      <Div>
        <CheckBox type="checkbox" />
      </Div>
      <TodoTxt>{value}</TodoTxt>
      <BtnContainer>
        <TestDiv>{display && <Button btnType="Edit" />}</TestDiv>
        <TestDiv onClick={handleDelete}>
          {display && <Button btnType="Remove" />}
        </TestDiv>
      </BtnContainer>
    </TodoItem>
  );
}

export default Todo;
