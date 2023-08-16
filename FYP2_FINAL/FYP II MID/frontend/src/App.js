import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CarContext from "./store/car-context";
import { Box } from "@mui/material";
import Mainpage from "./pages/Mainpage";
import CarComparison from "./pages/CarComparison";
import CarComparisonID from "./pages/CarComparisonid.jsx";

import AdminPanel from "./pages/AdminPanel";

// import FeaturedAd from "./pages/FeaturedAd";

import Header from "./components/Header";
import Adsuccess from "./pages/Adsuccess";
import ChoicePage from "./pages/ChoicePage";
import FeaturedAd from "./pages/FeaturedAd";
import AdminLogin from "./pages/AdminLogin";
import CarInspection from "./pages/CarInspection";

import ViewFeaturedCar from "./pages/ViewFeaturedCar";

import LoginPage from "./pages/LoginPage";
import ViewCars from "./pages/ViewCars";

import AdPost from "./pages/AdPost";
import MyAds from "./pages/MyAds";
import Ourservices from "./pages/Ourservices";

import About from "./pages/About";
import SignUp from "./pages/SignUp";

import ViewFullAd from "./pages/ViewFullAd";
import Addnotification from "./pages/Addnotification";
import PredictionForm from "./pages/PredictionForm/PredictionForm";
import Inspection from "./pages/viewInspection";
import ReportForm from "./pages/reportForm";
import ViewReport from "./pages/ViewReport";
// import State from './store/CarContextProvider'

const Protect = () => {
  const { userInfo } = useContext(CarContext);

  if (!userInfo) {
    return <Navigate to="/accounts/login" />;
  } else return <Outlet />;
};

const AccountManagement = () => {
  const { userInfo } = useContext(CarContext);

  if (userInfo) {
    return <Navigate to="/home?page=1" />;
  } else return <Outlet />;
};

function App() {
  const { userInfo, setUserInfo } = useContext(CarContext);
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    if (userInfo) return;
    const data = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(data);
    setBusy(false);
  }, [userInfo, setUserInfo]);
  console.log(userInfo);

  return (
    // <State>
    <div className="App">
      <BrowserRouter>
        <Header />
        <div>
          {!busy && (
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route index element={<Mainpage />} />
                <Route path="/about" element={<About />} />
                <Route path="/ourservices" element={<Ourservices />} />
                <Route path="/adminpanel" element={<AdminPanel />} />
                <Route path="/viewinspection" element={<Inspection />} />

                <Route path="/accounts" element={<AccountManagement />}>
                  <Route path="login" element={<LoginPage />} />
                  <Route path="signup" element={<SignUp />} />
                  <Route path="adminlogin" element={<AdminLogin />} />
                </Route>

                <Route path="/home" element={<Protect />}>
                  <Route index element={<ViewCars />} />
                </Route>
                <Route path="/home1" element={<Protect />}>
                  <Route index element={<ChoicePage />} />
                </Route>
                <Route path="/myads" element={<Protect />}>
                  <Route index element={<MyAds />} />
                </Route>
                <Route path="/carinspection/:id" element={<Protect />}>
                  <Route index element={<CarInspection />} />
                </Route>
                <Route path="/carcomparison" element={<Protect />}>
                  <Route index element={<CarComparison />} />
                </Route>
                <Route path="/caridcomparison/:id1/:id2" element={<Protect />}>
                  <Route index element={<CarComparisonID />} />
                </Route>
                <Route path="/viewinspectionreport/:id" element={<Protect />}>
                  <Route index element={<ViewReport />} />
                </Route>
                <Route path="/report/:id1/:id2/:id3" element={<Protect />}>
                  <Route index element={<ReportForm />} />
                </Route>
                <Route path="/postAd" element={<Protect />}>
                  <Route index element={<AdPost />} />
                </Route>
                <Route path="/postfeaturedAd" element={<Protect />}>
                  <Route index element={<FeaturedAd />} />
                </Route>
                <Route path="/adposted" element={<Protect />}>
                  <Route index element={<Adsuccess />} />
                </Route>
                <Route path="/addnotification" element={<Protect />}>
                  <Route index element={<Addnotification />} />
                </Route>

                <Route path="/viewfullad/:id" element={<Protect />}>
                  <Route index element={<ViewFullAd />} />
                </Route>
                <Route path="/viewfeaturedcar/:id" element={<Protect />}>
                  <Route index element={<ViewFeaturedCar />} />
                </Route>
                <Route path="/myads/:id" element={<Protect />}>
                  <Route index element={<MyAds />} />
                </Route>
                <Route
                  path="/login"
                  element={<Navigate to="/accounts/login" />}
                />
                <Route
                  path="/adminlogin"
                  element={<Navigate to="/accounts/adminlogin" />}
                />
                <Route
                  path="/signup"
                  element={<Navigate to="/accounts/signup" />}
                />
                <Route path="/prediction-form" element={<PredictionForm />} />
                <Route path="/*" element={<Navigate to="/" />} />
              </Route>
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </div>
    // </State>
  );
}

export default App;
