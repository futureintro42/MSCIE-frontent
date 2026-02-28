import React from 'react';
import { Typography } from "@mui/material";

const PageTitle = ({ pageTitle }) => {
    return <Typography variant="h1" sx={{
        color: "#1867bf",
        textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
        transition: "opacity 0.8s ease-in-out",
        mt: 2,
        display: "inline-block",
        borderBottom: "4px solid #1867bf",
        pb: 1,
        mb: 3,
        fontWeight: "bold",
    }}>
        {pageTitle}
    </Typography>
}

export default PageTitle;