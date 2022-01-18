import React from "react";
import styled from "styled-components";
import crossIcon from "../images/icon-cross.svg";
import editIcon from "../images/edit.png";
import ReactTooltip from "react-tooltip";

const handleIconType = (btnType) => {
  switch (btnType) {
    case "Add":
      return `background: url(${crossIcon}); transform: rotate(45deg)`;
    case "Remove":
      return `background: url(${crossIcon}); transform: 0`;
    case "Edit":
      return `background: url(${editIcon}); transform: 0`;
    default:
      return null;
  }
};

const Btn = styled.button`
  ${({ btnType }) => handleIconType(btnType)};
  background-repeat: no-repeat;
  background-size: contain;
  height: 15px;
  width: 15px;
  border: 0;

  &:hover {
    cursor: pointer;
  }
`;

function Button({ btnType }) {
  return (
    <>
      <Btn role="button" type="submit" data-tip={btnType} btnType={btnType} />
      <ReactTooltip />
    </>
  );
}

export default Button;
