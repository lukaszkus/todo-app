import { useState, useEffect } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";
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
  color: ${(props) => (props.filter === "all" ? clr.bright : "")};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const Active = styled.p`
  font-size: 14px;
  cursor: pointer;
  color: ${(props) => (props.filter === "active" ? clr.bright : "")};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

const Completed = styled.p`
  font-size: 14px;
  cursor: pointer;
  color: ${(props) => (props.filter === "completed" ? clr.bright : "")};
  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

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
  filter,
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
              <All
                onClick={handleFilterAll}
                filter={filter}
                data-tip="Show all"
              >
                All
              </All>
              <ReactTooltip />
              <Active
                onClick={handleFilterActive}
                filter={filter}
                data-tip="Show active"
              >
                Active
              </Active>
              <ReactTooltip />
              <Completed
                onClick={handleFilterCompleted}
                filter={filter}
                data-tip="Show completed"
              >
                Completed
              </Completed>
              <ReactTooltip />
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
              <All
                onClick={handleFilterAll}
                filter={filter}
                data-tip="Show all"
              >
                All
              </All>
              <ReactTooltip />
              <Active
                onClick={handleFilterActive}
                filter={filter}
                data-tip="Show active"
              >
                Active
              </Active>
              <ReactTooltip />
              <Completed
                onClick={handleFilterCompleted}
                filter={filter}
                data-tip="Show completed"
              >
                Completed
              </Completed>
              <ReactTooltip />
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
