"use client";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const Page = () => {
  const { id } = useParams();
  const t = useTranslations("DoctorInfoPage");

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
          {t(`staff.${id}.name`)}
        </Typography>

        <Typography
          sx={{
            px: 4,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          {t(`staff.${id}.bio`)}
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
          src={"/" + t(`staff.${id}.image`)}
          alt={t(`staff.${id}.name`)}
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "10px" }}
        />
      </Box>
    </Box>
  );
};

export default Page;
