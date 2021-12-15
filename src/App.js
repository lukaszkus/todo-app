import { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/themes";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const Title = styled.h1`
  font-size: 60px;
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Container>
          <Title>Hello World!</Title>
          <button onClick={themeToggle}>Switch Theme</button>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
