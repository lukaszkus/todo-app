import { clr } from "./variables";

//Background images
import imgMobLight from "../images/bg-mobile-light.jpg";
import imgMobDark from "../images/bg-mobile-dark.jpg";
import imgDeskLight from "../images/bg-desktop-light.jpg";
import imgDeskDark from "../images/bg-desktop-dark.jpg";

//Theme toggle icons
import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg";

//Theme colors
export const lightTheme = {
  bodyBg: "#fafafa",
  text: "#c9cbe4",
  bgMobImg: `url(${imgMobLight})`,
  bgDeskImg: `url(${imgDeskLight})`,
  toggleIcon: `url(${iconMoon})`,
  todoBg: clr.white,
  line: "#e6e5ea",
  shadow: "rgba(0, 0, 0, 0.2)",
};

export const darkTheme = {
  bodyBg: "#181824",
  text: "#41415d",
  bgMobImg: `url(${imgMobDark})`,
  bgDeskImg: `url(${imgDeskDark})`,
  toggleIcon: `url(${iconSun})`,
  todoBg: "#25273c",
  line: "#4d4f64",
  shadow: "rgba(0, 0, 0, 0.6)",
};
