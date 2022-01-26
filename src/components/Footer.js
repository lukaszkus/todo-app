import { useState, useEffect } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding: 15px 20px;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  margin: 1.2rem 0 3rem 0;
  box-shadow: 0px 20px 30px -10px ${({ theme }) => theme.shadow};
`;

const TotalItems = styled.p`
  font-size: 12px;
  opacity: 0.5;
`;

const FilteredItems = styled.div`
  display: flex;
  gap: 10px;
`;

const All = styled.p`
  font-size: 14px;
  opacity: 0.5;
`;

const Active = styled.p`
  font-size: 14px;
  opacity: 0.5;
`;

const Completed = styled.p`
  font-size: 14px;
  opacity: 0.5;
`;

const ClearItems = styled.p`
  font-size: 12px;
  opacity: 0.5;
`;

function Footer({ todos }) {
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <FooterContainer>
        <TotalItems>{todos.length} items left</TotalItems>
        <FilteredItems>
          <All>All</All>
          <Active>Active</Active>
          <Completed>Completed</Completed>
        </FilteredItems>
        <ClearItems>Clear completed items</ClearItems>
      </FooterContainer>
      <div>{width > breakPoint ? <div>769px</div> : <div>768px</div>}</div>
    </>
  );
}

export default Footer;
