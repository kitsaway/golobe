import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 600,
      bg: 900,
      lg: 1200,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
