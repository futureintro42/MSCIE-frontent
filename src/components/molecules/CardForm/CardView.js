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
          }}
        >
          {/* Top Header (Logo + Company) */}
          <Box
            sx={{
              background: "linear-gradient(90deg, #0f4c8d, #1565c0)",
              color: "white",
              p: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            <CardMedia
              component="img"
              image={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
              alt="logo"
              sx={{ width: "80px", height: "80px", mr: 1 }}
            />

            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              Modern Aman Company for Inspection & Examination
            </Typography>
            <CardMedia
              component="img"
              alt="logo"
              image={`${process.env.PUBLIC_URL}/assets/images/safetyLogo.png`}
              sx={{ width: "80px", height: "80px" }}
            />
          </Box>

          <CardContent sx={{ p: 1 }}>
            <Grid container spacing={1.2}>
              {/* Photo + QR */}
              <Grid item xs={4}>
                <CardMedia
                  component="img"
                  alt={dataRow.name}
                  image={dataRow.profile_pic}
                  sx={{
                    width: "100%",
                    height: 95,
                    borderRadius: 2,
                    objectFit: "fill",
                  }}
                />

                <Box sx={{ mt: 1 }}>
                  <QRCode
                    size={256}
                    style={{ width: "100%", height: 50 }}
                    value={`${window.location.origin}/cards/search`}
                  />
                </Box>
              </Grid>

              {/* User Details */}
              <Grid item xs={8}>
                <Box sx={{ pl: 1 }}>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      fontWeight: 800,
                      color: "#0f4c8d",
                      lineHeight: 1.2,
                      mb: 1,
                    }}
                  >
                    {dataRow.name}
                  </Typography>

                  <Grid container>
                    {/* Row Template */}
                    <Grid item xs={4}>
                      <Box sx={{ display: "flex" }}>
                        <Typography sx={{ fontWeight: 600, minWidth: "90px" }}>
                          ID :
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography>{dataRow.id}</Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 600, minWidth: "90px" }}>
                        Name :
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography>{dataRow.name}</Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 600, minWidth: "90px" }}>
                        Iqama No. :
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography>{dataRow.iqama_number}</Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 600, minWidth: "90px" }}>
                        Company :
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography>{dataRow.company}</Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 600, minWidth: "90px" }}>
                        Issued on :
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography>{formatDate(dataRow.issue_date)}</Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography sx={{ fontWeight: 600, minWidth: "90px" }}>
                        Valid up to :
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography>{formatDate(dataRow.expiry_date)}</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <Box
            sx={{
              background: "linear-gradient(90deg, #0f4c8d, #1565c0)",
              color: "white",
              p: .5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Certification at bottom */}
            <Box>
              <Typography fontSize="0.9rem" fontWeight={700}>
                {dataRow.certified_as}
              </Typography>
            </Box>
          </Box>
        </Card>



        {/* ================= BACK CARD ================= */}
        <Card
          sx={{
            width: { sm: "40%", xs: "100%" },
            mt: 2,
            borderRadius: 3,
            boxShadow: 4,
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Grid container spacing={1.5}>
              <Grid item xs={7}>
                <Typography fontSize="0.75rem">
                  This card is issued by and remains the property of Safety
                  International Company For Inspection
                </Typography>

                <Typography fontSize="0.75rem" fontWeight={600} sx={{ mt: 1 }}>
                  The holder of this card has successfully completed the
                  training session on safety, stability and safe operation of
                  the equipment(s).
                </Typography>

                <Typography fontSize="0.8rem" fontWeight={700} sx={{ mt: 1 }}>
                  Examiner: {dataRow.examiner}
                </Typography>
              </Grid>

              <Grid item xs={5}>
                <Box sx={{ textAlign: "center" }}>
                  <CardMedia
                    component="img"
                    image={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
                    alt="logo"
                    sx={{ width: 80, height: 80, mx: "auto" }}
                  />
                </Box>

                <Typography fontSize="0.7rem" sx={{ mt: 1 }}>
                  2989 - 22444 - السعوديه ـ جدة ـ حي السنابل
                </Typography>

                <Typography fontSize="0.7rem">
                  Tel:{" "}
                  <a
                    href="tel:0538507454"
                    style={{
                      color: "#1976d2",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    0538507454
                  </a>
                </Typography>

                <Typography fontSize="0.7rem">
                  Email:{" "}
                  <a
                    href="mailto:info@aliiec.com"
                    style={{
                      color: "#1976d2",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    info@aliiec.com
                  </a>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography fontSize="0.75rem" fontWeight={700}>
                  Disclaimer:
                </Typography>

                <Typography fontSize="0.7rem">
                  SIIC accepts no liability for any errors committed by the
                  holder of this card whilst attending the categorized duty
                </Typography>
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Typography fontSize="0.8rem" color="red" fontWeight={700}>
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