import { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { GlobalStyles } from "./utils/globalStyles";
import { lightTheme, darkTheme } from "./utils/themes";

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

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <Header themeToggle={themeToggle} />
        <TodoList />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
