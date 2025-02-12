import { Box, Typography } from "@mui/material";
import React from "react";

const ContactInfo = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string | Array<string>;
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography sx={{ textAlign: "center" }}>{title}</Typography>
      {Array.isArray(subtitle) ? (
        subtitle.map((item, index) => (
          <Typography
            key={index}
            sx={{
              textAlign: "center",
              color: "text.secondary",
              fontWeight: "700",
              fontSize: "1.25rem",
            }}
          >
            {item}
          </Typography>
        ))
      ) : (
        <Typography
          sx={{
            textAlign: "center",
            color: "text.secondary",
            fontWeight: "700",
            fontSize: "1.25rem",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default ContactInfo;
