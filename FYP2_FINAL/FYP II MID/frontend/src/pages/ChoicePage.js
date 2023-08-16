import React from "react";
import { Link } from "react-router-dom";

export default function ChoicePage() {
  return (
    <div className="fullpage">
      <div className="simple-div"></div>
      <div className="simple-div2"></div>

      <Link to="/postAd">
        <button className="Non-featured">Non-Featured Ad</button>
      </Link>

      <div className="pipe2"></div>
      <h1 className="freeAd">Post your Ad for free ! </h1>
      <h1 className="paidAd">Sell your car with us ! </h1>

      <div className="list-1">
        <ul className="l1"> Display your Ad on top of our Ads </ul>
        <ul className="l1">Reach more buyers & Sell faster</ul>
        <ul className="l1">Excellent Publicity</ul>
        <ul className="l1">Unbeatable coverage</ul>
      </div>
      <div className="list-2">
        <ul className="l2"> Post one or more than one Ads for Free</ul>
        <ul className="l2">Receive Verified Buyer Offers </ul>
        <ul className="l2">Sell Your Car Quickly at the Best Price.</ul>
        <ul className="l2">Pay No charges </ul>
      </div>
      <Link to="/postfeaturedAd">
        <button className="featured">Featured Ad</button>
      </Link>
    </div>
  );
}
