"use client";
import { useRouter } from "@/src/i18n/routing";
import { Button } from "@mui/material";
import { useLocale } from "next-intl";
import React from "react";

const LanguageSwitch = () => {
  const locale = useLocale();
  const nextLocale = locale === "en" ? "sr" : "en";
  const router = useRouter();
  let icon = "";
  if (locale === "sr") {
    icon = "🇬🇧";
  } else {
    icon = "🇷🇸";
  }
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{ position: "fixed", bottom: 30, right: 40, p: 2, zIndex: 1000 }}
      onClick={() => router.replace("/", { locale: nextLocale })}
    >
      {icon}
    </Button>
  );
};

export default LanguageSwitch;
