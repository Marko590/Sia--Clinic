"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { id } = useParams();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        width: { xs: "100%", md: "80%" },
        height: "100%",
        p: { xs: 2, md: 8 },
        gap: { xs: 4, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: 2,
          flex: 4,
          p: 2,
          pt: 0,
        }}
      >
        <Typography
          color="secondary"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.75rem", md: "3rem" },
            fontWeight: "600",
          }}
        >
          Dr. Stefan Raičević
        </Typography>

        <Typography
          sx={{
            px: 4,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          With over 10 years of experience in general and cosmetic dentistry,
          Dr. Stefan Raičević is committed to providing high-quality,
          compassionate care to patients of all ages. Specializing in preventive
          care, restorative treatments, and smile makeovers, Dr. Raičević
          combines advanced techniques with a gentle approach to make every
          visit comfortable and stress-free."
        </Typography>
      </Box>
      <Box
        sx={{
          minHeight: { xs: "400px", md: "auto" },
          flex: 3,
          position: "relative",
          borderRadius: "10px",
        }}
      >
        <Image
          src="/drStefan.png"
          alt="Dr. Stefan"
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
      </Box>
    </Box>
  );
};

export default Page;
