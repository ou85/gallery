import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { itemData } from "./photos";

const StaticImageGrid = () => {
  return (
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
      ))}{" "}
    </ImageList>
  );
};
export default StaticImageGrid;
