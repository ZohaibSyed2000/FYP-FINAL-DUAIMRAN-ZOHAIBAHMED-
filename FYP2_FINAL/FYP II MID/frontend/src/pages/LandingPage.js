import React from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
import "./LandingPage.css";
import S1 from "../assets/slider5edit2-min.jpg";
import S1Preview from "../assets/slider5edit2-min-preview.jpg";

export default function LandingPage() {
  const [classes, setClasses] = useState("");

  const onImageLoad = (e) => {
    const elem = e.target;

    elem.src = S1;
  };

  return (
    <>
      <div className="slider">
        <img
          src={S1Preview}
          onLoad={onImageLoad}
          class="img-fluid "
          alt="..."
        />
        <div className="col-5 heading px-4">
          <Typography variant="h1" fontWeight="bold" className="title-text">
            Get best value of your car{" "}
            <span style={{ color: "white" }}>with US</span>
          </Typography>

          {/* <p>
            One of the leading online booking engine providers EXCLUSIVELY for
            travel agencies. Our aim is to provide you with a fast and easy
            online access to the flight booking to our clients, wherever and
            whenever that may be.
          </p> */}
        </div>
        {/* <div className="col-5 heading">
          
        </div>
      </div> */}
      </div>
    </>
  );
}
