import React from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Button,
  Link,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Alert,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { VisibilityOff, Visibility } from "@mui/icons-material";

import { signupSchema } from "../../../utils/schema";
import { isValidated } from "../../../utils/utils";
import { SIGNUP } from "../../../constants/Mutation";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [severity, setSeverity] = React.useState("error");
  const [message, setMessage] = React.useState("");
  const [isSubmitted, setSubmitted] = React.useState(false);
  const [captcha, setCaptcha] = React.useState("");
  const [captchaMsg, setCaptchaMsg] = React.useState(
    "Please click on I'm not a robot."
  );
  const [signup, { loading, error, data }] = useMutation(SIGNUP);
  const {
    register,
    handleSubmit,
    setError,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const captchaOnChange = (value) => {
    setCaptcha(value || "");
    setCaptchaMsg("");
  };

  const captchaOnExpired = () => {
    setCaptcha("");
    setCaptchaMsg("Please click on I'm not a robot");
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };
  const onSubmitHandler = (data, e) => {
    e.preventDefault();
    setSubmitted(true);
    if (captcha) {
      signup({
        variables: { input: { ...data, role: "USER" } }, // TODO role: hard code
      });
    } else {
      setCaptchaMsg("Please click on I'm not a robot");
      setSubmitted(false);
    }
  };
  // Response: Submit Handler
  React.useEffect(() => {
    if (!loading && !error && data) {
      const response = data.signup;
      setSeverity(response.severity);
      setMessage(response.message);
      isValidated(response.error, setError);
      setSubmitted(false);
      if (!response.error && response.severity.includes("success")) {
        resetField("first_name");
        resetField("last_name");
        resetField("email");
        resetField("password");
        resetField("confirmPassword");
        navigate("/");
      }
    }
  }, [
    loading,
    error,
    data,
    setSeverity,
    setMessage,
    navigate,
    setError,
    resetField,
  ]);
  return (
  <Container maxWidth={false} sx={{ maxWidth: "600px" }}>
    <Card
      sx={{
        mt: 5,
        mb: 15,
        borderRadius: 4,
        boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        borderLeft: "6px solid #1976d2",
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(255,255,255,0.95)",
      }}
    >
      <CardContent sx={{ px: 5, py: 5 }}>
        {/* Header */}
        <Box sx={{ textAlign: "left", mb: 4 }}>
          <Avatar
            sx={{
              bgcolor: "#1976d2",
              width: 48,
              height: 48,
              mb: 2,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5" sx={{ fontWeight: 700 }}>
            Sign Up
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmitHandler)}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={3}>
            {severity && message && (
              <Grid item xs={12}>
                <Alert
                  severity={severity}
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#f5f7fb",
                  }}
                >
                  {message}
                </Alert>
              </Grid>
            )}

            {/* First Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="First Name"
                error={!!errors?.first_name?.message}
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#f9fafc",
                }}
                {...register("first_name")}
              />
              {errors?.first_name && (
                <FormHelperText error>
                  {errors?.first_name?.message}
                </FormHelperText>
              )}
            </Grid>

            {/* Last Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                error={!!errors?.last_name?.message}
                sx={{
                  borderRadius: 2,
                  backgroundColor: "#f9fafc",
                }}
                {...register("last_name")}
              />
              {errors?.last_name && (
                <FormHelperText error>
                  {errors?.last_name?.message}
                </FormHelperText>
              )}
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="email" required>
                  Email
                </InputLabel>
                <OutlinedInput
                  id="email"
                  type="email"
                  label="Email"
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#f9fafc",
                  }}
                  error={!!errors?.email?.message}
                  {...register("email")}
                />
                {errors?.email && (
                  <FormHelperText error>
                    {errors?.email?.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            {/* Password */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="password" required>
                  Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#f9fafc",
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ color: "#1976d2" }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  error={!!errors?.password?.message}
                  {...register("password")}
                />
                {errors?.password && (
                  <FormHelperText error>
                    {errors?.password?.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            {/* Confirm Password */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="confirmPassword" required>
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  label="Confirm Password"
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#f9fafc",
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                        edge="end"
                        sx={{ color: "#1976d2" }}
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  error={!!errors?.confirmPassword?.message}
                  {...register("confirmPassword")}
                />
                {errors?.confirmPassword && (
                  <FormHelperText error>
                    {errors?.confirmPassword?.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            {/* Captcha */}
            <Grid item xs={12}>
              <ReCAPTCHA
                sitekey={`${process.env.REACT_APP_SITE_KEY}`}
                onChange={captchaOnChange}
                onExpired={captchaOnExpired}
                onErrored={captchaOnExpired}
              />
              {captchaMsg && (
                <Alert
                  severity="error"
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#f5f7fb",
                    mt: 1,
                  }}
                >
                  {captchaMsg}
                </Alert>
              )}
            </Grid>

            {/* Submit */}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  py: 1.4,
                  fontWeight: 600,
                  borderRadius: 3,
                  backgroundColor: "#1976d2",
                  boxShadow: "0 6px 16px rgba(25,118,210,0.25)",
                  "&:hover": {
                    backgroundColor: "#1565c0",
                    boxShadow: "0 8px 20px rgba(21,101,192,0.35)",
                  },
                }}
                disabled={isSubmitted}
              >
                Sign Up
              </Button>
            </Grid>

            {/* Bottom Section */}
            <Grid item xs={12}>
              <Box
                sx={{
                  mt: 3,
                  pt: 2,
                  borderTop: "1px solid #eee",
                  textAlign: "center",
                }}
              >
                <Link
                  href="/login"
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#1976d2",
                    },
                  }}
                >
                  Already have an account?
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  </Container>
);
};
SignUpForm.propTypes = {
  onSubmit: PropTypes.func,
};

SignUpForm.defaultProps = {
  onSubmit: () => {
    /* default onSubmit handler */
  },
};

export default SignUpForm;
