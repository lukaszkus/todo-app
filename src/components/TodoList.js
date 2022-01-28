import styled from "styled-components";

import AddTodo from "./AddTodo";
import Todo from "./Todo";

const Container = styled.main``;

const List = styled.ul`
  list-style: none;
  background: ${({ theme }) => theme.todoBg};
  border-radius: 5px;
  box-shadow: 0px 20px 30px -10px ${({ theme }) => theme.shadow};
  min-height: 96px;
`;

const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  padding: 17px 20px;
  font-size: 14px;
`;

function TodoList({ todos }) {
  const tasks = todos.map((todo) => (
    <Todo
      id={todo.id}
      key={todo.id}
      completed={todo.data.completed}
      value={todo.data.value}
    />
  ));

  return (
    <Container>
      <AddTodo />
      <List>
        {tasks.length > 0 ? (
          tasks
        ) : (
          <EmptyList>Use the input above to add some Todo.</EmptyList>
        )}
      </List>
    </Container>
  );
}

export default TodoList;
