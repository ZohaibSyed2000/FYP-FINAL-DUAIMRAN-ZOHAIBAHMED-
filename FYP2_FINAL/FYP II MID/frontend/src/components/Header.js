import React from "react";
//import LOGO from "../assets/logo.jpg";
import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import CarContext from "../store/car-context";

function Header() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(CarContext);

  const logOut = () => {
    localStorage.setItem("userInfo", null);
    setUserInfo(null);
    navigate("/accounts/login");
  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-primary navbarh">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Know Your Car Value
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link color1" aria-current="page">
              Home
            </a>
            <Link class="nav-link color1" to="/ourservices">
              Our Services
            </Link>
            <Link class="nav-link color1" to="/about">
              About Us
            </Link>
          </div>
          {userInfo ? (
            <>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <Link class="nav-link color1" to="/home?page=1">
                    View Ads
                  </Link>
                </div>
                <div class="navbar-nav">
                  <Link class="nav-link color1" to="/myads">
                    My Ads
                  </Link>
                </div>
                <div class="navbar-nav">
                  <Link class="nav-link color1" to="/prediction-form">
                    Predict Car
                  </Link>
                </div>
              </div>

              <form class="d-flex" role="search">
                <button class="btn  postad1" type="submit">
                  <Link to="/home1">Post an Ad</Link>
                </button>
                <button class="btn logout1" type="submit" onClick={logOut}>
                  <Link to="/home1">Log Out</Link>
                </button>
              </form>
            </>
          ) : (
            <form class="d-flex" role="search">
              <button class="btn  signin1" type="submit">
                <Link to="/accounts/login">Sign in</Link>
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Header;

{
  /* <nav className="nav-bar">
<div className="container-fluid">
  <div className="ul-box">
    {" "}
    <Link to="/">
      <h1 className="logo">Know Your Car Value</h1>
    </Link>
    <Link to="/">
      <li className="li-2">Home</li>
    </Link>
    <Link to="/ourservices">
      <li className="li-2">Our Services</li>
    </Link>
    <Link to="/about">
      <li className="li-2">About Us</li>
    </Link>
  </div>

  {userInfo ? (
    <>
      <div className="ul-box-2">
        <li>
          <Link to="/home?page=1">View Ads</Link>
        </li>

        <li>
          <Link to="/myads">My Ads</Link>
        </li>
        <li>
          <Link to="/prediction-form">Predict Car</Link>
        </li>
      </div>

      <button className="ad-post-button" type="submit">
        <Link to="/home1">Post an Ad</Link>
      </button>
      <button className="logout-button" type="submit" onClick={logOut}>
        LogOut
      </button>
    </>
  ) : (
    <Link to="/accounts/login">
      <button className="login-btn">Sign in</button>
    </Link>
  )}
</div>
</nav> */
}
