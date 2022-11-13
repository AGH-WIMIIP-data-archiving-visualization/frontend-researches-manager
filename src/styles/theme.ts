export const breakpoints = {
  xs: 400,
  sm: 600,
  md: 800,
  lg: 1000,
  xl: 1200,
  xxl: 1600,
  xxxl: 2560,
};

export type Breakpoint = keyof typeof breakpoints;

export const zIndexes = {
  header: 10,
  sider: 20,
};

export const palette = {
  text: "#020202",
  primary: "#002CCC",
  paper: "#FFF",
  active: "#ee2549",
  success: "#007fff",
  error: "#BB0101",
  navy100: "#001529",

  gray100: "#e5e5e5",
  gray200: "#d8d8d8",
  gray300: "#cccccc",
  gray400: "#bbbbbb",
  gray500: "#7f7f7f",
  warning: "#F0CF6C",
  blue400: "#91A5EB",
  blue500: "#002CCC",
  blue600: "#1D1976",
  green400: "#B2E8CE",
  green500: "#70CEBC",
  green600: "#00AA89",
  green700: "#008A6F",
  black100: "#EDEDED",
  black200: "#D1D3D4",
  black300: "#A8ABB1",
  black400: "#6C6C6C",
  black500: "#3B3B3B",
  white: "#ffffff",
  dove300: "#D3D7E1",
  dove400: "#99A3BB",
  dove500: "#767C93",
  violet300: "#F7F9FF",
  violet400: "#EFF2FF",
  violet500: "#E2E8FF",
  violet600: "#D1DCFF",
  violet700: "#B7C4E4",
  violet800: "#99A2C8",
  violet900: "#7A87B4",
  red100: "#FFFAFA",
  red400: "#ED8585",
  red500: "#DC6565",
};

export const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
};

export const fontFamily = {};

export const shadows = ["rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"];

export const theme = {
  zIndexes,
  palette,
  breakpoints,
  fontSizes,
  shadows,
  fontFamily,
};

declare module "@emotion/react" {
  export interface Theme {
    palette: typeof palette;
    zIndexes: typeof zIndexes;
    breakpoints: typeof breakpoints;
    fontSizes: typeof fontSizes;
    shadows: typeof shadows;
    fontFamily: typeof fontFamily;
  }
}
