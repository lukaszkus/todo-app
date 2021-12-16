import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    // transition: all 0.5s linear;
    width: 100%;
    height: 100%;
    position: relative;
    
    &:before {
      content: "";
      position: absolute;
      background-image: ${({ theme }) => theme.bgMobImg};
      background-repeat: no-repeat;
      background-position: top center;
      background-size: cover;
      width: 100%;
      height: 200px;
      z-index: -1;
    }
  }

  @media screen and (min-width: 768px){
    body {
      &:before {
        content: "";
        position: absolute;
        background-image: ${({ theme }) => theme.bgDeskImg};
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        width: 100%;
        height: 300px;
        z-index: -1;
      }
    }
  }
`;
