"use client";
import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#00796B", // Deep Teal
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#26A69A", // Turquoise
    },
    background: {
      default: "#FAFAFA", // Light Gray
      paper: "#FFFFFF",
    },
    text: {
      primary: "#263238", // Dark Blue-Gray
      secondary: "#4F5B62",
    },
    warning: {
      main: "#FFB300", // Warm Yellow
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },
  typography: {
    allVariants: {
      color: "#6b6b6a",
      fontFamily: "var(--font-inter)",
      fontWeight: "200",
    },
    h2: {
      fontWeight: "200",
      fontStyle: "italic",
    },
  },
});

export default theme;
