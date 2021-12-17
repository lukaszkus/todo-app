import styled from "styled-components";

import crossIcon from "../../images/icon-cross.svg";

export const Container = styled.main``;

export const CheckBox = styled.input`
  margin-right: 15px;
  border-radius: 50%;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 20px;
  margin-right: 15px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 12px;
  border: none;
  background: transparent;
  outline: none;
`;

export const Btn = styled.div`
  background: url(${crossIcon});
  background-repeat: no-repeat;
  background-size: contain;
  height: 15px;
  width: 15px;
  transform: ${(props) => (props.Function === "Add" ? "rotate(45deg)" : "0")};

  &:hover {
    cursor: pointer;
  }
`;

export const List = styled.ul`
  list-style: none;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.line};
  &:last-child {
    border: none;
  }
`;
