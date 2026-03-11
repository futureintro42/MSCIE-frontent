import React, { useState } from "react";
import {
    Box,
    Grid,
    Dialog,
    DialogContent,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const imagesList = [
    `${process.env.PUBLIC_URL}/assets/images/slider1.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/slider2.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/slider3.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/slider4.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/slider5.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/slider6.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/slider7.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/slider8.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/slider10.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/slider11.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/slider12.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/slider13.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/slider14.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/banner1.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/banner2.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/banner3.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/banner4.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/banner5.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/banner6.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/banner7.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/banner8.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/banner9.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/banner10.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/banner11.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/banner12.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/banner13.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery1.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery2.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery3.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery4.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery5.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery6.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery7.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery8.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery9.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery10.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery11.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery12.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery13.jpeg`,
    `${process.env.PUBLIC_URL}/assets/images/gallery14.jpeg`,
];

const Gallery = ({ images = imagesList }) => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleOpen = (img) => {
        setSelectedImage(img);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage("");
    };

    return (
        <Box sx={{ width: "100%", p: 2 }}>
            <Grid container spacing={3}>
                {images.map((img, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Box
                            component="img"
                            src={img}
                            alt={`gallery-${index}`}
                            onClick={() => handleOpen(img)}
                            sx={{
                                width: "100%",
                                height: 220,
                                objectFit: "cover",
                                borderRadius: "12px",
                                cursor: "pointer",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        />
                    </Grid>
                ))}
            </Grid>

            <Dialog open={open} onClose={handleClose} maxWidth="md">
                <DialogContent sx={{ position: "relative", p: 0 }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            color: "#fff",
                            background: "rgba(0,0,0,0.5)",
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Box
                        component="img"
                        src={selectedImage}
                        alt="preview"
                        sx={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "8px",
                        }}
                    />
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default Gallery;