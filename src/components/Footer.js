import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 15px 20px;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  margin: 1.2rem 0 3rem 0;
  box-shadow: 0px 20px 30px -10px ${({ theme }) => theme.shadow};
  position: relative;
  // z-index: 1;
`;

function Footer() {
  return <FooterContainer>H</FooterContainer>;
}

export default Footer;
