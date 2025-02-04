import React from "react";
import { Box, Container, Paper, Typography, Button } from "@mui/material";
import Service from "../lib/types";
const ServiceItem = ({ service }: { service: Service }) => {
  return (
    <Paper
      elevation={8}
      sx={{ p: 4, backgroundColor: "#f4fade", height: "100%" }}
      square
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          height: "100%", // Ensures full height usage
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          {service.title}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            width: "80%",
          }}
        >
          {service.subTitle}
        </Typography>

        {/* Buttons always at the bottom */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: 2,
            mt: "auto", // Pushes the buttons to the bottom
          }}
        >
          <Button
            variant="contained"
            sx={{
              py: 2,
              px: 4,
              fontWeight: 700,
              letterSpacing: "0.12em",
              minWidth: "30%",
              width: "40%",
            }}
          >
            Book
          </Button>
          <Button
            variant="outlined"
            sx={{
              border: "1px solid",
              py: 2,
              px: 4,
              fontWeight: 700,
              letterSpacing: "0.12em",
              display: { xs: "flex", md: "none" },
              minWidth: "30%",
              width: "40%",
            }}
          >
            Book
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ServiceItem;
