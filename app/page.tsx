"use client";
import { Box, Button, Typography } from "@mui/material";
import PageWrapper from "./components/PageWrapper";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
          pt: { xs: 6, md: 0 },
          px: { xs: 2, md: 6 },
          gap: 4,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "serif",
            fontWeight: 700,
            fontSize: { xs: "2.5rem", md: "4rem" },
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
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            onClick={() => (window.location.href = "tel:+381640766222")}
            sx={{
              bgcolor: "#BC8452",
              width: "40%",
              p: 2,
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
          >
            CALL NOW
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#BC8452",
              width: "40%",
              p: 2,
              fontWeight: 700,
              letterSpacing: "0.12em",
              display: { xs: "flex", md: "none" },
            }}
          >
            BOOK NOW
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: { xs: "90%", md: "600" }, height: 400 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.562834448891!2d20.476941200000002!3d44.76932970000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a710a9139926d%3A0x16c546adf2689e58!2sSIA%20DENTAL%20CLINIC!5e0!3m2!1ssr!2srs!4v1738200939985!5m2!1ssr!2srs"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
}
