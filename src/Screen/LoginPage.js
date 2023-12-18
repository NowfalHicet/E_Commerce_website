import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for validation errors
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loggedIn, setLoggedIn] = useState({
    open: false,
    vertical: "top",
    horizontal: "center"
  });

  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [colorValue, setColorValue] = useState("");

  const username = "cristianoronaldocr7@gmail.com";
  const correctPassword = "Msd7cr7@786";

  // Validation functions
  const validateEmail = (input) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(input) ? "" : "INVALID EMAIL ADDRESS";
  };

  const validatePassword = (input) => {
    return input.length >= 6 ? "" : "PASSWORD MUST BE AT LEAST 06 CHARACTERS";
  };

  // Event handlers for input changes
  const handleEmailChange = (e) => {
    const input = e.target.value;
    setEmail(input);
    setEmailError(validateEmail(input));
  };

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);
    setPasswordError(validatePassword(input));
  };

  const navigate = useNavigate();

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are no validation errors before submitting
    if (!emailError && !passwordError) {
      if (username === email && correctPassword === password) {
        setLoggedIn(true);
        setLoginErrorMessage("LOGIN SUCCESSFULL");
        setColorValue("success");
        setTimeout(() => {
          navigate("/");
        }, 3000);
        console.log("FORM SUBMITTED :-", { email, password });
      } else {
        setLoggedIn(true);
        setColorValue("error");
        setLoginErrorMessage("INVALID LOGIN CREDENTIALS");
        console.log("FORM HAS VALIDATION ERRORS");
        setTimeout(() => {
          setLoginErrorMessage("");
          setLoggedIn(false);
        }, 3000);
      }
    }
  };

  return (
    <React.Fragment>
      <Snackbar
        open={loggedIn}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={colorValue} sx={{ width: "100%" }}>
          {loginErrorMessage}
        </Alert>
      </Snackbar>

      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/3d-view-laptop-device_23-2150714199.jpg?ga=GA1.1.2139859519.1699004386&semt=ais_ai_generated)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "orange" }}>
              <VpnKeyOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign In
            </Typography>

            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                variant="standard"
                value={email}
                onChange={handleEmailChange}
                error={!!emailError}
                helperText={emailError}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                variant="standard"
                value={password}
                onChange={handlePasswordChange}
                error={!!passwordError}
                helperText={passwordError}
              />

              {/* {loggedIn && (
                <Typography
                  variant="h6"
                  style={{ color: colorValue }}
                  textAlign={"center"}
                >
                  {loginErrorMessage}
                </Typography>
              )} */}

              <FormControlLabel
                control={<Checkbox value="remember" color="warning" />}
                label="Remember Me"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="warning"
                onClick={handleSubmit}
              >
                Sign In
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot Password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't Have An Account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
