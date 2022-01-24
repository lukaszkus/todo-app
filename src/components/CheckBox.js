import React from "react";
import styled from "styled-components";

import { clr } from "../utils/variables";
// import checkIcon from "../../images/icon-check.svg";

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${(props) => (props.checked ? clr.gradient : "transparent")};
  border: 1px solid ${({ theme }) => theme.line};
  border-radius: 50%;
  transition: all 150ms;
  //   width: 18px;
  //   height: 18px;
  //   border: 1px solid ${({ theme }) => theme.line};
  //   border-radius: 50%;
  //   transition: all 150ms;

  &:hover {
    border: 1px solid ${clr.bright};
    cursor: pointer;
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.text}};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const Checkbox = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
