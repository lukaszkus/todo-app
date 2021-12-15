import imgMobLight from "../images/bg-mobile-light.jpg";
import imgMobDark from "../images/bg-mobile-dark.jpg";
import imgDeskLight from "../images/bg-desktop-light.jpg";
import imgDeskDark from "../images/bg-desktop-dark.jpg";
import { clrLight, clrDark } from "./variables";

export const lightTheme = {
  body: clrLight.veryLight,
  text: clrDark.veryDark,
  background: clrLight.veryLight,
  bgMobImg: `url(${imgMobLight})`,
  bgDeskImg: `url(${imgDeskLight})`,
};

export const darkTheme = {
  body: clrDark.veryDark,
  text: clrLight.veryLight,
  background: clrDark.veryDark,
  bgMobImg: `url(${imgMobDark})`,
  bgDeskImg: `url(${imgDeskDark})`,
};
