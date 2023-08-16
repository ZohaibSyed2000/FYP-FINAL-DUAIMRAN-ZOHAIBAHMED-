const Car = require("../models/car");
const FeatureCar = require("../models/featuredcar.js");
const User = require("../models/user");
const Reviewmodel = require("../models/reviews.js");
const Notification = require("../models/notifiation.js");
const Apifeature = require("../utilis/apifeature");
const sendmail = require("../utilis/sendmail.js");
const { findById, findByIdAndUpdate } = require("../models/car");

const postAd = async (req, res) => {
  try {
    const car = await Car.create(req.body);
    // Sending notification
    const sendnote = await Notification.find({
      car_name: car.car_name,
      brand_name: car.brand_name,
      model_name: car.model,
    });
    for (const elem of sendnote) {
      const user = await User.findById(elem.user_id);
      sendmail(user.email, elem.brand_name, elem.car_name, elem.model_name);
    }

    res.status(200).json({ advertismentStatus: "success", car: car });
  } catch (e) {
    console.log(e);
    res.status(400).json({ advertismentStatus: "failed", error: e.message });
  }
};

const compareCars = async (req, res, next) => {
  try {
    const { carId1, carId2 } = req.body;
    console.log(carId1);
    console.log(carId2);
    let data;
    data = await Car.findById(carId1);
    if (!data) {
      data = await FeatureCar.findById(carId1);
    }
    let data2;
    data2 = await Car.findById(carId2);
    if (!data2) {
      data2 = await FeatureCar.findById(carId2);
    }
    res.status(200).json({ data, data2 });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

//add review
const addreview = async (req, res, next) => {
  try {
    const { userId, carId, review, rating } = req.body;
    //Find car owner
    let car = await Car.findById(carId);
    if (car.user_id.toString() === userId.toString()) {
      res.status(200).send({ resp: "Not allowed" });
    } else {
      const username = await User.findById(userId);
      req.body.username = username.first_name;
      const newreview = await Reviewmodel.create(req.body);
      res.status(200).send({ resp: "Added successfully" });
    }
  } catch (e) {
    res.status(400).json({ advertismentStatus: "failed", error: e.message });
  }
};
//get review
const getreview = async (req, res, next) => {
  try {
    const { id } = req.body;
    console.log(id);
    const review = await Reviewmodel.find({ carId: id });
    let totalrating = 0;
    let numrating = 0;
    review.forEach((rev) => {
      totalrating += rev.rating;
      numrating += 1;
    });
    totalrating = totalrating / numrating;
    res.status(200).send({ review, totalrating });
  } catch (e) {
    res.status(400).json({ advertismentStatus: "failed", error: e.message });
  }
};
//delete review
const deletereview = async (req, res, next) => {
  try {
    const { userid, reviewid } = req.body;
    let review = await Reviewmodel.findById(reviewid);
    if (review.userId.toString() === userid.toString()) {
      await Reviewmodel.findByIdAndDelete(reviewid);
      res.status(200).send({ success: true, review });
    } else {
      res.status(200).send({ resp: "You are not allowed" });
    }
  } catch (e) {
    res.status(400).json({ advertismentStatus: "failed", error: e.message });
  }
};
//Update notification
const updatenotification = async (req, res, next) => {
  try {
    const { car_name, brand_name, model_name, id } = req.body;
    req.body.user_id = id;

    const notification = await Notification.create(req.body);
    res.status(200).json({ success: true, notification });
  } catch (e) {
    res.status(400).json({ advertismentStatus: "failed", error: e.message });
  }
};

const getallnotification = async (req, res, next) => {
  try {
    const notification = await Notification.find({ user_id: req.body.id });
    res.status(200).json({
      success: true,
      notification,
    });
  } catch (e) {
    res.status(400).json({ advertismentStatus: "failed", error: e.message });
  }
};

//get all notification for single user API
const getallnotification1 = async (req, res, next) => {
  try {
    const notification1 = req.params.id;
    let data = await Notification.find({ user_id: notification1 });
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
const singleFileUpload = async (req, res, next) => {
  try {
    const file = new Car({
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
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: filesizeFormatter(req.file.size, 2), //0.00
    });
    await file.save();
    res.status(201).send("File Uploaded Successfully");
  } catch (e) {
    res.status(400).send(e.message);
  }
};

//Delete Notification
const deletenotif = async (req, res, next) => {
  try {
    let notifId = req.params.notifId;
    console.log(notifId);

    const notifdata = await Notification.findByIdAndRemove(notifId);
    res.send(notifdata);
  } catch (e) {
    res.status(e.status).json({ searchStatus: "failed", error: e.error });
  }
};

//Update Car API
const updateAd = async (req, res, next) => {
  try {
    let carId = req.params.carId;
    console.log(carId);

    const updates = req.body;
    console.log(req.body);
    const result = await Car.findByIdAndUpdate(carId, updates);
    await FeatureCar.findByIdAndUpdate(carId, updates);

    res.send(result);
  } catch (e) {
    res.status(e.status).json({ searchStatus: "failed", error: e.error });
  }
};

//My Ads API
const getFiles = async (req, res, next) => {
  try {
    let userId = req.params.userId;
    let data = await Car.find({ user_id: userId });
    res.status(200).send(data);
  } catch (e) {
    res.status(e.status).json({ searchStatus: "failed", error: e.error });
  }
};

//Ad posting and send notification API
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
    const multipleFiles = new Car({
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
    });
    const sendnote = await Notification.find({
      car_name: multipleFiles.car_name,
      brand_name: multipleFiles.brand_name,
      model_name: multipleFiles.model,
    });
    for (const elem of sendnote) {
      const user = await User.findById(elem.user_id);
      sendmail(user.email, elem.brand_name, elem.car_name, elem.model_name);
    }
    await multipleFiles.save();
    res.status(201).send("Files Uploaded Successfully");
  } catch (e) {
    res.status(400).send(e.message);
  }
};

//View Full Ad API
const getCar = async (req, res, next) => {
  try {
    let carId = req.params.carId;
    console.log(carId);
    let data;
    data = await Car.findById(carId);
    if (!data) {
      data = await FeatureCar.findById(carId);
    }
    res.status(200).json({ data });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

//My Ads Delete Car
const deleteCar = async (req, res, next) => {
  try {
    let carId = req.params.carId;
    let data = await Car.findByIdAndDelete(carId);
    res.status(200).json({ data });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

//View All Ads API
const getAllFiles = async (req, res, next) => {
  try {
    let apiFeature = new Apifeature(Car.find(), req.query)
      .Search()
      .filter()
      .paginate();
    let apiFeature2 = new Apifeature(Car.find(), req.query).Search().filter();
    let files = await apiFeature.query;
    let allfiles = await apiFeature2.query;
    const limit = 2;
    const totalPages = Math.ceil(allfiles.length / limit);
    res.status(200).send({ files, totalPages });
  } catch (e) {
    res.status(400).send(e.message);
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
  deletereview,
  getreview,
  addreview,
  getallnotification,
  updatenotification,
  compareCars,
  postAd,
  deletenotif,
  getallnotification1,
  singleFileUpload,
  multipleFileUpload,
  getAllFiles,
  getFiles,
  getCar,
  deleteCar,
  updateAd,
};
