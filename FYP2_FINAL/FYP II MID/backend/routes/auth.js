const express = require("express");
const authController = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/login", authController.login);
authRouter.post("/signup", authController.signup);
authRouter.get("/getUser/:userId", authController.getUser);
module.exports = authRouter;
