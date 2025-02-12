"use client";
import React, { useEffect } from "react";
import "./styles.css";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
const HoverCard = ({ id, serviceKey }: { id: number; serviceKey: string }) => {
  const t = useTranslations("ServiceGrid");
  useEffect(() => {
    const subtitle = document.getElementsByClassName("card-subtitle")[id];

    const createWord = (text: string, index: number) => {
      const word = document.createElement("span");

      word.innerHTML = `${text} `;

      word.classList.add("card-subtitle-word");

      word.style.transitionDelay = `${index * 40}ms`;

      return word;
    };

    const addWord = (text: string, index: number) =>
      subtitle.appendChild(createWord(text, index));

    const createSubtitle = (text: string) => text.split(" ").map(addWord);

    createSubtitle(t(`services.${serviceKey}.subTitle`));
  }, []);
  return (
    <Paper
      elevation={10}
      className="card"
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Box
        className="card-content"
        sx={{ aspectRatio: { xs: "4/3", md: "1/1.3" } }}
      >
        <Typography
          className="card-title"
          sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: 300 }}
        >
          {t(`services.${serviceKey}.title`)}
        </Typography>
        <Typography
          className="card-subtitle"
          sx={{ fontSize: { xs: "1.5rem", md: "1.5rem" } }}
        ></Typography>
        <Button
          className="card-button"
          variant="outlined"
          sx={{ borderColor: "white", fontSize: "1.25rem" }}
        >
          <Link href={`/services/${serviceKey}`}>More ➤</Link>
        </Button>
      </Box>
    </Paper>
  );
};

export default HoverCard;
