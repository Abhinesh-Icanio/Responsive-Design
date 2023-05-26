import { createTheme } from "@mui/material";

const colors = {
  primary: "#F5F7FA",
  secondary: "#4CAF4F",
  primaryDark: "#00574e",
};

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    info: {
      main: colors.primaryDark,
    },
  },
});

export default theme;
