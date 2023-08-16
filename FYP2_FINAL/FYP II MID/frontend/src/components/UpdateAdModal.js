import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext , useState, useEffect } from "react";
import CarContext from "../store/car-context";

function UpdateAdModal({closeModal}) {
    const params = useParams();
    const [brand_name, setBrandName] = useState("");
    const [car_name, setCarName] = useState("");
    const [description, setDescription] = useState("");
    const [model, setModel] = useState("");
    const [fuel_type, setFuelType] = useState("");
    const [transmission, setTransmission] = useState("");
    const [color, setColor] = useState("");
    const [body_type, setBodyType] = useState("");
    const [engine_displacement, setEngine] = useState("");
    const [mileage, setMileage] = useState("");
    const [seller_location, setSellerLocation] =useState("");
    const [registered_in, setRegistaeredIn] = useState("");;
    const [assembly, setAssmbly] =useState("");
    const [price, setPrice] = useState("");
    const [files, setFiles] = useState("");

    const UpdateAd = async (e) => {
      e.preventDefault()
        const formData = new FormData();
        formData.append("brand_name", brand_name);
        formData.append("car_name", car_name);
        formData.append("description", description);
        formData.append("model", model);
        formData.append("fuel_type", fuel_type);
        formData.append("transmission", transmission);
        formData.append("color", color);
        formData.append("body_type", body_type);
        formData.append("engine_displacement", engine_displacement);
        formData.append("mileage", mileage);
        formData.append("seller_location", seller_location);
        formData.append("registered_in", registered_in);
        formData.append("assembly", assembly);
        formData.append("price", price);
    const data1={
      brand_name,car_name,description,model,fuel_type,transmission,color,body_type,engine_displacement,mileage,seller_location,registered_in,assembly,price
    }
        try {
           const data = await axios.put(`http://localhost:3009/api/ad/updateAd/${params.id}`,data1);
           console.log(data);
           closeModal(false)
        }
        catch(e){
                console.log(e)
            }
      };

    const getMultipleFilesList = async () => {
        try {
            const res = await axios.get(
              `http://localhost:3009/api/ad/getCar/${params.id}`
      
            );
             console.log("dataa :  ",res.data);
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
          } catch (e) {
            console.log(e);
          }
    };

   

    useEffect(() => {
        getMultipleFilesList();
      }, []);
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
            <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className='title'>
                <h1>Update Your Ad</h1>
            </div>
            <form onSubmit={UpdateAd}>
          <div className="row">
            <div class="col-sm">

              {/* <label className="label-at-start">Brand Name</label> */}
              <FormControl fullWidth size="small">
                <InputLabel>Choose Brand</InputLabel>
                <Select
                  name="brandName"
                  onChange={(e) => setBrandName(e.target.value)}
                  label="Brand Name"
                  required
                  fullWidth
                  value={brand_name}
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
                value={car_name}
              />
              <br />
              {/* <label className="label-at-start">Description</label> */}
              <input
                type="text"
               onChange={(e) => setDescription(e.target.value)}
                className="form-control input-size"
                placeholder=" Description Eg: Minor touchups"
                required
                value={description}
              />
              <br />
              {/* <label className="label-at-start">Model</label> */}
              <input
                type="Number"
                onChange={(e) => setModel(e.target.value)}
                className="form-control input-size"
                placeholder="Model Year Eg: 2018"
                required
                value={model}
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
                  value={fuel_type}
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
                //  value={transmission}
                  onChange={(e) => setTransmission(e.target.value)}
                  label="transmission"
                  value={transmission}
                  required
                  fullWidth
                >
                  <MenuItem value="Automatic">Automatic</MenuItem>
                  <MenuItem value="Manual">Manual</MenuItem>
                </Select>
              </FormControl>
              <br /> <br></br>
              {/* <label className="label-at-start">Body Color</label> */}
              <input
                type="text"
                onChange={(e) => setColor(e.target.value)}
                className="form-control input-size"
                placeholder=" Body Color Eg: White"
                required
                value={color}
              />
              <br />
              {/* <label className="label-at-start">Body Type</label> */}
              <FormControl fullWidth size="small">
                <InputLabel>Body Type</InputLabel>
                <Select
                  name="bodyType"
                //  value={bodyType}
                  onChange={(e) => setBodyType(e.target.value)}
                  label="bodyType"
                  required
                  fullWidth
                  value={body_type}
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
                type="text"
             onChange={(e) => setEngine(e.target.value)}
                className="form-control input-size"
                placeholder="Engine Eg: 1300cc"
                required
                value={engine_displacement}
              />
              <br />
              {/* <button
                type="submit"
                className="btn btn-success"
              >
                Upload
              </button> */}
            </div>
            <div class="col-sm">
              <br />
              {/* <label className="label-at-start">Mileage</label> */}
              <input
                type="text"
                onChange={(e) => setMileage(e.target.value)}
                className="form-control input-size"
                placeholder="Mileage Eg: 12000 Km"
                required
                value={mileage}
              />
              <br />
              {/* <label className="label-at-start">Seller Location</label> */}
              <input
                type="text"
                onChange={(e) => setSellerLocation(e.target.value)}
                className="form-control input-size"
                placeholder="Seller Location Eg: Islamabad"
                required
                value={seller_location}
              />
              <br />
              {/* <label className="label-at-start">Registered In</label> */}
              <input
                type="text"
                onChange={(e) => setRegistaeredIn(e.target.value)}
                className="form-control input-size"
                placeholder="Registered City Eg: Islamabad"
                required
                value={registered_in}
              />
              <br />
              {/* <label className="label-at-start">Assembly</label> */}
              <FormControl fullWidth size="small">
                <InputLabel>Assembly</InputLabel>
                <Select
                  name="assembly"
                //  value={assembly}
                  onChange={(e) => setAssmbly(e.target.value)}
                  label="assembly"
                  required
                  fullWidth
                  value={assembly}
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
                value={price}
              />
              <br />
            </div>
          </div>
        
            <div className='footer'>
                <button onClick={() => closeModal(false)} id="cancelBtn">
                <Link
                                to={`/myads`}
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                            Cancel
                </Link>
                </button>
                <button
                    type='submit'
                className="btn btn-success"
              >
                Continue
              </button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateAdModal