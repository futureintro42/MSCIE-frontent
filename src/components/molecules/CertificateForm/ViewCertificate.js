import React, { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  Button,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import QRCode from "react-qr-code";
import ReactToPrint from "react-to-print";
import { formatDate } from "../../../utils/utils";

const Label = styled("span")(() => ({
  fontWeight: 600,
  fontSize: "11px",
  textTransform: "uppercase",
  marginRight: "6px",
}));

const Value = styled("span")(() => ({
  fontSize: "11px",
}));

const Section = ({ title, children }) => (
  <Box sx={{ mb: 1 }}>
    {title && (
      <Typography
        variant="subtitle2"
        align="center"
        sx={{ fontWeight: 700, textTransform: "uppercase", mb: 0.5 }}
      >
        {title}
      </Typography>
    )}
    {children}
    <Divider sx={{ my: 0.5 }} />
  </Box>
);

const ViewCertificate = ({ title, dataRow }) => {
  const ref = useRef();
  const {
    business_address,
    business_name,
    details,
    equipment_description,
    equipment_type,
    inspection_date,
    inspection_next_date,
    inspector_name,
    location_of_equipment,
    make,
    owner_business_address,
    owner_business_name,
    plant_number,
    reference_number,
    serial_number,
    standard_specification,
    sticker_number,
    resultStatus = "",
    year_of_manufacturing,
    id,
  } = dataRow || {};

  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 0 }}>
      {/* Header */}

      <Card sx={{ mb: 4, width: "100%", boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <RouterLink
            to="/certificate/search"
            style={{
              textDecoration: "none",
              color: "#1976d2",
              fontWeight: 600,
            }}
          >
            ← Search certificate
          </RouterLink>

          <ReactToPrint content={() => ref.current} trigger={() => <Button size="small" variant="contained">Print</Button>} />
        </Box>
      </Card>

      {/* Certificate Body */}
      <Card sx={{ width: "100%", p: 2 }} ref={ref}>
        <CardContent sx={{ p: 1 }}>
          <Typography variant="h6" align="center" sx={{ textTransform: "uppercase", mb: 1 }}>
            Certificate of Testing and Comprehensive Inspection of Equipment
          </Typography>

          {/* Certificate Numbers */}
          <Section>
            <Grid container spacing={1}>
              <Grid item xs={4}><Label>Certificate No:</Label><Value>{id}</Value></Grid>
              <Grid item xs={4}><Label>Sticker No:</Label><Value>{sticker_number}</Value></Grid>
              <Grid item xs={4}><Label>Reference No:</Label><Value>{reference_number}</Value></Grid>
            </Grid>
          </Section>

          {/* Equipment Description */}
          <Section title="Description of Equipment">
            <Grid container spacing={1}>
              <Grid item xs={6}><Label>Type:</Label><Value>{equipment_type}</Value></Grid>
              <Grid item xs={6}><Label>Description:</Label><Value>{equipment_description}</Value></Grid>
              <Grid item xs={6}><Label>Manufacturer:</Label><Value>{make}</Value></Grid>
              <Grid item xs={6}><Label>Serial No:</Label><Value>{serial_number}</Value></Grid>
              <Grid item xs={6}><Label>Year:</Label><Value>{year_of_manufacturing}</Value></Grid>
              <Grid item xs={6}><Label>Plant No:</Label><Value>{plant_number}</Value></Grid>
              <Grid item xs={12}><Label>Location:</Label><Value>{location_of_equipment}</Value></Grid>
              <Grid item xs={6}><Label>Owner Name:</Label><Value>{owner_business_name}</Value></Grid>
              <Grid item xs={6}><Label>Owner Address:</Label><Value>{owner_business_address}</Value></Grid>
              <Grid item xs={6}><Label>Defects:</Label><Value>{details}</Value></Grid>
              <Grid item xs={6}><Label>Specification:</Label><Value>{standard_specification}</Value></Grid>
            </Grid>
            <Typography align="center" sx={{ fontSize: "11px", fontWeight: 600, mt: 0.5 }}>
              VISUAL INSPECTION AND FUNCTIONAL TESTS WERE
              SATISFACTORY FINAL RESULT -{" "}
              {resultStatus?.toUpperCase()}
            </Typography>
          </Section>

          {/* Business Info */}
          <Section>
            <Grid container spacing={1}>
              <Grid item xs={6}><Label>Business Name:</Label><Value>{business_name}</Value></Grid>
              <Grid item xs={6}><Label>Business Address:</Label><Value>{business_address}</Value></Grid>
              <Grid item xs={6}><Label>Inspection Date:</Label><Value>{formatDate(inspection_date)}</Value></Grid>
              <Grid item xs={6}><Label>Next Inspection:</Label><Value>{formatDate(inspection_next_date)}</Value></Grid>
            </Grid>
          </Section>

          {/* Declaration with signature */}
          <Section title="Declaration">
            <Typography sx={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", mb: 1 }}>
              I hereby declare that the above information is correct and that the equipment has been tested and thoroughly examined in accordance with the appropriate provisions/standards at the time of inspection and found to be free from any defect safety other than these detailed above.
            </Typography>

            <Grid container spacing={2} sx={{ mt: 1 }}>
              {/* Signature on left */}
              <Grid item xs={6}>
                <Box sx={{ borderTop: "1px solid #000", width: "80%", mt: 4 }}>
                  <Typography sx={{ fontSize: "11px", fontWeight: 600 }}>Signature</Typography>
                </Box>
              </Grid>

              {/* Date on right */}
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Box sx={{ borderTop: "1px solid #000", width: "80%", mt: 4, ml: "auto" }}>
                  <Typography sx={{ fontSize: "11px", fontWeight: 600 }}>Date</Typography>
                </Box>
              </Grid>
            </Grid>
          </Section>

          {/* Disclaimer & Inspector */}
          <Section title="Disclaimer">
            <Typography sx={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", mb: 1 }}>
              This certificate is issued subject to the observation made at the time of our inspection. The inspection company will not be held liable for any damages or losses occasioned to the equipment subsequent to the inspection.
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6}><Label>Inspector:</Label><Value>{inspector_name}</Value></Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Typography sx={{ fontWeight: 600, fontSize: "11px" }}>Technical Director</Typography>
              </Grid>
              <Grid item xs={6}>
                <QRCode size={80} value={`${window.location.origin}/certificate/search`} />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "10px" }}>
                  To verify the authenticity of the certificate data, please scan the QR code
                </Typography>
              </Grid>
            </Grid>
          </Section>
        </CardContent>
      </Card>
    </Container>
  );
};

ViewCertificate.defaultProps = {
  title: "",
  dataRow: {},
};

export default ViewCertificate;
