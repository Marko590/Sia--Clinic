import React from "react";
import ServiceItem from "./ServiceItem";
import { Grid2 } from "@mui/material";
import { servicesKeys } from "../lib/data";
const ServicesGrid = () => {
  return (
    <Grid2 container sx={{ width: "100%", alignItems: "stretch" }} spacing={4}>
      {servicesKeys.map((serviceKey) => (
        <Grid2 key={serviceKey} size={{ xs: 12, md: 6, xl: 3 }}>
          <ServiceItem serviceKey={serviceKey} />
        </Grid2>
      ))}
    </Grid2>
  );
};
export default ServicesGrid;
