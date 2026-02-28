import { Grid } from "@mui/material";
import WebLayout from "../WebLayout";
import AboutUs from "../../molecules/AboutUs";

const About = () => {
    return <WebLayout pageTitle="About the company">
    <Grid container>
        <Grid item xs={12}>
            <AboutUs />
        </Grid>
    </Grid>
    </WebLayout>
}

export default About