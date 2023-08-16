import React, { useState } from "react";
import { multipleFilesUpload } from "../data/api";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CarContext from "../store/car-context";
import { Snackbar, Alert } from "@mui/material";

export default function AdPost() {
  const [multipleFiles, setMultipleFiles] = useState("");
  const [brandName, setBrandName] = useState("");
  const [carName, setCarName] = useState("");
  const [description, setDescription] = useState("");
  const [model, setModel] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [bodyColor, setBodyColor] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [engineDisplacement, setEngineDisplacement] = useState("");
  const [mileage, setMileage] = useState("");
  const [sellerLocation, setSellerLocation] = useState("");
  const [registeredIn, setRegisteredIn] = useState("");
  const [assembly, setAssembly] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const [message, setMessage] = React.useState(null);

  const { userInfo } = useContext(CarContext);
  console.log("User-Ideee:", userInfo);
  console.log("User-Ideeeaaa:", userInfo.userId);

  const multipleFilesChange = (e) => {
    setMultipleFiles(e.target.files);
  };

  const UploadMultipleFiles = async () => {
    //const engine = engineDisplacement+" cc"
    //setEngineDisplacement(engine);
    const formData = new FormData();
    formData.append("brand_name", brandName);
    formData.append("car_name", carName);
    formData.append("description", description);
    formData.append("model", model);
    formData.append("fuel_type", fuelType);
    formData.append("transmission", transmission);
    formData.append("color", bodyColor);
    formData.append("body_type", bodyType);
    formData.append("engine_displacement", engineDisplacement);
    formData.append("mileage", mileage);
    formData.append("seller_location", sellerLocation);
    formData.append("registered_in", registeredIn);
    formData.append("assembly", assembly);
    formData.append("price", price);
    formData.append("user_id", userInfo.userId);
    formData.append("posted_by", userInfo.userName);
    formData.append("contact_number", userInfo.contactNumber);
    

    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }
    await multipleFilesUpload(formData);
    // navigate("/adposted");
  };

  return (
    <body>
      <div className="container anchor">
        <h3 className="registercarheading">Register your car</h3>
        <form onSubmit={UploadMultipleFiles}>
          <div className="row">
            <div class="col-sm">
              <br />
              {/* <label className="label-at-start">Images</label> */}
              <input
                type="file"
                onChange={(e) => multipleFilesChange(e)}
                className="form-control "
                multiple
              />
              <br />

              {/* <label className="label-at-start">Brand Name</label> */}
              <FormControl fullWidth size="small">
                <InputLabel>Choose Brand</InputLabel>
                <Select
                  name="brandName"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  label="Brand Name"
                  required
                  fullWidth
                  defaultValue={""}
                >
                  <MenuItem value="Toyota">Toyota</MenuItem>
                  <MenuItem value="Proton ">Proton </MenuItem>
                  <MenuItem value="faw">Faw</MenuItem>
                  <MenuItem value="daihatsu">Daihatsu</MenuItem>
                  <MenuItem value="nissan">Nissan</MenuItem>
                  <MenuItem value="bmw">BMW</MenuItem>
                  <MenuItem value="hyundai">Hyundai</MenuItem>
                  <MenuItem value="prince">Prince</MenuItem>
                  <MenuItem value="Kia">Kia</MenuItem>
                  <MenuItem value="Bfsk">Dfsk</MenuItem>
                  <MenuItem value="MG">MG</MenuItem>
                  <MenuItem value="Changan">Changan</MenuItem>
                  <MenuItem value="Audi">Audi</MenuItem>
                  <MenuItem value="Honda">Honda</MenuItem>
                  <MenuItem value="Suzuki">Suzuki</MenuItem>
                  <MenuItem value="Mercedes">Mercedes</MenuItem>
                  <MenuItem value="Haval">Haval</MenuItem>
                </Select>
              </FormControl>

              <br />
              <br></br>
              {/* <label className="label-at-start">Car Name</label> */}
              <input
                type="text"
                onChange={(e) => setCarName(e.target.value)}
                className="form-control input-size"
                required
                placeholder="Car Name Eg: Corolla Gli 1.3"
              />
              <br />
              {/* <label className="label-at-start">Description</label> */}
              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                className="form-control input-size"
                placeholder=" Description Eg: Minor touchups"
                required
              />
              <br />
              {/* <label className="label-at-start">Model</label> */}
              <input
                type="Number"
                onChange={(e) => setModel(e.target.value)}
                className="form-control input-size"
                placeholder="Model Year Eg: 2018"
                required
              />
              <br />
            </div>
            <div class="col-sm">
              <br />
              {/* <label className="label-at-start">Fuel Type</label> */}
              <FormControl fullWidth size="small">
                <InputLabel>Fuel Type</InputLabel>
                <Select
                  name="fuelType"
                  value={fuelType}
                  onChange={(e) => setFuelType(e.target.value)}
                  label="fuelType"
                  required
                  fullWidth
                >
                  <MenuItem value="Petrol">Petrol</MenuItem>
                  <MenuItem value="Diesel">Diesel</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
              <br />
              <br></br>
              {/* <label className="label-at-start">Transmission</label> */}
              <FormControl fullWidth size="small">
                <InputLabel>Transmission</InputLabel>
                <Select
                  name="transmission"
                  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
                  label="transmission"
                  required
                  fullWidth
                >
                  <MenuItem value="Automatic">Automatic</MenuItem>
                  <MenuItem value="Manual">Manual</MenuItem>
                </Select>
              </FormControl>
              <br /> <br></br>
              {/* <label className="label-at-start">Body Color</label> */}
              <FormControl fullWidth size="small">
                <InputLabel>Body Color</InputLabel>
                <Select
                  name="bodyType"
                  value={bodyColor}
                  onChange={(e) => setBodyColor(e.target.value)}
                  label="bodyColor"
                  required
                  fullWidth
                >
                  <MenuItem value="White">White</MenuItem>
                  <MenuItem value="Black">Black</MenuItem>
                  <MenuItem value="Gray">Gray</MenuItem>
                  <MenuItem value="Silver">Silver</MenuItem>
                  <MenuItem value="Blue">Blue</MenuItem>
                  <MenuItem value="Red">Red</MenuItem>
                  <MenuItem value="Brown">Brown</MenuItem>
                  <MenuItem value="Green">Green</MenuItem>
                  <MenuItem value="Orange">Orange</MenuItem>
                  <MenuItem value="Beige">Beige</MenuItem>
                  <MenuItem value="Purple">Purple</MenuItem>
                  <MenuItem value="Gold">Gold</MenuItem>
                  <MenuItem value="Yellow">Yellow</MenuItem>
                </Select>
              </FormControl>
              <br />
              <br></br>
              {/* <label className="label-at-start">Body Type</label> */}
              <FormControl fullWidth size="small">
                <InputLabel>Body Type</InputLabel>
                <Select
                  name="bodyType"
                  value={bodyType}
                  onChange={(e) => setBodyType(e.target.value)}
                  label="bodyType"
                  required
                  fullWidth
                >
                  <MenuItem value="Sedan">Sedan</MenuItem>
                  <MenuItem value="Hatchback">Hatchback</MenuItem>
                  <MenuItem value="SUV">SUV</MenuItem>
                </Select>
              </FormControl>
              <br />
              <br></br>
              {/* <label className="label-at-start">Engine Displacement</label> */}
              <input
                type="Number"
                onChange={(e) => setEngineDisplacement(e.target.value + "cc")}
                className="form-control input-size"
                placeholder="Engine Eg: 1300"
                required
              />
              <br />
              <button type="submit" className="btn btn-success">
                Upload
              </button>
            </div>
            <div class="col-sm">
              <br />
              {/* <label className="label-at-start">Mileage</label> */}
              <input
                type="Number"
                onChange={(e) => setMileage(e.target.value + "Km")}
                className="form-control input-size"
                placeholder="Mileage Eg: 12000 Km"
                required
              />
              <br />
              {/* <label className="label-at-start">Seller Location</label> */}
              <FormControl fullWidth size="small">
                <InputLabel>Seller Location</InputLabel>
                <Select
                  name="sellerLocation"
                  value={sellerLocation}
                  onChange={(e) => setSellerLocation(e.target.value)}
                  label="sellerLocation"
                  required
                  fullWidth
                >
                  <MenuItem value="Karachi">Karachi</MenuItem>
                  <MenuItem value="Lahore">Lahore</MenuItem>
                  <MenuItem value="Faisalabad">Faisalabad</MenuItem>
                  <MenuItem value="Rawalpindi">Rawalpindi</MenuItem>
                  <MenuItem value="Multan">Multan</MenuItem>
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="Gujranwala">Gujranwala</MenuItem>
                  <MenuItem value="Peshawar">Peshawar</MenuItem>
                  <MenuItem value="Quetta">Quetta</MenuItem>
                  <MenuItem value="Islamabad">Islamabad</MenuItem>
                </Select>
              </FormControl>
              <br />
              <br />
              {/* <label className="label-at-start">Registered In</label> */}
              <FormControl fullWidth size="small">
                <InputLabel>Registered In</InputLabel>
                <Select
                  name="registeredIn"
                  value={registeredIn}
                  onChange={(e) => setRegisteredIn(e.target.value)}
                  label="registeredIn"
                  required
                  fullWidth
                >
                  <MenuItem value="Karachi">Karachi</MenuItem>
                  <MenuItem value="Lahore">Lahore</MenuItem>
                  <MenuItem value="Faisalabad">Faisalabad</MenuItem>
                  <MenuItem value="Rawalpindi">Rawalpindi</MenuItem>
                  <MenuItem value="Multan">Multan</MenuItem>
                  <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                  <MenuItem value="Gujranwala">Gujranwala</MenuItem>
                  <MenuItem value="Peshawar">Peshawar</MenuItem>
                  <MenuItem value="Quetta">Quetta</MenuItem>
                  <MenuItem value="Islamabad">Islamabad</MenuItem>
                </Select>
              </FormControl>
              <br />

              <br />
              {/* <label className="label-at-start">Assembly</label> */}
              <FormControl fullWidth size="small">
                <InputLabel>Assembly</InputLabel>
                <Select
                  name="assembly"
                  value={assembly}
                  onChange={(e) => setAssembly(e.target.value)}
                  label="assembly"
                  required
                  fullWidth
                >
                  <MenuItem value="Local">Local</MenuItem>
                  <MenuItem value="Imported">Imported</MenuItem>
                </Select>
              </FormControl>
              <br />
              <br></br>
              {/* <label className="label-at-start">Price</label> */}
              <input
                type="Number"
                onChange={(e) => setPrice(e.target.value)}
                className="form-control input-size"
                required
                placeholder="Price Eg: 1200000"
              />
              <br />
            </div>
          </div>
        </form>
        {message && (
          <Snackbar
            open={true}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
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
    </body>
  );
}
