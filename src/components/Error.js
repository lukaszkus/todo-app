import React from "react";

import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import Button from "./Button";
import Modal from "./Modal";

const ErrorContainer = styled.div`
  width: 100%;
  padding: 15px 20px;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  box-shadow: 0px 20px 30px 20px ${({ theme }) => theme.shadow};

  @media screen and (min-width: 768px) {
  }
`;

const ErrorForm = styled.form`
  width: 100%;
`;

const ErrorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
`;

const ErrorTitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textDisabled};
`;

const ErrorMsg = styled.p`
  width: 100%;
  padding: 20px 0;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  border: none;
  background: transparent;
  outline: none;
`;

const BtnContainer = styled.div`
  display: grid;
  place-items: center;
`;

function Error({ showError, errorText }) {
  return (
    <Modal>
      <ErrorContainer>
        <ErrorHeader>
          <ErrorTitle>Error</ErrorTitle>
          <BtnContainer onClick={showError}>
            <Button btnType="Close" />
          </BtnContainer>
        </ErrorHeader>
        <ErrorForm>
          <ErrorMsg>{errorText}</ErrorMsg>
          <ReactTooltip />
        </ErrorForm>
      </ErrorContainer>
    </Modal>
  );
}

export default Error;
