"use client";

import { Link } from "@/src/i18n/routing";
import { Instagram } from "@mui/icons-material";
import { Box, Container, Typography, Divider, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";
const navLinks = [
  { key: "services", path: "/services" },
  { key: "pricing", path: "/pricing" },
  { key: "aboutUs", path: "/about-us" },
  { key: "contact", path: "/contact" },
];
export default function Footer() {
  const theme = useTheme();
  const t = useTranslations("Footer");
  const tLinks = useTranslations("sharedLinks");
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 3,
        px: 2,
        backgroundColor: "#ebebeb",
        color: theme.palette.text.primary,
        textAlign: "center",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
              gap: { xs: 1, md: 2 },
            }}
          >
            <Typography sx={{ fontWeight: "400" }}>
              {t("contactTitle")}
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <a href="mailto:office@siadentalclinic.rs">{t("email")}</a>
            </Typography>
            <Typography sx={{ fontWeight: 600 }}>
              {t("telephoneNumber")}
            </Typography>
            <Typography sx={{ fontWeight: 600 }}>{t("address")}</Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
              gap: 2,
            }}
          >
            <Typography sx={{ fontWeight: "400" }}>
              {t("linksTitle")}
            </Typography>
            {navLinks.map((link) => (
              <Link key={link.key} href={link.path}>
                <Typography
                  sx={{
                    fontWeight: "600",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {tLinks(`links.${link.key}`)}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flex: 1,
              gap: 2,
            }}
          >
            <Typography sx={{ fontWeight: "400" }}>
              {t("socialsTitle")}
            </Typography>
            <Typography
              color="primary"
              component="a"
              href="https://www.instagram.com/sia_dental_clinic/"
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "600",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <Instagram /> : sia_dental_clinic
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            © {new Date().getFullYear()} SIA Dental Clinic
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Typography sx={{ "&:hover": { textDecoration: "underline" } }}>
              <Link href="/privacy-policy" color="secondary">
                {t("privacyPolicy")}
              </Link>
            </Typography>
            <Typography sx={{ "&:hover": { textDecoration: "underline" } }}>
              <Link href="/terms" color="secondary">
                {t("termsOfService")}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
