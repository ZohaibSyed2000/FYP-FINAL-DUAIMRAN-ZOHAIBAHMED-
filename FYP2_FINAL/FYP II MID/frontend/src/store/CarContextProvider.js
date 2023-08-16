import { useState } from "react";
import CarContext from "./car-context";
import axios from "axios";
const apiUrl = "http://localhost:3009/api/ad/";
const apiUrl2 = "http://localhost:3009/api/featuredad/";
const apiUrl3 = "http://localhost:3009/api/inspect/";

const CarContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [notificationbrand, setnotificationbrand] = useState();
  const [notificationcar, setnotificationcar] = useState();
  const [notificationmodel, setnotificationmodel] = useState();
  const [totalrating, settotalrating] = useState(null);
  const [reviews, setreviews] = useState([]);
  const [multipleFiles, setmultipleFiles] = useState([]);
  const [multipleFiles2, setmultipleFiles2] = useState([]);
  const [approvedFiles, setapprovedFiles] = useState([]);
  const [approvedFiles2, setapprovedFiles2] = useState([]);
  const [userid, setuserid] = useState();
  const [car1data, setcar1data] = useState({});
  const [pages, setpages] = useState(0);
  const [car2data, setcar2data] = useState({});
  const setuseridfunc = async () => {
    let userInfo = localStorage.getItem("userInfo");
    let userId = JSON.parse(userInfo);
    await setuserid(userId.userId);
  };
  const getallnotification = async (body) => {
    try {
      console.log(body);
      let id = JSON.parse(body);
      let obj = { id: id.userId };
      const { data } = await axios.post(apiUrl + "getallnotification", obj);
      setnotificationbrand(data.notificationbrand);
      setnotificationcar(data.notificationcar);
      setnotificationmodel(data.notificationmodel);
    } catch (error) {
      console.log("getFiles::Error", error);
      throw error;
    }
  };

  const updatenotification = async (body) => {
    try {
      const { data } = await axios.post(apiUrl + "updatenotification", body);
      return data;
    } catch (error) {
      console.log("getFiles::Error", error);
      throw error;
    }
  };
  const multipleFilesUpload = async (data) => {
    try {
      await axios.post(apiUrl + "multipleFileUpload", data);
    } catch (error) {
      throw error;
    }
  };
  const getFile = async (data) => {
    try {
      const { data1 } = await axios.post(apiUrl + "getFiles", data);
      return data1;
    } catch (error) {
      console.log("getFiles::Error", error);
      throw error;
    }
  };


  const addreview = async (body) => {
    try {
      const { data } = await axios.post(apiUrl + "addreview", body);
      if (data.resp === "Not allowed") {
        alert(data.resp);
      } else {
        window.location.reload();
      }
      //  getreview()
    } catch (error) {
      console.log("getFiles::Error", error);

      throw error;
    }
  };
  const getreview = async (id) => {
    try {
      const { data } = await axios.post(apiUrl + "getreview", { id });
      setreviews(data.review);
      settotalrating(data.totalrating);
    } catch (error) {
      console.log("getFiles::Error", error);
      throw error;
    }
  };
  const delfunc = async (id) => {
    try {
      const { data } = await axios.post(apiUrl + "delreview", {
        userid,
        reviewid: id,
      });
      // getreview();
      window.location.reload();
    } catch (error) {
      console.log("getFiles::Error", error);
      throw error;
    }
  };

  //Searching and filtering
  const getMultipleFiles = async (keyword, city, brand, price, model, page) => {
    try {
      // let { page, limit } = req.query;
      // if (!page) page = 1;
      // if (!limit) limit = 10;

      // const skip = (page - 1) * 10;
      let link = `getAllFiles?limit=0&page=${page}`;
      // for name
      if (keyword !== "") {
        link += `&keyword=${keyword}`;
      }
      //for city
      if (city !== "") {
        link += `&seller_location=${city}`;
      }
      //for brand
      if (brand !== "") {
        link += `&brand_name=${brand}`;
      }
      //for year
      if (model !== "") {
        link += `&model=${model}`;
      }
      //for price
      if (price !== "") {
        link += `&price[lte]=${price[1]}&price[gte]=${price[0]}`;
      }
      // const cars = await car.find().skip(skip).limit(limit);
      // res.send(car);

      const { data } = await axios.get(apiUrl + link);
      setmultipleFiles(data.files);
      setpages(data.totalPages);
    } catch (error) {
      console.log("getMultipleFiles::Error", error);
      throw error;
    }

    //searching and filtering for featured Ad
    try {
      let link = `getAllApprovedFiles?limit=0`;
      // for name
      if (keyword !== "") {
        link += `&keyword=${keyword}`;
      }
      //for city
      if (city !== "") {
        link += `&seller_location=${city}`;
      }
      //for brand
      if (brand !== "") {
        link += `&brand_name=${brand}`;
      }
      //for year
      if (model !== "") {
        link += `&model=${model}`;
      }
      //for price
      if (price !== "") {
        link += `&price[lte]=${price[1]}&price[gte]=${price[0]}`;
      }
      if (page !== 1) {
        setapprovedFiles([]);
      } else {
        const { data } = await axios.get(apiUrl2 + link);
        setapprovedFiles(data);
      }
    } catch (error) {
      console.log("getApprovedFiles::Error", error);
      throw error;
    }
  };

  const getMultipleFilescomparison1 = async (
    keyword,
    city,
    brand,
    price,
    model
  ) => {
    try {
      // let { page, limit } = req.query;
      // if (!page) page = 1;
      // if (!limit) limit = 10;

      // const skip = (page - 1) * 10;
      let link = `getAllFiles?limit=0&page=no`;
      // for name
      if (keyword !== "") {
        link += `&keyword=${keyword}`;
      }
      //for city
      if (city !== "") {
        link += `&seller_location=${city}`;
      }
      //for brand
      if (brand !== "") {
        link += `&brand_name=${brand}`;
      }
      //for year
      if (model !== "") {
        link += `&model=${model}`;
      }
      //for price
      if (price !== "") {
        link += `&price[lte]=${price[1]}&price[gte]=${price[0]}`;
      }
      // const cars = await car.find().skip(skip).limit(limit);
      // res.send(car);

      const { data } = await axios.get(apiUrl + link);
      setmultipleFiles(data.files);
    } catch (error) {
      console.log("getMultipleFiles::Error", error);
      throw error;
    }
    //searching and filtering for featured Ad
    try {
      let link = `getAllApprovedFiles?limit=0`;
      // for name
      if (keyword !== "") {
        link += `&keyword=${keyword}`;
      }
      //for city
      if (city !== "") {
        link += `&seller_location=${city}`;
      }
      //for brand
      if (brand !== "") {
        link += `&brand_name=${brand}`;
      }
      //for year
      if (model !== "") {
        link += `&model=${model}`;
      }
      //for price
      if (price !== "") {
        link += `&price[lte]=${price[1]}&price[gte]=${price[0]}`;
      }
      const { data } = await axios.get(apiUrl2 + link);
      setapprovedFiles(data);
    } catch (error) {
      console.log("getApprovedFiles::Error", error);
      throw error;
    }
  };

  const getMultipleFilescomparison2 = async (
    keyword,
    city,
    brand,
    price,
    model
  ) => {
    try {
      // let { page, limit } = req.query;
      // if (!page) page = 1;
      // if (!limit) limit = 10;

      // const skip = (page - 1) * 10;
      let link = `getAllFiles?limit=0&page=no`;
      // for name
      if (keyword !== "") {
        link += `&keyword=${keyword}`;
      }
      //for city
      if (city !== "") {
        link += `&seller_location=${city}`;
      }
      //for brand
      if (brand !== "") {
        link += `&brand_name=${brand}`;
      }
      //for year
      if (model !== "") {
        link += `&model=${model}`;
      }
      //for price
      if (price !== "") {
        link += `&price[lte]=${price[1]}&price[gte]=${price[0]}`;
      }
      // const cars = await car.find().skip(skip).limit(limit);
      // res.send(car);

      const { data } = await axios.get(apiUrl + link);
      setmultipleFiles2(data.files);
    } catch (error) {
      console.log("getMultipleFiles::Error", error);
      throw error;
    }
    //searching and filtering for featured Ad
    try {
      let link = `getAllApprovedFiles?limit=0`;
      // for name
      if (keyword !== "") {
        link += `&keyword=${keyword}`;
      }
      //for city
      if (city !== "") {
        link += `&seller_location=${city}`;
      }
      //for brand
      if (brand !== "") {
        link += `&brand_name=${brand}`;
      }
      //for year
      if (model !== "") {
        link += `&model=${model}`;
      }
      //for price
      if (price !== "") {
        link += `&price[lte]=${price[1]}&price[gte]=${price[0]}`;
      }
      const { data } = await axios.get(apiUrl2 + link);
      setapprovedFiles2(data);
    } catch (error) {
      console.log("getApprovedFiles::Error", error);
      throw error;
    }
  };

  //Searching and for admin panel
  const getMultipleFiles2 = async (keyword, city, brand, price, model) => {
    try {
      let link = `getAllUnApprovedFiles?limit=0`;
      // for name
      if (keyword !== "") {
        link += `&keyword=${keyword}`;
      }
      //for city
      if (city !== "") {
        link += `&seller_location=${city}`;
      }
      //for brand
      if (brand !== "") {
        link += `&brand_name=${brand}`;
      }
      //for year
      if (model !== "") {
        link += `&model=${model}`;
      }
      //for price
      if (price !== "") {
        link += `&price[lte]=${price[1]}&price[gte]=${price[0]}`;
      }
      const { data } = await axios.get(apiUrl2 + link);
      setmultipleFiles(data);
    } catch (error) {
      console.log("getMultipleFiles::Error", error);
      throw error;
    }
  };
  const getcarsdata = async (carId1, carId2) => {
    try {
      const { data } = await axios.post(apiUrl + "/compareCars", {
        carId1,
        carId2,
      });
      console.log(data.data);
      setcar1data(data.data);
      setcar2data(data.data2);
    } catch (error) {
      console.log("getMultipleFiles::Error", error);
      throw error;
    }
  };
  return (
    <CarContext.Provider
      value={{
        getMultipleFiles,
        getMultipleFiles2,
        getFile,
        totalrating,
        multipleFilesUpload,
        multipleFiles,
        userInfo,
        setUserInfo,
        updatenotification,
        getallnotification,
        notificationbrand,
        notificationcar,
        notificationmodel,
        reviews,
        getreview,
        addreview,
        userid,
        delfunc,
        setuseridfunc,
        approvedFiles,
        approvedFiles2,
        getMultipleFilescomparison2,
        multipleFiles2,
        getcarsdata,
        car1data,
        car2data,
        pages,
        setapprovedFiles,
        getMultipleFilescomparison1,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};
export default CarContextProvider;
