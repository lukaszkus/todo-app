import React from "react";

import styled from "styled-components";

const ModalContainer = styled.div`
  position: relative;
`;

const ModalContent = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
`;

function Modal({ children }) {
  return (
    <ModalContainer>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
}

export default Modal;
