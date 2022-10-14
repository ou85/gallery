import * as React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { images, photos } from "./photos";
import ImageSwapper from "./image-swapper";

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
        direction="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          // backgroundColor: "lightpink",
          justifyContent: "center",
          maxWidth: "1005px",
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
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#1A2027" : "#3A3B3C",
                  }}
                >
                  <ButtonBase sx={{ height: 200, width: 300 }}>
                    <Img
                      alt="complex"
                      // src={value.src}
                      // src={`${item.img}?w=400&h=300&fit=crop&auto=format`}
                      // src={value}
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

          {/* <Grid
            container
            paddingBottom="3rem"
            justifyContent="center"
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            // sx={{ backgroundColor: "lightyellow" }}
          >
            {photos.map((value) => (
              <Grid item xs={2} sm={4} md={4} key={value}>
                <ButtonBase>
                  <Img alt="complex" src={value.src} />
                </ButtonBase>
              </Grid>
            ))}
          </Grid> */}
        </Grid>
        <ImageSwapper />
      </Grid>
    </Box>
  );
}
