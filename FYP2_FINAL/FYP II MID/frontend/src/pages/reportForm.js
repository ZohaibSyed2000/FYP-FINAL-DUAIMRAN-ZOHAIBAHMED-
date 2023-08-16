import React, { useState, useEffect } from "react";
import { getFile } from "../data/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import CarContext from "../store/car-context";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "@mui/material/Slider";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import img1 from "../assets/userlogo.png";

import { Link } from "react-router-dom";
import { useContext } from "react";
import UpdateAdModal from "../components/UpdateAdModal";

import "./myadd.css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";

export default function ReportForm() {
  const [exteriorBody, setExteriorBody] = useState([0, 100]);
  const [engineTransmissionClutch, setEngineTransmissionClutch] = useState([
    0, 100,
  ]);
  const [suspensionSteering, setSuspensionSteering] = useState([0, 100]);
  const [interior, setInterior] = useState([0, 100]);
  const [acHeater, setAcHeater] = useState([0, 100]);
  const [brakes, setBrakes] = useState([0, 100]);
  const [tyres, setTyres] = useState([0, 100]);
  const [electronics, setElectronics] = useState([0, 100]);
  const [radiatorCoreSupport, setRadiatorCoreSupport] = useState("");
  const [rightFrontRail, setRightFrontRail] = useState("");
  const [leftFrontRail, setLeftFrontRail] = useState("");
  const [rightAPillar, setRightAPillar] = useState("");
  const [rightBPillar, setRightBPillar] = useState("");
  const [rightCPillar, setRightCPillar] = useState("");
  const [rightDPillar, setRightDPillar] = useState("");
  const [leftAPillar, setLeftAPillar] = useState("");
  const [leftBPillar, setLeftBPillar] = useState("");
  const [leftCPillar, setLeftCPillar] = useState("");
  const [leftDPillar, setLeftDPillar] = useState("");
  const [engineOilLevel, setEngineOilLevel] = useState("");
  const [engineOilLeakage, setEngineOilLeakage] = useState("");
  const [transmissionOilLeakage, setTransmissionOilLeakage] = useState("");
  const [coolantLeakage, setCoolantLeakage] = useState("");
  const [brakeOilLeakage, setBrakeOilLeakage] = useState("");
  const [exhaustSound, setExhaustSound] = useState("");
  const [radiator, setRadiator] = useState("");
  const [belts, setBelts] = useState("");
  const [wires, setWires] = useState("");
  const [engineBlow, setEngineBlow] = useState("");
  const [engineNoise, setEngineNoise] = useState("");
  const [engineVibration, setEngineVibration] = useState("");
  const [coldStart, setColdStart] = useState("");
  const [engineMounts, setEngineMounts] = useState("");
  const [pulleys, setPulleys] = useState("");
  const [hoses, setHoses] = useState("");
  const [starterOperation, setStarterOperation] = useState("");
  const [frontRightDisk, setFrontRightDisk] = useState("");
  const [frontLeftDisk, setFrontLeftDisk] = useState("");
  const [frontRightBrakePad, setFrontRightBrakePad] = useState("");
  const [frontLeftBrakePad, setFrontLeftBrakePad] = useState("");
  const [parking, setParking] = useState("");
  const [rightBallJoint, setRightBallJoint] = useState("");
  const [leftBallJoint, setLeftBallJoint] = useState("");
  const [rightZLink, setRightZLink] = useState("");
  const [leftZLink, setLeftZLink] = useState("");
  const [rightTieRodEnd, setRightTieRodEnd] = useState("");
  const [leftTieRodEnd, setLeftTieRodEnd] = useState("");
  const [frontRightBushes, setFrontRightBushes] = useState("");
  const [frontLeftBushes, setFrontLeftBushes] = useState("");
  const [rearRightBushes, setRearRightBushes] = useState("");
  const [rearLeftBushes, setRearLeftBushes] = useState("");
  const [frontRightShock, setFrontRightShock] = useState("");
  const [frontLeftShock, setFrontLeftShock] = useState("");
  const [rearRightShock, setRearRightShock] = useState("");
  const [rearleftShock, setRearleftShock] = useState("");
  const [spareTyre, setSpareTyre] = useState("");
  const [tools, setTools] = useState("");
  const [acFitted, setAcFitted] = useState("");
  const [acOperational, setAcOperational] = useState("");
  const [blower, setBlower] = useState("");
  const [cooling, setCooling] = useState("");
  const [heating, setHeating] = useState("");
  const [rightHeadLightWorking, setRightHeadLightWorking] = useState("");
  const [leftHeadLightWorking, setLeftHeadLightWorking] = useState("");
  const [rightHeadLightCondition, setRightHeadLightCondition] = useState("");
  const [leftHeadLightCondition, setLeftHeadLightCondition] = useState("");
  const [rightTailLightWorking, setRightTailLightWorking] = useState("");
  const [leftTailLightWorking, setLeftTailLightWorking] = useState("");
  const [rightTailLightCondition, setRightTailLightCondition] = useState("");
  const [leftTailLightCondition, setLeftTailLightCondition] = useState("");
  const [fogLightsWorking, setFogLightsWorking] = useState("");

  const params = useParams();
  const { id1, id2, id3 } = useParams();
  const handleonclick2 = async () => {
    try {
      const data = {
        exteriorBody: exteriorBody[1],
        engineTransmissionClutch: engineTransmissionClutch[1],
        suspensionSteering: suspensionSteering[1],
        interior: interior[1],
        acHeater: acHeater[1],
        brakes: brakes[1],
        tyres: tyres[1],
        electronics: electronics[1],
        radiatorCoreSupport: radiatorCoreSupport,
        rightFrontRail: rightFrontRail,
        leftFrontRail: leftFrontRail,
        rightAPillar: rightAPillar,
        rightBPillar: rightBPillar,
        rightCPillar: rightCPillar,
        rightDPillar: rightDPillar,
        leftAPillar: leftAPillar,
        leftBPillar: leftBPillar,
        leftCPillar: leftCPillar,
        leftDPillar: leftDPillar,
        engineOilLevel: engineOilLevel,
        engineOilLeakage: engineOilLeakage,
        transmissionOilLeakage: transmissionOilLeakage,
        coolantLeakage: coolantLeakage,
        brakeOilLeakage: brakeOilLeakage,
        exhaustSound: exhaustSound,
        radiator: radiator,
        belts: belts,
        wires: wires,
        engineBlow: engineBlow,
        engineNoise: engineNoise,
        engineVibration: engineVibration,
        coldStart: coldStart,
        engineMounts: engineMounts,
        pulleys: pulleys,
        hoses: hoses,
        starterOperation: starterOperation,
        frontRightDisk: frontRightDisk,
        frontLeftDisk: frontLeftDisk,
        frontRightBrakePad: frontRightBrakePad,
        frontLeftBrakePad: frontLeftBrakePad,
        parking: parking,
        rightBallJoint: rightBallJoint,
        leftBallJoint: leftBallJoint,
        rightZLink: rightZLink,
        leftZLink: leftZLink,
        rightTieRodEnd: rightTieRodEnd,
        leftTieRodEnd: leftTieRodEnd,
        frontRightBushes: frontRightBushes,
        frontLeftBushes: frontLeftBushes,
        rearRightBushes: rearRightBushes,
        rearLeftBushes: rearLeftBushes,
        frontRightShock: frontRightShock,
        frontLeftShock: frontLeftShock,
        rearRightShock: rearRightShock,
        rearleftShock: rearleftShock,
        spareTyre: spareTyre,
        tools: tools,
        acFitted: acFitted,
        acOperational: acOperational,
        blower: blower,
        cooling: cooling,
        heating: heating,
        rightHeadLightWorking: rightHeadLightWorking,
        leftHeadLightWorking: leftHeadLightWorking,
        rightHeadLightCondition: rightHeadLightCondition,
        leftHeadLightCondition: leftHeadLightCondition,
        rightTailLightWorking: rightTailLightWorking,
        leftTailLightWorking: leftTailLightWorking,
        rightTailLightCondition: rightTailLightCondition,
        leftTailLightCondition: leftTailLightCondition,
        fogLightsWorking: fogLightsWorking,
        status: "Approved",
      };

      const res = await axios.put(
        `http://localhost:3009/api/inspect/report/${id1}`,
        data
      );
      window.location.reload();
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const exteriorBodyHandler = (event, newExteriorBody) => {
    setExteriorBody(newExteriorBody);
  };

  const engineTransmissionClutchHandler = (
    event,
    newEngineTransmissionClutch
  ) => {
    setEngineTransmissionClutch(newEngineTransmissionClutch);
  };

  const suspensionSteeringHandler = (event, newSuspensionSteering) => {
    setSuspensionSteering(newSuspensionSteering);
  };

  const interiorHandler = (event, newInterior) => {
    setInterior(newInterior);
  };

  const acHeaterHandler = (event, newAcHeater) => {
    setAcHeater(newAcHeater);
  };

  const brakesHandler = (event, newBrakes) => {
    setBrakes(newBrakes);
  };

  const tyresHandler = (event, newTyres) => {
    setTyres(newTyres);
  };

  const electronicsHandler = (event, newElectronics) => {
    setElectronics(newElectronics);
  };

  return (
    <>
      <div className="row justify-content-center align-items-center w-100">
        <div className="white-div">
          <h2 className="ins-rep">Inspection Report</h2>

          <div className="col-lg-10 center-div10 mt-3">
            <br></br>
            <p>Exterior & Body</p>
            <Slider
              value={exteriorBody}
              onChange={exteriorBodyHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={100}
            />

            <input
              className="form-control me-2"
              placeholder="Maximum Price"
              type="Number"
              name="pricemax"
              value={exteriorBody[1]}
              onChange={(e) => {
                setExteriorBody([exteriorBody[0], e.target.value]);
              }}
            />
            <br></br>
            <p>Engine/Transmission/Clutch</p>
            <Slider
              value={engineTransmissionClutch}
              onChange={engineTransmissionClutchHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={100}
            />

            <input
              className="form-control me-2"
              placeholder="Maximum Price"
              type="Number"
              name="pricemax"
              value={engineTransmissionClutch[1]}
              onChange={(e) => {
                setEngineTransmissionClutch([
                  engineTransmissionClutch[0],
                  e.target.value,
                ]);
              }}
            />
            <br></br>
            <p>Suspension/Steering</p>
            <Slider
              value={suspensionSteering}
              onChange={suspensionSteeringHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={100}
            />

            <input
              className="form-control me-2"
              placeholder="Maximum Price"
              type="Number"
              name="pricemax"
              value={suspensionSteering[1]}
              onChange={(e) => {
                setSuspensionSteering([suspensionSteering[0], e.target.value]);
              }}
            />
            <br></br>
            <p>Interior</p>
            <Slider
              value={interior}
              onChange={interiorHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={100}
            />

            <input
              className="form-control me-2"
              placeholder="Maximum Price"
              type="Number"
              name="pricemax"
              value={interior[1]}
              onChange={(e) => {
                setInterior([interior[0], e.target.value]);
              }}
            />
            <br></br>
            <FormControl fullWidth size="small">
              <InputLabel>Front Right Brake Pad</InputLabel>
              <Select
                name="frontRightBrakePad"
                value={frontRightBrakePad}
                onChange={(e) => setFrontRightBrakePad(e.target.value)}
                label="frontRightBrakePad"
                required
                fullWidth
              >
                <MenuItem value="More than 50%">More than 50%</MenuItem>
                <MenuItem value="Less than 50%">Less than 50%</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <FormControl fullWidth size="small">
              <InputLabel>Front Left Brake Pad</InputLabel>
              <Select
                name="frontLeftBrakePad"
                value={frontLeftBrakePad}
                onChange={(e) => setFrontLeftBrakePad(e.target.value)}
                label="frontLeftBrakePad"
                required
                fullWidth
              >
                <MenuItem value="More than 50%">More than 50%</MenuItem>
                <MenuItem value="Less than 50%">Less than 50%</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <FormControl fullWidth size="small">
              <InputLabel>Parking</InputLabel>
              <Select
                name="parking"
                value={parking}
                onChange={(e) => setParking(e.target.value)}
                label="parking"
                required
                fullWidth
              >
                <MenuItem value="Ok">Ok</MenuItem>
                <MenuItem value="Not ok">Not ok</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <FormControl fullWidth size="small">
              <InputLabel>Right Ball Joint</InputLabel>
              <Select
                name="rightBallJoint"
                value={rightBallJoint}
                onChange={(e) => setRightBallJoint(e.target.value)}
                label="rightBallJoint"
                required
                fullWidth
              >
                <MenuItem value="Ok">Ok</MenuItem>
                <MenuItem value="Not ok">Not ok</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <FormControl fullWidth size="small">
              <InputLabel>Left Ball Joint</InputLabel>
              <Select
                name="leftBallJoint"
                value={leftBallJoint}
                onChange={(e) => setLeftBallJoint(e.target.value)}
                label="leftBallJoint"
                required
                fullWidth
              >
                <MenuItem value="Ok">Ok</MenuItem>
                <MenuItem value="Not ok">Not ok</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <FormControl fullWidth size="small">
              <InputLabel>Right Z-Link</InputLabel>
              <Select
                name="rightZLink"
                value={rightZLink}
                onChange={(e) => setRightZLink(e.target.value)}
                label="rightZLink"
                required
                fullWidth
              >
                <MenuItem value="Ok">Ok</MenuItem>
                <MenuItem value="Not ok">Not ok</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <FormControl fullWidth size="small">
              <InputLabel>Left Tail Light Condition</InputLabel>
              <Select
                name="leftTailLightCondition"
                value={leftTailLightCondition}
                onChange={(e) => setLeftTailLightCondition(e.target.value)}
                label="leftTailLightCondition"
                required
                fullWidth
              >
                <MenuItem value="Ok">Ok</MenuItem>
                <MenuItem value="Repaired">Repaired</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <br></br>
            <FormControl fullWidth size="small">
              <InputLabel>Fog Lights Working</InputLabel>
              <Select
                name="fogLightsWorking"
                value={fogLightsWorking}
                onChange={(e) => setFogLightsWorking(e.target.value)}
                label="fogLightsWorking"
                required
                fullWidth
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
            {/* --------------------------------------------------------------------------- */}
            <div className="col-lg-10 center-div11 mt-3">
              <p>AC / Heater</p>
              <Slider
                value={acHeater}
                onChange={acHeaterHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={100}
              />

              <input
                className="form-control me-2"
                placeholder="Maximum Price"
                type="Number"
                name="pricemax"
                value={acHeater[1]}
                onChange={(e) => {
                  setAcHeater([acHeater[0], e.target.value]);
                }}
              />
              <br></br>
              <p>Brakes</p>
              <Slider
                value={brakes}
                onChange={brakesHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={100}
              />

              <input
                className="form-control me-2"
                placeholder="Maximum Price"
                type="Number"
                name="pricemax"
                value={brakes[1]}
                onChange={(e) => {
                  setBrakes([brakes[0], e.target.value]);
                }}
              />
              <br></br>
              <p>Tyres</p>
              <Slider
                value={tyres}
                onChange={tyresHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={100}
              />

              <input
                className="form-control me-2"
                placeholder="Maximum Price"
                type="Number"
                name="pricemax"
                value={tyres[1]}
                onChange={(e) => {
                  setTyres([tyres[0], e.target.value]);
                }}
              />
              <br></br>
              <p>Electronics</p>
              <Slider
                value={electronics}
                onChange={electronicsHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={100}
              />

              <input
                className="form-control me-2"
                placeholder="Maximum Price"
                type="Number"
                name="pricemax"
                value={electronics[1]}
                onChange={(e) => {
                  setElectronics([electronics[0], e.target.value]);
                }}
              />
              <br></br>

              <FormControl fullWidth size="small">
                <InputLabel>Left Z-Link</InputLabel>
                <Select
                  name="leftZLink"
                  value={leftZLink}
                  onChange={(e) => setLeftZLink(e.target.value)}
                  label="leftZLink"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Right Tie Rod End</InputLabel>
                <Select
                  name="rightTieRodEnd"
                  value={rightTieRodEnd}
                  onChange={(e) => setRightTieRodEnd(e.target.value)}
                  label="rightTieRodEnd"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Left Tie Rod End</InputLabel>
                <Select
                  name="leftTieRodEnd"
                  value={leftTieRodEnd}
                  onChange={(e) => setLeftTieRodEnd(e.target.value)}
                  label="leftTieRodEnd"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Front Right Bushes</InputLabel>
                <Select
                  name="frontRightBushes"
                  value={frontRightBushes}
                  onChange={(e) => setFrontRightBushes(e.target.value)}
                  label="frontRightBushes"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Front Left Bushes</InputLabel>
                <Select
                  name="frontRightBushes"
                  value={frontLeftBushes}
                  onChange={(e) => setFrontLeftBushes(e.target.value)}
                  label="frontleftBushes"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Rear Right Bushes</InputLabel>
                <Select
                  name="rearRightBushes"
                  value={rearRightBushes}
                  onChange={(e) => setRearRightBushes(e.target.value)}
                  label="rearRightBushes"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Right Tail Light Condition</InputLabel>
                <Select
                  name="rightTailLightCondition"
                  value={rightTailLightCondition}
                  onChange={(e) => setRightTailLightCondition(e.target.value)}
                  label="rightTailLightCondition"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Repaired">Repaired</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-lg-10 center-div12 mt-3">
              <FormControl fullWidth size="small">
                <InputLabel>Radiator Core Support</InputLabel>
                <Select
                  name="Radiator core support"
                  value={radiatorCoreSupport}
                  onChange={(e) => setRadiatorCoreSupport(e.target.value)}
                  label="radiatorCoreSupport"
                  required
                  fullWidth
                >
                  <MenuItem value="Accidented">Accidented</MenuItem>
                  <MenuItem value="Non Accidented">Non Accidented</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>

              <FormControl fullWidth size="small">
                <InputLabel>Left Front Rail</InputLabel>
                <Select
                  name="Left Front Rail"
                  value={leftFrontRail}
                  onChange={(e) => setLeftFrontRail(e.target.value)}
                  label="leftFrontRail"
                  required
                  fullWidth
                >
                  <MenuItem value="Accidented">Accidented</MenuItem>
                  <MenuItem value="Non Accidented">Non Accidented</MenuItem>
                </Select>
              </FormControl>

              <br></br>
              <br></br>

              <FormControl fullWidth size="small">
                <InputLabel>Left A pillar</InputLabel>
                <Select
                  name="Left A pillar"
                  value={leftAPillar}
                  onChange={(e) => setLeftAPillar(e.target.value)}
                  label="leftAPillar"
                  required
                  fullWidth
                >
                  <MenuItem value="Accidented">Accidented</MenuItem>
                  <MenuItem value="Non Accidented">Non Accidented</MenuItem>
                </Select>
              </FormControl>

              <br></br>
              <br></br>

              <FormControl fullWidth size="small">
                <InputLabel>Left B pillar</InputLabel>
                <Select
                  name="Left B pillar"
                  value={leftBPillar}
                  onChange={(e) => setLeftBPillar(e.target.value)}
                  label="leftBPillar"
                  required
                  fullWidth
                >
                  <MenuItem value="Accidented">Accidented</MenuItem>
                  <MenuItem value="Non Accidented">Non Accidented</MenuItem>
                </Select>
              </FormControl>

              <br></br>
              <br></br>

              <FormControl fullWidth size="small">
                <InputLabel>Left C pillar</InputLabel>
                <Select
                  name="Left C pillar"
                  value={leftCPillar}
                  onChange={(e) => setLeftCPillar(e.target.value)}
                  label="leftCPillar"
                  required
                  fullWidth
                >
                  <MenuItem value="Accidented">Accidented</MenuItem>
                  <MenuItem value="Non Accidented">Non Accidented</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Left D pillar</InputLabel>
                <Select
                  name="Left D pillar"
                  value={leftDPillar}
                  onChange={(e) => setLeftDPillar(e.target.value)}
                  label="leftDPillar"
                  required
                  fullWidth
                >
                  <MenuItem value="Accidented">Accidented</MenuItem>
                  <MenuItem value="Non Accidented">Non Accidented</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>

              <FormControl fullWidth size="small">
                <InputLabel>Engine Oil Leakage</InputLabel>
                <Select
                  name="engineOilLeakage"
                  value={engineOilLeakage}
                  onChange={(e) => setEngineOilLeakage(e.target.value)}
                  label="engineOilLeakage"
                  required
                  fullWidth
                >
                  <MenuItem value="Leakage">Leakage</MenuItem>
                  <MenuItem value="No leakage">No leakage</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Transmission Oil Leakage</InputLabel>
                <Select
                  name="transmissionOilLeakage"
                  value={transmissionOilLeakage}
                  onChange={(e) => setTransmissionOilLeakage(e.target.value)}
                  label="transmissionOilLeakage"
                  required
                  fullWidth
                >
                  <MenuItem value="Leakage">Leakage</MenuItem>
                  <MenuItem value="No leakage">No leakage</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>

              <FormControl fullWidth size="small">
                <InputLabel>Coolant Leakage</InputLabel>
                <Select
                  name="coolantLeakage"
                  value={coolantLeakage}
                  onChange={(e) => setCoolantLeakage(e.target.value)}
                  label="coolantLeakage"
                  required
                  fullWidth
                >
                  <MenuItem value="Leakage">Leakage</MenuItem>
                  <MenuItem value="No leakage">No leakage</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Front Left Disk</InputLabel>
                <Select
                  name="frontLeftDisk"
                  value={frontLeftDisk}
                  onChange={(e) => setFrontLeftDisk(e.target.value)}
                  label="frontLeftDisk"
                  required
                  fullWidth
                >
                  <MenuItem value="Smooth">Smooth</MenuItem>
                  <MenuItem value="Not smooth">Not smooth</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Rear Left Bushes</InputLabel>
                <Select
                  name="rearLeftBushes"
                  value={rearLeftBushes}
                  onChange={(e) => setRearLeftBushes(e.target.value)}
                  label="rearLeftBushes"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Front Right Shock</InputLabel>
                <Select
                  name="frontRightShock"
                  value={frontRightShock}
                  onChange={(e) => setFrontRightShock(e.target.value)}
                  label="frontRightShock"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Front Left Shock</InputLabel>
                <Select
                  name="frontLeftShock"
                  value={frontLeftShock}
                  onChange={(e) => setFrontLeftShock(e.target.value)}
                  label="frontLeftShock"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Rear Right Shock</InputLabel>
                <Select
                  name="rearRightShock"
                  value={rearRightShock}
                  onChange={(e) => setRearRightShock(e.target.value)}
                  label="rearRightShock"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Rear Left Shock</InputLabel>
                <Select
                  name="rearleftShock"
                  value={rearleftShock}
                  onChange={(e) => setRearleftShock(e.target.value)}
                  label="rearleftShock"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Left Tail Light Working</InputLabel>
                <Select
                  name="leftTailLightWorking"
                  value={leftTailLightWorking}
                  onChange={(e) => setLeftTailLightWorking(e.target.value)}
                  label="leftTailLightWorking"
                  required
                  fullWidth
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* --------------------------------------------------------------------------------------- */}

            <div className="col-lg-10 center-div13 mt-3">
              <FormControl fullWidth size="small">
                <InputLabel>Engine Oil Level</InputLabel>
                <Select
                  name="engineOilLevel"
                  value={engineOilLevel}
                  onChange={(e) => setEngineOilLevel(e.target.value)}
                  label="engineOilLevel"
                  required
                  fullWidth
                >
                  <MenuItem value="Complete and clean">
                    Complete and clean
                  </MenuItem>
                  <MenuItem value="Not complete">Not complete</MenuItem>
                  <MenuItem value="Not clean">Not clean</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Right Front Rail</InputLabel>
                <Select
                  name="Right Front Rail"
                  value={rightFrontRail}
                  onChange={(e) => setRightFrontRail(e.target.value)}
                  label="rightFrontRail"
                  required
                  fullWidth
                >
                  <MenuItem value="Accidented">Accidented</MenuItem>
                  <MenuItem value="Non Accidented">Non Accidented</MenuItem>
                </Select>
              </FormControl>

              <br></br>
              <br></br>

              <FormControl fullWidth size="small">
                <InputLabel>Right A pillar</InputLabel>
                <Select
                  name="Right A pillar"
                  value={rightAPillar}
                  onChange={(e) => setRightAPillar(e.target.value)}
                  label="rightAPillar"
                  required
                  fullWidth
                >
                  <MenuItem value="Accidented">Accidented</MenuItem>
                  <MenuItem value="Non Accidented">Non Accidented</MenuItem>
                </Select>
              </FormControl>

              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Right B pillar</InputLabel>
                <Select
                  name="Right B pillar"
                  value={rightBPillar}
                  onChange={(e) => setRightBPillar(e.target.value)}
                  label="rightBPillar"
                  required
                  fullWidth
                >
                  <MenuItem value="Accidented">Accidented</MenuItem>
                  <MenuItem value="Non Accidented">Non Accidented</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Right C pillar</InputLabel>
                <Select
                  name="Right C pillar"
                  value={rightCPillar}
                  onChange={(e) => setRightCPillar(e.target.value)}
                  label="rightCPillar"
                  required
                  fullWidth
                >
                  <MenuItem value="Accidented">Accidented</MenuItem>
                  <MenuItem value="Non Accidented">Non Accidented</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>

              <FormControl fullWidth size="small">
                <InputLabel>Right D pillar</InputLabel>
                <Select
                  name="Right D pillar"
                  value={rightDPillar}
                  onChange={(e) => setRightDPillar(e.target.value)}
                  label="rightDPillar"
                  required
                  fullWidth
                >
                  <MenuItem value="Accidented">Accidented</MenuItem>
                  <MenuItem value="Non Accidented">Non Accidented</MenuItem>
                </Select>
              </FormControl>

              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Brake Oil Leakage</InputLabel>
                <Select
                  name="brakeOilLeakage"
                  value={brakeOilLeakage}
                  onChange={(e) => setBrakeOilLeakage(e.target.value)}
                  label="brakeOilLeakage"
                  required
                  fullWidth
                >
                  <MenuItem value="Leakage">Leakage</MenuItem>
                  <MenuItem value="No leakage">No leakage</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Exhaust Sound</InputLabel>
                <Select
                  name="exhaustSound"
                  value={exhaustSound}
                  onChange={(e) => setExhaustSound(e.target.value)}
                  label="exhaustSound"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Radiator</InputLabel>
                <Select
                  name="radiator"
                  value={radiator}
                  onChange={(e) => setRadiator(e.target.value)}
                  label="radiator"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Front Right Disk</InputLabel>
                <Select
                  name="frontRightDisk"
                  value={frontRightDisk}
                  onChange={(e) => setFrontRightDisk(e.target.value)}
                  label="frontRightDisk"
                  required
                  fullWidth
                >
                  <MenuItem value="Smooth">Smooth</MenuItem>
                  <MenuItem value="Not smooth">Not smooth</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Spare Tyre</InputLabel>
                <Select
                  name="spareTyre"
                  value={spareTyre}
                  onChange={(e) => setSpareTyre(e.target.value)}
                  label="spareTyre"
                  required
                  fullWidth
                >
                  <MenuItem value="Present">Present</MenuItem>
                  <MenuItem value="Not Present">Not Present</MenuItem>
                </Select>
              </FormControl>

              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Tools</InputLabel>
                <Select
                  name="tools"
                  value={tools}
                  onChange={(e) => setTools(e.target.value)}
                  label="tools"
                  required
                  fullWidth
                >
                  <MenuItem value="Present">Present</MenuItem>
                  <MenuItem value="Not Present">Not Present</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>

              <FormControl fullWidth size="small">
                <InputLabel>AC Fitted</InputLabel>
                <Select
                  name="acFitted"
                  value={acFitted}
                  onChange={(e) => setAcFitted(e.target.value)}
                  label="acFitted"
                  required
                  fullWidth
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>AC Operational</InputLabel>
                <Select
                  name="acOperational"
                  value={acOperational}
                  onChange={(e) => setAcOperational(e.target.value)}
                  label="acOperational"
                  required
                  fullWidth
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Blower</InputLabel>
                <Select
                  name="blower"
                  value={blower}
                  onChange={(e) => setBlower(e.target.value)}
                  label="blower"
                  required
                  fullWidth
                >
                  <MenuItem value="Excellent">Excellent</MenuItem>
                  <MenuItem value="Good">Good</MenuItem>
                  <MenuItem value="Satisfactory">Satisfactory</MenuItem>
                  <MenuItem value="Bad">Bad</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Right Tail Light Working</InputLabel>
                <Select
                  name="rightTailLightWorking"
                  value={rightTailLightWorking}
                  onChange={(e) => setRightTailLightWorking(e.target.value)}
                  label="rightTailLightWorking"
                  required
                  fullWidth
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* ------------------------------------------------------------------------------------------------------ */}
            <div className="col-lg-10 center-div14 mt-3">
              <FormControl fullWidth size="small">
                <InputLabel>Belts</InputLabel>
                <Select
                  name="belts"
                  value={belts}
                  onChange={(e) => setBelts(e.target.value)}
                  label="belts"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Wires</InputLabel>
                <Select
                  name="wires"
                  value={wires}
                  onChange={(e) => setWires(e.target.value)}
                  label="wires"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Engine Blow</InputLabel>
                <Select
                  name="engineBlow"
                  value={engineBlow}
                  onChange={(e) => setEngineBlow(e.target.value)}
                  label="engineBlow"
                  required
                  fullWidth
                >
                  <MenuItem value="Present">Present</MenuItem>
                  <MenuItem value="Not present">Not present</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Engine Noise</InputLabel>
                <Select
                  name="engineNoise"
                  value={engineNoise}
                  onChange={(e) => setEngineNoise(e.target.value)}
                  label="engineNoise"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Engine Vibration</InputLabel>
                <Select
                  name="engineVibration"
                  value={engineVibration}
                  onChange={(e) => setEngineVibration(e.target.value)}
                  label="engineVibration"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Cold Start</InputLabel>
                <Select
                  name="coldStart"
                  value={coldStart}
                  onChange={(e) => setColdStart(e.target.value)}
                  label="coldStart"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Engine Mounts</InputLabel>
                <Select
                  name="engineMounts"
                  value={engineMounts}
                  onChange={(e) => setEngineMounts(e.target.value)}
                  label="engineMounts"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Pulleys</InputLabel>
                <Select
                  name="pulleys"
                  value={pulleys}
                  onChange={(e) => setPulleys(e.target.value)}
                  label="pulleys"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Hoses</InputLabel>
                <Select
                  name="hoses"
                  value={hoses}
                  onChange={(e) => setHoses(e.target.value)}
                  label="hoses"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Starter Operation</InputLabel>
                <Select
                  name="starterOperation"
                  value={starterOperation}
                  onChange={(e) => setStarterOperation(e.target.value)}
                  label="starterOperation"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Not ok">Not ok</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Cooling</InputLabel>
                <Select
                  name="cooling"
                  value={cooling}
                  onChange={(e) => setCooling(e.target.value)}
                  label="cooling"
                  required
                  fullWidth
                >
                  <MenuItem value="Excellent">Excellent</MenuItem>
                  <MenuItem value="Good">Good</MenuItem>
                  <MenuItem value="Satisfactory">Satisfactory</MenuItem>
                  <MenuItem value="Bad">Bad</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Heating</InputLabel>
                <Select
                  name="heating"
                  value={heating}
                  onChange={(e) => setHeating(e.target.value)}
                  label="heating"
                  required
                  fullWidth
                >
                  <MenuItem value="Excellent">Excellent</MenuItem>
                  <MenuItem value="Good">Good</MenuItem>
                  <MenuItem value="Satisfactory">Satisfactory</MenuItem>
                  <MenuItem value="Bad">Bad</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Right Headlight Working</InputLabel>
                <Select
                  name="rightHeadLightWorking"
                  value={rightHeadLightWorking}
                  onChange={(e) => setRightHeadLightWorking(e.target.value)}
                  label="rightHeadLightWorking"
                  required
                  fullWidth
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Left Headlight Working</InputLabel>
                <Select
                  name="leftHeadLightWorking"
                  value={leftHeadLightWorking}
                  onChange={(e) => setLeftHeadLightWorking(e.target.value)}
                  label="leftHeadLightWorking"
                  required
                  fullWidth
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>

              <br></br>
              <br></br>

              <FormControl fullWidth size="small">
                <InputLabel>Right Headlight Condition</InputLabel>
                <Select
                  name="rightHeadLightCondition"
                  value={rightHeadLightCondition}
                  onChange={(e) => setRightHeadLightCondition(e.target.value)}
                  label="rightHeadLightCondition"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Repaired">Repaired</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <br></br>
              <FormControl fullWidth size="small">
                <InputLabel>Left Headlight Condition</InputLabel>
                <Select
                  name="leftHeadLightCondition"
                  value={leftHeadLightCondition}
                  onChange={(e) => setLeftHeadLightCondition(e.target.value)}
                  label="leftHeadLightCondition"
                  required
                  fullWidth
                >
                  <MenuItem value="Ok">Ok</MenuItem>
                  <MenuItem value="Repaired">Repaired</MenuItem>
                </Select>
              </FormControl>
              <br></br>
              <button
                type="button"
                onClick={() => handleonclick2()}
                className="send-rep-btn"
              >
                Send Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
