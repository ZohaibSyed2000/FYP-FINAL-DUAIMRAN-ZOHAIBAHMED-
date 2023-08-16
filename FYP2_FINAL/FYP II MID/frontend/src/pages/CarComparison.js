import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import star1 from "../assets/star2.png";
import cc from "../assets/carcompare.jpg";
import CarContext from "../store/car-context";
import { Link, useNavigate } from "react-router-dom";
import Slider from "@mui/material/Slider";
import "./viewcars.css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
export default function CarComparison() {
  const navigate = useNavigate();
  const a = useContext(CarContext);
  const getMultipleFiles = a.getMultipleFiles;
  const getMultipleFilescomparison2 = a.getMultipleFilescomparison2;
  const getMultipleFilescomparison1 = a.getMultipleFilescomparison1;
  const getMultipleFilesLise = a.getMultipleFilesList;
  // const getMultipleFiles = a.getMultipleFiles;
  // const getMultipleFilescomparison2 = a.getMultipleFilescomparison2;
  // const getMultipleFilesLise = a.getMultipleFilesList;

  const multipleFiles = a.multipleFiles;
  const multipleFiles2 = a.multipleFiles2;
  const approvedFiles = a.approvedFiles;
  const approvedFiles2 = a.approvedFiles2;
  const [keyword, setkeyword] = useState("");
  const [keyword2, setkeyword2] = useState("");
  const [city, setcity] = useState("");
  const [brand, setbrand] = useState("");
  const [brand2, setbrand2] = useState("");
  const [price, setPrice] = useState([0, 100000000]);
  const [model, setmodel] = useState("");
  const [model2, setmodel2] = useState("");
  const [car1, setcar1] = useState("");
  const [car2, setcar2] = useState("");
  const allcities = [
    "Lahore",
    "Karachi",
    "Faisalabad",
    "Islamabad",
    "Rawalpindi",
    "Multan",
    "Hyderabad",
    "Gujranwala",
    "Peshawar",
    "Quetta",
    "Sialkot",
  ];
  const allbrand = [
    "Toyota",
    "Honda",
    "Suzuki",
    "Hyundai",
    "Kia",
    "Mercedes",
    "Haval",
    "Audi",
    "Changan",
    "Mg",
    "Bfsk",
    "Prince",
    "Bmw",
    "Nissan",
    "Daihatsu",
    "Faw",
    "Proton",
  ];

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  function formatLargeNumber(number) {
    if (number >= 10000000) {
      return number / 10000000 + " crore";
    } else if (number >= 100000) {
      return number / 100000 + " lacs";
    } else {
      return number;
    }
  }
  //For search button 1
  const getMultipleFilesList = async () => {
    try {
      let comparison = true;
      getMultipleFilescomparison1(
        keyword,
        city,
        brand,
        price,
        model,
        comparison
      );
    } catch (e) {
      console.log(e);
    }
  };

  //For search button 2
  const getMultipleFilesList2 = async () => {
    try {
      getMultipleFilescomparison2(keyword2, city, brand2, price, model2);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/* ------------------Car 1---------------------------------------------------------------- */}
      <div className="mainpage1">
        <div className="img-box">
          <img src={cc}></img>
        </div>
        {/* <div className="pipebar"></div> */}
        <div className="filter-div">
          <div className="searchbar1">
            <input
              value={keyword}
              onChange={(e) => {
                setkeyword(e.target.value);
              }}
              class="form-control me-2  choosename"
              type="search"
              placeholder="Car name"
              aria-label="Search"
            />
            <input
              value={model}
              onChange={(e) => {
                setmodel(e.target.value);
              }}
              class="form-control me-2 carmodel "
              type="Number"
              placeholder="Car Model Year"
              aria-label="Search"
            />

            <div>
              <select
                class="form-select choosebrand me-2"
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
              <button
                onClick={() => {
                  if (keyword === "" && brand === "" && model === "") {
                    alert("At least add one filter");
                  } else {
                    getMultipleFilesList();
                  }
                }}
                type="button"
                class="btn btn-success search-button1"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="w-100 p-3">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center w-100">
              {/* <h3 className="comparisonheading">Used Car Comparison</h3> */}
              <h3 className="car1">Select car 1</h3>
              <div className="col-lg-10 center-div1 mt-3">
                <div className="card shadow-2-strong card-registration w-75 mt-0 ">
                  <div className="card-body p-4 p-md-8">
                    {approvedFiles.length !== 0
                      ? approvedFiles.map((element, index) => (
                          <div
                            className="shadow-sm rounded p-1 bg-light text-black mb-4  "
                            style={{ cursor: "pointer" }}
                            key={element._id}
                          >
                            <div className="row">
                              <div className="col-12 col-md-4 py-1">
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
                                <div className="featuredtag1">
                                  <h4 className="featured-heading">
                                    Featured{" "}
                                    <img className="star-1" src={star1}></img>
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

                                <button
                                  onClick={() => setcar1(element._id)}
                                  type="button"
                                  className={
                                    car1 === element._id
                                      ? "btn w-100 btn-warning mx-1 my-1 selected"
                                      : "btn w-100 btn-warning mx-1 my-1"
                                  }
                                >
                                  Select
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      : ""}
                    {multipleFiles.length !== 0
                      ? multipleFiles.map((element, index) => (
                          <div
                            className="shadow-sm rounded p-1 bg-light text-black mb-4  "
                            style={{ cursor: "pointer" }}
                            key={element._id}
                          >
                            <div className="row">
                              <div className="col-12 col-md-4 py-1">
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

                                <button
                                  onClick={() => setcar1(element._id)}
                                  type="button"
                                  className={
                                    car1 === element._id
                                      ? "btn w-100 btn-warning mx-1 my-1 selected"
                                      : "btn w-100 btn-warning mx-1 my-1"
                                  }
                                >
                                  Select
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------Car 2-------------------------------------------------------------------- */}

        {/* <div className="pipebar"></div> */}
        {/* <div className="filter-div"> */}
        <div className="searchbar2">
          <input
            value={keyword2}
            onChange={(e) => {
              setkeyword2(e.target.value);
            }}
            class="form-control me-2  choosename"
            type="search"
            placeholder="Car name"
            aria-label="Search"
          />
          <input
            value={model2}
            onChange={(e) => {
              setmodel2(e.target.value);
            }}
            class="form-control me-2 carmodel "
            type="Number"
            placeholder="Car Model Year"
            aria-label="Search"
          />

          <div>
            <select
              class="form-select choosebrand me-2"
              aria-label="Default select example"
              value={brand2}
              onChange={(e) => {
                setbrand2(e.target.value);
              }}
            >
              <option selected value={""}>
                Select Brand
              </option>

              {allbrand.map((br) => {
                return <option value={br}>{br}</option>;
              })}
            </select>
            <button
              onClick={() => {
                if (keyword2 === "" && brand2 === "" && model2 === "") {
                  alert("At least add one filter");
                } else {
                  getMultipleFilesList2();
                }
              }}
              type="button"
              class="btn btn-success search-button1"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="w-100 p-3">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center w-100">
            <h3 className="car2">Select car 2</h3>
            <div className="col-lg-10 center-div2 mt-3">
              <div className="card shadow-2-strong card-registration w-75 mt-0 ">
                <div className="card-body p-4 p-md-8">
                  {approvedFiles2.length !== 0
                    ? approvedFiles2.map((element, index) => (
                        <div
                          className="shadow-sm rounded p-1 bg-light text-black mb-4  "
                          style={{ cursor: "pointer" }}
                          key={element._id}
                        >
                          <div className="row">
                            <div className="col-12 col-md-4 py-1">
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
                              <div className="featuredtag1">
                                <h4 className="featured-heading">
                                  Featured{" "}
                                  <img className="star-1" src={star1}></img>
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

                              <button
                                onClick={() => setcar2(element._id)}
                                type="button"
                                className={
                                  car2 === element._id
                                    ? "btn w-100 btn-warning my-1 mx-1 selected"
                                    : "btn w-100 btn-warning mx-1 my-1"
                                }
                              >
                                Select
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    : ""}
                  {multipleFiles2.length !== 0
                    ? multipleFiles2.map((element, index) => (
                        <div
                          className="shadow-sm rounded p-1 bg-light text-black mb-4  "
                          style={{ cursor: "pointer" }}
                          key={element._id}
                        >
                          <div className="row">
                            <div className="col-12 col-md-4 py-1">
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

                              <button
                                onClick={() => setcar2(element._id)}
                                type="button"
                                className={
                                  car2 === element._id
                                    ? "btn w-100 btn-warning mx-1 selected"
                                    : "btn w-100 btn-warning mx-1"
                                }
                              >
                                Select
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="comparebtn"
        onClick={() => {
          if (car1 === "" || car2 == "") {
            alert("Select 2 cars ");
          } else {
            navigate(`/caridcomparison/${car1}/${car2}`);
          }
        }}
      >
        Compare
      </button>
    </>
  );
}
