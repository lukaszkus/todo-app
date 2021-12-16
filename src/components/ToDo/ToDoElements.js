import styled from "styled-components";
import { clrPrimary } from "../variables";

import crossIcon from "../../images/icon-cross.svg";

export const Container = styled.main``;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  background: ${({ theme }) => theme.body};
  border-radius: 5px;
  padding-bottom: 1rem;

  @media screen and (min-width: 768px) {
  }
`;

export const CheckInput = styled.input`
  margin-right: 15px;
  border-radius: 50%;
`;

export const TodoInput = styled.input`
  width: 100%;
  height: 20px;
  margin-right: 15px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 12px;
  border: none;
  background: transparent;
  outline: none;
`;

export const AddBtn = styled.div`
  background: url(${crossIcon});
  background-repeat: no-repeat;
  background-size: contain;
  height: 15px;
  width: 15px;
  transform: rotate(45deg);

  &:hover {
    cursor: pointer;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  background-color: ${clrPrimary.bright};
`;
