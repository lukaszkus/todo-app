import styled from "styled-components";

import AddTodo from "./AddTodo";
import Todo from "./Todo";

export const Container = styled.main``;

export const List = styled.ul`
  list-style: none;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  box-shadow: 0px 20px 30px -10px ${({ theme }) => theme.shadow};
`;

function TodoList({ todos }) {
  return (
    <Container>
      <AddTodo />
      <List>
        {todos.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            completed={todo.data.completed}
            value={todo.data.value}
          />
        ))}
      </List>
    </Container>
  );
}

export default TodoList;
