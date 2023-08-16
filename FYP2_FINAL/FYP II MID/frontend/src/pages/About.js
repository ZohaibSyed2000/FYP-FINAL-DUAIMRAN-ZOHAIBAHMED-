import React from "react";
import duapic from "../assets/dua.jpg";
import zohaibpic from "../assets/FormalImage.PNG";

export default function About() {
  return (
    <div className="full-section">
      <div class="main-div-3">
        <label class="heading-about">About Us</label>
        <div class="underline1"></div>
        <div class="aboutus-heading">
          <p class="center-para">
            Know your car value is our final year project based on machine
            learning. It strives to serve all the car enthusiasts out there, who
            love to buy and sell cars. We have got you covered with our amazing
            features where you can predict the best price for a car based on its
            features and compare amazing vehicles with just a few clicks side by
            side in order to make an informed decision. Furthermore we allow all
            users to comment down there thoughts on a vehicle on each and every
            advertisement. Not only this we have got more amazing features for
            you on our site, explore to learn more.
          </p>
        </div>
        <label class="teamheading">Team Members</label>
        <div class="underline2"></div>
        <div class="member1">
          <img class="member1-img" src={duapic} />
          <label class="dua-heading">Dua Imran</label>
          <div class="dua-textbox">
            <p class="dua-text">
              Ms Dua Imran is a highly devoted final year student in SZABIST
              Karachi, who loves to develop enthusiastic user interfaces,
              Moreover her experience with front end development and UI/UX
              designing is a big support for us as a team.
            </p>
          </div>
        </div>
        <div class="member2">
          <img class="member2-img" src={zohaibpic} />
          <label class="dua-heading">Zohaib Ahmed</label>
          <div class="dua-textbox">
            <p class="dua-text">
              Know your car value is promoted by Mr Syed Zohaib Ahmed, a
              softwate developer with a little over 1 year of experience with
              cutting edge technologies such as Dotnet core, React and much
              more. His experience and enthusiasm steers know your car value to
              its success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
