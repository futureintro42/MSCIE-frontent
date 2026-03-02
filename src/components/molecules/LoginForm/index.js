import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
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
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { LOGIN } from "../../../constants/Query";
import { loginSchema } from "../../../utils/schema";
import { isValidated, setCookie } from "../../../utils/utils";

const LoginForms = () => {
  const navigate = useNavigate();
  const [severity, setSeverity] = React.useState("error");
  const [message, setMessage] = React.useState("");
  const [isSubmitted, setSubmitted] = React.useState(false);
  const [login, { loading, error, data }] = useLazyQuery(LOGIN);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onSubmitHandler = (input, e) => {
    e.preventDefault();
    setSubmitted(true);
    login({ variables: { input } });
  };
  // Response: Form submit handler
  React.useEffect(() => {
    if (!loading && !error && data) {
      const response = data.login;
      setSeverity(response.severity);
      setMessage(response.message);
      isValidated(response.error, setError);
      setSubmitted(false);
      if (!response.error && response.severity.includes("success")) {
        setCookie(process.env.REACT_APP_TOKEN_KEY, response.token);
        navigate("/dashboard");
        navigate(0);
      }
    }
  }, [loading, error, data, setError, navigate, setSubmitted]);

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

          <Typography
            component="h1"
            variant="h5"
            sx={{ fontWeight: 700 }}
          >
            Login
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mt: 0.5 }}
          >
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
                  error={!!errors?.email?.message}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#f9fafc",
                  }}
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

            {/* Forgot Password */}
            <Grid item xs={12}>
              <Box sx={{ textAlign: "right" }}>
                <Link
                  href="/forgot-password"
                  variant="body2"
                  sx={{
                    color: "#1976d2",
                    fontWeight: 500,
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Forgot password?
                </Link>
              </Box>
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
                Login
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
                  href="/sign-up"
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
                  Create Account
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
LoginForms.propTypes = {
  onSubmit: PropTypes.func,
};

LoginForms.defaultProps = {
  onSubmit: () => {
    /* default onSubmit handler */
  },
};

export default LoginForms;
