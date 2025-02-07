"use client";
import { Typography, Box } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

interface DropDownHeaderProps {
  category: string;
}
const DropDownHeader: React.FC<DropDownHeaderProps> = ({ category }) => {
  const t = useTranslations("PricingPage");
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
        }}
      >
        <Typography sx={{ flexGrow: 1 }}>{category}</Typography>
        <Typography align="right" sx={{ minWidth: "150px" }}>
          {t("priceTitle")}
        </Typography>
      </Box>
    </Box>
  );
};

export default DropDownHeader;
