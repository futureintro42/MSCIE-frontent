import { Grid, Box, Typography, Divider } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

const AboutUs = () => {
  return (
    <Grid container spacing={4} alignItems="stretch">
      {/* Image Section */}
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/assets/images/aboutus.jpeg`}
          alt=""
          sx={{
            width: "100%",
            height: { xs: 300, md: 400 },
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
      </Grid>

      {/* Content Section */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: "100%",
            p: { xs: 2, md: 4 },
            borderLeft: { md: "4px solid #1867bf" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.9,
              fontSize: 16,
              color: "#444",
              mb: 4,
            }}
          >
            We provide inspection, certification and testing services for
            cranes, heavy equipment and trucks to confirm compliance with all
            laws and ensure inspection standards are met. Our years of
            experience and prompt inspections help extend operating life and
            reduce company risks. We have equipment insurance.
          </Typography>

          {/* Services Structured Layout */}
          <Grid container spacing={2}>
            {[
              "Inspection and Testing",
              "Certificate",
              "Safety and Security Consulting",
              "Safety Training",
            ].map((service, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  <ArrowForwardIos
                    sx={{ fontSize: 14, color: "#1867bf" }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    {service}
                  </Typography>
                </Box>

                {i !== 3 && (
                  <Divider sx={{ mt: 2, display: { xs: "block", sm: "none" } }} />
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUs;