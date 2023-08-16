const express = require("express");
const featuredAdController = require("../controllers/featuredAdcontroller");
const { upload } = require("../helpers/filehelper");

const featuredAdRouter = express.Router();

featuredAdRouter.post(
  "/multipleFileUpload",
  upload.array("files"),
  featuredAdController.multipleFileUpload
);
featuredAdRouter.get(
  "/getAllApprovedFiles",
  featuredAdController.getAllApprovedFiles
);
featuredAdRouter.get(
  "/getAllUnApprovedFiles",
  featuredAdController.getAllUnApprovedFiles
);
featuredAdRouter.put(
  "/updateUnApprovedFile/:carId",
  featuredAdController.updateUnApprovedFile
);
featuredAdRouter.get("/getCar/:carId", featuredAdController.getCar);
featuredAdRouter.get("/getFiles/:userId", featuredAdController.getFiles);
featuredAdRouter.delete("/deleteCar/:carId", featuredAdController.deleteCar);

module.exports = featuredAdRouter;

// const express = require("express");
// const featuredAdController = require("../controllers/featuredAdcontroller");
// const { upload } = require("../helpers/filehelper");

// const featuredAdRouter = express.Router();

// featuredAdRouter.post(
//   "/multipleFileUpload",
//   upload.array("files"),
//   featuredAdController.multipleFileUpload
// );
// featuredAdRouter.get("/getAllFiles", featuredAdController.getAllFiles);

// module.exports = featuredAdRouter;
