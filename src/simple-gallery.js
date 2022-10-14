import * as React from "react";
import { Link } from "react-router-dom";
import { Grid, ImageList, ImageListItem } from "@mui/material";
import { itemData } from "./photos";

export default function SimpleGallery() {
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
        <Link to="/mui-gallery"> gallery | </Link>
        <Link to="/swapper"> | swapper </Link>
      </Grid>
      <Grid
      // backgroundColor="gray"
      >
        <ImageList sx={{ width: 600, height: 460 }} cols={3} rowHeight={150}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=400&h=300&fit=crop&auto=format`}
                srcSet={`${item.img}?w=400&h=300&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}
