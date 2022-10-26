import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import ButtonBase from "@mui/material/ButtonBase";
import { ImageSwapper12 } from "./image-swappers";
import { images } from "./photos";

const GridSwapper = () => {
  return (
    <Grid
      container
      justifyContent="center"
      paddingBottom="3rem"
      alignItems="center"
      lg={12}
      md={12}
      // sx={{ backgroundColor: "lightgreen" }}
    >
      {images.map((value) => (
        <Grid key={value}>
          <ButtonBase sx={{ height: 200, width: 300 }}>
            <ImageSwapper12 />
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  );
};
export default GridSwapper;
