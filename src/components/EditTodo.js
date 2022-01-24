import React from "react";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

import styled from "styled-components";
import Button from "./Button";
import Modal from "./Modal";

const EditForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  width: 500px;
  padding: 15px 20px;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  margin-bottom: 1rem;
  box-shadow: 0px 20px 30px -10px ${({ theme }) => theme.shadow};

  @media screen and (min-width: 768px) {
  }
`;

const EditInput = styled.input`
  width: 100%;
  height: 20px;
  margin-right: 15px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 12px;
  border: none;
  background: transparent;
  outline: none;
`;

function EditTodo({ showModal, editValue, id }) {
  const [value, setValue] = useState(editValue);

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log("update");
    const todoDocRef = doc(db, "todos", id);
    try {
      await updateDoc(todoDocRef, {
        value: value,
      });
      showModal();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal>
      <EditForm onSubmit={handleUpdate} name="editTodo">
        <EditInput
          type="text"
          name="edit value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button btnType="Save" type="submit" />
        <Button btnType="Close" type="button" onClick={showModal} />
      </EditForm>
    </Modal>
  );
}

export default EditTodo;
