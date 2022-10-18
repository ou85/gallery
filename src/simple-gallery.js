import * as React from "react";
import { Link } from "react-router-dom";
import { Grid, ImageList, ImageListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { itemData } from "./components/photos";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h3: {
      fontSize: "2rem",
      lineHeight: "3.5rem",
    },
    h4: {
      fontSize: "1.2rem",
      lineHeight: "2rem",
    },
  },
});

export default function SimpleGallery(props) {
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
      <ThemeProvider theme={theme}>
        <Grid
          height="3rem"
          alignItems="left"
          justifyContent="center"
          // backgroundColor="lightgreen"
          display="flex"
        >
          <Typography variant="h3" gutterBottom>
            <Link underline="none" color="hotpink" to="/mui-gallery">
              gallery
            </Link>
            {/* <Link to="/swapper"> | swapper </Link> */}
          </Typography>
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
      </ThemeProvider>
    </Grid>
  );
}
