import { ArrowDownward } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React from "react";
import DropDownHeader from "../components/DropDownHeader";
import { PriceItem } from "../lib/types";

const Page = () => {
  const priceList: Array<PriceItem> = [
    {
      service: "Clear aligners (Invisalign or similar)",
      price: 150000,
      category: "Orthodontics",
    },
    {
      service: "Orthodontic braces (fixed, per jaw)",
      price: 80000,
      category: "Orthodontics",
    },
    {
      service: "Orthodontic braces (removable)",
      price: 40000,
      category: "Orthodontics",
    },
    {
      service: "Orthodontic retainers",
      price: 10000,
      category: "Orthodontics",
    },
    {
      service: "Porcelain veneer (per tooth)",
      price: 20000,
      category: "Cosmetic Dentistry",
    },
    {
      service: "Laser teeth whitening",
      price: 15000,
      category: "Cosmetic Dentistry",
    },
    {
      service: "Teeth whitening",
      price: 10000,
      category: "Cosmetic Dentistry",
    },
    {
      service: "Dental bonding (per tooth)",
      price: 7000,
      category: "Cosmetic Dentistry",
    },
    {
      service: "Examination and consultation",
      price: 3000,
      category: "General Dentistry",
    },
    {
      service: "Tartar removal and polishing",
      price: 4000,
      category: "General Dentistry",
    },
    { service: "Tooth extraction", price: 5000, category: "General Dentistry" },
    {
      service: "Wisdom tooth extraction",
      price: 10000,
      category: "General Dentistry",
    },
    {
      service: "Sedation (nitrous oxide)",
      price: 5000,
      category: "General Dentistry",
    },
    { service: "Night guard", price: 8000, category: "General Dentistry" },
    {
      service: "TMJ treatment (temporomandibular joint)",
      price: 12000,
      category: "General Dentistry",
    },
    {
      service: "Sleep apnea appliance",
      price: 25000,
      category: "General Dentistry",
    },
    {
      service: "Post-operative care",
      price: 2000,
      category: "General Dentistry",
    },
    {
      service: "Emergency dental visit",
      price: 6000,
      category: "Emergency Dentistry",
    },
    {
      service: "Dental X-ray (per film)",
      price: 2000,
      category: "Diagnostics",
    },
    { service: "3D Dental CT scan", price: 12000, category: "Diagnostics" },
    { service: "Biopsy", price: 7000, category: "Diagnostics" },
    {
      service: "Gum disease treatment (scaling and root planing)",
      price: 10000,
      category: "Periodontics",
    },
    {
      service: "Fluoride treatment",
      price: 3000,
      category: "Preventive Dentistry",
    },
    {
      service: "Dental sealant (per tooth)",
      price: 1500,
      category: "Preventive Dentistry",
    },
    {
      service: "Oral cancer screening",
      price: 1500,
      category: "Preventive Dentistry",
    },
    {
      service: "Pediatric dental cleaning",
      price: 2500,
      category: "Pediatric Dentistry",
    },
    {
      service: "Pediatric filling",
      price: 5000,
      category: "Pediatric Dentistry",
    },
    {
      service: "Space maintainer (for children)",
      price: 6000,
      category: "Pediatric Dentistry",
    },
    {
      service: "Filling (composite)",
      price: 6000,
      category: "Restorative Dentistry",
    },
    {
      service: "Root canal treatment (endodontics)",
      price: 9000,
      category: "Restorative Dentistry",
    },
    {
      service: "Ceramic crown",
      price: 30000,
      category: "Restorative Dentistry",
    },
    {
      service: "Metal-ceramic crown",
      price: 20000,
      category: "Restorative Dentistry",
    },
    {
      service: "Complete denture",
      price: 70000,
      category: "Restorative Dentistry",
    },
    {
      service: "Partial denture",
      price: 50000,
      category: "Restorative Dentistry",
    },
    {
      service: "Dental implant",
      price: 80000,
      category: "Restorative Dentistry",
    },
    {
      service: "Inlays/Onlays (per tooth)",
      price: 15000,
      category: "Restorative Dentistry",
    },
    {
      service: "Temporary crown",
      price: 5000,
      category: "Restorative Dentistry",
    },
    {
      service: "Denture repair",
      price: 4000,
      category: "Restorative Dentistry",
    },
  ];
  const servicesByCategory: Record<string, PriceItem[]> = {};

  priceList.forEach((service) => {
    if (!servicesByCategory[service.category]) {
      servicesByCategory[service.category] = [];
    }
    servicesByCategory[service.category].push(service);
  });
  return (
    <Box sx={{ width: { xs: "100%", md: "80%" }, p: { xs: 2 } }}>
      {Object.keys(servicesByCategory).map((category) => (
        <Accordion
          sx={{
            width: "100%",
            backgroundColor: "#f4fade",
          }}
        >
          <AccordionSummary expandIcon={<ArrowDownward />}>
            <DropDownHeader category={category} />
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0, px: { xs: 2, md: 4 } }}>
            <TableContainer>
              <Table>
                <TableBody>
                  {servicesByCategory[category].map((item, index) => (
                    <TableRow key={index} sx={{ pr: 2 }}>
                      <TableCell
                        sx={{
                          borderBottom: "1px grey solid",
                        }}
                      >
                        {item.service}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          width: "150px",
                          borderLeft: "solid grey 1px",
                          borderBottom: "solid grey 1px",
                          textAlign: "center",
                        }}
                      >
                        {item.price} RSD
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Page;
