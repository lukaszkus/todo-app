import styled from "styled-components";
import { clrPrimary } from "../variables";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3.125rem 0 2.5rem 0;

  @media screen and (min-width: 768px) {
    padding: 78px 0 3.125rem 0;
  }
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  letter-spacing: 11px;
  color: ${clrPrimary.white};

  @media screen and (min-width: 768px) {
    font-size: 1.9rem;
    letter-spacing: 18px;
  }
`;

export const ToggleBtn = styled.div`
  background: ${({ theme }) => theme.toggleIcon};
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 1;
  height: 1.25rem;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 1.5rem;
  }
`;
