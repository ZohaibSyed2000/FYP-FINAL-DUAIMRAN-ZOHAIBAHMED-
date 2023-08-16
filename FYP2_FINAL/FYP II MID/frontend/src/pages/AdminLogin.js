import * as React from "react";
import ADMINLOGINPIC from "../assets/adminlogin.png";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useState } from "react";

import CarContext from "../store/car-context";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState(""),
    [password, setPassword] = React.useState(""),
    [rememberMe, setRememberMe] = React.useState(false);
  const { adminInfo, setAdminInfo } = React.useContext(CarContext);

  const [message, setMessage] = React.useState(null);
  const [valmsg, setvalmsg] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
      rememberMe,
    };
    console.log(data, rememberMe);
    try {
      const res = await axios.post(
        "http://localhost:3009/api/admin/adminlogin",
        data
      );
      console.log(res.data);
      if (rememberMe) {
        localStorage.setItem(
          "adminInfo",
          JSON.stringify({ adminId: res.data.admin._id })
        );
      }

      navigate("/adminpanel");

      console.log(res);
    } catch (e) {
      console.log(e);
      setMessage({
        type: "error",
        text: "Incorrect username or password",
      });
    }
    // navigate("/home");
  };

  //   console.log("Admininfo", adminInfo);

  return (
    <>
      <body>
        <div className="container8 w-50 bg-white rounded shadow">
          <div className="row align-items-stretch mb-5 mg-top">
            {/* <div className="col picture d-none d-lg-block col-md-5  col-xl-6 rounded"></div> */}
            <div className="col  d-none d-lg-block col-md-2 p-5 col-xl-6 rounded height-div">
              <img className="imageadmin" src={ADMINLOGINPIC}></img>
            </div>

            <div className="col bg-white p-5 rounded-end">
              <div class="text-center">
                {/* <img className="logo-signin" /> */}
                <h2 class="fw-bold text-center py-3">Admin Login</h2>
                <br></br> <br></br>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4 text-start">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    required
                    // onSubmit={validateAndSubmitForm}
                  />
                  {valmsg}
                </div>

                <div className="mb-4 text-start">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    required
                  />
                </div>
                <div className="mb-4 form-check text-start">
                  <input
                    type="checkbox"
                    value="remember"
                    class="form-check-input"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label for="remember" class="form-check-label">
                    Remember me
                  </label>
                </div>
                <div class="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          {message && (
            <Snackbar
              open={true}
              autoHideDuration={3000}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              onClose={() => setMessage(null)}
            >
              <Alert
                severity={message.type}
                variant="filled"
                sx={{ width: "100%" }}
                action={message.action}
                onClose={() => setMessage(null)}
              >
                {message.text}
              </Alert>
            </Snackbar>
          )}
        </div>
      </body>
    </>
  );
}
