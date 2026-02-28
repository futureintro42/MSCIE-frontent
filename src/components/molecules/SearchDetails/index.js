import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  Typography,
  Card,
  Container,
  TextField,
  Button,
  MenuItem,
  Grid,
  Alert,
  CardContent,
  Box,
  InputAdornment
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import {
  FIND_CARD_BY_SEARCH,
  FIND_INVOICE_BY_SEARCH,
} from "../../../constants/Query";

const SEARCH_FIELDS = {
  cards: [
    { value: "id", label: "Id No." },
    { value: "iqama_number", label: "Iqama No." },
  ],
  certificate: [
    { value: "id", label: "Certificate No." },
    { value: "sticker_number", label: "Sticker No." },
    { value: "reference_number", label: "Reference No." },
  ],
};

const SearchDetails = ({ pageType }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchField, setSearchField] = useState("id");
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");

  const [
    findCardBySearch,
    { loading: cardLoading, data: cardData, error: cardError },
  ] = useLazyQuery(FIND_CARD_BY_SEARCH);

  const [
    findInvoiceBySearch,
    { loading: certLoading, data: certData, error: certError },
  ] = useLazyQuery(FIND_INVOICE_BY_SEARCH);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchField || !searchTerm.trim()) return;

    const variables = {
      input: { attribute: searchField, value: searchTerm },
    };

    if (pageType === "cards") findCardBySearch({ variables });
    if (pageType === "certificate") findInvoiceBySearch({ variables });
  };

  useEffect(() => {
    const handleResponse = (data, error) => {
      if (!data || error) return;

      const response =
        pageType === "cards"
          ? data.findCardBySearch
          : data.findInvoiceBySearch;

      setSeverity(response.severity);
      setMessage(response.message);

      if (response.severity?.includes("success")) {
        navigate(`/${pageType}/details/${response?.response?._id}`);
      }
    };

    if (pageType === "cards" && !cardLoading)
      handleResponse(cardData, cardError);

    if (pageType === "certificate" && !certLoading)
      handleResponse(certData, certError);
  }, [
    cardLoading,
    certLoading,
    cardData,
    certData,
    cardError,
    certError,
    pageType,
    navigate,
  ]);

  const searchOptions = SEARCH_FIELDS[pageType] || [];

  return (
    <Container maxWidth={false} disableGutters>
      <Card
        sx={{
          border: 1,
          borderColor: "#fff",
          boxShadow: "5px 5px 20px rgba(0,0,0,0.08)",
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ px: 4, py: 5 }}>
          <Grid container spacing={3}>
            
            {/* Title */}
            <Grid item xs={12}>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                    color: "#1867bf",
                    letterSpacing: 1,
                  }}
                >
                  {`Search ${
                    pageType === "cards" ? "Cards" : "Certificate"
                  }`}
                </Typography>
              </Box>
            </Grid>

            {/* Alert */}
            {severity && message && (
              <Grid item xs={12}>
                <Alert
                  variant="filled"
                  severity={severity}
                  sx={{ borderRadius: 2 }}
                >
                  {message}
                </Alert>
              </Grid>
            )}

            {/* Form */}
            <Grid item xs={12}>
              <form onSubmit={handleSearch}>
                <Grid container spacing={2} alignItems="center">

                  {/* Hidden Dropdown */}
                  <Grid item xs={12} sm={5} sx={{ display: "none" }}>
                    <TextField
                      select
                      label="Search By"
                      value={searchField}
                      onChange={(e) => setSearchField(e.target.value)}
                      fullWidth
                    >
                      {searchOptions.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  {/* Search Input */}
                  <Grid item xs={12} sm={8}>
                    <TextField
                      label={`${pageType} id`}
                      variant="outlined"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          backgroundColor: "#fafafa",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{ color: "#1867bf" }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  {/* Search Button */}
                  <Grid item xs={12} sm={4}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        height: "56px",
                        borderRadius: 3,
                        fontWeight: 600,
                        fontSize: "1rem",
                        backgroundColor: "#1867bf",
                        boxShadow: "0 5px 15px rgba(24,103,191,0.3)",
                        "&:hover": {
                          backgroundColor: "#0f4c8d",
                        },
                      }}
                    >
                      Search
                    </Button>
                  </Grid>

                </Grid>
              </form>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SearchDetails;