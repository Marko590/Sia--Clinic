import { Box, Typography } from "@mui/material";
import React from "react";

const ContactInfo = ({
  title,
  subtitle,
}: {
  title: String;
  subtitle: String | Array<String>;
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography sx={{ fontFamily: "fantasy", textAlign: "center" }}>
        {title}
      </Typography>
      {Array.isArray(subtitle) ? (
        subtitle.map((item, index) => (
          <Typography
            key={index}
            sx={{
              fontFamily: "fantasy",
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
            fontFamily: "fantasy",
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
