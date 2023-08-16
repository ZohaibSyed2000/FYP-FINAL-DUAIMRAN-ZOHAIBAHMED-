import React, { useState } from "react";
import { multipleFilesUpload2 } from "../data/api";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CarContext from "../store/car-context";
//import { Alert, AlertTitle } from '@mui/material';
import { Snackbar, Alert } from "@mui/material";

export default function FeaturedAd() {
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
  const [cardname, setCardname] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [message, setMessage] = React.useState(null);
  const { userInfo } = useContext(CarContext);
  const [valmsg, setvalmsg] = useState(null);

  const multipleFilesChange = (e) => {
    setMultipleFiles(e.target.files);
  };
  const UploadMultipleFiles = async () => {
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
    // formData.append("posted_by", userInfo.userName);
    // formData.append("contact_number", userInfo.contactNumber);
    formData.append("cc_name", cardname);
    formData.append("cc_number", cardnumber);
    formData.append("expiry", expiry);
    formData.append("cvc", cvv);

    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }
    await multipleFilesUpload2(formData);
    // navigate("/adposted");
  };

  return (
    <body>
      <div className="container anchor">
        <h3 className="registercarheading">Get Your Car Featured</h3>
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
              <br />
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
                placeholder="Engine Eg: 1300cc"
                required
              />
              <br />
              {/* <button type="submit" className="btn btn-success">
                Upload
              </button> */}
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
          <button type="submit" className="adpost">
            Post Ad
          </button>
          <h2>Choose Payment Method</h2>
          <div className="payment-modal">
            <br></br>
            <br></br>
            <br></br>
            <h3 className="creditcard-heading">Credit Card Details</h3>

            <div class="payment-div">
              <label class="label1">Cardholder Name</label>
              <label class="label2">Card Number</label>
              <label class="label3">Expiry Date</label>
              <label class="label4">CVV</label>
              <br></br>
              <br></br>
              <input
                type="text"
                required
                class="cardname"
                placeholder="Cardholder Name"
                value={cardname}
                onChange={(e) => {
                  const input = e.target.value;
                  if (!/\d/.test(input)) {
                    setCardname(input);
                  } else {
                    setvalmsg("Input a valid name in card name");
                  }
                }}
              />
              <input
                type="text"
                class="cardnumber"
                required
                placeholder="Card Number"
                value={cardnumber}
                onChange={(e) => setCardnumber(e.target.value)}
              />
              <input
                type="date"
                class="expiry"
                required
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              <input
                type="text"
                class="cvv"
                required
                placeholder="Security pin"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
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
