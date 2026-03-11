import { Grid } from "@mui/material";
import WebLayout from "../WebLayout";
import GalleryComponent from "../../molecules/Gallery";

const Gallery = () => {
    return <WebLayout pageTitle="Gallery">
    <Grid container>
        <Grid item xs={12}>
            <GalleryComponent />
        </Grid>
    </Grid>
    </WebLayout>
}

export default Gallery