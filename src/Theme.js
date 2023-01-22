import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
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
