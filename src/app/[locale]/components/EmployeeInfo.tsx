"use client";
import { ArrowForward } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { Link } from "@/src/i18n/routing";

const EmployeeInfo = ({
  id,
  name,
  shortBio,
  image,
}: {
  id: string;
  name: string;
  shortBio: string;
  image?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Paper
      elevation={10}
      sx={{
        display: "flex",
        background: "background.paper",
        width: "100%",
        height: "400px",
        p: 2,
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "stretch", width: "100%", gap: 2 }}
      >
        <Paper
          elevation={5}
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 2,
            p: 2,
            overflow: "hidden",
          }}
        >
          <Typography sx={{ fontSize: "1.25rem", wordBreak: "break-all" }}>
            {shortBio}
          </Typography>
        </Paper>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            flex: 3,
            gap: 2,
          }}
        >
          {/* Image Container */}
          <Box
            sx={{
              position: "relative", // Positioning needed for the absolute Arrow icon
              flex: 6,
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: "10px", // Optional: Rounded corners for the image
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link href={`/about-us/${id}`}>
              {/* Image Component */}
              <Image
                src={image || "/avatar-placeholder.png"}
                alt={name}
                layout="fill"
                style={{
                  objectFit: "contain", // Ensure the image fits within the container
                  transition: "filter 0.5s ease", // Smooth transition for the blur effect
                  filter: isHovered ? "blur(7px)" : "blur(0px)", // Blur effect on hover
                }}
              />

              {/* Arrow Icon */}
              <ArrowForward
                color="primary"
                className="arrow-icon"
                sx={{
                  position: "absolute",
                  width: "150px",
                  height: "150px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontSize: "2rem",
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              />
            </Link>
          </Box>

          {/* Name */}
          <Paper elevation={5} sx={{ flex: 1, width: "100%", height: "100%" }}>
            <Typography
              color="primary"
              sx={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "1.5rem",
              }}
            >
              {name}
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Paper>
  );
};
export default EmployeeInfo;
