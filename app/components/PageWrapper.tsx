import { Box, Container } from "@mui/material";
import React from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          flex: 1,
          pt: { xs: "68px", md: "78px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "background.default",
        }}
        disableGutters
      >
        {children}
      </Container>
    </Box>
  );
};

export default PageWrapper;
