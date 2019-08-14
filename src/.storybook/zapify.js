import { create } from "@storybook/theming";

export default create({
  base: "light",
  colorPrimary: "#FF6F61",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 3,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "black",
  barBg: "#FF6F61",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 3,

  brandTitle: "Zapify-ui",
  brandUrl: "https://zapify.netlify.com",
  brandImage: "https://i.ibb.co/hdsdzq7/ms-icon-144x144.png"
});