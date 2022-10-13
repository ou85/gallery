import * as React from "react";
import { Grid, Paper } from "@mui/material";

export default function MuiGallery() {
  return (
    <Grid
      container
      direction="column"
      alignItems="stretch"
      sx={{ flexGrow: 1, p: "3rem" }}
    >
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing="2">
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 140,
                  width: 100,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
