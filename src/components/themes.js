//Variables
import { clrLight, clrDark } from "./variables";

//Background images
import imgMobLight from "../images/bg-mobile-light.jpg";
import imgMobDark from "../images/bg-mobile-dark.jpg";
import imgDeskLight from "../images/bg-desktop-light.jpg";
import imgDeskDark from "../images/bg-desktop-dark.jpg";

//Theme toggle icons
import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg";

export const lightTheme = {
  body: clrLight.veryLight,
  text: clrDark.veryDark,
  background: clrLight.veryLight,
  bgMobImg: `url(${imgMobLight})`,
  bgDeskImg: `url(${imgDeskLight})`,
  toggleIcon: `url(${iconMoon})`,
};

export const darkTheme = {
  body: clrDark.veryDark,
  text: clrLight.veryLight,
  background: clrDark.veryDark,
  bgMobImg: `url(${imgMobDark})`,
  bgDeskImg: `url(${imgDeskDark})`,
  toggleIcon: `url(${iconSun})`,
};
