import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";

import { ImageSwapper8, ImageSwapper12 } from "./components/image-swappers";
import { images, photos } from "./components/photos";

export default function MuiSwapper() {
  return (
    <Box sx={{ backgroundColor: "text.primary" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        minHeight="100vh"
        display="flex"
        sx={{
          // backgroundColor: "lightpink",
          justifyContent: "center",
          maxWidth: "1440px",
          pt: "3rem",
          pb: "3rem",
          m: "auto",
        }}
      >
        <Grid
          justifyContent="center"
          paddingBottom="3rem"
          alignItems="left"
          display="flex"
          height="3rem"
        >
          <Link to="/"> gallery </Link>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            paddingBottom="3rem"
            alignItems="center"
            spacing="3"
            lg={12}
            md={12}
            // sx={{ backgroundColor: "lightgreen" }}
          >
            {images.map((value) => (
              <Grid key={value} item>
                <Paper
                  sx={{
                    height: 200,
                    width: 300,
                    backgroundColor: "#3A3B3C",
                  }}
                >
                  <ButtonBase sx={{ height: 200, width: 300 }}>
                    <ImageSwapper12 />
                  </ButtonBase>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
