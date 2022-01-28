import { useState, useEffect } from "react";
import styled from "styled-components";
import { clr } from "../utils/variables";

const Container = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  margin-top 1.2rem;
  box-shadow: 0px 20px 30px -10px ${({ theme }) => theme.shadow};
`;

const Items = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: ${(props) => (props.width ? "center" : "space-between")};
  padding: 15px 20px;
  color: ${({ theme }) => theme.textLight};
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.line};

  &:first-child {
    border-color: ${({ theme }) => theme.line};
  }

  &:last-child {
    border: 0;
  }
`;

const TotalItems = styled.p`
  font-size: 12px;
`;

const FilteredItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const All = styled.p`
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;
const Active = styled(All)``;
const Completed = styled(All)``;

const ClearItems = styled.p`
  font-size: 12px;
`;

const Credits = styled.div`
  text-align: center;
  font-size: 10px;
  font-weight: 300;
  padding: 2rem;
  color: ${({ theme }) => theme.textLight};
`;

const Link = styled.a`
  color: ${({ theme }) => theme.textLight};

  &:hover {
    color: ${clr.bright};
  }
`;

function Footer({
  todos,
  handleFilterAll,
  handleFilterActive,
  handleFilterCompleted,
}) {
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
            <TotalItems>{todos.length} items</TotalItems>
            <FilteredItems>
              <All onClick={handleFilterAll}>All</All>
              <Active onClick={handleFilterActive}>Active</Active>
              <Completed onClick={handleFilterCompleted}>Completed</Completed>
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
              <All onClick={handleFilterAll}>All</All>
              <Active onClick={handleFilterActive}>Active</Active>
              <Completed onClick={handleFilterCompleted}>Completed</Completed>
            </FilteredItems>
          </Items>
        </Container>
      )}
      <Credits>
        Challenge by{" "}
        <Link href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </Link>
        . Coded by <Link href="https://github.com/lukaszkus">lukaszkus</Link>.
      </Credits>
    </>
  );
}

export default Footer;
