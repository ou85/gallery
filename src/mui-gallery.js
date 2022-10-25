import * as React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";

import { ImageSwapper7 } from "./components/image-swappers";
import { images, photos } from "./components/photos";

export default function MuiGallery() {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    justifyContent: "center",
    maxWidth: "95%",
    maxHeight: "95%",
  });

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
          <Link to="/mui-swapper"> swapper </Link>
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
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#1A2027" : "#3A3B3C",
                  }}
                >
                  <ButtonBase sx={{ height: 200, width: 300 }}>
                    <Img
                      alt="complex"
                      // src={value.src}
                      src={`${value}?w=400&h=300&fit=crop&auto=format`}
                      sx={{
                        height: 200,
                        width: 300,
                      }}
                    />
                  </ButtonBase>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <ImageSwapper7 />
      </Grid>
    </Box>
  );
}
