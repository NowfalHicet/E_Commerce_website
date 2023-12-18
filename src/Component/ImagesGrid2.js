import React from "react";
import { Container, Grid } from "@mui/material";

const ImagesGrid2 = () => {
  return (
    <React.Fragment>
      <Container maxWidth={"xxl"}>
        <Grid container spacing={1} mt={2}>
          <Grid item md={6}>
            <img
              src={require("../Component/ProjectImages/HP_Highlights_CromaOL_14Nov2023_srd1js.jpg")}
              alt="images"
              style={{
                width: "100%",
                maxHeight: "600px",
                objectFit: "fill",
                borderRadius: "5px",
              }}
            />
          </Grid>

          <Grid item md={6}>
            <img
              src={require("../Component/ProjectImages/HP_Highlight_Sunburn_DVLM_21Nov23_ojgolc.jpg")}
              alt="images"
              style={{
                width: "100%",
                maxHeight: "600px",
                objectFit: "fill",
                borderRadius: "5px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ImagesGrid2;
