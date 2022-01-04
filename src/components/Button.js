import React from "react";
import styled from "styled-components";
import crossIcon from "../images/icon-cross.svg";

const Btn = styled.button`
  background: url(${crossIcon});
  background-repeat: no-repeat;
  background-size: contain;
  height: 15px;
  width: 15px;
  border: 0;
  transform: ${(props) => (props.Function === "Add" ? "rotate(45deg)" : "0")};

  &:hover {
    cursor: pointer;
  }
`;

function Button({ Function }) {
  return <Btn role="button" Function={Function} type="submit" />;
}

export default Button;
