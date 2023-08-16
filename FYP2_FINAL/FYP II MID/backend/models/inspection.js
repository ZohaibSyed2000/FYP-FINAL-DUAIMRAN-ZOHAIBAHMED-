const mongoose = require("mongoose");

const inspectionSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    date:{
      type: Date,
    },
    time:{
      type: String,
      enum: ["12:00 PM", "02:00 PM","04:00 PM", "06:00 PM"],
    },

    address:{
      type: String,
      required: true,
    },
    
    brand_name: {
      type: String,
      required: true,
    },
    car_name: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    exteriorBody: {
        type: Number,
      },
    engineTransmissionClutch: {
        type: Number,
      },
    suspensionSteering: {
        type: Number,
      },
    interior: {
        type: Number,
      },
    acHeater: {
        type: Number,
      },
    brakes: {
        type: Number,
      },
      tyres: {
        type: Number,
      },
      electronics: {
        type: Number,
      },
      radiatorCoreSupport: {
        type: String,
        enum: ["Accidented", "Non Accidented"],
      },
      rightFrontRail: {
        type: String,
        enum: ["Accidented", "Non Accidented"],
      },
      leftFrontRail: {
        type: String,
        enum: ["Accidented", "Non Accidented"],
      },
      rightAPillar: {
        type: String,
        enum: ["Accidented", "Non Accidented"],
      },
      leftAPillar: {
        type: String,
        enum: ["Accidented", "Non Accidented"],
      },
      rightBPillar: {
        type: String,
        enum: ["Accidented", "Non Accidented"],
      },
      leftBPillar: {
        type: String,
        enum: ["Accidented", "Non Accidented"],
      },
      rightCPillar: {
        type: String,
        enum: ["Accidented", "Non Accidented"],
      },
      leftCPillar: {
        type: String,
        enum: ["Accidented", "Non Accidented"],
      },
      rightDPillar: {
        type: String,
        enum: ["Accidented", "Non Accidented"],
      },
      leftDPillar: {
        type: String,
        enum: ["Accidented", "Non Accidented"],
      },
      engineOilLevel: {
        type: String,
        enum: ["Complete and clean", "Not complete","Not clean"],
      },
      engineOilLeakage: {
        type: String,
        enum: ["Leakage", "No leakage"],
      },
      transmissionOilLeakage: {
        type: String,
        enum: ["Leakage", "No leakage"],
      },
      coolantLeakage: {
        type: String,
        enum: ["Leakage", "No leakage"],
      },
      brakeOilLeakage: {
        type: String,
        enum: ["Leakage", "No leakage"],
      },
      exhaustSound: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      radiator: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      belts: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      wires: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      engineBlow: {
        type: String,
        enum: ["Present", "Not present"],
      },
      engineNoise: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      engineVibration: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      coldStart: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      engineMounts: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      pulleys: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      hoses: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      starterOperation: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      frontRightDisk: {
        type: String,
        enum: ["Smooth", "Not smooth"],
      },
      frontLeftDisk: {
        type: String,
        enum: ["Smooth", "Not smooth"],
      },
      frontRightBrakePad: {
        type: String,
        enum: ["More than 50%", "Less than 50%"],
      },
      frontLeftBrakePad: {
        type: String,
        enum: ["More than 50%", "Less than 50%"],
      },
      parking: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      rightBallJoint: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      leftBallJoint: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      rightZLink: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      leftZLink: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      rightTieRodEnd: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      leftTieRodEnd: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      frontRightBushes: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      frontLeftBushes: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      rearRightBushes: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      rearLeftBushes: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      frontRightShock: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      frontLeftShock: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      rearRightShock: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      rearleftShock: {
        type: String,
        enum: ["Ok", "Not ok"],
      },
      spareTyre: {
        type: String,
        enum: ["Present", "Not Present"],
      },
      tools: {
        type: String,
        enum: ["Present", "Not Present"],
      },
      acFitted:{
        type: String,
        enum: ["Yes", "No"],
      },
      acOperational:{
        type: String,
        enum: ["Yes", "No"],
      },
      blower:{
        type: String,
        enum: ["Excellent", "Good","Satisfactory","Bad"],
      },
      cooling:{
        type: String,
        enum: ["Excellent", "Good","Satisfactory","Bad"],
      },
      heating:{
        type: String,
        enum: ["Excellent", "Good","Satisfactory","Bad"],
      },
      rightHeadLightWorking:{
        type: String,
        enum: ["Yes", "No"],
      },
      leftHeadLightWorking:{
        type: String,
        enum: ["Yes", "No"],
      },
      rightHeadLightCondition:{
        type: String,
        enum: ["Ok", "Repaired"],
      },
      leftHeadLightCondition:{
        type: String,
        enum: ["Ok", "Repaired"],
      },
      rightTailLightWorking:{
        type: String,
        enum: ["Yes", "No"],
      },
      leftTailLightWorking:{
        type: String,
        enum: ["Yes", "No"],
      },
      rightTailLightCondition:{
        type: String,
        enum: ["Ok", "Repaired"],
      },
      leftTailLightCondition:{
        type: String,
        enum: ["Ok", "Repaired"],
      },
      fogLightsWorking:{
        type: String,
        enum: ["Yes", "No"],
      },
    user_id: {
      type: String,
    },
    car_id: {
        type: String,
      },
    status: {
        type: String,
      },
    
    files: [Object],
  },
  { timestamps: true }
);

const Inspection = mongoose.model("inspection", inspectionSchema);
module.exports = Inspection;