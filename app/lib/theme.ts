"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4584ad",
    },
    secondary: {
      main: "#2e74c9",
    },
    text: {
      primary: "#013e87",
      secondary: "#2e74c9",
    },
    background: {
      default: "#f4fade",
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
  },
  typography: {
    allVariants: {
      color: "#6b6b6a",
    },
    h1: {
      color: "#BC8452",
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  },
});

export default theme;
