import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import star1 from "../assets/star2.png";

import axios from "axios";
import CarContext from "../store/car-context";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Slider from "@mui/material/Slider";
import "./viewcars.css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";

export default function ViewCars() {
  const a = useContext(CarContext);
  const params = useParams();
  const getMultipleFiles = a.getMultipleFiles2;
  const getMultipleFilesLise = a.getMultipleFilesList;

  const multipleFiles = a.multipleFiles;
  const [keyword, setkeyword] = useState("");
  const [city, setcity] = useState("");
  const [brand, setbrand] = useState("");
  const [price, setPrice] = useState([0, 100000000]);
  const [model, setmodel] = useState("");
  const [Id, setId] = useState("");

  function formatLargeNumber(number) {
    if (number >= 10000000) {
      return number / 10000000 + " crore";
    } else if (number >= 100000) {
      return number / 100000 + " lacs";
    } else {
      return number;
    }
  }
  const getInspections = async (id) => {
    try {
      const res = await axios.get(
        `http://localhost:3009/api/inspect/getInspections`
      );
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:3009/api/featuredad/updateUnApprovedFile/${id}`
      );
      window.location.reload();
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleClick2 = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3009/api/featuredad/deleteCar/${id}`
      );
      window.location.reload();
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const allcities = ["Lahore", "Karachi", "Faisalabad", "Islamabad"];
  const allbrand = ["Honda", "Lexus", "Tesla", "Toyota"];

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const getMultipleFilesList = async () => {
    try {
      getMultipleFiles(keyword, city, brand, price, model);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMultipleFiles(keyword, city, brand, price, model);
    getInspections();
  }, []);

  return (
    <>
      <div className="side-bar">
        <div className="search-container">
          <div className="filter-div1">
            <h4 className="show-results">Search Cars</h4>

            <input
              value={keyword}
              onChange={(e) => {
                setkeyword(e.target.value);
              }}
              class="form-control me-2"
              type="search"
              placeholder="Car name"
              aria-label="Search"
            />
            <input
              value={model}
              onChange={(e) => {
                setmodel(e.target.value);
              }}
              class="form-control me-2 "
              type="Number"
              placeholder="Car Model Year"
              aria-label="Search"
            />
            <div>
              <select
                class="form-select w-100 me-2"
                aria-label="Default select example"
                value={city}
                onChange={(e) => {
                  setcity(e.target.value);
                }}
              >
                <option selected value={""}>
                  Select one City
                </option>

                {allcities.map((city) => {
                  return <option value={city}>{city}</option>;
                })}
              </select>
            </div>
            <div>
              <select
                class="form-select w-100 me-2"
                aria-label="Default select example"
                value={brand}
                onChange={(e) => {
                  setbrand(e.target.value);
                }}
              >
                <option selected value={""}>
                  Select Brand
                </option>

                {allbrand.map((br) => {
                  return <option value={br}>{br}</option>;
                })}
              </select>
            </div>
            <div className="filterbox">
              <h3>price</h3>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={100000000}
              />
              <input
                className="form-control me-2"
                placeholder="Minimum Price "
                type="Number"
                name="pricemin"
                value={price[0]}
                onChange={(e) => {
                  setPrice([e.target.value, price[1]]);
                }}
              />
              <input
                className="form-control me-2"
                placeholder="Maximum Price"
                type="Number"
                name="pricemax"
                value={price[1]}
                onChange={(e) => {
                  setPrice([price[0], e.target.value]);
                }}
              />
            </div>
            <button
              onClick={() => {
                getMultipleFilesList();
              }}
              type="button"
              class="btn btn-success search-button"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="w-100 p-3">
        <div className="container4 py-5 h-100">
          <div className="row justify-content-center align-items-center w-100">
            <h3 className="h2-tag">Adminsitration Panel</h3>

            <div className="col-lg-10 center-div1 mt-3">
              <Link to="/viewInspection">
                <button className="notifbutton"> + View Inpections </button>
              </Link>
              <div className="card shadow-2-strong card-registration w-75 mt-2 ">
                <div className="card-body p-4 p-md-8">
                  {multipleFiles.length !== 0
                    ? multipleFiles.map((element, index) => (
                        <div
                          className="shadow-sm rounded p-1 bg-light text-black mb-4  "
                          style={{ cursor: "pointer" }}
                          key={element._id}
                        >
                          <div className="row">
                            <div className="col-12 col-md-4 py-1 ">
                              <div class="image-slider marging-img-top">
                                <Swiper
                                  navigation={true}
                                  modules={[Navigation]}
                                >
                                  {element.files.map((file, index) => (
                                    <SwiperSlide
                                      style={{ alignSelf: "center" }}
                                    >
                                      <img
                                        className="d-block w-100 h-100 rounded"
                                        src={`http://localhost:3009/${file.filePath}`}
                                        height="65"
                                        alt="First slide"
                                      />
                                    </SwiperSlide>
                                  ))}
                                </Swiper>
                              </div>
                            </div>

                            <div
                              className="ad-info-wrapper col-md-8 d-flex flex-column"
                              style={{ alignItems: "space-between" }}
                            >
                              <div className="featuredtag2">
                                <h4 className="featured-heading2">
                                  Featured{" "}
                                  <img className="star-2" src={star1}></img>
                                </h4>
                              </div>

                              <div className="car-name">
                                {element.brand_name} {element.car_name}{" "}
                                {element.model} For Sale
                                <br></br>
                              </div>
                              <div className="seller-location">
                                Registered City - {element.registered_in}{" "}
                                <div className="priceposition">
                                  Price <br></br>{" "}
                                  {formatLargeNumber(element.price)}{" "}
                                </div>
                              </div>
                              <br></br>
                              <div className="car-details">
                                {element.model} | {element.mileage} |{" "}
                                {element.fuel_type} |{" "}
                                {element.engine_displacement} |{" "}
                                {element.transmission}
                              </div>
                              <div className="d-flex spacing mb-0 mt-auto">
                                <button
                                  onClick={() => handleClick2(element._id)}
                                  type="button"
                                  className="btn w-100 btn-danger mx-1"
                                >
                                  Disaprove Ad
                                </button>
                                <button
                                  onClick={() => handleClick(element._id)}
                                  type="button"
                                  className="btn w-100 btn-success mx-1"
                                >
                                  Approve Ad
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    : "No ad to display"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
