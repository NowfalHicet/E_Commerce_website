import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

export default function NestedList() {
  const [open, setOpen] = React.useState({
    vivo: false,
    samsung: false,
    realme: false,
    iPhone: false,
    oppo: false,
    poco: false,
    sony: false,
  });

  const handleClick = (category) => {
    setOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, color: "orange", bgcolor: "#4E39A" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ color: "orange", fontWeight: 800 }}
        >          
          Online SmartPhone Shop
        </ListSubheader>
      }
    >
      <ListItemButton onClick={() => handleClick("vivo")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Vivo" />
        {open.vivo ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.vivo} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="vivo T2x 5G (Aurora Gold)" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="vivo T2x 5G (Glimmer Black)" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("samsung")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Samsung" />
        {open.samsung ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.samsung} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="SAMSUNG Galaxy S23 Ultra 5G (Green)" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="SAMSUNG Galaxy F14 5G (B.A.E. Purple)" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("realme")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Real Me" />
        {open.realme ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.realme} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="realme C51 (Carbon Black)" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="realme Narzo N53 (Feather Black)" />
          </ListItemButton>
          </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("iPhone")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="IPhone" />
        {open.iPhone ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.iPhone} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="APPLE iPhone 12 (Blue)" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="APPLE iPhone 14 Plus (Starlight, 128 GB)" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("oppo")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Oppo" />
        {open.oppo ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.oppo} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="OPPO A17k (Navy Blue)" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="OPPO Reno10 5G (Ice Blue) " />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("poco")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Poco" />
        {open.poco ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.poco} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="POCO X2 (Matrix Purple)" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="POCO M6 Pro 5G (Power Black)" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={() => handleClick("sony")}>
        {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
        <ListItemText primary="Sony" />
        {open.sony ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open.sony} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="SONY Xperia Z3 Compact (Black)" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="SONY Xperia C4 Dual (Black)" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
