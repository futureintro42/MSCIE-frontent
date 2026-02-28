import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const images = [
  `${process.env.PUBLIC_URL}/assets/images/banner1.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/banner2.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/banner3.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/banner4.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/banner5.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/banner6.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/banner7.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/banner8.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/banner9.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/banner10.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/banner11.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/banner12.jpeg`,
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Slideshow */}
      {images.map((img, index) => (
        <Box
          key={index}
          sx={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            opacity: current === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.2) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "650px",
            color: "white",
            p: { xs: 3, md: 5 },
            backdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Accent Line */}
          <Box
            sx={{
              width: "60px",
              height: "5px",
              backgroundColor: "#1867bf",
              mb: 3,
              borderRadius: "4px",
            }}
          />

          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", md: "3.2rem" },
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Welcome to Modern Security Co. for Inspection & Examination
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              opacity: 0.9,
              mb: 4,
            }}
          >
            Trusted partner in inspection, testing, safety, and professional training.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <Button
              variant="contained"
              onClick={() => navigate("/about-us")}
              sx={{
                borderRadius: "50px",
                px: 5,
                py: 1.3,
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                backgroundColor: "#1867bf",
                boxShadow: "0 6px 20px rgba(24,103,191,0.4)",
              }}
            >
              Learn More
            </Button>

            <Button
              variant="outlined"
              onClick={() => navigate("/contact-us")}
              sx={{
                borderRadius: "50px",
                px: 5,
                py: 1.3,
                fontWeight: "bold",
                fontSize: "1rem",
                textTransform: "none",
                borderColor: "white",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "white",
                },
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroBanner;
