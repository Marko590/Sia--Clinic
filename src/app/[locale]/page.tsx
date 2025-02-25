"use client";
import { Box, Button, Fade, Typography } from "@mui/material";
import { Call, LocationOn } from "@mui/icons-material";
import ServicesGrid from "./components/ServicesGrid";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import MapPaper from "./components/MapPaper";
import SectionTitle from "./components/SectionTitle";
import SparkleText from "./components/SparkleText";
import Carousel from "./components/Carousel";

export default function Home() {
  const targetBoxRef = useRef<HTMLDivElement | null>(null);

  const [textVisible, setTextVisible] = useState(false);
  const t = useTranslations("HomePage");
  useEffect(() => {
    setTextVisible(true);
  }, []);
  const handleScroll = () => {
    if (targetBoxRef.current) {
      targetBoxRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "80vh",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 0 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              pt: { xs: 6, md: 0 },
              display: "flex",
              flexDirection: "column",
              gap: 8,
              mx: { xs: 2, md: 8, xl: 12 },
            }}
          >
            <Fade in={textVisible} timeout={500}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <SparkleText
                  text={t("title")}
                  style={{
                    fontSize: "10rem",
                    maxWidth: "560px",
                    fontWeight: "800",
                    letterSpacing: "0.em",
                    fontFamily: "serif",
                  }}
                />

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.5rem" },
                  }}
                >
                  {t("subtitle")}
                </Typography>
              </Box>
            </Fade>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "start",
                gap: 2,
              }}
            >
              <Button
                color="primary"
                variant="contained"
                sx={{
                  width: "50%",
                  p: 2,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                }}
                startIcon={<LocationOn />}
                onClick={handleScroll}
              >
                {t("locationButton")}
              </Button>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => (window.location.href = "tel:+381640766222")}
                sx={{
                  width: "50%",
                  p: 2,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  display: { xs: "flex", md: "none" },
                }}
                startIcon={<Call />}
              >
                {t("callNowButton")}
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundImage: "url('/landing-page-image.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "90%",
          borderTop: "4px solid gray",
          borderBottom: "4px solid gray",
          py: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography
          variant="h1"
          color="primary"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2.25rem", md: "3rem" },
            textAlign: "center",
          }}
        >
          {t("services.title")}
        </Typography>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Carousel />
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <ServicesGrid />
        </Box>
      </Box>
      <SectionTitle title={t("locationTitle")} />
      <MapPaper
        targetBoxRef={targetBoxRef}
        sx={{ width: "90%", height: { xs: 600, md: 800 } }}
      />
    </>
  );
}
