import React, { useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  CardMedia,
  Button,
} from "@mui/material";
import QRCode from "react-qr-code";
import ReactToPrint from "react-to-print";
import { formatDate } from "../../../utils/utils";

const CardView = ({ dataRow }) => {
  const ref = useRef();

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        p: 0,
      }}
    >
      {/* Header Actions */}
      <Card sx={{ mb: 4, width: "100%", boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <RouterLink
            to="/cards/search"
            style={{
              textDecoration: "none",
              color: "#1976d2",
              fontWeight: 600,
            }}
          >
            ← Search cards
          </RouterLink>

          <ReactToPrint
            bodyClass="print-agreement"
            content={() => ref.current}
            trigger={() => (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0f4c8d",
                  "&:hover": { backgroundColor: "#08305a" },
                }}
              >
                Print
              </Button>
            )}
          />
        </Box>
      </Card>

      {/* PRINT AREA */}
      <Box
        ref={ref}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "@media print": {
            pageBreakInside: "avoid",
          },
        }}
      >
        {/* ================= FRONT CARD ================= */}
        <Card
          sx={{
            width: { sm: "40%", xs: "100%" },
            mt: 1,
            borderRadius: 3,
            boxShadow: 4,
            overflow: "hidden",
            "@media print": {
              boxShadow: "none",
            },
          }}
        >
          {/* Top Header (Logo + Company) */}
          <Box
            sx={{
              background: "linear-gradient(90deg, #0f4c8d, #1565c0)",
              color: "white",
              p: 1.5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
              alt="logo"
              sx={{ width: 55, height: 55, mr: 1 }}
            />

            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              Modern Security Co. for Inspection & Examination
            </Typography>
          </Box>

          {/* ID Section (Below header, Right aligned, Single line) */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              px: 2,
              py: 0.5,
              backgroundColor: "#f5f7fa",
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "#0f4c8d",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100%",
              }}
            >
              ID: {dataRow.id}
            </Typography>
          </Box>

          <CardContent sx={{ p: 1.5 }}>
            <Grid container spacing={1}>
              {/* Left: Photo + QR */}
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt={dataRow.name}
                  image={dataRow.profile_pic}
                  sx={{
                    width: "100%",
                    height: 110,
                    borderRadius: 2,
                    border: "2px solid #0f4c8d",
                    objectFit: "cover",
                  }}
                />

                <Box sx={{ mt: 1 }}>
                  <QRCode
                    size={256}
                    style={{ width: "100%", height: 70 }}
                    value={`${window.location.origin}/cards/search`}
                  />
                </Box>
              </Grid>

              {/* Right: Details */}
              <Grid item xs={8}>
                <Typography fontSize="0.75rem">
                  <strong>Name:</strong> {dataRow.name}
                </Typography>
                <Typography fontSize="0.75rem">
                  <strong>Iqama No:</strong> {dataRow.iqama_number}
                </Typography>
                <Typography fontSize="0.75rem">
                  <strong>Company:</strong> {dataRow.company}
                </Typography>
                <Typography fontSize="0.75rem">
                  <strong>Issued on:</strong>{" "}
                  {formatDate(dataRow.issue_date)}
                </Typography>
                <Typography fontSize="0.75rem">
                  <strong>Valid up to:</strong>{" "}
                  {formatDate(dataRow.expiry_date)}
                </Typography>
              </Grid>

              {/* Certification */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    mt: 1,
                    backgroundColor: "#0f4c8d",
                    color: "white",
                    textAlign: "center",
                    borderRadius: 1,
                    p: 0.5,
                  }}
                >
                  <Typography fontSize="0.8rem" fontWeight={600}>
                    {dataRow.certified_as}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* ================= BACK CARD ================= */}
        <Card
          sx={{
            width: { sm: "40%", xs: "100%" },
            mt: 2,
            borderRadius: 3,
            boxShadow: 4,
            "@media print": {
              boxShadow: "none",
            },
          }}
        >
          <CardContent sx={{ p: 1.5 }}>
            <Grid container spacing={1}>
              <Grid item xs={7}>
                <Typography fontSize="0.65rem">
                  This card is issued by and remains the property of Safety
                  International Company For Inspection
                </Typography>

                <Typography
                  fontSize="0.7rem"
                  fontWeight={600}
                  sx={{ mt: 1 }}
                >
                  The holder of this card has been successfully completed the
                  training session on safety, stability and safe operation of
                  the equipment(s) listed on the other side.
                </Typography>

                <Typography fontSize="0.7rem" fontWeight={600} sx={{ mt: 1 }}>
                  Examiner: {dataRow.examiner}
                </Typography>
              </Grid>

              <Grid item xs={5}>
                <Box sx={{ textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    image={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                    alt="logo"
                    sx={{ width: 60, height: 60, mx: "auto" }}
                  />
                </Box>

                <Typography fontSize="0.6rem" sx={{ mt: 1 }}>
                  2989 - 22444 - السعوديه ـ جدة ـ حي السنابل
                </Typography>
                <Typography fontSize="0.65rem">
                  Tel: 0538507454
                </Typography>
                <Typography fontSize="0.65rem">
                  Email: info@aliiec.com
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography fontSize="0.7rem" fontWeight={600} sx={{ mt: 1 }}>
                  Disclaimer:
                </Typography>
                <Typography fontSize="0.65rem">
                  SIIC accepts no liability for any errors committed by the
                  holder of this card whilst attending the categorized duty
                </Typography>
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Typography fontSize="0.7rem" color="red" fontWeight={700}>
                  THIS IS NOT A SAUDI ARABIAN GOVERNMENT LICENSE
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

CardView.defaultProps = {
  title: "",
  dataRow: {},
};

export default CardView;