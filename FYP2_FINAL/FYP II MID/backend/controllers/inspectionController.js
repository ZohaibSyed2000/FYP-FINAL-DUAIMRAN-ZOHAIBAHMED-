const Inspection = require("../models/inspection");

const addInspection = async (req, res, next) => {
  console.log("aa00")
  
    try {
      const inspectionData = new Inspection({
        brand_name: req.body.brand_name,
        car_name: req.body.car_name,
        model: req.body.model,
        user_id: req.body.user_id,
        car_id: req.body.car_id,
        rating: req.body.rating,
        status:"Unapproved",
        files:req.body.files,
        full_name:req.body.full_name,
        contact:req.body.contact,
        address:req.body.address,
        date:req.body.date,
        time:req.body.time,
      });

      console.log(inspectionData)
      await inspectionData.save();
      res.status(201).send("Inspection Booked Successfully");
    } catch (e) {
      res.status(400).send(e.message);
    }
  };

  const getBookings = async (req, res, next) => {
    try {
      let userId = req.params.userId;
    let data = await Inspection.find({ user_id: userId , status:"Approved" });
    res.status(200).send(data);
      console.log("ssss"+data)
    } catch (e) {
      res.status(e.status).json({ searchStatus: "failed", error: e.error });
    }
  };

  const getReport = async (req, res, next) => {
    try {
      let reportId = req.params.reportId;
      console.log(reportId);
      let data;
      data = await Inspection.findById(reportId);
      res.status(200).json({ data });
    } catch (e) {
      res.status(404).json({ error: e.message });
    }
  };

  const approveBookings = async (req, res, next) => {
    try {
      let Id = req.params.Id1;
      const updates = req.body;
      console.log(req.body);
      const result = await Inspection.findByIdAndUpdate(Id, updates);
      res.send(result);
    } catch (e) {
      res.status(e.status).json({ searchStatus: "failed", error: e.error });
    }
  };

  const getUnApprovedInspections = async (req, res, next) => {
    try {
    let data = await Inspection.find({ status: "Unapproved" });
    res.status(200).send(data);
    } catch (e) {
      res.status(400).send(e.message);
    }
  };  

  const getApprovedInspections = async (req, res, next) => {
    try {
    let data = await Inspection.find({ status: "Approved" });
    res.status(200).send(data);
    } catch (e) {
      res.status(400).send(e.message);
    }
  }; 
  module.exports = { addInspection,getUnApprovedInspections,getBookings,approveBookings,getReport,getApprovedInspections };