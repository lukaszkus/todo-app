import styled from "styled-components";
import { clrPrimary } from "../variables";

export const ToDoContainer = styled.main``;

export const ToDoForm = styled.form`
  display: flex;
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.body};
`;

export const FormInput = styled.input`
  width: 100%;
`;

export const FormBtn = styled.button``;

export const ToDoList = styled.ul``;

export const ToDoItem = styled.li`
  background-color: ${clrPrimary.bright};
`;
