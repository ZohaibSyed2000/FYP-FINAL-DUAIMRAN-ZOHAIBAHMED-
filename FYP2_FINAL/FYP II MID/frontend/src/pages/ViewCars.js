import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import star1 from "../assets/star2.png";

import CarContext from "../store/car-context";
import { Link, useNavigate } from "react-router-dom";
import Slider from "@mui/material/Slider";
import "./viewcars.css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";

export default function ViewCars() {
  const a = useContext(CarContext);
  const getMultipleFiles = a.getMultipleFiles;
  const setapprovedFiles = a.setapprovedFiles;
  const getMultipleFilesLise = a.getMultipleFilesList;
  const navigate = useNavigate();
  const multipleFiles = a.multipleFiles;
  const pages = a.pages;
  const [currentPage, setCurrentPage] = useState(1);
  const approvedFiles = a.approvedFiles;
  const [keyword, setkeyword] = useState("");
  const [city, setcity] = useState("");
  const [brand, setbrand] = useState("");
  const [price, setPrice] = useState([0, 100000000]);
  const [model, setmodel] = useState("");
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

  useEffect(() => {
    // Get the URL parameter for the page number
    const urlParams = new URLSearchParams(window.location.search);
    setCurrentPage(parseInt(urlParams.get("page")));

    // Use a default value of 1 if the page number is not specified or is not a number
    if (isNaN(currentPage) || currentPage < 1) {
      setCurrentPage(1);
    }
  }, [currentPage, pages]);
  useEffect(() => {
    getMultipleFiles(keyword, city, brand, price, model, currentPage);
  }, [currentPage]);

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
  const getMultipleFilesList = async () => {
    try {
      getMultipleFiles(keyword, city, brand, price, model, currentPage);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = ""; // Clear existing links

    for (let i = 1; i <= pages; i++) {
      const link = document.createElement("a");
      link.href = `/home?page=${i}`;
      link.textContent = i;

      if (i === currentPage) {
        link.classList.add("active");
      }

      paginationContainer.appendChild(link);
    }

    if (currentPage < pages) {
      const nextPageLink = document.createElement("a");
      nextPageLink.href = `/home?page=${currentPage + 1}`;
      nextPageLink.textContent = "»";
      paginationContainer.appendChild(nextPageLink);
    }

    // Add click event listener to pagination links
    paginationContainer.addEventListener("click", (event) => {
      event.preventDefault();
      const link = event.target;
      const page = link.textContent;

      if (page && page !== currentPage.toString()) {
        // Update URL with new page number
        const newUrl = new URL(link.href);
        newUrl.searchParams.set("page", page);
        // history.pushState(null, '', newUrl.toString());

        setCurrentPage(parseInt(page));
      }
    });
  }, [currentPage, pages]);

  return (
    <>
      <div className="side-bar">
        <div className="search-container">
          <div className="filter-div1">
            <h4 className="show-results">Search Cars </h4>

            <input
              value={keyword}
              onChange={(e) => {
                setkeyword(e.target.value);
              }}
              class="form-control me-2 "
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
                  Select city
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
              <h3 className="pp">Price Range</h3>
              <Slider
                className="sliderrange"
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={100000000}
              />
              <input
                className="form-control me-2 min1"
                placeholder="Minimum Price "
                type="Number"
                name="pricemin"
                value={price[0]}
                onChange={(e) => {
                  setPrice([e.target.value, price[1]]);
                }}
              />
              <input
                className="form-control me-2 min2"
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
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center w-100">
            <div className="col-lg-10 center-div mt-3">
              <Link to="/addnotification">
                <button className="notifbutton"> + Add Notification </button>
              </Link>
              <h3 className="h3-1">Used Cars for Sale in Pakistan</h3>

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
                              <div className="featuredtag">
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
                                //onClick={setUserInfo({ carId: element._id })}
                                type="button"
                                className="btn w-100 btn-warning mx-1"
                              >
                                <Link
                                  to={`/viewfeaturedcar/${element._id}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                  }}
                                >
                                  View Full Ad
                                </Link>
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
                                //onClick={setUserInfo({ carId: element._id })}
                                type="button"
                                className="btn w-100 btn-warning mx-1"
                              >
                                <Link
                                  to={`/viewfullad/${element._id}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                  }}
                                >
                                  View Full Ad
                                </Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    : "No ad to display"}
                </div>
                <div class="pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
