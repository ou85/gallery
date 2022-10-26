import * as React from "react";
import { Link } from "react-router-dom";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import StaticImageGrid from "./components/static-image-grid";

const SimpleGallery = (props) => {
  return (
    <Grid
      container
      direction="column"
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "text.primary" }}
    >
      <Grid
        height="3rem"
        alignItems="left"
        justifyContent="center"
        // backgroundColor="lightgreen"
        display="flex"
      >
        <Link to="/mui-gallery">mui gallery</Link>
        <Link to="/mui-swapper">swapper </Link>
        <Link to="/tabs">tabs </Link>
      </Grid>
      <StaticImageGrid />
    </Grid>
  );
};
export default SimpleGallery;
