import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#79747E",
      contrastText: "#fff",
    },
    dark: {
      main: "#112211",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontWeight: 700,
      fontSize: "80px",
    },
    h2: {
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: 1,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "16px",
      color: "#112211",
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: "14px",
      color: "#112211",
    },
    body1: {
      fontWeight: 400,
      fontSize: "12px",
      color: "#112211",
    },
    body2: {
      fontWeight: 600,
      fontSize: "14px",
      color: "#112211",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 700,
      bg: 1000,
      lg: 1400,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
