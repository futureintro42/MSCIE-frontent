import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        py: { xs: 6, md: 10 },
        backgroundColor: "#f4f8ff",
      }}
    >
      <Container maxWidth="lg">
        
        {/* ===== Header Section ===== */}
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#0f4c8d", mb: 2 }}
          >
            Verification Dashboard
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 500, mx: "auto" }}
          >
            Access Safety ID Card and Certificate verification details.
          </Typography>
        </Box>

        {/* ===== Cards Section ===== */}
        <Grid container spacing={6}>
          
          {/* ===== CARD SECTION ===== */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={`${process.env.PUBLIC_URL}/assets/images/card.png`}
                alt="Card"
                sx={{ objectFit: "cover" }}
              />

              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#0f4c8d", mb: 1 }}
                >
                  Safety ID Card
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  mb={3}
                >
                  Modern Security Co. for Inspection & Examination
                </Typography>

                <Button
                  component={Link}
                  to="/cards"
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: "40px",
                    py: 1.2,
                    fontWeight: "bold",
                    backgroundColor: "#1867bf",
                  }}
                >
                  View Card
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* ===== CERTIFICATE SECTION ===== */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={`${process.env.PUBLIC_URL}/assets/images/certificate.png`}
                alt="Certificate"
                sx={{ objectFit: "cover" }}
              />

              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#0f4c8d", mb: 1 }}
                >
                  Safety Certificate
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  mb={3}
                >
                  Modern Security Co. for Inspection & Examination
                </Typography>

                <Button
                  component={Link}
                  to="/certificate"
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: "40px",
                    py: 1.2,
                    fontWeight: "bold",
                    backgroundColor: "#1867bf",
                  }}
                >
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
