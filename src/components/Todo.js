import React from "react";
import { useState } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

import styled from "styled-components";
// import { clr } from "../utils/variables";
// import checkIcon from "../images/icon-check.svg";

import Button from "./Button";
import EditTodo from "./EditTodo";
import Checkbox from "./CheckBox";

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

const TodoText = styled.p`
  flex-grow: 2;
  max-width: 405px;
  line-height: 1.5;
  overflow-wrap: anywhere;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  opacity: ${(props) => (props.checked ? 0.4 : 1)};
`;

const TodoButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const TodoBtnContainer = styled.div`
  display: grid;
  place-items: center;
`;

function Todo({ value, id, completed }) {
  const [displayBtn, setDisplayBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checked, setChecked] = useState(completed);

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

  const handleUpdate = async () => {
    console.log("change");
    const todoDocRef = doc(db, "todos", id);
    try {
      await updateDoc(todoDocRef, {
        completed: checked,
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
        onMouseLeave={(e) => hideBtn(e)}>
        <Checkbox
          id={id}
          checked={checked}
          setChecked={setChecked}
          handleUpdate={handleUpdate}
        />
        <TodoText checked={checked}>{value}</TodoText>
        <TodoButtons>
          <TodoBtnContainer onClick={showModal}>
            {displayBtn && <Button btnType="Edit" />}
          </TodoBtnContainer>
          <TodoBtnContainer onClick={handleDelete}>
            {displayBtn && <Button btnType="Remove" />}
          </TodoBtnContainer>
        </TodoButtons>
      </TodoItem>
      {isModalOpen && (
        <EditTodo showModal={showModal} editValue={value} id={id} />
      )}
    </>
  );
}

export default Todo;
