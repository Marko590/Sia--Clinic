"use client";
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon, Adb as AdbIcon, Call } from "@mui/icons-material";
import Link from "next/link";
import { useTranslations } from "next-intl";

const navLinks = [
  { key: "services", path: "/services" },
  { key: "pricing", path: "/pricing" },
  { key: "aboutUs", path: "/about-us" },
  { key: "contact", path: "/contact" },
];
navLinks.map((link) => console.log(link));
const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const t = useTranslations("NavBar");
  const tLinks = useTranslations("sharedLinks");
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      sx={{
        width: "95%",
        mt: 1,
        transform: "translateX(-2.5%)",
      }}
      color="primary"
      position="fixed"
    >
      <Box sx={{ maxWidth: "100%", px: 2 }}>
        <Toolbar disableGutters sx={{ py: 1, alignItems: "center" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { xs: "space-between", md: "flex-start" },
              alignItems: "center",
            }}
          >
            {/* Mobile menu button */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton color="secondary" onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Logo (fixes flexGrow issue) */}
            <Link href="/">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                  flexGrow: { xs: 0, md: 0 },
                  width: { xs: "100px", md: "150px" },
                  flexDirection: { sx: "row", md: "column" },
                  alignItems: "center",
                }}
              >
                <img
                  src="/SIA_senka.png"
                  style={{
                    width: "100%",
                  }}
                />
                <Typography
                  color="white"
                  sx={{
                    display: { xs: "none", md: "inline" },
                    fontWeight: 800,
                    fontSize: "0.5rem",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  }}
                >
                  {t("title")}
                </Typography>
              </Box>
            </Link>

            {/* Desktop navigation links */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                ml: 2,
              }}
            >
              {navLinks.map((link) => (
                <Typography
                  component="a"
                  color="white"
                  key={link.key}
                  href={link.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontWeight: "400",
                    my: 2,
                    ml: 4,
                    fontSize: "1.25rem",
                    "&:hover": { color: "secondary.main" },
                  }}
                >
                  {tLinks(`links.${link.key}`)}
                </Typography>
              ))}
            </Box>

            {/* Call Button/Icon */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: "secondary.main",
                }}
                onClick={() => (window.location.href = "tel:+381640766222")}
              >
                <Call />
              </IconButton>
              <Button
                startIcon={<Call />}
                variant="outlined"
                size="large"
                color="white"
                sx={{ display: { xs: "none", md: "flex" }, fontWeight: "300" }}
                onClick={() => (window.location.href = "tel:+381640766222")}
              >
                +381640766222
              </Button>
            </Box>
          </Box>
        </Toolbar>

        {/* Mobile menu dropdown (ensure it's inside AppBar) */}
        <Menu
          anchorEl={anchorElNav}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "absolute", md: "none", width: "auto", left: 0 },
          }}
        >
          {navLinks.map((link) => (
            <Link href={link.path}>
              <MenuItem key={link.key} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {tLinks(`links.${link.key}`)}
                </Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Box>
    </AppBar>
  );
};

export default NavBar;
