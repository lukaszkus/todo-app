import React from "react";

import { Container, Title, ToggleBtn } from "./HeaderElements";

export default function Header({ themeToggle }) {
  return (
    <Container>
      <Title>TODO</Title>
      <ToggleBtn onClick={themeToggle} />
    </Container>
  );
}
