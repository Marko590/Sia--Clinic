"use client";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const serviceId = useParams()["service-id"];
  const t = useTranslations("ServiceGrid");
  console.log(serviceId);
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
          {t(`services.${serviceId}.title`)}
        </Typography>

        <Typography
          sx={{
            px: 4,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          {t(`services.${serviceId}.description`)}
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
          src={t(`services.${serviceId}.pictureUrl`)}
          alt={t(`services.${serviceId}.title`)}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
      </Box>
    </Box>
  );
};

export default page;
