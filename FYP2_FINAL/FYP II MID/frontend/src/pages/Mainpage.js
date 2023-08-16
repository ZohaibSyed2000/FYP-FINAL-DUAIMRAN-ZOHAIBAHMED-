import React from "react";
import car from "../assets/Car2.svg";
import arrowlogo from "../assets/arrow1.png";

export default function Mainpage() {
  return (
    <body>
      <div class="landing-page">
        <div class="circle"></div>
        <embed class="vector-size" src={car} />
        <h1 class="heading-1">GET BEST VALUE</h1>
        <h1 class="heading-2">OF YOUR CAR</h1>
        <h1 class="heading-3">WITH US</h1>

        <div class="text-box">
          <p class="lineUp">
            Know your car value is a buying and selling platform for all car
            enthusiasts with many new and exciting features to help us get a one
            up in the competition with existing market places for cars.{" "}
          </p>
        </div>
        <img class="arrow" src={arrowlogo} />
        <button class="Post-ad">Predict Your Car </button>
      </div>
    </body>
  );
}
