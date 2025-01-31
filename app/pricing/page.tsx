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
import * as data from "../lib/data";
const Page = () => {
  const servicesByCategory: Record<string, PriceItem[]> = {};
  const priceList = data.PriceList;
  priceList.forEach((service: PriceItem) => {
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
