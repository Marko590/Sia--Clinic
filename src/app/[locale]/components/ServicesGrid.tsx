import React from "react";
import ServiceItem from "./ServiceItem";
import { Grid2 } from "@mui/material";
import { Service } from "../lib/types";
const ServicesGrid = () => {
  const services: Service[] = [
    {
      title: "Dental Exam",
      subTitle: "Cleaning, x-rays, & oral exam.",
      link: "/service1",
      pictureUrl: "/images/service1.jpg",
    },
    {
      title: "Orthodontics",
      subTitle: "Breezy Braces & Invisalign",
      link: "/service2",
      pictureUrl: "/images/service2.jpg",
    },
    {
      title: "Procedures",
      subTitle: "Fillings, implants, crowns, & more.",
      link: "/service3",
      pictureUrl: "/images/service3.jpg",
    },
    ,
    {
      title: "Emergency",
      subTitle: "Urgent appointments for pain, cracked teeth & more.",
      link: "/service3",
      pictureUrl: "/images/service3.jpg",
    },
  ];
  return (
    <Grid2 container sx={{ width: "100%", alignItems: "stretch" }} spacing={4}>
      {services.map((service) => (
        <Grid2 size={{ xs: 12, md: 6, xl: 3 }}>
          <ServiceItem service={service} />
        </Grid2>
      ))}
    </Grid2>
  );
};
export default ServicesGrid;
