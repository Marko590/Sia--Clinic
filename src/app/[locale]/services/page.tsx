import { Box } from "@mui/material";
import React from "react";
import HoverCard from "../components/HoverCard";
import { servicesKeys } from "../lib/data";
import SectionTitle from "../components/SectionTitle";

const page = () => {
  return (
    <>
      <SectionTitle title={"Services"} sx={{ mt: 4 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "90%",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {servicesKeys.map((service, idx) => (
          <HoverCard key={idx} id={idx} serviceKey={service} />
        ))}
      </Box>
    </>
  );
};

export default page;
