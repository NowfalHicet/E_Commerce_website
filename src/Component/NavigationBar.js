import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import { Home, ShoppingCart, Menu } from "@mui/icons-material";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { Badge, Grid, Popover, Stack, Typography } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import { Tooltip } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Categories from "../Component/Categories";
import { NavLink } from "react-router-dom";
import NavLogo from "../Component/ProjectImages/Project NavLogo.jpeg";
import DrawerNavLogo from "../Component/ProjectImages/Project Drawer Logo.jpeg";
import InputAdornment from "@mui/material/InputAdornment";
// import SearchHistory from "../Component/SearchHistory";

const products = [
  {
    id: 21,
    title: "realme C51 (Carbon Black) ",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/5/q/6/-original-imags487ftf3g2s7.jpeg?q=70",
    price: 8999,
    mrp: 10000,
    RAM: "4 GB",
    ROM: "64 GB",
  },
  {
    id: 22,
    title: "REDMI 10 Power (Power Black)",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/e/y/b/-original-imageftfzx8gfkys.jpeg?q=70",
    price: 10970,
    mrp: 18999,
    RAM: "8 GB",
    ROM: "128 GB",
  },
  {
    id: 23,
    title: "SAMSUNG Galaxy S23 Ultra 5G (Green)",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/s/7/-original-imagmg6gktts6sfy.jpeg?q=70",
    price: 124999,
    mrp: 149999,
    RAM: "12 GB",
    ROM: "256 GB",
  },
  {
    id: 24,
    title: "OPPO A17k (Navy Blue)",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/5/r/-original-imagjzxuggyzybxf.jpeg?q=70",
    price: 8353,
    mrp: 10000,
    RAM: "3 GB",
    ROM: "64 GB",
  },
  {
    id: 25,
    title: " APPLE iPhone 12 (Blue)",
    image:
      "https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70",
    price: 40999,
    mrp: 49999,
    RAM: "8 GB",
    ROM: "64 GB",
  },
  {
    id: 26,
    title: "vivo T2x 5G (Aurora Gold) ",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=70",
    price: 14999,
    mrp: 21100,
    RAM: "8 GB",
    ROM: "128 GB",
  },
  {
    id: 27,
    title: "POCO X2 (Matrix Purple)",
    image:
      "https://rukminim2.flixcart.com/image/832/832/k65d18w0/mobile/w/u/h/poco-x2-mzb9013in-original-imafzz2hdysz9njg.jpeg?q=70",
    price: 7499,
    mrp: 9000,
    RAM: "6 GB",
    ROM: "64 GB",
  },
  {
    id: 28,
    title: " Infinix HOT 30i (Glacier Blue) ",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/w/v/b/-original-imagz3cuzzsyh8ud.jpeg?q=70",
    price: 17999,
    mrp: 20000,
    RAM: "4 GB",
    ROM: "64 GB",
  },
  {
    id: 29,
    title: "realme Narzo N53 (Feather Black)",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/0/n/r/narzo-n53-rmx3761-realme-original-imagpygzxcuysz9k.jpeg?q=70",
    price: 9099,
    mrp: 8000,
    RAM: "4 GB",
    ROM: "64 GB",
  },
  {
    id: 30,
    title: "MOTOROLA G8 Power Lite (Arctic Blue)",
    image:
      "https://rukminim2.flixcart.com/image/832/832/kae95e80/mobile/8/3/2/motorola-g8-power-lite-pajc0009in-original-imafrz85cnetvz5h.jpeg?q=70",
    price: 9999,
    mrp: 11000,
    RAM: "4 GB",
    ROM: "64 GB",
  },
];

// Define the electronicAppliances category data
const electronicAppliances = [
  {
    id: 1,
    title: "LG - 5 Star Grey",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/washing-machine-new/k/f/c/-original-imagvg7vyyth4hv7.jpeg?q=70",
    price: 28990,
    mrp: 30000,
  },
  {
    id: 2,
    title: "Whirlpool -  GREY DAZZLE)",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/washing-machine-new/h/2/o/-original-imagrdmhfthybhpn.jpeg?q=70",
    price: 10240,
    mrp: 12000,
  },
  {
    id: 3,
    title: "quartz",
    image:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/p/t/l/-original-imagpzzjq8sahgpw.jpeg?q=70",
    price: 5000,
    mrp: 8000,
  },
  {
    id: 4,
    title: "Whirlpool - Water Purifiers",
    image:
      "https://rukminim2.flixcart.com/image/400/400/xif0q/water-purifier/n/f/y/-original-imagu3scfuqp3hjh.jpeg?q=90",
    price: 15000,
    mrp: 18000,
  },
  {
    id: 5,
    title: "Panasonic - Solo Microwave Oven ",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/microwave-new/y/t/t/-original-imagqkfykrwhpfqs.jpeg?q=70",
    price: 5000,
    mrp: 8000,
  },
  {
    id: 6,
    title: "ZunVolt - Mixer Grinder ",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/mixer-grinder-juicer/t/p/v/power-zunvolt-original-imagz629gj32pqqz.jpeg?q=70",
    price: 2500,
    mrp: 1500,
  },
  {
    id: 7,
    title: "Godrej  AC - White  ",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/air-conditioner-new/q/2/y/-original-imagz59tfm2hgr2m.jpeg?q=70",
    price: 32990,
    mrp: 35000,
  },
  {
    id: 8,
    title: "USHA - Induction Cooktop ",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/induction-cook-top/v/4/5/-original-imagpymnzmvwzrxd.jpeg?q=70",
    price: 2599,
    mrp: 4500,
  },
  {
    id: 9,
    title: "realme - Refrigerator ",
    image:
      "https://rukminim2.flixcart.com/image/416/416/xif0q/refrigerator-new/r/e/l/-original-imaggs9nhrntdpex.jpeg?q=70",
    price: 45990,
    mrp: 47000,
  },
  {
    id: 10,
    title: "MarQ - Full HD LED Smart Android TV ",
    image:
      "https://rukminim2.flixcart.com/image/416/416/k2w6xe80/television/z/2/z/marq-by-flipkart-43safhd-original-imafm59f3ryfyhsh.jpeg?q=70",
    price: 22000,
    mrp: 25000,
  },
];

// Styled Image component
const StyledImage = styled("img")(({ theme }) => ({
  objectFit: "contain",
  height: "auto",
  // mixBlendMode: "multiply",
  paddingTop: 6,
  borderRadius: "25px",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
  [theme.breakpoints.up("md")]: {
    maxWidth: "60%",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

// Styled Button component
const StyledButton = styled(Button)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

// Styled Button Text component
const StyledButtonText = styled(Typography)(({ theme }) => ({
  display: "none",
  textTransform: "capitalize",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  color: "black",
});

const NavigationBar = ({ setIsCartDrawerOpen, cartItemCount }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerOpen1, setIsDrawerOpen1] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  // const [openSResults, setOpenSResults] = useState(false);
  // const [placement, setPlacement] = React.useState();
  const [searchHistory, setSearchHistory] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    handleSearch(searchTerm);
    if (searchResults.length > 0) {
      setIsDrawerOpen1((prev) => !prev);
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsDrawerOpen1(false);
  };

  // const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchSubmit = () => {
    // Add the search term to history
    setSearchHistory((prevHistory) => [...prevHistory, searchTerm]);

    // Handle your search logic here

    // Close the popover
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCartButtonClick = () => {
    setIsCartDrawerOpen(true);
  };

  const allProducts = [...products, ...electronicAppliances];

  const handleSearch = (query) => {
    const filteredResults = allProducts.filter((product) =>
      Object.values(product).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
      )
    );
    setSearchResults(filteredResults);
    // setOpenSResults(filteredResults.length > 0);
  };

  // const handleHistoryItemClick = (item) => {
  //   // Set the selected item from history to the search bar
  //   setSearchTerm(item);
  //   setAnchorEl(null);
  // };

  // const handleClick = () => (event) => {
  //   setAnchor(event.currentTarget);
  //   setIsDrawerOpen((prev) => placement !== newPlacement || !prev);
  //   setPlacement(newPlacement);
  // };

  // const openPopover = (event) => {
  //   setAnchor(event.currentTarget);
  // };

  return (
    <React.Fragment>
      <AppBar position="static" color="warning">
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid xs={2} sx={{ objectFit: "contain" }}>
              {/* Logo */}

              {/* <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                NOWFAL
              </Typography> */}

              <StyledImage src={DrawerNavLogo} alt="Logo" />
            </Grid>

            <Stack
              xs={8}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              {/* Search TextField */}
              <Search>
                <StyledInputBase
                  placeholder="Search For Products..."
                  inputProps={{ "aria-label": "Search For Products..." }}
                  onClick={handleSearchSubmit}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSearchTerm(value);
                    // if (value === "") {
                    //   setSearchResults([]);
                    // } else {
                    //   handleSearch(value);
                    // console.log("search term", value);
                    // }
                  }}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="Search"
                  //       onClick={(e) => handleClick(e)}
                  //     >
                  //       <SearchIcon />
                  //     </IconButton>
                  //   </InputAdornment>
                />
                {/* <SearchIconWrapper> */}
                <IconButton aria-label="Search" onClick={(e) => handleClick(e)}>
                  <SearchIcon />
                </IconButton>
                {/* <IconButton
                    aria-label="Search"
                    onClick={(e) => handleClick(e)}
                  >
                    <SearchIcon />
                  </IconButton> */}
                {/* </SearchIconWrapper> */}
                <Popover
                  open={isDrawerOpen1}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}

                  // sx={{paddingBottom: 2, marginBottom: 2}}
                >
                  <Stack
                    xs={12}
                    container
                    direction={"column"}
                    sx={{ maxHeight: "520px" }}
                    p={1}
                  >
                    {searchResults.map((result, index) => (
                      <Stack
                        direction={"row"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        spacing={2}
                        boxShadow={2}
                        // m={1}
                        p={2}
                        my={1}
                        key={index}
                      >
                        <img
                          src={result.image}
                          alt={result.title}
                          style={{ maxWidth: 20, objectFit: "contain" }}
                        />
                        <div key={result.id}>
                          <Typography variant="body2" color="initial">
                            {result.title}
                          </Typography>
                          <Typography variant="body2" color="initial">
                            ₹ {result.price}
                          </Typography>
                        </div>
                      </Stack>
                    ))}
                  </Stack>
                  {/* <SearchHistory history={searchHistory} onHistoryItemClick={handleHistoryItemClick} /> */}
                </Popover>
              </Search>

              {/* Location Button */}
              <StyledButton
                variant="text"
                color="error"
                startIcon={<LocationOnIcon />}
              >
                <StyledButtonText
                  variant="caption"
                  color="initial"
                  fontWeight="600"
                >
                  Santiago Bernabeu - Madrid <br></br>
                </StyledButtonText>
              </StyledButton>

              {/* Whatsapp Button */}
              <Tooltip title="Chat on Whatsapp" color="success">
                <IconButton size="large" color="inherit">
                  <WhatsAppIcon color="success" />
                </IconButton>
              </Tooltip>

              {/* Home Button */}
              <StyledButton variant="text" color="success" endIcon={<Home />}>
                <StyledButtonText
                  variant="button"
                  color="initial"
                  fontWeight="600"
                >
                  Home
                </StyledButtonText>
              </StyledButton>

              {/* Register Button */}
              <StyledButton
                variant="text"
                color="success"
                endIcon={<PersonAddAltIcon />}
              >
                <StyledButtonText
                  variant="button"
                  color="initial"
                  fontWeight="600"
                >
                  Register
                </StyledButtonText>
              </StyledButton>

              {/* Sign In Button */}
              <StyledNavLink to="SignIn">
                <StyledButton
                  variant="text"
                  color="success"
                  endIcon={<ManageAccountsIcon />}
                >
                  <StyledButtonText
                    variant="button"
                    color="initial"
                    fontWeight="600"
                  >
                    Sign In
                  </StyledButtonText>
                </StyledButton>
              </StyledNavLink>

              {/* Cart Button */}
              <IconButton
                sx={{ color: "black" }}
                onClick={handleCartButtonClick}
              >
                <Badge badgeContent={cartItemCount} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>

              {/* Menu Button (Mobile) */}
              <IconButton
                color="default"
                aria-label="Open side bar"
                onClick={toggleDrawer}
                edge="start"
                sx={{
                  display: {
                    sm: "block",
                    xs: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                }}
              >
                <Menu />
              </IconButton>
            </Stack>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        bgcolor="orange"
      >
        {/* Logo
        <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  NOWFAL
                </Typography> */}

        {/* <img
          src={NavLogo}
          alt="Logo"
          sx={{ maxWidth: "20px", height: "auto", objectFit: "contain", m: 2, mixBlendMode: "multiply" }}
        /> */}

        {/* Home Button */}
        <Button
          variant="outlined"
          color="warning"
          startIcon={<Home />}
          borderRadius="0"
          sx={{ m: 1 }}
        >
          Home
        </Button>

        {/* Register Button */}
        <Button
          variant="outlined"
          color="warning"
          startIcon={<PersonAddAltIcon />}
          sx={{ m: 1 }}
        >
          Register
        </Button>

        {/* Sign In Button */}
        <Button
          variant="outlined"
          color="warning"
          borderRadius="0"
          startIcon={<ManageAccountsIcon />}
          sx={{ m: 1 }}
        >
          Sign In
        </Button>

        {/* Categories Component */}
        <Categories />
      </Drawer>
    </React.Fragment>
  );
};

export default NavigationBar;
