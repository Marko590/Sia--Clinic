"use client";
import { createTheme } from "@mui/material";
import localFont from "next/font/local";
import DM from "./fonts";
const theme = createTheme({
  palette: {
    primary: {
      main: "#7BB87E",
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
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
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
