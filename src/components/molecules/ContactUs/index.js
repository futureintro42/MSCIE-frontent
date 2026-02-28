import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Stack,
  Paper,
  Alert,
  Container
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { CONTACT_US } from "../../../constants/Mutation";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [severity, setSeverity] = React.useState("error");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = useState({});
  const [createContact, { loading, error, data }] =
    useMutation(CONTACT_US);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Email is invalid";
    if (!formData.mobile.trim()) errs.mobile = "Mobile number is required";
    else if (!/^\d{10,15}$/.test(formData.mobile))
      errs.mobile = "Mobile number is invalid";
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    createContact({ variables: { input: formData } });
    setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
  };

  // Response: Form submit handler
  React.useEffect(() => {
    if (!loading && !error && data) {
      const response = data.createContact;
      setSeverity(response.severity);
      setMessage(response.message);
      if (!response.error && response.severity.includes("success")) {
        setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
      }
    }
  }, [loading, error, data]);

  return (
    <Box sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          }}
        >
          <Grid container>

            {/* LEFT PANEL */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                background:
                  "linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)",
                color: "#fff",
                p: { xs: 5, md: 6 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Let's Talk
              </Typography>

              <Typography sx={{ opacity: 0.85, mb: 4 }}>
                We would love to hear from you.
              </Typography>

              <Stack spacing={3}>
                <Stack direction="row" spacing={2}>
                  <LocationOn />
                  <Typography>
                    جدة - حي السنابل - السعودية
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <Phone />
                  <Typography>0538507454</Typography>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <Email />
                  <Typography>info@aliiec.com</Typography>
                </Stack>
              </Stack>
            </Grid>

            {/* RIGHT PANEL */}
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                p: { xs: 4, md: 6 },
                bgcolor: "background.paper",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  mb={3}
                >
                  Send Us a Message
                </Typography>

                {severity && message && (
                  <Alert severity={severity} sx={{ mb: 3 }}>
                    {message}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      label="Full Name"
                      fullWidth
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      error={!!errors.name}
                      helperText={errors.name}
                    />

                    <TextField
                      label="Email"
                      fullWidth
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      error={!!errors.email}
                      helperText={errors.email}
                    />

                    <TextField
                      label="Mobile"
                      fullWidth
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mobile: e.target.value,
                        })
                      }
                      error={!!errors.mobile}
                      helperText={errors.mobile}
                    />

                    <TextField
                      label="Subject"
                      fullWidth
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subject: e.target.value,
                        })
                      }
                      error={!!errors.subject}
                      helperText={errors.subject}
                    />

                    <TextField
                      label="Message"
                      multiline
                      rows={4}
                      fullWidth
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      error={!!errors.message}
                      helperText={errors.message}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        mt: 2,
                        borderRadius: "30px",
                        py: 1.5,
                        fontWeight: 600,
                        textTransform: "none",
                      }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* MAP */}
        <Box mt={8}>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7429.5860279590315!2d39.26782784555164!3d21.39805321068467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cb0018379f91%3A0x8986ad96f81a031!2z2K3ZiiDYp9mE2LPZhtin2KjZhA!5e0!3m2!1sen!2sin!4v1771823230381!5m2!1sen!2sin"
            width="100%"
            height={{ xs: "300px", md: "450px" }}
            sx={{ border: 0, borderRadius: 2 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
