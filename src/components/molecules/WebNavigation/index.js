// src/components/WebNavigation.js
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Link,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const WebNavigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { key: "Home", to: "/" },
    { key: "Cards", to: "/cards/search" },
    { key: "Certificates", to: "/certificate/search" },
    { key: "Services", to: "/services" },
    { key: "About", to: "/about-us" },
    { key: "Contact", to: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          transition: "all 0.35s ease",
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
          backgroundColor: {
            xs: "#ffffff",
            md: scrolled
              ? "rgba(255,255,255,0.95)"
              : "rgba(0,0,0,0.25)",
          },
          color: scrolled ? "#1867bf" : "#ffffff",
          boxShadow: scrolled
            ? "0px 4px 20px rgba(0,0,0,0.08)"
            : "none",
          py: scrolled ? 0.5 : 1.2,
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            
            {/* Logo */}
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
              alt="Company Logo"
              sx={{
                height: scrolled ? "60px" : "90px",
                width: "auto",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 5,
                alignItems: "center",
              }}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.to}
                  underline="none"
                  sx={{
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    letterSpacing: "0.5px",
                    color: scrolled ? "#1867bf" : "#ffffff",
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#ffcc00",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -6,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0%",
                      height: "3px",
                      borderRadius: "4px",
                      bgcolor: "#ffcc00",
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "70%",
                    },
                  }}
                >
                  {item.key}
                </Link>
              ))}

              {/* Login Button */}
              <Button
                href="/login"
                variant="contained"
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1,
                  borderRadius: "30px",
                  fontWeight: 700,
                  textTransform: "none",
                  background: "linear-gradient(45deg, #1867bf, #004ba0)",
                  boxShadow: "0 4px 12px rgba(24,103,191,0.3)",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #e6b800, #ffcc00)",
                    color: "#000",
                  },
                }}
              >
                Login
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "flex", md: "none" },
                color: scrolled ? "#1867bf" : "#ffffff",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{
            width: 280,
            p: 3,
            height: "100%",
            background:
              "linear-gradient(to bottom, #1867bf, #004ba0)",
            color: "#fff",
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.key}
                component="a"
                href={item.to}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                  },
                }}
              >
                <ListItemText
                  primary={item.key}
                  sx={{
                    textAlign: "left",
                    fontWeight: 600,
                  }}
                />
              </ListItem>
            ))}

            <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.3)" }} />

            <ListItem
              button
              component="a"
              href="/login"
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 3,
                backgroundColor: "#ffcc00",
                color: "#000",
                fontWeight: 700,
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "#e6b800",
                },
              }}
            >
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default WebNavigation;