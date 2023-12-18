import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import Vivo_logo from "../Component/ProjectImages/vivo_sqsnbm.png";
import Sony_logo from "../Component/ProjectImages/sony_fa0aon.png";
import Samsung_logo from "../Component/ProjectImages/samsung_tmmzob (1).png";
import RealMe_logo from "../Component/ProjectImages/realme_m8q5py.png";
import Phillips_logo from "../Component/ProjectImages/philips_lv4l0t (1).png";
import Panasonic_logo from "../Component/ProjectImages/panasonic_g5ubsn.png";
import Oppo_logo from "../Component/ProjectImages/oppo_zdscdn (1).png";
import MI_logo from "../Component/ProjectImages/mi_dtxgef (1).png";
import LG_logo from "../Component/ProjectImages/Lg_duygz8 (1).png";
import Lenovo_logo from "../Component/ProjectImages/Lenovo_dxvgyb (1).png";
import JBL_logo from "../Component/ProjectImages/jbl_prjtcv (1).png";
import Croma_logo from "../Component/ProjectImages/HP_CromaLogo_yxeuuz.png";
import HP_logo from "../Component/ProjectImages/hp_co1yuv (1).png";
import Dell_logo from "../Component/ProjectImages/dell_nagdmt.png";
import IPhone_logo from "../Component/ProjectImages/apple_xmf55t.png";
import Amazon_logo from "../Component/ProjectImages/amazon_ujwvcg.png";
import { useState } from "react";
import { useRef } from "react";

const categoriesList = [
  {
    Id: 1,
    Title: "All Categories",
    Image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/All-categories.png?updatedAt=1687176228781",
  },

  {
    Id: 2,
    Title: "Top Offers",
    Image:
      "https://ik.imagekit.io/sathish2267/kassospos_App/healthystes/top-offers.png?updatedAt=1687176242659",
  },

  {
    Id: 3,
    Title: "Vivo",
    Image: Vivo_logo,
  },

  {
    Id: 4,
    Title: "Samsung",
    Image: Samsung_logo,
  },

  {
    Id: 5,
    Title: "Sony",
    Image: Sony_logo,
  },

  {
    Id: 6,
    Title: "RealMe",
    Image: RealMe_logo,
  },

  {
    Id: 7,
    Title: "Panasonic",
    Image: Panasonic_logo,
  },

  {
    Id: 8,
    Title: "Oppo",
    Image: Oppo_logo,
  },

  {
    Id: 9,
    Title: "Phillips",
    Image: Phillips_logo,
  },

  {
    Id: 10,
    Title: "MI",
    Image: MI_logo,
  },

  {
    Id: 11,
    Title: "LG",
    Image: LG_logo,
  },

  {
    Id: 12,
    Title: "Lenovo",
    Image: Lenovo_logo,
  },

  {
    Id: 13,
    Title: "JBL",
    Image: JBL_logo,
  },

  {
    Id: 14,
    Title: "Croma",
    Image: Croma_logo,
  },

  {
    Id: 15,
    Title: "HP",
    Image: HP_logo,
  },

  {
    Id: 16,
    Title: "Dell",
    Image: Dell_logo,
  },

  {
    Id: 17,
    Title: "IPhone",
    Image: IPhone_logo,
  },

  {
    Id: 18,
    Title: "Amazon",
    Image: Amazon_logo,
  },
];

const CategoryMenu = () => {
  // Create A Reference To The Container Element
  const containerRef = useRef(null);

  // State Variables For Dragging Behavior
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Event Handler For Mouse Down
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  // // Event Handler For Mouse Up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Event Handler For Mouse Move
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      style={{ overflowX: "hidden", backgroundColor: "#FFD099" }}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      // onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <Grid
        container
        mt={1}
        sx={{ display: "flex", flexWrap: "nowrap" }}
        bgcolor={"#FFD099"}
        py={2}
      >
        {categoriesList.map((category) => (
          <Stack
            bgcolor={"#FFD099"}
            key={category.Id}
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ cursor: "pointer", minWidth: "160px" }}
          >
            <img
              src={category.Image}
              alt={category.Title}
              style={{
                maxWidth: "75px",
                height: "75px",
                borderRadius: "50%",
                backgroundColor: "white",
                objectFit: "contain",
              }}
            />
            <Typography variant="body2" align="center" mt={1}>
              {category.Title}
            </Typography>
          </Stack>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryMenu;
