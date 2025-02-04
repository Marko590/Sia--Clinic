import type { NextConfig } from "next";
const nextI18Next = require("next-i18next");

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  i18n: {
    locales: ["en", "fr"], // Add your supported locales
    defaultLocale: "en", // Set the default locale
  },
  // ... other Next.js configurations
};
