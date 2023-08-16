const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const adRouter = require("./routes/ad");
const featuredAdRouter = require("./routes/featuredAd");
const adminRouter = require("./routes/admin");
const inspectionRouter = require("./routes/inspection");

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// logger
app.use((req, res, next) => {
  console.log(`${req.path}\t${req.params}\t${req.query}`);
  next();
});

app.use("/api/auth", authRouter);
app.use("/api/ad", adRouter);
app.use("/api/featuredad", featuredAdRouter);
app.use("/api/admin", adminRouter);
app.use("/api/inspect", inspectionRouter);

// 404 Handler
app.all("/*", (req, res, next) => {
  res.status(404).json({ error: `Path ${req.path} does not exist` });
});

module.exports = app;
