import { Box, Container } from "@mui/material";
import React from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        mt: { xs: "68px", md: "78px" },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#d8dec1",
        }}
        disableGutters
      >
        {children}
      </Container>
    </Box>
  );
};

export default PageWrapper;
