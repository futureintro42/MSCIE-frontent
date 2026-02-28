import { Grid, Typography, Box } from "@mui/material";

const services = [
  {
    title: "Inspection & Testing",
    description:
      "Inspection of all types of equipment, generators, operators, elevators, chains, trucks and industrial tasks.",
    imageUrl: `${process.env.PUBLIC_URL}/assets/images/service-inspection.jpg`,
  },
  {
    title: "Lifting & Equipment",
    description:
      "Lifting equipment, towing equipment, electrical equipment, generators.",
    imageUrl: `${process.env.PUBLIC_URL}/assets/images/service-lifting.jpg`,
  },
  {
    title: "Safety & Security Consulting",
    description: "Consultancy in safety, security and compliance.",
    imageUrl: `${process.env.PUBLIC_URL}/assets/images/service-safety-consulting.jpg`,
  },
  {
    title: "Safety Training",
    description: "Professional safety training programs.",
    imageUrl: `${process.env.PUBLIC_URL}/assets/images/service-safety-training.jpg`,
  },
];

const ServicesDetails = () => {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {services.map((svc, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            py: { xs: 5, md: 8 },
            px: { xs: 1, md: 2 },
            transition: "all 0.4s ease",
            overflow: "hidden",

            "&:hover": {
              backgroundColor: "#f8fbff",
            },

            "&:hover .image-zoom": {
              transform: "scale(1.05)",
            },

            "&:hover .accent-bar": {
              height: "100%",
            },
          }}
        >
          {/* Left Accent Animated Bar */}
          <Box
            className="accent-bar"
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "4px",
              height: "40px",
              backgroundColor: "#1867bf",
              transition: "height 0.4s ease",
              borderRadius: "0 4px 4px 0",
            }}
          />

          <Grid
            container
            spacing={4}
            alignItems="center"
            direction={{
              xs: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            {/* Image Section */}
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  overflow: "hidden",
                  borderRadius: 3,
                  boxShadow: "0px 8px 25px rgba(0,0,0,0.08)",
                }}
              >
                <Box
                  component="img"
                  src={svc.imageUrl}
                  alt={svc.title}
                  className="image-zoom"
                  sx={{
                    width: "100%",
                    height: { xs: 230, md: 270 },
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
              </Box>
            </Grid>

            {/* Content Section */}
            <Grid item xs={12} md={7}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#1867bf",
                  position: "relative",
                }}
              >
                {svc.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "#555",
                  lineHeight: 1.8,
                  maxWidth: "95%",
                }}
              >
                {svc.description}
              </Typography>
            </Grid>
          </Grid>

          {/* Elegant Divider */}
          {index !== services.length - 1 && (
            <Box
              sx={{
                mt: { xs: 5, md: 7 },
                height: "1px",
                background:
                  "linear-gradient(to right, transparent, #ddd, transparent)",
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ServicesDetails;