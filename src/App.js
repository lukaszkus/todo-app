import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { GlobalStyles } from "./utils/globalStyles";
import { lightTheme, darkTheme } from "./utils/themes";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./utils/firebaseConfig";

import Header from "./components/Header.js";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer.js";

const Container = styled.div`
  margin: 0 auto;
  max-width: 588px;
  padding-inline: 1.5rem;
`;

function App() {
  const [theme, setTheme] = useState("light");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("created", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.data.completed;
      case "completed":
        return todo.data.completed;
      default:
        return todo;
    }
  });

  const handleFilterAll = () => {
    setFilter("all");
  };

  const handleFilterActive = () => {
    setFilter("active");
  };

  const handleFilterCompleted = () => {
    setFilter("completed");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Header themeToggle={themeToggle} />
        <TodoList todos={filteredTodos} />
        <Footer
          filter={filter}
          todos={filteredTodos}
          handleFilterAll={handleFilterAll}
          handleFilterActive={handleFilterActive}
          handleFilterCompleted={handleFilterCompleted}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
