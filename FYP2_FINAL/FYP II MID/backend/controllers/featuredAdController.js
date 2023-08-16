const FeaturedCar = require("../models/featuredcar");
const User = require("../models/user");
const Reviewmodel = require("../models/reviews.js");
const Apifeature = require("../utilis/apifeature");
const Notification = require("../models/notifiation.js");
const sendmail = require("../utilis/sendmail.js");

const multipleFileUpload = async (req, res, next) => {
  try {
    let filesArray = [];
    req.files.forEach((element) => {
      const file = {
        fileName: element.originalname,
        filePath: element.path,
        fileType: element.mimetype,
        fileSize: filesizeFormatter(element.size, 2),
      };
      filesArray.push(file);
    });
    const multipleFiles = new FeaturedCar({
      brand_name: req.body.brand_name,
      car_name: req.body.car_name,
      description: req.body.description,
      model: req.body.model,
      fuel_type: req.body.fuel_type,
      transmission: req.body.transmission,
      color: req.body.color,
      body_type: req.body.body_type,
      engine_displacement: req.body.engine_displacement,
      mileage: req.body.mileage,
      seller_location: req.body.seller_location,
      registered_in: req.body.registered_in,
      assembly: req.body.assembly,
      price: req.body.price,
      files: filesArray,
      user_id: req.body.user_id,
      cc_name: req.body.cc_name,
      cc_number: req.body.cc_number,
      cvc: req.body.cvc,
      expiry: req.body.expiry,
      type: "featured",
      approved: "false",
    });
    await multipleFiles.save();
    res.status(201).send("Files Uploaded Successfully");
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const getAllApprovedFiles = async (req, res, next) => {
  try {
    let apiFeature = new Apifeature(
      FeaturedCar.find({ approved: "true" }),
      req.query
    )
      .Search()
      .filter();
    let files = await apiFeature.query;
    // console.log(files);
    res.status(200).send(files);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

//unapproved featured ads
const getAllUnApprovedFiles = async (req, res, next) => {
  try {
    let apiFeature = new Apifeature(
      FeaturedCar.find({ approved: "false" }),
      req.query
    )
      .Search()
      .filter();
    let files = await apiFeature.query;

    res.status(200).send(files);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

//approved files by admin api
const updateUnApprovedFile = async (req, res, next) => {
  try {
    const carId = req.params.carId;
    const updates = { approved: "true" };
    const data = await FeaturedCar.findByIdAndUpdate(carId, updates);
    const sendnote = await Notification.find({
      car_name: data.car_name,
      brand_name: data.brand_name,
      model_name: data.model,
    });
    for (const elem of sendnote) {
      const user = await User.findById(elem.user_id);
      sendmail(user.email, elem.brand_name, elem.car_name, elem.model_name);
    }
    res.status(200).send("Updated Successfully");
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const getCar = async (req, res, next) => {
  try {
    let carId = req.params.carId;
    let data = await FeaturedCar.findById(carId);
    res.status(200).json({ data });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const getFiles = async (req, res, next) => {
  try {
    // const { userId } = req.body;
    // let data = await Car.find({"user_id": `${userId}`})
    //   res.status(200).send(data);
    let userId = req.params.userId;
    let data = await FeaturedCar.find({ user_id: userId });
    res.status(200).send(data);
  } catch (e) {
    res.status(e.status).json({ searchStatus: "failed", error: e.error });
  }
};

const deleteCar = async (req, res, next) => {
  try {
    let carId = req.params.carId;
    let data = await FeaturedCar.findByIdAndDelete(carId);
    res.status(200).json({ data });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

const filesizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};
module.exports = {
  multipleFileUpload,
  getAllApprovedFiles,
  getAllUnApprovedFiles,
  updateUnApprovedFile,
  getCar,
  getFiles,
  deleteCar,
};

// const FeaturedCar = require("../models/featuredcar");
// const User = require("../models/user");
// const Reviewmodel = require("../models/reviews.js");
// const Apifeature = require("../utilis/apifeature");

// const multipleFileUpload = async (req, res, next) => {
//   try {
//     let filesArray = [];
//     req.files.forEach((element) => {
//       const file = {
//         fileName: element.originalname,
//         filePath: element.path,
//         fileType: element.mimetype,
//         fileSize: filesizeFormatter(element.size, 2),
//       };
//       filesArray.push(file);
//     });
//     const multipleFiles = new FeaturedCar({
//       brand_name: req.body.brand_name,
//       car_name: req.body.car_name,
//       description: req.body.description,
//       model: req.body.model,
//       fuel_type: req.body.fuel_type,
//       transmission: req.body.transmission,
//       color: req.body.color,
//       body_type: req.body.body_type,
//       engine_displacement: req.body.engine_displacement,
//       mileage: req.body.mileage,
//       seller_location: req.body.seller_location,
//       registered_in: req.body.registered_in,
//       assembly: req.body.assembly,
//       price: req.body.price,
//       files: filesArray,
//       user_id: req.body.user_id,
//       cc_name: req.body.cc_name,
//       cc_number: req.body.cc_number,
//       cvc: req.body.cvc,
//       expiry: req.body.expiry,
//       type: "featured",
//     });
//     await multipleFiles.save();
//     res.status(201).send("Files Uploaded Successfully");
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// };

// const getAllFiles = async (req, res, next) => {
//   try {
//     let apiFeature = new Apifeature(FeaturedCar.find(), req.query)
//       .Search()
//       .filter();
//     let files = await apiFeature.query;

//     res.status(200).send(files);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// };

// const filesizeFormatter = (bytes, decimal) => {
//   if (bytes === 0) {
//     return "0 Bytes";
//   }
//   const dm = decimal || 2;
//   const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
//   const index = Math.floor(Math.log(bytes) / Math.log(1000));
//   return (
//     parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
//   );
// };

// module.exports = { multipleFileUpload, getAllFiles };
