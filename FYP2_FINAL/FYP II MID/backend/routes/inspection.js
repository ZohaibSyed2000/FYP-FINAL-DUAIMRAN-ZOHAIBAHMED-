const express = require("express");
const inspectionController = require("../controllers/inspectionController");

const inspectionRouter = express.Router();

inspectionRouter.post("/inspections/:carId", inspectionController.addInspection);
inspectionRouter.get("/getInspections", inspectionController.getUnApprovedInspections);
inspectionRouter.get("/getApprovedInspections", inspectionController.getApprovedInspections);
inspectionRouter.get("/getInspection/:userId", inspectionController.getBookings);
inspectionRouter.put("/report/:Id1", inspectionController.approveBookings);
inspectionRouter.get("/getReport/:reportId", inspectionController.getReport);
module.exports = inspectionRouter;