import { ArrowCircleDown } from "@mui/icons-material";
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
  Typography,
} from "@mui/material";
import React from "react";

const Page = () => {
  const priceList = [
    {
      service: "Clear aligners (Invisalign or similar)",
      price: 150000,
      category: "Orthodontics",
    }, // Can be much higher
    {
      service: "Orthodontic braces (fixed, per jaw)",
      price: 80000,
      category: "Orthodontics",
    }, // Range is wide
    {
      service: "Orthodontic braces (removable)",
      price: 40000,
      category: "Orthodontics",
    }, // Range is wide
    {
      service: "Orthodontic retainers",
      price: 10000,
      category: "Orthodontics",
    },
    {
      service: "Porcelain veneer (per tooth)",
      price: 20000,
      category: "Cosmetic Dentistry",
    }, // High quality veneers can be more
    {
      service: "Laser teeth whitening",
      price: 15000,
      category: "Cosmetic Dentistry",
    }, // Varies greatly
    {
      service: "Teeth whitening",
      price: 10000,
      category: "Cosmetic Dentistry",
    }, // Varies greatly
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
    { service: "Tooth extraction", price: 5000, category: "General Dentistry" }, // Simple extraction
    {
      service: "Wisdom tooth extraction",
      price: 10000,
      category: "General Dentistry",
    }, // Can be much more complex
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
    }, // Varies greatly
    {
      service: "Sleep apnea appliance",
      price: 25000,
      category: "General Dentistry",
    }, // Varies greatly
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
    }, // Per quadrant, usually
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
    }, // Per tooth
    {
      service: "Root canal treatment (endodontics)",
      price: 9000,
      category: "Restorative Dentistry",
    }, // Per tooth
    {
      service: "Ceramic crown",
      price: 30000,
      category: "Restorative Dentistry",
    }, // Per crown
    {
      service: "Metal-ceramic crown",
      price: 20000,
      category: "Restorative Dentistry",
    }, // Per crown
    {
      service: "Complete denture",
      price: 70000,
      category: "Restorative Dentistry",
    }, // Per arch
    {
      service: "Partial denture",
      price: 50000,
      category: "Restorative Dentistry",
    }, // Per arch
    {
      service: "Dental implant",
      price: 80000,
      category: "Restorative Dentistry",
    }, // Per implant (including crown, abutment, etc. is extra)
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
  return (
    <Box sx={{ width: "80%", p: 8 }}>
      <Accordion
        sx={{
          width: "100%",
        }}
      >
        <AccordionSummary>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{ width: "5%", borderBottom: "1px grey solid" }}
                  >
                    <ArrowCircleDown />
                  </TableCell>
                  <TableCell
                    sx={{ width: "75%", p: 2, borderBottom: "1px grey solid" }}
                  >
                    <Typography>Service</Typography>
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      width: "20%", // Ensures equal width for Price (RSD) column
                      borderLeft: "solid grey 1px",
                      padding: "10px", // Consistent padding
                      textAlign: "center",
                      borderBottom: "1px grey solid",
                    }}
                  >
                    Price (RSD)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionSummary>
        <AccordionDetails sx={{ pt: 0 }}>
          <TableContainer>
            <Table>
              <TableBody>
                {priceList.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell
                      sx={{ width: "5%", borderBottom: "0px" }}
                    ></TableCell>
                    <TableCell
                      sx={{
                        width: "75%",
                        p: 2,
                        borderBottom: "1px grey solid",
                      }}
                    >
                      {item.service}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        width: "20%",
                        borderLeft: "solid grey 1px",
                        padding: "10px",
                        textAlign: "center",
                        borderBottom: "1px grey solid",
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
    </Box>
  );
};

export default Page;
