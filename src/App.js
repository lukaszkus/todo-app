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

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Header themeToggle={themeToggle} />
        <TodoList todos={todos} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
