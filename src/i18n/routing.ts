import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "rs"],
  defaultLocale: "rs",

  pathnames: {
    "/": "/",

    "/about-us": {
      en: "/about-us",
      rs: "/o-nama",
    },

    "/about-us/[id]": {
      en: "/about-us/[id]",
      rs: "/o-nama/[id]",
    },

    "/pricing": {
      en: "/pricing",
      rs: "/cenovnik",
    },
    "/contact": {
      en: "/contact",
      rs: "/kontakt",
    },
    "/services": {
      en: "/services",
      rs: "/usluge",
    },
  },
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
