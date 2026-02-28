import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Card,
  CardMedia,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const sliderImages = [
  `${process.env.PUBLIC_URL}/assets/images/slider1.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/slider2.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/slider3.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/slider4.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/slider5.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/slider6.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/slider7.jpeg`,
  `${process.env.PUBLIC_URL}/assets/images/slider8.jpeg`,
];

const ImageCarousel = ({ images = sliderImages }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const visibleSlides = isMobile ? 1 : isTablet ? 2 : isLaptop ? 3 : 4;

  const [index, setIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const containerRef = useRef(null);

  const maxIndex = Math.max(images.length - visibleSlides, 0);

  useEffect(() => {
    if (containerRef.current) {
      setSlideWidth(containerRef.current.offsetWidth / visibleSlides);
    }
  }, [visibleSlides]);

  const scrollLeft = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <Box sx={{ position: "relative", width: "100%", mt: 6 }}>
      
      {/* Viewport */}
      <Box
        ref={containerRef}
        sx={{
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Track */}
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            transform: `translateX(-${index * slideWidth}px)`,
          }}
        >
          {images.map((img, i) => (
            <Box
              key={i}
              sx={{
                flex: `0 0 ${100 / visibleSlides}%`,
                p: 1.5,
              }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={img}
                  alt={`carousel-${i}`}
                  sx={{
                    height: isMobile ? 220 : 260,
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Left Arrow */}
      {index > 0 && (
        <IconButton
          onClick={scrollLeft}
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.9)",
            boxShadow: 3,
            "&:hover": { bgcolor: "#fff" },
          }}
        >
          <ArrowBackIos />
        </IconButton>
      )}

      {/* Right Arrow */}
      {index < maxIndex && (
        <IconButton
          onClick={scrollRight}
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            bgcolor: "rgba(255,255,255,0.9)",
            boxShadow: 3,
            "&:hover": { bgcolor: "#fff" },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      )}
    </Box>
  );
};

export default ImageCarousel;