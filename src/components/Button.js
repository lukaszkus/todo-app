import React from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import plusIcon from "../images/icon-plus.svg";
import crossIcon from "../images/icon-cross.svg";
import editIcon from "../images/icon-edit.svg";

const iconType = (btnType) => {
  switch (btnType) {
    case "Add":
      return `background: url(${plusIcon})`;
    case "Remove":
      return `background: url(${crossIcon})`;
    case "Edit":
      return `background: url(${editIcon})`;
    case "Save":
      return `background: url(${plusIcon})`;
    case "Close":
      return `background: url(${crossIcon})`;
    default:
      return null;
  }
};

const Btn = styled.button`
  ${({ btnType }) => iconType(btnType)};
  background-repeat: no-repeat;
  background-size: contain;
  height: 18px;
  aspect-ratio: 1;
  border: 0;

  &:hover {
    cursor: pointer;
  }
`;

function Button({ btnType }) {
  return (
    <>
      <Btn data-tip={btnType} btnType={btnType} />
      <ReactTooltip />
    </>
  );
}

export default Button;
