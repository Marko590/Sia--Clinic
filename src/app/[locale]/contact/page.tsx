import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ContactInfo from "../components/ContactInfo";
import { useTranslations } from "next-intl";
import MapPaper from "../components/MapPaper";

const Contact = () => {
  const t = useTranslations("ContactPage");
  return (
    <Box
      sx={{
        mt: 4,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "200px", // Set width to 100% of the container's width
          height: "100px", // Let the height auto-adjust based on the image's aspect ratio
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
            transition: "filter 0.5s ease",
            "&:hover": {
              filter: "blur(0px)",
            },
          }}
        />
        <Typography
          color="primary"
          sx={{ position: "relative", fontSize: "3rem", fontWeight: "300" }}
        >
          {t("title")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          justifyContent: "center",
          p: 4,
          width: "100%",
          gap: 4,
        }}
      >
        <Paper
          elevation={10}
          sx={{
            background: "background.paper",
            width: "100%",
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              flexDirection: "column",
              p: 2,
              gap: 4,
            }}
          >
            <Typography
              variant="h1"
              color="primary"
              sx={{
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "300",
              }}
            >
              {t("appointmentTitle")}
            </Typography>

            <ContactInfo
              title="Working hours"
              subtitle={[t("workHours"), t("emergencyWorkHours")]}
            />
            <ContactInfo title={t("phoneTitle")} subtitle={t("phoneNumber")} />
            <ContactInfo title={t("addressTitle")} subtitle={t("address")} />
            <ContactInfo title={t("emailTitle")} subtitle={t("email")} />
          </Box>
        </Paper>

        <MapPaper sx={{ flex: 1, minHeight: 560 }} />
      </Box>
    </Box>
  );
};

export default Contact;
