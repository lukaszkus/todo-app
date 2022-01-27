import React from "react";
import { useState } from "react";
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
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const handleDisplayAll = () => setFilteredTodos(todos);

  const activeTodosFiltered = todos.filter(
    (todo) => todo.data.completed === false
  );
  const handleDisplayActive = () => setFilteredTodos(activeTodosFiltered);

  const completedTodosFiltered = todos.filter(
    (todo) => todo.data.completed === true
  );
  const handleDisplayCompleted = () => setFilteredTodos(completedTodosFiltered);

  return (
    <Container>
      <AddTodo />
      <List>
        {filteredTodos.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            completed={todo.data.completed}
            value={todo.data.value}
          />
        ))}
      </List>
      <button onClick={handleDisplayAll}>All</button>
      <button onClick={handleDisplayActive}>Active</button>
      <button onClick={handleDisplayCompleted}>Completed</button>
    </Container>
  );
}

export default TodoList;
