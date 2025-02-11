import { Box, SxProps, Theme, Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({
  title,
  sx,
}: {
  title: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "200px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url(/SIA_bg.png)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          filter: "blur(3px) grayscale(50%)",
          transition: "filter 0.5s ease",
          "&:hover": {
            filter: "blur(0px)",
          },
        }}
      />
      <Typography
        color="primary"
        sx={{ position: "relative", fontSize: "3rem", fontWeight: "500" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
