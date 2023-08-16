const express = require("express");
const adController = require("../controllers/adcontroller");
const { upload } = require("../helpers/filehelper");

const adRouter = express.Router();

adRouter.post("/postAd", adController.postAd);
adRouter.post("/addreview", adController.addreview);
adRouter.post("/getreview", adController.getreview);
adRouter.post("/delreview", adController.deletereview);
adRouter.post("/updatenotification", adController.updatenotification);
adRouter.post("/getallnotification", adController.getallnotification);
adRouter.get("/getallnotification1/:id", adController.getallnotification1);
adRouter.post("/compareCars", adController.compareCars);
adRouter.delete("/deletenotif/:notifId", adController.deletenotif);
// adRouter.post("/notifvalidation", adController.notifvalidation);

adRouter.post(
  "/singleFileUpload",
  upload.single("file"),
  adController.singleFileUpload
);
adRouter.post(
  "/multipleFileUpload",
  upload.array("files"),
  adController.multipleFileUpload
);
adRouter.get("/getAllFiles", adController.getAllFiles);
adRouter.get("/getFiles/:userId", adController.getFiles);
adRouter.get("/getCar/:carId", adController.getCar);
adRouter.delete("/deleteCar/:carId", adController.deleteCar);
adRouter.put("/updateAd/:carId", adController.updateAd);

module.exports = adRouter;
