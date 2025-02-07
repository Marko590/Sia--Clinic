import { Box, Grid2 } from "@mui/material";
import React from "react";
import EmployeeInfo from "../components/EmployeeInfo";
import { useTranslations } from "next-intl";
import SectionTitle from "../components/SectionTitle";

const Page = () => {
  const t = useTranslations("About");
  const staffIds = ["stefan-raicevic", "andrija-banovic"];
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
      <SectionTitle title={t("staffTitle")} />

      <Grid2
        container
        spacing={8}
        sx={{ alignItems: "stretch", width: "100%" }}
      >
        {staffIds.map((id) => (
          <Grid2 key={id} size={{ xs: 12, lg: 6 }}>
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
