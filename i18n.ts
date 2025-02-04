import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./public/locales/en/common.json"; // Import your English translations
import sr from "./public/locales/sr/common.json"; // Import your Serbian translations

i18next.use(initReactI18next).init({
  resources: {
    en: { common: en },
    sr: { common: sr },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  ns: ["common"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18next;
