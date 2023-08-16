import React, { useState, useEffect } from "react";
import { getFile } from "../data/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CarContext from "../store/car-context";
import { useParams } from "react-router-dom";
import axios from "axios";
import img1 from "../assets/userlogo.png";

import { Link } from "react-router-dom";
import { useContext } from "react";
import UpdateAdModal from "../components/UpdateAdModal";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Modal } from "@mui/material";
import "./myadd.css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";

export default function Inspections() {
  // const a = useContext(CarContext);
  // const getallnotification = a.getallnotification;
  // const notificationbrand = a.notificationbrand;
  // const notificationcar = a.notificationcar;
  // const notificationmodel = a.notificationmodel;
  const [openModal, setOpenModal] = useState(false);
  const params = useParams();
  const { userInfo } = useContext(CarContext);
  const [multipleFiles, setMultipleFiles] = useState([]);

  const [carId, setCarId] = useState([]);
  const [userId, setUserId] = useState([]);
  const [model_year, setModelYear] = useState([]);

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
      const result = await axios.get(
        `http://localhost:3009/api/inspect/getInspections`
      );
      setMultipleFiles(result.data);
      console.log("aaaaa" + multipleFiles);
      console.log(result);
    } catch (e) {
      console.log(e);
    }

    // const myJSON1 = JSON.stringify(userInfo);
    // getallnotification(myJSON1);
    // console.log(notificationbrand);
  };
  let check = (data) => {
    console.log(data);
  };
  useEffect(() => {
    getMultipleFilesList();
  }, []);
  return (
    <>
      <div className="w-100 p-3">
        {openModal && <UpdateAdModal closeModal={setOpenModal} />}
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center w-100">
            <div className="col-lg-10 center-div mt-3">
              <br></br>
              <h3 className="h2-myad">Inspections to be Conducted</h3>
              <div className="main-div-myads">
                <div className="card shadow-2-strong card-registration w-75 mt-2 ">
                  <div className="card-body p-4 p-md-8">
                  {multipleFiles.map((element, index) => (
                      <div
                        className="shadow-sm rounded p-1 bg-light text-black mb-4  "
                        style={{ cursor: "pointer" }}
                        key={element._id}
                      >
                        <div className="row">
                          <div className="col-12 col-md-4 py-1">
                            <div
                              onClick={() => console.log("okkj")}
                              class="image-slider marging-img-top"
                            >
                              <Swiper navigation={true} modules={[Navigation]}>
                                {element.files.map((file, index) => (
                                  <SwiperSlide style={{ alignSelf: "center" }}>
                                    <img
                                      onClick={() => {
                                        check(file);
                                      }}
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
                               For Inspection
                              <br></br>
                            </div>
                            <div className="seller-location">
                              Booked By - {element.full_name}{" "}
                              <br></br>
                              Address - {element.address}{" "}
                              <br></br>
                              Contact - {element.contact}{" "}
                              <br></br>
                              Date - {element.date ? element.date.substring(0, 10) : ""}{" at "} {element.time}
                            </div>
                            <br></br>
                            <div className="d-flex spacing mb-0 mt-auto">
                            <button
                                type="button"
                                className="btn w-100 btn-success mx-1"
                              >
                                <Link
                                  to={`/report/${element._id}/${element.user_id}/${element.car_id}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                  }}
                                >
                                  Conduct Inspection
                                </Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
