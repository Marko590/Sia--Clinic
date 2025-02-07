import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import EmployeeInfo from "../components/EmployeeInfo";
import { EmployeeCardInfo } from "../lib/types";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("About");
  const staffIds = ["stefan-raicevic", "andrija-banovic"];
  const employeeInfo: Array<EmployeeCardInfo> = [
    {
      id: "stefan-raicevic",
      name: "Dr. Stefan Raičević",
      shortBio:
        "With over 10 years of experience in general and cosmetic dentistry, Dr. Stefan Raičević is committed to providing high-quality, compassionate care to patients of all ages. Specializing in preventive care, restorative treatments, and smile makeovers, Dr. Raičević combines advanced techniques with a gentle approach to make every visit comfortable and stress-free.",
    },
    {
      id: "andrija-banovic",
      name: "Dr. Andrija Banović",
      shortBio:
        "With over 10 years of experience in general and cosmetic dentistry, Dr. Andrija Banović is committed to providing high-quality, compassionate care to patients of all ages. Specializing in preventive care, restorative treatments, and smile makeovers, Dr. Banović combines advanced techniques with a gentle approach to make every visit comfortable and stress-free.",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 8,
        p: { xs: 2, md: 8 },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "200px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url(/SIA_bg.png)",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            filter: "blur(3px) grayscale(50%)",
          }}
        />
        <Typography
          color="primary"
          sx={{ position: "relative", fontSize: "2.5rem", fontWeight: "600" }}
        >
          {t("staffTitle")}
        </Typography>
      </Box>

      <Grid2
        container
        spacing={8}
        sx={{ alignItems: "stretch", width: "100%" }}
      >
        {staffIds.map((id) => (
          <Grid2 size={{ xs: 12, lg: 6 }}>
            <EmployeeInfo
              id={id}
              name={t(`staff.${id}.name`)}
              shortBio={t(`staff.${id}.shortBio`)}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Page;
