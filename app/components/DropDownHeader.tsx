"use client";
import { Typography, Box } from "@mui/material";
import React from "react";

interface DropDownHeaderProps {
  category: string;
}
const DropDownHeader: React.FC<DropDownHeaderProps> = ({ category }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "8px",
          borderBottom: "1px grey solid",
          "&:hover": {
            backgroundColor: "#D8DEC1",
          },
        }}
      >
        <Typography sx={{ flexGrow: 1 }}>{category}</Typography>
        <Typography align="right" sx={{ minWidth: "150px" }}>
          Price (RSD)
        </Typography>
      </Box>
    </Box>
  );
};

export default DropDownHeader;
