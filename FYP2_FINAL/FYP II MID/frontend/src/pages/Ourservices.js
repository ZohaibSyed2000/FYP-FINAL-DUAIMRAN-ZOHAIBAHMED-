import React from "react";
import pic1 from "../assets/buycar3.jpg";
import pic2 from "../assets/predict1.jpg";
import pic3 from "../assets/carcomparison.PNG";
import pic4 from "../assets/notif.jpg";
import pic5 from "../assets/review.webp";
import pic6 from "../assets/inspection.jpg";

export default function Ourservices() {
  return (
    <div className="service-section">
      <label class="Sl-1 ">WHAT WE OFFER</label> <div class="dash"></div>
      <div class="container1">
        <div class="boxs">
          <img class="postad-pic" src={pic1} />
          <h3 class="pic1-heading">Post Your Car</h3>
          <div class="feature-text-box">
            <p>
              Know your car value allows user to post advertisements of their
              vehicle on our platform with the features, images and details of
              the vehicle. we help buyers and sellers interact directly with
              each other eliminating the concept of a middle man during the
              whole process.{" "}
            </p>
          </div>
        </div>
        <img class="predict-pic" src={pic2} />
        <div class="box1">
          <h3 class="pic1-heading1">Car Price Prediction</h3>
          <div class="feature-text-box1">
            <p>
              We offer the best feature of Car Price Prediction. Our proposed
              feature helps the both the purchase and seller for to purchase and
              sale their vehicle and they can predict the best for their vehicle
              and make their decision good for personal and business.{" "}
            </p>
          </div>
        </div>
        <div class="box2">
          <img class="carcomparison-pic" src={pic3} />
          <h3 class="pic3-heading">UsedCar Comparison</h3>
          <div class="feature-text-box2">
            <p>
              We offer Car comparison feature where we help our user to compare
              used cars with the help of just a few clicks, so that the user
              will be able to perform a detailed comparison of cars and take a
              better decision.{" "}
            </p>
          </div>
        </div>
        <div class="box3">
          <img class="customnotif-pic" src={pic4} />
          <h3 class="pic4-heading">Custom Notification</h3>
          <div class="feature-text-box3">
            <p>
              Custom notification is our feature crafted specifically for people
              who can’t find the right car, we allow them to specify their
              demands and whenever a car is listed according to what they need,
              we notify them through an email.
            </p>
          </div>
        </div>
        <div class="box4">
          <img class="chatbox-pic" src={pic5} />
          <h3 class="pic5-heading">User Rating</h3>
          <div class="feature-text-box4">
            <p>
              We are offering a chat box where the buyers and sellers can
              communicate with each other regarding their queries, they can
              exchange demands and bargain online with our chat box service{" "}
            </p>
          </div>
        </div>
        <div class="box5">
          <img class="carinspect-pic" src={pic6} />
          <h3 class="pic6-heading">Car Inspection</h3>
          <div class="feature-text-box6">
            <p>
              In our inspection and report generation feature, the user can book
              an appointment from our specialised team of experts to inspect
              cars on their interior, exterior and important parts.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
