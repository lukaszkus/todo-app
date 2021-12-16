import styled from "styled-components";
import iconSun from "../../images/icon-sun.svg";
import iconMoon from "../../images/icon-moon.svg";
import { clrPrimary } from "../variables";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.125rem 0 2.5rem 0;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.625rem;
  letter-spacing: 12px;
  color: ${clrPrimary.white};
`;

export const HeaderBtn = styled.div`
  background: ${(props) =>
    props.theme === "light" ? `url(${iconMoon})` : `url(${iconSun})`};
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1;
  height: 26px;
  cursor: pointer;
`;
