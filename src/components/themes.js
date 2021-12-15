import imgMobLight from "../images/bg-mobile-light.jpg";
import imgMobDark from "../images/bg-mobile-dark.jpg";
import imgDeskLight from "../images/bg-desktop-light.jpg";
import imgDeskDark from "../images/bg-desktop-dark.jpg";

export const lightTheme = {
  body: "var(--clr-l-very-light-G)",
  text: "var(--clr-d-very-dark-B)",
  background: "var(--clr-l-very-light-G)",
  bgMobImg: `url(${imgMobLight})`,
  bgDeskImg: `url(${imgDeskLight})`,
};

export const darkTheme = {
  body: "var(--clr-d-very-dark-B)",
  text: "var(--clr-l-very-light-G)",
  background: "var(--clr-d-very-dark-B)",
  bgMobImg: `url(${imgMobDark})`,
  bgDeskImg: `url(${imgDeskDark})`,
};
