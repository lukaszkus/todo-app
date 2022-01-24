import React from "react";
import { useState } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

import styled from "styled-components";
// import { clr } from "../utils/variables";
// import checkIcon from "../../images/icon-check.svg";

import Button from "./Button";
import EditTodo from "./EditTodo";
import CheckBox from "./CheckBox";

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

// const CheckBoxContainer = styled.div`
//   display: inline-block;
//   vertical-align: middle;
// `;

// const HiddenCheckBox = styled.input.attrs({ type: "checkbox" })`
//   border: 0;
//   clip: rect(0 0 0 0);
//   clippath: inset(50%);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
//   // appearance: none;
//   // width: 18px;
//   // aspect-ratio: 1;
//   // border: 1px solid ${({ theme }) => theme.line};
//   // border-radius: 50%;
//   // display: grid;
//   // place-content: center;
// `;

// const StyledCheckbox = styled.div`
//   display: inline-block;
//   width: 18px;
//   height: 18px;
//   border: 1px solid ${({ theme }) => theme.line};
//   border-radius: 50%;
//   transition: all 150ms;
// `;

// const CheckBoxLabel = styled.label`
//   display: inline-block;
//   position: relative;
//   vertical-align: middle;
//   margin: 5px;
//   cursor: pointer;
//   background-color: red;
// `;

// const Div = styled.div`
//   width: 20px;
//   height: 20px;
//   display: grid;
//   place-items: center;
// `;

const TodoTxt = styled.p`
  flex-grow: 2;
  max-width: 400px;
  line-height: 1.5;
  overflow-wrap: anywhere;
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
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

function Todo({ value, id, completed }) {
  const [displayBtn, setDisplayBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(completed);

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const showBtn = (e) => {
    e.preventDefault();
    setDisplayBtn(true);
  };

  const hideBtn = (e) => {
    e.preventDefault();
    setDisplayBtn(false);
  };

  const handleChange = () => {
    setIsCompleted(!isCompleted);
    handleUpdate();
  };

  const handleUpdate = async () => {
    console.log("change");
    const todoDocRef = doc(db, "todos", id);
    try {
      await updateDoc(todoDocRef, {
        completed: isCompleted,
      });
    } catch (err) {
      alert(err);
    }
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
    <>
      <TodoItem
        onMouseEnter={(e) => showBtn(e)}
        onMouseLeave={(e) => hideBtn(e)}
      >
        <label>
          <CheckBox checked={isCompleted} onChange={handleChange} />
        </label>
        {/* <CheckBoxContainer>
          <HiddenCheckBox
            type="checkbox"
            id={`checkbox-${id}`}
            checked={isCompleted}
            onChange={handleChange}
          />
          <CheckBoxLabel
            htmlFor={`checkbox-${id}`}
            onClick={() => setIsCompleted(!isCompleted)}
          >
            l
          </CheckBoxLabel>
          <StyledCheckbox checked={isCompleted} />
        </CheckBoxContainer> */}
        <TodoTxt isCompleted={isCompleted}>{value}</TodoTxt>
        <BtnContainer>
          <TestDiv onClick={showModal}>
            {displayBtn && <Button btnType="Edit" />}
          </TestDiv>
          <TestDiv onClick={handleDelete}>
            {displayBtn && <Button btnType="Remove" />}
          </TestDiv>
        </BtnContainer>
      </TodoItem>
      {isModalOpen && (
        <EditTodo showModal={showModal} editValue={value} id={id} />
      )}
    </>
  );
}

export default Todo;
