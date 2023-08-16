import React, { useContext, useEffect, useState } from "react";
import CarContext from "../store/car-context";
import "./notification.css";
import {
  Alert,
  Snackbar,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import p1 from "../assets/interior.jpeg";
import p2 from "../assets/img4.webp";
import p3 from "../assets/notification-pic.jpg";

const Addnotification = () => {
  const a = useContext(CarContext);
  const getallnotification = a.getallnotification;
  const updatenotification = a.updatenotification;

  const [brand_name, setbrand_name] = useState("");
  const [model_name, setmodel_name] = useState("");
  const [car_name, setcar_name] = useState("");
  const [city, setcity] = useState("");
  const [message, setMessage] = useState(null);

  const allbrands = [
    "Toyota",
    "Honda",
    "Suzuki",
    "Hyundai",
    "Kia",
    "Nissan",
    "Mercedes",
    "Haval",
    "Audi",
    "Changan",
    "MG",
    "DFSK",
    "Prince",
    "BMW",
    "Daihatsu",
    "FAW",
    "Proton",
  ];

  // useEffect(() => {
  // }, []);

  return (
    // <img className="notifpic" src={notifpic1}></img>

    <div className="fullpage">
      <div className="mini-div"></div>
      <h1 className="head-01">Let us help you get your </h1>
      <h1 className="head-02">desired car</h1>

      <img className="p1" src={p1}></img>
      <img className="p2" src={p2}></img>
      <img className="p3" src={p3}></img>

      <div className="full-container">
        <h2 className="add-notif">Add Notification</h2>
        <form>
          <label for="inputEmail3" class="label1-notif">
            Brand Name
          </label>
          <div>
            <select
              class="form-select size-div me-2"
              aria-label="Default select example"
              value={brand_name}
              onChange={(e) => {
                setbrand_name(e.target.value);
              }}
            >
              <option selected value={""}>
                Select Brand
              </option>

              {allbrands.map((brand_name) => {
                return <option value={brand_name}>{brand_name}</option>;
              })}
            </select>
          </div>
          {/* <div>
            <select
              class="form-select size-div me-2"
              aria-label="Default select example"
              value={brand}
              required
              onChange={(e) => {
                setBrand(e.target.value);
              }}
            >
              <option selected value={""}>
                Select Brand
              </option>

              {allbrands.map((brand) => {
                return <option value={brand}>{brand}</option>;
              })}
            </select>
          </div> */}

          <br></br>
          <br></br>
          <label for="inputPassword3" class="label2-notif">
            Car Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              placeholder="Enter car name"
              value={car_name}
              required
              onChange={(e) => {
                let carName = e.target.value;
                setcar_name(carName.charAt(0).toUpperCase() + carName.slice(1));
              }}
            />
          </div>
          <br></br>
          <br></br>
          <label for="inputPassword3" class="label3-notif">
            Model Year
          </label>
          <div class="col-sm-10">
            <input
              type="Number"
              class="form-control"
              placeholder="Enter Model year"
              required
              value={model_name}
              onChange={(e) => {
                setmodel_name(e.target.value);
              }}
            />
          </div>

          <div class="form-group row">
            <div class="col-sm-10">
              <button
                class="add-notif-btn"
                onClick={(e) => {
                  console.log("dojjijjdij dojjkjfnjk tyuiokjb");
                  e.preventDefault();
                  const userId = localStorage.getItem("userInfo");
                  console.log(userId);
                  const newId = JSON.parse(userId);
                  console.log(newId);
                  // try {
                  updatenotification({
                    car_name,
                    brand_name,
                    id: newId.userId,
                    model_name,
                  });
                  // setMessage({
                  //   type: "success",
                  //   text: "Notification Added Successfully",
                  // });
                  // } catch (e) {
                  //   setMessage({
                  //     type: "error",
                  //     text: "Notification already exist",
                  //   });
                  // }

                  window.location.reload();
                }}
              >
                Set Notification
              </button>
            </div>
          </div>
        </form>
      </div>
      {message && (
        <Snackbar
          open={true}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() => setMessage(null)}
        >
          <Alert
            severity={message.type}
            variant="filled"
            sx={{ width: "100%" }}
            action={message.action}
            onClose={() => setMessage(null)}
          >
            {message.text}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default Addnotification;
