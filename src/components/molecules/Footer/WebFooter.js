import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  Stack,
  IconButton,
  Paper,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  ArrowForwardIos,
} from "@mui/icons-material";

const WebFooter = () => {
  const NavLinks = [
    { key: "Home", to: "/" },
    { key: "About the company", to: "/about-us" },
    { key: "Our Services", to: "/services" },
    { key: "Contact Us", to: "/contact-us" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1867bf",
        color: "#FFFFFF",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>

          {/* About */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                mb: 3,
                color: "#FFFFFF",
                letterSpacing: 0.5,
              }}
            >
              About the Company
            </Typography>

            <Typography
              sx={{
                lineHeight: 1.9,
                fontSize: "1rem",
                fontWeight: 500,
                color: "#FFFFFF",
              }}
            >
              We provide inspection, certification and testing services for
              cranes, heavy equipment and trucks to confirm compliance with all
              laws and ensure inspection standards are met. Our years of
              experience and prompt inspections help extend operating life and
              reduce company risks. We have equipment insurance.
            </Typography>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>

              {/* Contact */}
              <Grid item xs={12}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#1559a5",
                    p: 3,
                    borderRadius: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                      mb: 2,
                      color: "#FFFFFF",
                      fontSize: "1.2rem",
                    }}
                  >
                    Contact Us
                  </Typography>

                  <Stack spacing={2}>
                    <Box display="flex" gap={2} sx={{ color: "#FFFFFF" }}>
                      <LocationOn />
                      <Typography sx={{ fontSize: "1rem", fontWeight: 600 }}>
                        2989 - 22444 - السعوديه ـ جدة ـ حي السنابل
                      </Typography>
                    </Box>

                    <Box display="flex" gap={2} sx={{ color: "#FFFFFF" }}>
                      <Phone/>
                      <Typography sx={{ fontSize: "1rem", fontWeight: 600 }}>
                        0538507454
                      </Typography>
                    </Box>

                    <Box display="flex" gap={2} sx={{ color: "#FFFFFF" }}>
                      <Email />
                      <Typography sx={{ fontSize: "1rem", fontWeight: 600 }}>
                        info@aliiec.com
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>

              {/* Services + Links */}
              <Grid item xs={12}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: "#1559a5",
                    p: 3,
                    borderRadius: 3,
                  }}
                >
                  <Grid container spacing={4}>

                    {/* Services */}
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 900,
                          mb: 2,
                          color: "#FFFFFF",
                          fontSize: "1.2rem",
                        }}
                      >
                        Our Services
                      </Typography>

                      <Stack spacing={1.5}>
                        {[
                          "Inspection and Testing",
                          "Certificate",
                          "Safety and Security Consulting",
                          "Safety Training",
                        ].map((service, i) => (
                          <Box key={i} display="flex" alignItems="center" gap={1}>
                            <ArrowForwardIos
                              sx={{ fontSize: 14, color: "#FFFFFF" }}
                            />
                            <Typography
                              sx={{
                                fontSize: "1rem",
                                fontWeight: 600,
                                color: "#FFFFFF",
                                transition: "all 0.3s ease",
                              "&:hover": {
                                color: "#ffcc00",
                              },
                              }}
                            >
                              {service}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Grid>

                    {/* Important Links */}
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 900,
                          mb: 2,
                          color: "#FFFFFF",
                          fontSize: "1.2rem",
                        }}
                      >
                        Important Links
                      </Typography>

                      <Stack spacing={1.5}>
                        {NavLinks.map((link) => (
                          <Link
                            key={link.key}
                            href={link.to}
                            underline="none"
                            sx={{
                              color: "#FFFFFF",
                              fontSize: "1rem",
                              fontWeight: 600,
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              transition: "all 0.3s ease",
                              "&:hover": {
                                color: "#ffcc00",
                              },
                            }}
                          >
                            <ArrowForwardIos sx={{ fontSize: 14 }} />
                            {link.key}
                          </Link>
                        ))}
                      </Stack>
                    </Grid>

                  </Grid>
                </Paper>
              </Grid>

            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.4)", my: 4 }} />

        {/* Bottom */}
        <Box textAlign="center">
          <Stack direction="row" justifyContent="center" spacing={2} mb={2}>
            {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, i) => (
              <IconButton
                key={i}
                href="/#"
                sx={{
                  color: "#FFFFFF",
                  border: "1px solid rgba(255,255,255,0.7)",
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    color: "#1867bf",
                  },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </Stack>

          <Typography variant="body2" sx={{ fontWeight: 600, color: "#FFFFFF" }}>
            © {new Date().getFullYear()}{" "}
            <Link
              href="/#"
              underline="hover"
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
              }}
            >
              Modern Security Co. for Inspection & Examination
            </Link>
            . All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WebFooter;