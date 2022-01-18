import React from "react";
import { useState } from "react";

import styled from "styled-components";
import { clr } from "../utils/variables";
// import checkIcon from "../../images/icon-check.svg";

import Button from "./Button";

export const TodoItem = styled.li`
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

export const TodoTxt = styled.p`
  width: 100%;
`;

function Todo({ value }) {
  const [display, setDisplay] = useState(false);

  const showBtn = (e) => {
    e.preventDefault();
    setDisplay(true);
  };

  const hideBtn = (e) => {
    e.preventDefault();
    setDisplay(false);
  };

  return (
    <TodoItem onMouseEnter={(e) => showBtn(e)} onMouseLeave={(e) => hideBtn(e)}>
      <CheckBox type="checkbox" />
      <TodoTxt>{value}</TodoTxt>
      {display && <Button btnType="Edit" />}
      {display && <Button btnType="Remove" />}
    </TodoItem>
  );
}

export default Todo;
