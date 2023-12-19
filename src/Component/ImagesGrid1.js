import React from "react";
import { Grid } from "@mui/material";

const ImagesGrid1 = () => {
  return (
    <React.Fragment>
      <Grid container spacing={4} mt={0.5}>
        <Grid item xs={4}>
          <img
            src={require("../Component/ProjectImages/8642502.jpg")}
            alt="images"
            style={{
              width: "100%",
              maxHeight: "auto",
              objectFit: "fill",
              borderRadius: "5px",
            }}
          />
        </Grid>

        <Grid item xs={4}>
          <img
            src={require("../Component/ProjectImages/8642509.jpg")}
            alt="images"
            style={{
              width: "100%",
              maxHeight: "auto",
              objectFit: "fill",
              borderRadius: "5px",
            }}
          />
        </Grid>

        <Grid item xs={4}>
          <img
            src={require("../Component/ProjectImages/black_friday.jpg")}
            alt="images"
            style={{
              width: "100%",
              maxHeight: "auto",
              objectFit: "fill",
              borderRadius: "5px",
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ImagesGrid1;
