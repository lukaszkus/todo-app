import React from "react";

import { HeaderContainer, HeaderTitle, HeaderBtn } from "./HeaderElements";

export default function Header({ themeToggle }) {
  return (
    <HeaderContainer>
      <HeaderTitle>TODO</HeaderTitle>
      <HeaderBtn onClick={themeToggle} />
    </HeaderContainer>
  );
}
