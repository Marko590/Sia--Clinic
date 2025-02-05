"use client";

import { Instagram } from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  useTheme,
} from "@mui/material";
import { NavLinks } from "../lib/data";

export default function Footer() {
  const theme = useTheme();
  const navLinks = NavLinks;
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
            Contact:
            <Link
              href="mailto:office@siadentalclinic.rs"
              color="primary"
              sx={{ textAlign: "right" }}
            >
              office@siadentalclinic.rs
            </Link>
            <Typography sx={{ fontWeight: 200 }}>
              Telephone: +381 64-07-66-222
            </Typography>
            <Typography sx={{ fontWeight: 200 }}>
              Address: Bulevar Oslobođenja 241
            </Typography>
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
            Links:
            {navLinks.map((link) => (
              <Link key={link.title} href={link.path}>
                {link.title}
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
            Socials:
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

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link href="/privacy-policy" color="secondary" sx={{ mx: 1 }}>
              Privacy Policy
            </Link>

            <Link href="/terms" color="secondary" sx={{ mx: 1 }}>
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
