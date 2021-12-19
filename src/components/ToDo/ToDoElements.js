import styled from "styled-components";
import { clr } from "../variables";

import crossIcon from "../../images/icon-cross.svg";
import checkIcon from "../../images/icon-check.svg";

export const Container = styled.main``;

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
    content: url(${checkIcon});
    background-image: ${clr.gradient};
    transform: scale(0);
    width: 20px;
    aspect-ratio: 1;
    border-radius: 50%;
  }
  &:checked::before {
    transform: scale(1);
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  margin-bottom: 1rem;
  position: relative;

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
  position: relative;
`;

export const Div = styled.div`
  width: 100%;
`;
