import React, { useState, useEffect } from "react";
import { getFile } from "../data/api";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/img1.jpg";
import Mileage from "../assets/mileage.jpg";
import { Navigation } from "swiper";
import CarContext from "../store/car-context";
import pic1 from "../assets/123.webp";
import calender from "../assets/calender.jpg";
import Transmission from "../assets/Transmission.jpg";
import Fuel from "../assets/fuel.webp";
import pic2 from "../assets/telephone.png";
import pic3 from "../assets/seller-logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { Rate } from "antd";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";

export default function ViewFullAd() {
  const a = useContext(CarContext);
  const getreview = a.getreview;
  const delfunc = a.delfunc;
  const addreview = a.addreview;
  const userid = a.userid;
  const setuseridfunc = a.setuseridfunc;
  const reviews = a.reviews;
  const totalrating = a.totalrating;
  const params = useParams();
  const { userInfo } = useContext(CarContext);
  const [multipleFilez, setMultipleFilez] = useState([]);
  const [userId, setUserId] = useState([]);
  const [brand_name, setBrandName] = useState([]);
  const [car_name, setCarName] = useState([]);
  const [description, setDescription] = useState([]);
  const [model, setModel] = useState([]);
  const [fuel_type, setFuelType] = useState([]);
  const [transmission, setTransmission] = useState([]);
  const [color, setColor] = useState([]);
  const [body_type, setBodyType] = useState([]);
  const [engine_displacement, setEngine] = useState([]);
  const [mileage, setMileage] = useState([]);
  const [seller_location, setSellerLocation] = useState([]);
  const [registered_in, setRegistaeredIn] = useState([]);
  const [assembly, setAssmbly] = useState([]);
  const [price, setPrice] = useState([]);
  const [files, setFiles] = useState([]);
  const [first_name, setFirstName] = useState([]);
  const [last_name, setLastName] = useState([]);
  const [contact_number, setContactNumber] = useState([]);
  const [review, setreview] = useState("");
  const [rating, setrating] = useState("");

  function formatLargeNumber(number) {
    if (number >= 10000000) {
      return number / 10000000 + " crore";
    } else if (number >= 100000) {
      return number / 100000 + " lacs";
    } else {
      return number;
    }
  }
  const getMultipleFilesList = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3009/api/featuredad/getCar/${params.id}`
      );
      setMultipleFilez(res);
      // console.log(res.data);
      setUserId(res.data.data.user_id);
      setBrandName(res.data.data.brand_name);
      setCarName(res.data.data.car_name);
      setDescription(res.data.data.description);
      setModel(res.data.data.model);
      setFuelType(res.data.data.fuel_type);
      setTransmission(res.data.data.transmission);
      setColor(res.data.data.color);
      setBodyType(res.data.data.body_type);
      setEngine(res.data.data.engine_displacement);
      setMileage(res.data.data.mileage);
      setSellerLocation(res.data.data.seller_location);
      setRegistaeredIn(res.data.data.registered_in);
      setAssmbly(res.data.data.assembly);
      setPrice(res.data.data.price);
      setFiles(res.data.data.files);

      const res1 = await axios.get(
        `http://localhost:3009/api/auth/getUser/${res.data.data.user_id}`
      );
      // console.log(res1.data);
      setFirstName(res1.data.data.first_name);
      setLastName(res1.data.data.last_name);
      setContactNumber(res1.data.data.phone);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMultipleFilesList();
    getreview(params.id);
    setuseridfunc();
  }, []);

  // console.log("USER ID  :  ", files);
  return (
    <div className="main-container">
      <div className="content-div">
        <h3 className="main-name-tag">
          {brand_name} {car_name} {model}{" "}
        </h3>
        <h4>{seller_location}, Pakistan</h4>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <Swiper>
              {files.map((files, index) => (
                <SwiperSlide style={{ alignSelf: "center" }}>
                  <img
                    className="d-block w-100 h-100 rounded"
                    src={`http://localhost:3009/${files.filePath}`}
                    height="65"
                    alt="First slide"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="Features-div">
          <div className="model">
            <br></br>
            <img src={calender} width="35px" alt="..." />
            <br />
            <p>{model}</p>
          </div>
          <div className="mileage">
            <br></br>
            <img src={Mileage} width="50px" alt="..." />
            <br />
            <p>{mileage}</p>
          </div>
          <div className="fuel">
            <br></br>
            <img src={Fuel} width="45px" height="35px" alt="..." />
            <br />
            <p>{fuel_type}</p>
          </div>
          <div className="transmission">
            <br></br>
            <img src={Transmission} width="45px" height="35px" alt="..." />
            <br />
            <p>{transmission}</p>
          </div>
          <h1 className="other-features">Other Features</h1>
          <div className="otherfeatures-div">
            <h4 className="regesterin">
              RegisteredIn <div className="r1">{registered_in}</div>
            </h4>
            <h4 className="assembly">
              Assembly <div className="a1">{assembly}</div>
            </h4>
            <h4 className="bodytype">
              BodyType <div className="bt1">{body_type}</div>
            </h4>
            <div className="pipe"></div>
            <h4 className="color">
              Color<div className="c1">{color}</div>
            </h4>
            <h4 className="engine">
              Engine
              <div className="ed1">{engine_displacement}</div>
            </h4>
          </div>
          <div className="desc-div">
            <h1 className="other-features1">Description</h1>
            <br></br>
            <p className="desctag">{description}</p>
          </div>
        </div>
      </div>
      <div className="seller-info">
        <h2 className="seller"> Seller Information</h2>
      </div>
      <div className="side-div">
        <div className="total-rating">
          {totalrating && (
            <Rate defaultValue={totalrating} allowHalf disabled count={5} />
          )}
        </div>
        <img className="icon" src={pic3} />
        <h3 className="seller-loc">Seller Location:</h3>
        <h3 className="seller-loc-label ">{seller_location}</h3>
        <h3 className="seller-name">
          {first_name} {last_name}
        </h3>
      </div>
      <div className="side-div2">
        <h3 className="price-label">Price {formatLargeNumber(price)}</h3>{" "}
        <br></br>
        <button className="call-button">
          <img className="telephone-icon" src={pic2}></img>
          <h2 className="contact-size">{contact_number}</h2>
        </button>
        <br></br>
        <br></br>
        <Link to={`/carinspection/${params.id}`} className="blue-link">
          Book An Inspection
        </Link>
      </div>
    </div>
  );
}
