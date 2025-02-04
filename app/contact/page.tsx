import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  return (
    <Box
      sx={{
        mt: 10,
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
          width: "300px", // Set width to 100% of the container's width
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
            filter: "blur(2px) grayscale(50%)",
            transition: "filter 0.5s ease",
            "&:hover": {
              filter: "blur(0px)",
            },
          }}
        />
        <Typography sx={{ position: "relative", fontSize: "2rem" }}>
          KONTAKT
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          p: 4,
          width: "80%",
          gap: 4,
        }}
      >
        <Paper
          elevation={10}
          sx={{
            width: { xs: "100%", md: "600" },
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flexDirection: "column",
            gap: 4,
            p: 4,
          }}
        >
          <Typography
            variant="h1"
            sx={{ textAlign: "center", fontSize: "2.5rem" }}
          >
            Schedule an appointment
          </Typography>

          <ContactInfo
            title="Working hours"
            subtitle={["Mon-Fri 11-19h", "Emergency call 00-24h"]}
          />
          <ContactInfo title="Phone" subtitle={"+381 64-07-66-222"} />
          <ContactInfo title="Address" subtitle={"Bulevar Oslobođenja 241"} />
          <ContactInfo title="E-mail" subtitle={"office@siadentalclinic.rs"} />
        </Paper>

        <Paper
          elevation={10}
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            p: 2,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.562834448891!2d20.476941200000002!3d44.76932970000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a710a9139926d%3A0x16c546adf2689e58!2sSIA%20DENTAL%20CLINIC!5e0!3m2!1ssr!2srs!4v1738200939985!5m2!1ssr!2srs"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Paper>
      </Box>
    </Box>
  );
};

export default Contact;
