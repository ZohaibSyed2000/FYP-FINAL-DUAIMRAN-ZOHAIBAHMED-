const express = require("express");
const adminController = require("../controllers/adminController");

const adminRouter = express.Router();


adminRouter.post("/adminlogin", adminController.adminlogin);
adminRouter.post("/adminsignup", adminController.adminsignup);
module.exports = adminRouter;