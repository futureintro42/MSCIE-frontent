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
        textAlign: "right",
      }}
    >
      {value || "-"}
    </Typography>
  </Box>
);

const CertificateDetails = ({ dataRow }) => {
  const {
    id,
    business_address,
    business_name,
    equipment_description,
    equipment_type,
    inspection_date,
    inspection_next_date,
    inspector_name,
    reference_number,
    sticker_number,
    make,
    serial_number,
  } = dataRow || {};

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: { sm: 6, xs: 2 },
        px: { xs: 1 },
        mb:2
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", sm: "80%", md: "65%" },
          borderRadius: 4,
          boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
          overflow: "hidden",
        }}
      >
        {/* ================= HEADER ================= */}
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

        {/* ================= TITLE ================= */}
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "#0f4c8d" }}
          >
            SAFETY Certificate Information
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

        {/* ================= INFORMATION ================= */}
        <CardContent sx={{ px: { xs: 2, md: 4 }, pb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InfoRow label="Certificate No." value={id} />
            </Grid>

            <Grid item xs={12}>
              <InfoRow label="Sticker No." value={sticker_number} />
            </Grid>

            <Grid item xs={12}>
              <InfoRow label="Reference No." value={reference_number} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InfoRow label="Date of Inspection" value={inspection_date} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InfoRow
                label="Next Inspection Date"
                value={inspection_next_date}
              />
            </Grid>

            <Grid item xs={12}>
              <InfoRow label="Equipment Type" value={equipment_type} />
            </Grid>

            <Grid item xs={12}>
              <InfoRow
                label="Equipment Description"
                value={equipment_description}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InfoRow label="Make" value={make} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InfoRow label="Serial No." value={serial_number} />
            </Grid>

            <Grid item xs={12}>
              <InfoRow label="Business Name" value={business_name} />
            </Grid>

            <Grid item xs={12}>
              <InfoRow label="Business Address" value={business_address} />
            </Grid>

            <Grid item xs={12}>
              <InfoRow label="Inspector's Name" value={inspector_name} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

CertificateDetails.defaultProps = {
  title: "",
  dataRow: {},
};

export default CertificateDetails;
