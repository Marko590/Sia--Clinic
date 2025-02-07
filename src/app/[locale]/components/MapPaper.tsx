import { Paper, SxProps, Theme } from "@mui/material";
import React from "react";

const MapPaper = ({
  targetBoxRef,
  sx,
}: {
  sx: SxProps<Theme>;
  targetBoxRef?: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <Paper
      ref={targetBoxRef}
      elevation={10}
      sx={{
        ...sx,
        background: "background.paper",
        display: "flex",
        alignItems: "center",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.562834448891!2d20.476941200000002!3d44.76932970000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a710a9139926d%3A0x16c546adf2689e58!2sSIA%20DENTAL%20CLINIC!5e0!3m2!1ssr!2srs!4v1738200939985!5m2!1ssr!2srs"
        style={{
          border: 0,
          width: "100%",
          height: "100%",
          borderRadius: "10px",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Paper>
  );
};

export default MapPaper;
