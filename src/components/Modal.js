import React from "react";

import styled from "styled-components";

const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 100%;
  padding-inline: 1.5rem;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

function Modal({ children }) {
  return (
    <ModalContainer>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
}

export default Modal;
