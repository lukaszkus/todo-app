import { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/themes";

import Header from "./components/Header";
import ToDo from "./components/ToDo";
import Footer from "./components/Footer";

const Container = styled.div`
  margin: 0 auto;
  max-width: 540px;
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
        <Header themeToggle={themeToggle} theme={theme} />
        <ToDo />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
