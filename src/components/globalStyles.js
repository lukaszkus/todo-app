import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    // transition: all 0.5s linear;
    background-image: ${({ theme }) => theme.bgMobImg};
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
  }
  @media screen and (min-width: 768px){
    body {
      background-image: ${({ theme }) => theme.bgDeskImg};
    }
  }
`;
