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
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1, alignItems: "center" }}>
          {/* Logo for larger screens */}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              "&:hover": { color: "primary.main" },
            }}
          >
            SIA
          </Typography>

          {/* Mobile menu button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>

            {/* Mobile menu dropdown */}
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for smaller screens */}

          <AdbIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 8,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            SIA
          </Typography>
          {/* Desktop navigation links */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex" }}>
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
          </Box>
          <Button
            startIcon={<Call />}
            variant="outlined"
            onClick={() => (window.location.href = "tel:+381640766222")}
          >
            +381640766222
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
