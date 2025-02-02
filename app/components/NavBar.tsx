"use client";
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { Menu as MenuIcon, Adb as AdbIcon, Call } from "@mui/icons-material";
import { NavLinks } from "../lib/data";

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  // Open mobile menu
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  // Close mobile menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pages = NavLinks;
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#f4fade" }}>
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
            {/* Mobile menu button (fixed click issue) */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Logo (fixes flexGrow issue) */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                flexGrow: { xs: 0, md: 0 },
                width: { xs: "100px", md: "150px" },
              }}
            >
              <img src="/SIA_senka.png" style={{ width: "100%" }} />
            </Box>

            {/* Desktop navigation links */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                ml: 2,
              }}
            >
              {pages.map((page) => (
                <Typography
                  component="a"
                  key={page.title}
                  href={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    ml: 4,
                    fontWeight: 700,
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {page.title}
                </Typography>
              ))}
            </Box>

            {/* Call Button/Icon */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: "primary.main",
                }}
                onClick={() => (window.location.href = "tel:+381640766222")}
              >
                <Call />
              </IconButton>
              <Button
                startIcon={<Call />}
                variant="outlined"
                sx={{ display: { xs: "none", md: "flex" } }}
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
          {pages.map((page) => (
            <MenuItem key={page.title} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page.title}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </AppBar>
  );
};

export default NavBar;
