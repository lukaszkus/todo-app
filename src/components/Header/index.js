import React from "react";

import { HeaderContainer, HeaderTitle, HeaderBtn } from "./HeaderElements";

export default function Header({ themeToggle, theme }) {
  return (
    <HeaderContainer>
      <HeaderTitle>TODO</HeaderTitle>
      <HeaderBtn onClick={themeToggle} theme={theme} />
    </HeaderContainer>
  );
}
