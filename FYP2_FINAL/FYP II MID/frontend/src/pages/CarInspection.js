import React, { useState, useEffect } from "react";
import CI1 from "../assets/43025.jpg";
import CI2 from "../assets/7482.jpg";
import CI3 from "../assets/checklist.jpg";
//import { bookInspections } from "../data/api";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import CarContext from "../store/car-context";
import { useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

export default function CarInspection() {
  const a = useContext(CarContext);
  const { userInfo } = useContext(CarContext);
  const userid = a.userid;
  const params = useParams();
  const [userId, setUserId] = useState([]);
  const [full_name, setFullName] = useState([]);
  const [contact, setContact] = useState([]);
  const [date, setDate] = useState([]);
  const [address, setAddress] = useState([]);
  const [time, setTime] = useState([]);
  const [brand_name, setBrandName] = useState([]);
  const [files, setfiles] = useState([]);
  const [message, setMessage] = useState(null);
  const [car_name, setCarName] = useState([]);
  const [description, setDescription] = useState([]);
  const [model, setModel] = useState([]);
  const [carId, setCarId] = useState([]);

  const getMultipleFilesList = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3009/api/ad/getCar/${params.id}`
      );
      setfiles(res.data.data.files);
      setUserId(res.data.data.user_id);
      setBrandName(res.data.data.brand_name);
      setCarName(res.data.data.car_name);
      setModel(res.data.data.model);
      setCarId(params.id);
      console.log("asdsasdzohaib");
      console.log(res.data.data.user_id);
      console.log(res.data.data.files);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMultipleFilesList();
  }, []);

  const handleonclick2 = async () => {
    console.log(brand_name);
    console.log(car_name);
    console.log(model);
    console.log(userInfo.userId);
    setCarId(params.id);

    if (
      full_name == "" ||
      contact == "" ||
      address == "" ||
      date == "" ||
      time == ""
    ) {
      setMessage({
        type: "error",
        text: "Please fill all fields",
      });
    } else {
      const data = {
        brand_name: brand_name,
        car_name: car_name,
        model: model,
        user_id: userInfo.userId,
        car_id: carId,
        files: files,
        full_name: full_name,
        contact: contact,
        date: date,
        time: time,
        address: address,
      };
      try {
        const res = await axios.post(
          `http://localhost:3009/api/inspect/inspections/${params.id}`,
          data
        );

        setMessage({
          type: "success",
          text: "Your Inspection Has Been Booked Successfully",
        });
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    }
  };
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
  return (
    <div className="fullpage">
      <div className="sidediv2">
        <h3 className="book-ins">Book your inspection</h3>
        <label for="inputEmail3" class="l1-notif">
          Full Name
        </label>
        <br></br> <br></br>
        <div class="col-sm-10">
          <input
            value={full_name}
            onKeyPress={(e) => {
              const keyCode = e.keyCode || e.which;
              const keyValue = String.fromCharCode(keyCode);
              const regex = /^[a-zA-Z\s]*$/; // Regular expression to allow only letters and whitespace

              if (!regex.test(keyValue)) {
                e.preventDefault();
              }
            }}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            className="form-control inp-size"
            placeholder="Enter Full Name"
            required
          />
        </div>
        <label for="inputEmail3" class="l2-notif">
          Phone number
        </label>
        <br></br>
        <br></br>
        <div class="col-sm-5 divsize">
          <input
            onChange={(e) => setContact(e.target.value)}
            type="text"
            class="form-control inp-size2"
            placeholder="Enter your Phone no"
          />
        </div>
        <label for="inputEmail3" class="l3-notif">
          Date
        </label>
        <div class="col-sm-5 divsize1">
          <input
            type="Date"
            class="form-control inp-size3"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <label for="inputEmail3" class="l4-notif">
          Address
        </label>
        <br></br> <br></br>
        <div class="col-sm-5 divsize2  ">
          <input
            type="text"
            class="form-control inp-size4"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <label for="inputEmail3" class="l10-notif">
          Time
        </label>
        <select
          className="inp-size5"
          name="Time"
          onChange={(e) => setTime(e.target.value)}
          label="Time"
          required
        >
          <option value="12:00 PM">12:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
        </select>
        <label for="inputEmail3" class="l5-notif">
          Choose Brand
          <br></br>
          {brand_name}
        </label>
        <label for="inputEmail3" class="l6-notif">
          Car Name
          <br></br>
          {car_name}
        </label>
        <label for="inputEmail3" class="l7-notif">
          Model Year
          <br></br>
          {model}
        </label>
        <div class="col-sm-5 divsize4"></div>
        <div class="col-sm-5 divsize5"></div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button
              class="book-now-btn"
              onClick={(e) => {
                handleonclick2();
              }}
            >
              Book
            </button>
          </div>
        </div>
      </div>

      <div className="inspara">
        <h2 className="Insheading">
          Discover any potential issues before they become major problems
        </h2>
        <h2 className="Insheading2">
          with our <b> Car Inspection!</b>
        </h2>
      </div>
      {/* <h1 className="Insheading">
        Discover any potential issues before they become major problems
      </h1>
      <h1 className="Insheading2">with our car inspections.</h1> */}
      <img className="cipic1" src={CI1}></img>
      <img className="cipic2" src={CI3}></img>
      <img className="cipic3" src={CI2}></img>
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
}

// import React, { useState, useEffect } from "react";
// import { Alert, Snackbar } from "@mui/material";
// import CI1 from "../assets/43025.jpg";
// import CI2 from "../assets/7482.jpg";
// import CI3 from "../assets/checklist.jpg";
// //import { bookInspections } from "../data/api";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import CarContext from "../store/car-context";
// import { useContext } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// export default function CarInspection() {
//   const a = useContext(CarContext);
//   const { userInfo } = useContext(CarContext);
//   const userid = a.userid;
//   const params = useParams();
//   const [userId, setUserId] = useState([]);

//   const [full_name, setFullName] = useState([]);
//   const [contact, setContact] = useState([]);
//   const [date, setDate] = useState([]);
//   const [address, setAddress] = useState([]);
//   const [time, setTime] = useState([]);
//   const [brand_name, setBrandName] = useState([]);
//   const [files, setfiles] = useState([]);
//   const [car_name, setCarName] = useState([]);
//   const [description, setDescription] = useState([]);
//   const [model, setModel] = useState([]);
//   const [carId, setCarId] = useState([]);

//   const getMultipleFilesList = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:3009/api/ad/getCar/${params.id}`
//       );
//       setfiles(res.data.data.files);
//       setUserId(res.data.data.user_id);
//       setBrandName(res.data.data.brand_name);
//       setCarName(res.data.data.car_name);
//       setModel(res.data.data.model);
//       setCarId(params.id);
//       console.log("asdsasdzohaib");
//       console.log(res.data.data.user_id);
//       console.log(res.data.data.files);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     getMultipleFilesList();
//   }, []);

//   const handleonclick2 = async () => {
//     console.log(brand_name);
//     console.log(car_name);
//     console.log(model);
//     console.log(userInfo.userId);
//     setCarId(params.id);

//     const data = {
//       brand_name: brand_name,
//       car_name: car_name,
//       model: model,
//       user_id: userInfo.userId,
//       car_id: carId,
//       files: files,
//       full_name: full_name,
//       contact: contact,
//       date: date,
//       time: time,
//       address: address,
//     };
//     try {
//       const res = await axios.post(
//         `http://localhost:3009/api/inspect/inspections/${params.id}`,
//         data
//       );

//       console.log(res);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   const allbrands = [
//     "Toyota",
//     "Honda",
//     "Suzuki",
//     "Hyundai",
//     "Kia",
//     "Nissan",
//     "Mercedes",
//     "Haval",
//     "Audi",
//     "Changan",
//     "MG",
//     "DFSK",
//     "Prince",
//     "BMW",
//     "Daihatsu",
//     "FAW",
//     "Proton",
//   ];
//   return (
//     <div className="fullpage">
//       <div className="sidediv2">
//         <h3 className="book-head">Book your inspection</h3>
//         <label for="inputEmail3" class="l1-notif">
//           Full Name
//         </label>
//         <br></br> <br></br>
//         <div class="col-sm-10">
//           <input
//             onChange={(e) => setFullName(e.target.value)}
//             type="text"
//             class="form-control inp-size"
//             placeholder="Enter Full Name"
//           />
//         </div>
//         <label for="inputEmail3" class="l2-notif">
//           Phone number
//         </label>
//         <br></br>
//         <br></br>
//         <div class="col-sm-5 divsize">
//           <input
//             onChange={(e) => setContact(e.target.value)}
//             type="text"
//             class="form-control inp-size2"
//             placeholder="Enter your Phone no"
//           />
//         </div>
//         <label for="inputEmail3" class="l3-notif">
//           Date
//         </label>
//         <div class="col-sm-5 divsize1">
//           <input
//             type="Date"
//             class="form-control inp-size3"
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>
//         <label for="inputEmail3" class="l4-notif">
//           Address
//         </label>
//         <br></br> <br></br>
//         <div class="col-sm-5 divsize2  ">
//           <input
//             type="text"
//             class="form-control inp-size4"
//             placeholder="Enter Address"
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//         <label for="inputEmail3" class="l10-notif">
//           Time
//         </label>
//         <select
//           className="inp-size5"
//           name="Time"
//           onChange={(e) => setTime(e.target.value)}
//           label="Time"
//           required
//         >
//           <option value="12:00 PM">12:00 PM</option>
//           <option value="02:00 PM">02:00 PM</option>
//           <option value="04:00 PM">04:00 PM</option>
//           <option value="06:00 PM">06:00 PM</option>
//         </select>
//         <label for="inputEmail3" class="l5-notif">
//           Choose Brand
//           <br></br>
//           {brand_name}
//         </label>
//         <label for="inputEmail3" class="l6-notif">
//           Car Name
//           <br></br>
//           {car_name}
//         </label>
//         <label for="inputEmail3" class="l7-notif">
//           Model Year
//           <br></br>
//           {model}
//         </label>
//         <div class="col-sm-5 divsize4"></div>
//         <div class="col-sm-5 divsize5"></div>
//         <div class="form-group row">
//           <div class="col-sm-10">
//             <button
//               class="book-now-btn "
//               onClick={(e) => {
//                 handleonclick2();
//               }}
//             >
//               Book
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="inspara">
//         <h2 className="Insheading">
//           Discover any potential issues before they become major problems
//         </h2>
//         <h2 className="Insheading2">
//           with our
//           <b> Car Inspection!</b>
//         </h2>
//       </div>
//       {/* <h1 className="Insheading">
//         Discover any potential issues before they become major problems
//       </h1>
//       <h1 className="Insheading2">with our car inspections.</h1> */}
//       <img className="cipic1" src={CI1}></img>
//       <img className="cipic2" src={CI3}></img>
//       <img className="cipic3" src={CI2}></img>
//     </div>
//   );
// }
