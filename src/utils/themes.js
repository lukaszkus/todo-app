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
  bodyBg: clr.white,
  text: "hsl(235, 19%, 35%)",
  bgMobImg: `url(${imgMobLight})`,
  bgDeskImg: `url(${imgDeskLight})`,
  toggleIcon: `url(${iconMoon})`,
  todoBg: clr.white,
  line: "hsl(234, 39%, 85%)",
  shadow: "rgba(0, 0, 0, 0.2)",
};

export const darkTheme = {
  bodyBg: "hsl(235, 21%, 11%)",
  text: "hsl(234, 39%, 85%)",
  bgMobImg: `url(${imgMobDark})`,
  bgDeskImg: `url(${imgDeskDark})`,
  toggleIcon: `url(${iconSun})`,
  todoBg: "#25273c",
  line: "hsl(233, 14%, 35%)",
  shadow: "rgba(0, 0, 0, 0.6)",
};
