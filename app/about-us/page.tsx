import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import EmployeeInfo from "../components/EmployeeInfo";

const Page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2, md: 8 },
      }}
    >
      <Grid2
        container
        spacing={8}
        sx={{ alignItems: "stretch", width: "100%" }}
      >
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <EmployeeInfo />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <EmployeeInfo />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Page;
