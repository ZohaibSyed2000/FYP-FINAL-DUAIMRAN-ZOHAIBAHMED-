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

export default function MyAds() {
  // const a = useContext(CarContext);
  // const getallnotification = a.getallnotification;
  // const notificationbrand = a.notificationbrand;
  // const notificationcar = a.notificationcar;
  // const notificationmodel = a.notificationmodel;
  const [openModal, setOpenModal] = useState(false);
  const params = useParams();
  const { userInfo } = useContext(CarContext);
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [approvedFiles, setApprovedFiles] = useState([]);
  const [notifFiles, setNotifFiles] = useState([]);
  const [inspectionFiles, setInspectionFiles] = useState([]);

  const [first_name, setFirstName] = useState([]);
  const [last_name, setLastName] = useState([]);
  const [phone, setContactNumber] = useState([]);
  const [email, setEmail] = useState([]);
  const [brand_name, setBrandName] = useState([]);
  const [car_name, setCarName] = useState([]);
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

  const handleonclick = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3009/api/ad/deleteCar/${id}`
      );
      window.location.reload();
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleonclick2 = async (id) => {
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
  const handleonclick3 = async (notifId) => {
    try {
      const deleteres = await axios.delete(
        `http://localhost:3009/api/ad/deletenotif/${notifId}`
      );
      window.location.reload();
      console.log(deleteres.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getMultipleFilesList = async () => {
    const myJSON = JSON.stringify(userInfo.userId);

    // console(notificationbrand);
    try {
      const res1 = await axios.get(
        `http://localhost:3009/api/featuredad/getFiles/${userInfo.userId}`
      );
      setApprovedFiles(res1.data);
      console.log(res1.data);
    } catch (e) {
      console.log(e);
    }
    try {
      const res = await axios.get(
        `http://localhost:3009/api/ad/getFiles/${userInfo.userId}`
      );
      setMultipleFiles(res.data);
    } catch (e) {
      console.log(e);
    }

    try {
      const result = await axios.get(
        `http://localhost:3009/api/inspect/getInspection/${userInfo.userId}`
      );
      console.log("zzzzzzzzz"+result.data)
      setInspectionFiles(result.data);
      console.log("aaaaaaaaa"+inspectionFiles)
    } catch (e) {
      console.log(e);
    }

    try {
      const res2 = await axios.get(
        `http://localhost:3009/api/auth/getUser/${userInfo.userId}`
      );
      console.log(res2.data);
      setFirstName(res2.data.data.first_name);
      setLastName(res2.data.data.last_name);
      setContactNumber(res2.data.data.phone);
      setEmail(res2.data.data.email);
    } catch (e) {
      console.log(e);
    }
    try {
      const res3 = await axios.get(
        `http://localhost:3009/api/ad/getallnotification1/${userInfo.userId}`
      );
      console.log(res3.data);
      setNotifFiles(res3.data);
      // setBrandName(res3.data.brand_name);
      // setCarName(res3.data.car_name);
      // setModelYear(res3.data.model_name);
      console.log(brand_name);
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
        <div className="dashbored-div">
          <img className="img1" src={img1}></img>
          <h2 className="username-tag">
            {first_name} {last_name}
          </h2>
          <div className="info-div">
            <h4 className="cn1">
              Contact <h4 className="cn2">{phone}</h4>{" "}
            </h4>
            <h4 className="e1">
              Email <h4 className="e2">{email}</h4>
            </h4>
            <h4 className="city1">
              City <h4 className="city2">Karachi</h4>
            </h4>

            <button className="editinfo-btn">Edit profile</button>
          </div>
          <div>
            <h3 className="current-notif">Current Notifications</h3>
            {notifFiles.map((element, index) => (
              <div className="notifications-div">
                {element.brand_name}
                {"-"}
                {element.car_name}
                {"-"} {element.model_name}{" "}
                <div className="delete-btn">
                  <button
                    className="button-css"
                    onClick={() => handleonclick3(element._id)}
                  >
                    delete
                  </button>
                </div>
                <br></br>
              </div>
            ))}
             <h3 className="current-notif">Current Inspections</h3>
            {inspectionFiles.map((element, index) => (
              <div className="notifications-div">
                {element.brand_name}
                {"-"}
                {element.car_name} {" "} {element.model}
                <div className="delete-btn">
                  <button
                    className="button-css"
                  >
                    <Link
                        to={`/viewinspectionreport/${element._id}`}
                          style={{
                          textDecoration: "none",
                          color: "inherit",
                          }}
                    >
                       View
                                </Link>
                  </button>
                </div>
                <br></br>
              </div>
            ))}
          </div>
        </div>

        {openModal && <UpdateAdModal closeModal={setOpenModal} />}
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center w-100">
            <div className="col-lg-10 center-div mt-3">
              <br></br>
              <h3 className="h2-myad">Ads posted by you</h3>
              <div className="main-div-myads">
                <div className="card shadow-2-strong card-registration w-75 mt-2 ">
                  <div className="card-body p-4 p-md-8">
                    {approvedFiles.map((element, index) => (
                      <div
                        className="shadow-sm rounded p-1 bg-light text-black mb-4  "
                        style={{ cursor: "pointer" }}
                        key={element._id}
                      >
                        <div className="row">
                          <div className="col-12 col-md-4 py-1">
                            <div class="image-slider marging-img-top">
                              <Swiper navigation={true} modules={[Navigation]}>
                                {element.files.map((file, index) => (
                                  <SwiperSlide style={{ alignSelf: "center" }}>
                                    <img
                                      onClick={() => {
                                        check(file);
                                      }}
                                      className="d-block w-100 h-100 rounded wid"
                                      src={`http://localhost:3009/${file.filePath}`}
                                      height="65px"
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
                            <div className="d-flex spacing mb-0 mt-auto">
                              <button
                                type="button"
                                className="btn w-100 btn-success mx-1"
                              >
                                <Link
                                  to={`/myads/${element._id}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                  }}
                                  onClick={() => {
                                    setOpenModal(true);
                                  }}
                                >
                                  Update Ad
                                </Link>
                              </button>
                              <button
                                type="button"
                                onClick={() => handleonclick2(element._id)}
                                className="btn w-100 btn-danger mx-1"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
                                type="button"
                                className="btn w-100 btn-success mx-1"
                              >
                                <Link
                                  to={`/myads/${element._id}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                  }}
                                  onClick={() => {
                                    setOpenModal(true);
                                  }}
                                >
                                  Update Ad
                                </Link>
                              </button>
                              <button
                                type="button"
                                onClick={() => handleonclick(element._id)}
                                className="btn w-100 btn-danger mx-1"
                              >
                                Delete
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

// import React, { useState, useEffect } from "react";
// import { getFile } from "../data/api";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
// import CarContext from "../store/car-context";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useContext } from "react";

// import "swiper/css";
// import "swiper/css";
// import "swiper/css/navigation";

// export default function MyAds() {
//   const params = useParams();
//   const { userInfo } = useContext(CarContext);
//   const [multipleFiles, setMultipleFiles] = useState([]);

//   const handleonclick = async (id) => {
//     try {
//       const res = await axios.delete(
//         `http://localhost:3009/api/ad/deleteCar/${id}`
//       );
//       console.log(res.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const getMultipleFilesList = async () => {
//     const myJSON = JSON.stringify(userInfo.userId);
//     try {
//       const res = await axios.get(
//         `http://localhost:3009/api/ad/getFiles/${userInfo.userId}`
//       );
//       setMultipleFiles(res.data);
//       console.log(res.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getMultipleFilesList();
//   }, []);
//   return (
//     <>
//       <div className="w-100 p-3">
//         <div className="container py-5 h-100">
//           <div className="row justify-content-center align-items-center w-100">
//             <div className="col-lg-10 center-div mt-3">
//               <h3 className="heading-2">Ads posted by you</h3>

//               <div className="card shadow-2-strong card-registration w-75 mt-2 ">
//                 <div className="card-body p-4 p-md-8">
//                   {multipleFiles.map((element, index) => (
//                     <div
//                       className="shadow-sm rounded p-1 bg-light text-black mb-4  "
//                       style={{ cursor: "pointer" }}
//                       key={element._id}
//                     >
//                       <div className="row">
//                         <div className="col-12 col-md-4 py-1">
//                           <div class="image-slider marging-img-top">
//                             <Swiper navigation={true} modules={[Navigation]}>
//                               {element.files.map((file, index) => (
//                                 <SwiperSlide style={{ alignSelf: "center" }}>
//                                   <img
//                                     className="d-block w-100 h-100 rounded"
//                                     src={`http://localhost:3009/${file.filePath}`}
//                                     height="65"
//                                     alt="First slide"
//                                   />
//                                 </SwiperSlide>
//                               ))}
//                             </Swiper>
//                           </div>
//                         </div>

//                         <div
//                           className="ad-info-wrapper col-md-8 d-flex flex-column"
//                           style={{ alignItems: "space-between" }}
//                         >
//                           <div className="car-name">
//                             {element.brand_name} {element.car_name}{" "}
//                             {element.model} For Sale
//                             <br></br>
//                           </div>
//                           <div className="seller-location">
//                             Registered City - {element.registered_in}{" "}
//                             <div className="priceposition">
//                               Price <br></br> {element.price}{" "}
//                             </div>
//                           </div>
//                           <br></br>
//                           <div className="car-details">
//                             {element.model} | {element.mileage} |{" "}
//                             {element.fuel_type} | {element.engine_displacement}{" "}
//                             | {element.transmission}
//                           </div>
//                           <div className="d-flex spacing mb-0 mt-auto">
//                             <button
//                               type="button"
//                               className="btn w-100 btn-success mx-1"
//                             >
//                               <span className="d-inline-block mx-2">
//                                 <svg
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   width="16"
//                                   height="16"
//                                   fill="currentColor"
//                                   class="bi bi-telephone-outbound"
//                                   viewBox="0 0 16 16"
//                                 >
//                                   <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
//                                 </svg>
//                               </span>
//                               Update Ad
//                             </button>
//                             <button
//                               type="button"
//                               onClick={handleonclick(element._id)}
//                               className="btn w-100 btn-danger mx-1"
//                             >
//                               Delete Ad
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
