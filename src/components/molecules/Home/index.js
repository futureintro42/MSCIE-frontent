import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ServicesDetails from "../Services";

const HomeDetails = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          
          {/* ================= SERVICES SECTION ================= */}
          <Grid item xs={12}>
            <Box textAlign="center" mb={6}>
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: "#1867bf", mb: 2 }}
              >
                Our Services
              </Typography>

              <Divider
                sx={{
                  width: 80,
                  height: 4,
                  backgroundColor: "#1867bf",
                  mx: "auto",
                  borderRadius: 2,
                }}
              />
            </Box>

            <Box
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                background: "#f8fbff",
                boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
              }}
            >
              <ServicesDetails />
            </Box>

            <Box textAlign="center" mt={5}>
              <Button
                variant="contained"
                onClick={() => navigate("/services")}
                sx={{
                  borderRadius: "40px",
                  px: 5,
                  py: 1.4,
                  backgroundColor: "#1867bf",
                  fontWeight: "bold",
                  boxShadow: "0 6px 20px rgba(24,103,191,0.3)",
                }}
              >
                View All Services
              </Button>
            </Box>
          </Grid>

          {/* ================= ABOUT SECTION ================= */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/images/aboutus.jpeg`}
              alt="About Us"
              sx={{
                width: "100%",
                height: { xs: "300px", md: "450px" },
                borderRadius: 4,
                objectFit: "cover",
                boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} display="flex" alignItems="center">
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                background: "white",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                mb={3}
                sx={{ color: "#1867bf" }}
              >
                About Our Company
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                mb={4}
                sx={{ lineHeight: 1.8 }}
              >
                We are a trusted provider of inspection, testing, calibration,
                safety assurance, and training services. With international
                expertise and commitment to quality, we help industries ensure
                compliance and operational excellence.
              </Typography>

              <Button
                variant="outlined"
                onClick={() => navigate("/about-us")}
                sx={{
                  borderRadius: "40px",
                  px: 5,
                  py: 1.3,
                  fontWeight: "bold",
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>

        </Grid>
      </Container>

      {/* ================= CALL TO ACTION - GLASS STYLE ================= */}
<Box
  sx={{
    mt: { xs: 8, md: 12 },
    py: { xs: 8, md: 10 },
    background: "linear-gradient(to right, #111, #1c1c1c)",
  }}
>
  <Container maxWidth="md">
    <Box
      sx={{
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "24px",
        textAlign: "center",
        color: "white",
        p: { xs: 4, md: 6 },
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Ready to Work With Us?
      </Typography>

      <Typography
        variant="body1"
        mb={5}
        sx={{ opacity: 0.85 }}
      >
        Contact us today for reliable inspection, testing, and training
        services tailored to your needs.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/contact-us")}
        sx={{
          borderRadius: "50px",
          px: 6,
          py: 1.5,
          fontWeight: "bold",
          backgroundColor: "#1867bf",
        }}
      >
        Contact Us
      </Button>
    </Box>
  </Container>
</Box>


    </Box>
  );
};

export default HomeDetails;
