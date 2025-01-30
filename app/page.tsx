"use client";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { Call, LocationOn } from "@mui/icons-material";
import ServiceItem from "./components/ServiceItem";
import ServicesGrid from "./components/ServicesGrid";
import React, { useRef } from "react";

export default function Home() {
  const targetBoxRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the target box
  const handleScroll = () => {
    if (targetBoxRef.current) {
      targetBoxRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        height: "100%",
      }}
    >
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
              gap: 4,
              mx: { xs: 2, md: 8, xl: 12 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "serif",
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "4rem" },
                maxWidth: "560px",
              }}
            >
              Look forward to the dentist
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "serif",
                fontWeight: 400,
                fontSize: { xs: "1.25rem" },
              }}
            >
              Top-rated clinicians and no judgement, ever.
            </Typography>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "start",
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                onClick={() => (window.location.href = "tel:+381640766222")}
                sx={{
                  bgcolor: "#BC8452",
                  width: "50%",
                  p: 2,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                }}
                startIcon={<Call />}
              >
                CALL NOW
              </Button>
              <Button
                variant="outlined"
                sx={{
                  width: "50%",
                  p: 2,
                  color: "#BC8452",
                  borderColor: "#BC8452",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  display: { xs: "flex", md: "none" },
                }}
                startIcon={<LocationOn />}
                onClick={handleScroll}
              >
                LOCATION
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
          mx: { xs: 2, md: 4 },
          my: 8,
          borderTop: "4px solid gray",
          pt: 4,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "serif",
            fontWeight: 700,
            fontSize: { xs: "2.5rem", md: "3rem" },
          }}
        >
          Services we offer
        </Typography>
        <ServicesGrid />
      </Box>
      <Box
        ref={targetBoxRef}
        sx={{
          m: 8,
          width: { xs: "90%", md: "600" },
          height: 400,
          display: "flex",
          alignItems: "center",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.562834448891!2d20.476941200000002!3d44.76932970000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a710a9139926d%3A0x16c546adf2689e58!2sSIA%20DENTAL%20CLINIC!5e0!3m2!1ssr!2srs!4v1738200939985!5m2!1ssr!2srs"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
}
