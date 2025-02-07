"use client";
import { ArrowForward } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { EmployeeCardInfo } from "../lib/types";
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
            flex: 3,
            borderRadius: "10px",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Link href={`/about-us/${id}`}>
            <Box
              sx={{
                display: "flex",
                flex: 6,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  filter: isHovered ? "blur(7px)" : "blur(0px)",
                  transition: "filter 0.5s ease",
                }}
              >
                <img
                  src="drStefan.png"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
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
            </Box>
          </Link>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              color="primary"
              sx={{ fontWeight: "500", fontSize: "1.5rem" }}
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
