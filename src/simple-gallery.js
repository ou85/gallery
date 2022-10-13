import * as React from "react";
import { Link } from "react-router-dom";
import { Grid, ImageList, ImageListItem } from "@mui/material";
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
        <Link to="/mui-gallery"> gallery </Link>
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

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
];
