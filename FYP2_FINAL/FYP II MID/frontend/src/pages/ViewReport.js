
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";

export default function ViewReport() {
  const params = useParams();
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
  const [rearLeftShock, setRearLeftShock] = useState("");
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

  const getMultipleFilesList = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3009/api/inspect/getReport/${params.id}`
      );
      console.log(res);
      setExteriorBody(res.data.data.exteriorBody);
      setEngineTransmissionClutch(res.data.data.engineTransmissionClutch);
      setSuspensionSteering(res.data.data.suspensionSteering);
      setInterior(res.data.data.interior);
      setAcHeater(res.data.data.acHeater);
      setBrakes(res.data.data.brakes);
      setTyres(res.data.data.tyres);
      setElectronics(res.data.data.electronics);
      setRadiatorCoreSupport(res.data.data.radiatorCoreSupport);
      setRightFrontRail(res.data.data.rightFrontRail);
      setLeftFrontRail(res.data.data.leftFrontRail);
      setRightAPillar(res.data.data.rightAPillar);
      setRightBPillar(res.data.data.rightBPillar);
      setRightCPillar(res.data.data.rightCPillar);
      setRightDPillar(res.data.data.rightDPillar);
      setLeftAPillar(res.data.data.leftAPillar);
      setLeftBPillar(res.data.data.leftBPillar);
      setLeftCPillar(res.data.data.leftCPillar);
      setLeftDPillar(res.data.data.leftDPillar);
      setEngineOilLeakage(res.data.data.engineOilLeakage);
      setTransmissionOilLeakage(res.data.data.transmissionOilLeakage);
      setCoolantLeakage(res.data.data.coolantLeakage);
      setBrakeOilLeakage(res.data.data.brakeOilLeakage);
      setExhaustSound(res.data.data.exhaustSound);
      setRadiator(res.data.data.radiator);
      setBelts(res.data.data.belts);
      setWires(res.data.data.wires);
      setEngineBlow(res.data.data.engineBlow);
      setEngineNoise(res.data.data.engineNoise);
      setEngineVibration(res.data.data.engineVibration);
      setColdStart(res.data.data.coldStart);
      setEngineMounts(res.data.data.engineMounts);
      setPulleys(res.data.data.pulleys);
      setHoses(res.data.data.hoses);
      setStarterOperation(res.data.data.starterOperation);
      setFrontRightDisk(res.data.data.frontRightDisk);
      setFrontLeftDisk(res.data.data.frontLeftDisk);
      setFrontRightBrakePad(res.data.data.frontRightBrakePad);
      setFrontLeftBrakePad(res.data.data.frontLeftBrakePad);
      setParking(res.data.data.parking);
      setRightBallJoint(res.data.data.rightBallJoint);
      setLeftBallJoint(res.data.data.leftBallJoint);
      setRightZLink(res.data.data.rightZLink);
      setLeftZLink(res.data.data.leftZLink);
      setRightTieRodEnd(res.data.data.rightTieRodEnd);
      setLeftTieRodEnd(res.data.data.leftTieRodEnd);
      setFrontRightBushes(res.data.data.frontRightBushes);
      setFrontLeftBushes(res.data.data.frontLeftBushes);
      setRearRightBushes(res.data.data.rearRightBushes);
      setRearLeftBushes(res.data.data.rearLeftBushes);
      setFrontRightShock(res.data.data.frontRightShock);
      setFrontLeftShock(res.data.data.frontLeftShock);
      setRearRightShock(res.data.data.rearRightShock);
      setRearLeftShock(res.data.data.rearLeftShock);
      setSpareTyre(res.data.data.spareTyre);
      setTools(res.data.data.tools);
      setAcFitted(res.data.data.acFitted);
      setAcOperational(res.data.data.acOperational);
      setBlower(res.data.data.blower);
      setCooling(res.data.data.cooling);
      setHeating(res.data.data.heating);
      setRightHeadLightWorking(res.data.data.rightHeadLightWorking);
      setLeftHeadLightWorking(res.data.data.leftHeadLightWorking);
      setRightHeadLightCondition(res.data.data.rightHeadLightCondition);
      setLeftHeadLightCondition(res.data.data.leftHeadLightCondition);
      setRightTailLightWorking(res.data.data.rightTailLightWorking);
      setLeftTailLightWorking(res.data.data.leftTailLightWorking);
      setRightTailLightCondition(res.data.data.rightTailLightCondition);
      setLeftTailLightCondition(res.data.data.leftTailLightCondition);
      setFogLightsWorking(res.data.data.fogLightsWorking);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMultipleFilesList();
  }, []);

  return (
    <div>
      <div className="main-white-div">
        <p className="rep-1">Inspection Report</p>
        <div className="p-main">
          <p>Exterior & Body</p>
          <div class="progress-bars">
            <div class="progress-bar">
              <progress value={exteriorBody} max="100"></progress>
            </div>
            <p className="percent">
              {exteriorBody}
              {"%"}
            </p>
          </div>
          <p className="engine">Engine/ Transmission/ Clutch</p>
          <div class="progress-bars2">
            <div class="progress-bar">
              <progress value={engineTransmissionClutch} max="100"></progress>
            </div>
            <p className="percent">
              {engineTransmissionClutch}
              {"%"}
            </p>
          </div>
          <p className="sus">Suspension / Steering</p>
          <div class="progress-bars3">
            <div class="progress-bar">
              <progress value={suspensionSteering} max="100"></progress>
            </div>
            <p className="percent">
              {suspensionSteering}
              {"%"}
            </p>
          </div>
          <p className="interior">Interior</p>
          <div class="progress-bars4">
            <div class="progress-bar">
              <progress value={interior} max="100"></progress>
            </div>
            <p className="percent">
              {interior}
              {"%"}
            </p>
          </div>
          <p className="ac">AC / Heater</p>
          <div class="progress-bars5">
            <div class="progress-bar">
              <progress value={acHeater} max="100"></progress>
            </div>
            <p className="percent">
              {acHeater}
              {"%"}
            </p>
          </div>
          <p className="brakes">Brakes</p>
          <div class="progress-bars6">
            <div class="progress-bar">
              <progress value={brakes} max="100"></progress>
            </div>
            <p className="percent">
              {brakes}
              {"%"}
            </p>
          </div>
          <p className="tyres">Tyres</p>
          <div class="progress-bars7">
            <div class="progress-bar">
              <progress value={tyres} max="100"></progress>
            </div>
            <p className="percent">
              {tyres}
              {"%"}
            </p>
          </div>
          <p className="electronics">Electronics</p>
          <div class="progress-bars8">
            <div class="progress-bar">
              <progress value={electronics} max="100"></progress>
            </div>
            <p className="percent">
              {electronics}
              {"%"}
            </p>
          </div>
        </div>

        <div className="side-2-div">
          <div className="p-main2">
            <p>Radiator Core Support: {radiatorCoreSupport}</p>
            <p>Left Front Rail: {leftFrontRail}</p>
            <p>Right Front Rail: {rightFrontRail}</p>
            <p>Left A Piller: {leftAPillar}</p>
            <p>Right A Pillar: {rightAPillar}</p>
            <p>Left B Piller: {leftBPillar}</p>
            <p>Right B Pillar: {rightBPillar}</p>
            <p>Left C Piller: {leftCPillar}</p>
            <p>Right C Pillar: {rightCPillar}</p>
            <p>Left D Piller: {leftDPillar}</p>
            <p>Right D Pillar: {rightDPillar}</p>
            <p>Engine Oil Level: {engineOilLevel}</p>
            <p>Engine Oil Leakage: {engineOilLeakage}</p>
          </div>
        </div>
        <div className="p-main3">
          <p>Transmission Oil Leakage: {transmissionOilLeakage}</p>
          <p>Coolant Leakage: {coolantLeakage}</p>
          <p>Brake Oil Leakage: {brakeOilLeakage}</p>
          <p>Engine Blow: {engineBlow}</p>
          <p>Engine Noise: {engineNoise}</p>
          <p>Engine Vibration: {engineVibration}</p>
          <p>Cold Start: {coldStart}</p>
          <p>Engine Mounts: {engineMounts}</p>
          <p>Pulleys: {pulleys}</p>
          <p>Exhaust Sound: {exhaustSound}</p>
          <p>Radiator: {radiator}</p>
          <p>Belts: {belts}</p>
          <p>Wires: {wires}</p>
        </div>

        <div className="p-main4">
          <p>Front Left BrakePad: {frontLeftBrakePad}</p>
          <p>Front Right BrakePad: {frontRightBrakePad}</p>
          <p>Starter Operation: {starterOperation}</p>
          <p>Front Left Disk: {frontLeftDisk}</p>
          <p>Front Right Disk: {frontRightDisk}</p>
          <p>Left Ball Joint: {leftBallJoint}</p>
          <p>Right Ball Joint: {rightBallJoint}</p>
          <p>Left Z Link: {leftZLink}</p>
          <p>Right Z Link: {rightZLink}</p>
          <p>Left Tie RodEnd: {leftTieRodEnd}</p>
          <p>Right Tie RodEnd: {rightTieRodEnd}</p>
          <p>Parking: {parking}</p>
        </div>

        <div className="p-main5">
          <p>Front Left Bushes: {frontLeftBushes}</p>
          <p>Front Right Bushes: {frontRightBushes}</p>
          <p>Rear Left Bushes: {rearLeftBushes}</p>
          <p>Rear Right Bushes: {rearRightBushes}</p>
          <p>Front Left Shock: {frontLeftShock}</p>
          <p>Front Right Shock: {frontRightShock}</p>
          <p>Rear Left Shock: {rearLeftShock}</p>
          <p>Rear Right Shock: {rearRightShock}</p>
          <p>Spare Tyre: {spareTyre}</p>
          <p>Tools: {tools}</p>
          <p>AC Fitted: {acFitted}</p>
          <p>AC Operational: {acOperational}</p>
        </div>

        <div className="p-main6">
          <p>Cooling: {cooling}</p>
          <p>Heating: {heating}</p>
          <p>Left HeadLight: {leftHeadLightWorking}</p>
          <p>Right HeadLight: {rightHeadLightWorking}</p>
          <p>Left TailLight: {leftTailLightWorking}</p>
          <p>Right TailLight: {rightTailLightWorking}</p>
          <p>Left HeadLight Condition: {leftHeadLightCondition}</p>
          <p>Right HeadLight Condition: {rightHeadLightCondition}</p>
          <p>Left TailLight Condition: {leftTailLightCondition}</p>
          <p>Right TailLight Condition: {rightTailLightCondition}</p>
          <p>Fog Lights Working: {fogLightsWorking}</p>
        </div>
      </div>

      {/* <NumberProgressBar number={exteriorBody}  number={interior}/> */}
    </div>
  );
}
