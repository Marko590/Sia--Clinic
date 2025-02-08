"use client";
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
import React, { useEffect, useState } from "react";
import DropDownHeader from "../components/DropDownHeader";
import { PriceItem } from "../lib/types";
import SectionTitle from "../components/SectionTitle";
import { useLocale } from "next-intl";
async function getPriceList(locale: string) {
  const res = await fetch(`/priceList_${locale}.json`);
  return res.json();
}

export default function Page() {
  const locale = useLocale();
  const servicesByCategory: Record<string, PriceItem[]> = {};

  const [priceList, setPriceList] = useState<PriceItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPriceList(locale);
      setPriceList(data);
    }
    fetchData();
  }, [locale]);
  priceList.forEach((service: PriceItem) => {
    if (!servicesByCategory[service.category]) {
      servicesByCategory[service.category] = [];
    }
    servicesByCategory[service.category].push(service);
  });

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "80%" },
        px: { xs: 2 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <SectionTitle title={"Pricing"} sx={{ my: 6 }} />
      {Object.keys(servicesByCategory).map((category) => (
        <Accordion
          key={category}
          sx={{
            width: "100%",
            backgroundColor: "#f4fade",
            borderRadius: "20px",
          }}
        >
          <AccordionSummary
            sx={{
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#bcc2a7",
              },
            }}
            expandIcon={<ArrowDownward />}
          >
            <DropDownHeader category={category} />
          </AccordionSummary>
          <AccordionDetails sx={{ pt: 0, px: { xs: 2, md: 6 } }}>
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
}
