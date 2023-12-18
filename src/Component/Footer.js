import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import {
  Stack,
  Grid,
  Typography,
  Button
} from "@mui/material";

const Footer = () => {
  return (
    <React.Fragment>
      <Grid bgcolor={"#1e1e1e"} mt={8}>
        <Grid container spacing={4} p={7}>

          <Grid item xs={12} md={5}>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              <Grid sx={{ objectFit: "contain", maxWidth: "70%" }}>
                <Typography variant="body1" color="white">
                  Nowfal
                </Typography>
                <Typography variant="body1" color="white" m={2}>
                  We work with a passion of taking challenges and creating new
                  ones in advertising sector.
                </Typography>
                <Stack
                  direction={"row"}
                  color="white"
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <FacebookIcon
                    style={{
                      transition: "color 0.3s",
                      transform: "scale(1)",
                      color: "inherit",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "green")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "inherit")
                    }
                  />
                  <TwitterIcon
                    style={{
                      transition: "color 0.3s",
                      transform: "scale(1)",
                      color: "inherit",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "green")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "inherit")
                    }
                  />
                  <LanguageIcon
                    style={{
                      transition: "color 0.3s",
                      transform: "scale(1)",
                      color: "inherit",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "green")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "inherit")
                    }
                  />
                  <InstagramIcon
                    style={{
                      transition: "color 0.3s",
                      transform: "scale(1)",
                      color: "inherit",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "green")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "inherit")
                    }
                  />
                </Stack>
              </Grid>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Grid
                sx={{ objectFit: "contain", maxWidth: "60%", color: "white" }}
              >
                <Typography variant="h4" color="white" textAlign="left" pl={2}>
                  Links
                </Typography>

                <Stack
                  direction={"column"}
                  color="white"
                  // spacing={1}
                  justifyContent="flex-start"
                  alignItems="start"
                >
                  <Button
                    sx={{ textTransform: "capitalize", color: "white" }}
                    startIcon={<KeyboardArrowRightIcon />}
                    variant="text"
                    color="success"
                  >
                    Home
                  </Button>
                  <Button
                    sx={{ textTransform: "capitalize", color: "white" }}
                    startIcon={<KeyboardArrowRightIcon />}
                    variant="text"
                    color="success"
                  >
                    About us
                  </Button>
                  <Button
                    sx={{ textTransform: "capitalize", color: "white" }}
                    startIcon={<KeyboardArrowRightIcon />}
                    variant="text"
                    color="success"
                  >
                    Privacy Policy
                  </Button>
                  <Button
                    sx={{ textTransform: "capitalize", color: "white" }}
                    startIcon={<KeyboardArrowRightIcon />}
                    variant="text"
                    color="success"
                  >
                    Terms & Conditions
                  </Button>
                  <Button
                    sx={{ textTransform: "capitalize", color: "white" }}
                    startIcon={<KeyboardArrowRightIcon />}
                    variant="text"
                    color="success"
                  >
                    Refund & Cancellation
                  </Button>
                </Stack>
              </Grid>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Grid
                sx={{ objectFit: "contain", maxWidth: "60%", color: "white" }}
              >
                <Typography variant="h4" color="white" textAlign="left" pl={2}>
                  Official Info:
                </Typography>

                <Stack
                  direction={"column"}
                  color="white"
                  // spacing={1}
                  justifyContent="flex-start"
                  alignItems="start"
                >
                  <Button
                    variant="text"
                    color="success"
                    sx={{
                      color: "#94C973",
                      textTransform: "capitalize",
                      textAlign: "left",
                      fontWeight: "500",
                    }}
                    startIcon={<LocationOnIcon color="error" />}
                  >
                    Electronic Shop <br></br>
                    Address :- 03/36 Kaliba Sahib Street ,<br></br>
                    Pallapatti, Karur,<br></br>
                    TamilNadu.<br></br>
                    Pincode - 639205.<br></br>
                    Phone Number :- 8204202020
                  </Button>

                  <Button
                    variant="text"
                    color="success"
                    sx={{ color: "white", textTransform: "capitalize" }}
                    startIcon={<MarkunreadIcon color="success" />}
                    href="mailto:info@cristianoronaldocr7.in"
                  >
                    info@CristianoRonaldoCR7.in
                  </Button>
                </Stack>
              </Grid>
            </Stack>
          </Grid>

        </Grid>
        <Typography variant="body2" color="white" textAlign={"center"} p={2}>
          © 2023 - CR7 Software Solutions. All Rights Reserved.
        </Typography>
      </Grid>
    </React.Fragment>
  );
};

export default Footer;
