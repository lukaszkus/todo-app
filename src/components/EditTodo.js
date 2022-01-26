import React from "react";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import Button from "./Button";
import Modal from "./Modal";

const EditContainer = styled.div`
  width: 100%;
  padding: 15px 20px;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  box-shadow: 0px 20px 30px 20px ${({ theme }) => theme.shadow};

  @media screen and (min-width: 768px) {
  }
`;

const EditForm = styled.form`
  width: 100%;
`;

const EditHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
`;

const EditTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textDisabled};
`;

const EditInput = styled.input`
  width: 100%;
  padding: 20px 0;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  border: none;
  background: transparent;
  outline: none;
`;

const EditFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.line};
`;

const BtnContainer = styled.div`
  display: grid;
  place-items: center;
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
      <EditContainer>
        <EditHeader>
          <EditTitle>Edit</EditTitle>
          <BtnContainer onClick={showModal}>
            <Button btnType="Close" />
          </BtnContainer>
        </EditHeader>
        <EditForm onSubmit={handleUpdate} name="editTodo">
          <EditInput
            type="text"
            name="edit value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            data-tip="Edit"
          />
          <ReactTooltip globalEventOff="click" />
          <EditFooter>
            <Button btnType="Save" type="submit" />
          </EditFooter>
        </EditForm>
      </EditContainer>
    </Modal>
  );
}

export default EditTodo;
