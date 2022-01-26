import { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  margin-top 1.2rem;
  box-shadow: 0px 20px 30px -10px ${({ theme }) => theme.shadow};
`;

// const Container = styled(FooterContainer)`
//   justify-content: center;
//   margin-top: 0;
// `;

const Items = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: ${(props) => (props.width ? "center" : "space-between")};
  padding: 15px 20px;

  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.line};
    // border-bottom: ${(props) => (props.width ? "0" : "1px")} solid
    //   ${({ theme }) => theme.line};
  }
`;

const TotalItems = styled.p`
  font-size: 12px;
  opacity: 0.5;
`;

const FilteredItems = styled.div`
  display: flex;
  justify-content: center;
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
      {width > breakPoint ? (
        <Container>
          <Items>
            <TotalItems>{todos.length} items left</TotalItems>
            <FilteredItems>
              <All>All</All>
              <Active>Active</Active>
              <Completed>Completed</Completed>
            </FilteredItems>
            <ClearItems>Clear completed items</ClearItems>
          </Items>
        </Container>
      ) : (
        <Container>
          <Items>
            <TotalItems>{todos.length} items left</TotalItems>
            <ClearItems>Clear completed items</ClearItems>
          </Items>
          <Items width={width}>
            <FilteredItems>
              <All>All</All>
              <Active>Active</Active>
              <Completed>Completed</Completed>
            </FilteredItems>
          </Items>
        </Container>
      )}
    </>
  );
}

export default Footer;
