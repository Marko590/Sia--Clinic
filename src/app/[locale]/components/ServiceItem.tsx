import React from "react";
import { Box, Paper, Typography, Button, Theme, SxProps } from "@mui/material";
import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/routing";
const ServiceItem = ({
  serviceKey,
  sx,
}: {
  serviceKey: string;
  sx?: SxProps<Theme>;
}) => {
  const t = useTranslations("ServiceGrid");
  const router = useRouter();
  return (
    <Paper
      elevation={8}
      sx={{
        p: 4,
        pb: { xs: 6, md: 4 },
        backgroundColor: "background.paper",
        width: "100%",
        height: "100%",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          height: "100%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "secondary.main",
            fontSize: { xs: "2rem", md: "2.25rem" },
            fontWeight: "400",
          }}
        >
          {t(`services.${serviceKey}.title`)}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: "1.5rem",
            width: "100%",
          }}
        >
          {t(`services.${serviceKey}.subTitle`)}
        </Typography>

        {/* Buttons always at the bottom */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: "auto",
            justifyContent: { xs: "center", md: "end" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              px: 8,
              py: 2,
              fontWeight: 700,
              letterSpacing: "0.10em",
              minWidth: "30%",
              width: "45%",
            }}
            onClick={() => {
              router.replace(`/services/${serviceKey}`);
            }}
          >
            {t("bookButton")}
          </Button>
          <Button
            variant="outlined"
            sx={{
              border: "1px solid",
              py: 2,
              px: 8,
              fontWeight: 700,
              letterSpacing: "0.12em",
              display: { xs: "flex", md: "none" },
              minWidth: "30%",
              width: "45%",
            }}
          >
            {t("moreButton")}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ServiceItem;
