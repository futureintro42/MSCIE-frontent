import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
  CardMedia,
  Box,
  Divider,
} from "@mui/material";

const InfoRow = ({ label, value }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      py: 1.5,
      px: 2,
      borderRadius: 2,
      backgroundColor: "#f5f9ff",
    }}
  >
    <Typography
      sx={{
        fontWeight: 600,
        color: "#0f4c8d",
      }}
    >
      {label}
    </Typography>

    <Typography
      sx={{
        fontWeight: 500,
        color: "#333",
      }}
    >
      {value || "-"}
    </Typography>
  </Box>
);

const CardView = ({ dataRow }) => {
  const { id, name, iqama_number, issue_date, expiry_date, certified_as } =
    dataRow || {};

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { sm: 6, xs: 2 },
        px: { xs: 1 },
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: "70%", md: "55%" },
          borderRadius: 4,
          boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
          overflow: "hidden",
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #0f4c8d, #1867bf)",
            color: "white",
            textAlign: "center",
            py: 4,
            px: 2,
          }}
        >
          <CardMedia
            component="img"
            alt="logo"
            image={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
            sx={{
              width: 180,
              height: 90,
              objectFit: "contain",
              mx: "auto",
              mb: 2,
            }}
          />

          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ letterSpacing: 0.5 }}
          >
            Modern Security Co. for Inspection & Examination
          </Typography>
        </Box>

        {/* Title Section */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "#0f4c8d" }}
          >
            SAFETY ID Card Information
          </Typography>

          <Divider
            sx={{
              width: 80,
              height: 3,
              backgroundColor: "#1867bf",
              mx: "auto",
              mt: 1,
              borderRadius: 2,
            }}
          />
        </Box>

        {/* Information Section */}
        <CardContent sx={{ px: { xs: 2, md: 4 }, pb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InfoRow label="Job No." value={id} />
            </Grid>

            <Grid item xs={12}>
              <InfoRow label="Card Holder Name" value={name} />
            </Grid>

            <Grid item xs={12}>
              <InfoRow label="Iqama No." value={iqama_number} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InfoRow label="Issue Date" value={issue_date} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InfoRow label="Expiry Date" value={expiry_date} />
            </Grid>

            <Grid item xs={12}>
              <InfoRow label="Certified As" value={certified_as} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

CardView.defaultProps = {
  title: "",
  dataRow: {},
};

export default CardView;
