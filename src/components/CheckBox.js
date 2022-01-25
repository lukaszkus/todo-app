import React from "react";
import styled from "styled-components";

import { clr } from "../utils/variables";
import checkIcon from "../images/icon-check.svg";

const CheckboxContainer = styled.div``;

const CheckboxInput = styled.input`
  display: none;
`;

const CheckboxLabel = styled.label`
  display: grid;
  place-content: center;
  position: relative;
  cursor: pointer;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.line};

  &:hover {
    border: 1px solid ${clr.bright};
  }

  &:before {
    content: "";
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: ${(props) => (props.checked ? clr.gradient : "transparent")};
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 11px;
    height: 9px;
    background: url(${(props) => (props.checked ? checkIcon : null)});
  }
`;

const Checkbox = ({ id, checked, setChecked, handleUpdate }) => (
  <CheckboxContainer>
    <CheckboxInput
      id={`checkbox-${id}`}
      type="checkbox"
      checked={checked}
      onChange={handleUpdate}
    />
    <CheckboxLabel
      htmlFor={`checkbox-${id}`}
      checked={checked}
      onClick={() => setChecked(!checked)}></CheckboxLabel>
  </CheckboxContainer>
);

export default Checkbox;
