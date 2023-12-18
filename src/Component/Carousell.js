import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousell = () => {
  return (
    <Carousel
      autoPlay
      interval={2000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img
          src={require("../Component/ProjectImages/8312802.jpg")}
          alt="3rd Slide"
          style={{ objectFit: "cover", maxWidth: "100vw", height: "400px" }}
        />
      </div>
      <div>
        <img
          src={require("../Component/ProjectImages/8095325.jpg")}
          alt="2nd Slide"
          style={{ objectFit: "cover", maxWidth: "100vw", height: "400px" }}
        />
      </div>
      <div>
        <img
          src={require("../Component/ProjectImages/6056549.jpg")}
          alt="1st Slide"
          style={{ objectFit: "cover", maxWidth: "100vw", height: "400px" }}
        />
      </div>
    </Carousel>
  );
};

export default Carousell;
