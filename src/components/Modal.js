// import { useState } from "react";
// import { db } from "../utils/firebaseConfig";
// import { collection, addDoc, Timestamp } from "firebase/firestore";

import styled from "styled-components";
import Button from "./Button";

const ModalContainer = styled.div`
  position: relative;
`;

const ModalContent = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
`;

const ModalForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

const ModalInput = styled.input`
  width: 100%;
  height: 20px;
  margin-right: 15px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 12px;
  border: none;
  background: transparent;
  outline: none;
`;

function Modal({ show }) {
  return (
    <>
      {show ? (
        <ModalContainer>
          <ModalContent>
            <ModalForm name="editTodo">
              <ModalInput
                type="text"
                name="value"
                placeholder="Edit..."
                // value={value}
                // onChange={(e) => setValue(e.target.value)}
              />
              <Button btnType="Add" />
            </ModalForm>
          </ModalContent>
        </ModalContainer>
      ) : null}
    </>
  );
}

export default Modal;
