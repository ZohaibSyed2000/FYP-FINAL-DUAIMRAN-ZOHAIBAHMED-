import * as React from "react";
import LOGINPIC from "../assets/loginlogo2.png";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useState } from "react";

import CarContext from "../store/car-context";
import axios from "axios";
import { Snackbar, Alert } from "@mui/material";

export default function LoginPage() {
  // const navigate = useNavigate();
  const [email, setEmail] = React.useState(""),
    [password, setPassword] = React.useState(""),
    [rememberMe, setRememberMe] = React.useState(false);

  const [message, setMessage] = React.useState(null);
  const { setUserInfo, userInfo } = React.useContext(CarContext);
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
        "http://localhost:3009/api/auth/login",
        data
      );
      console.log(res.data);
      if (rememberMe) {
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ userId: res.data.user._id })
        );
      }

      setUserInfo({ userId: res.data.user._id });
      // navigate("/home");
      console.log(res);
    } catch (e) {
      setMessage({
        type: "error",
        text: "Incorrect username or password",
      });
    }
    // navigate("/home");
  };

  console.log("Userinfo", userInfo);

  return (
    <>
      <body>
        <div className="container5 w-75 bg-white rounded shadow">
          <div className="row align-items-stretch mb-5 mg-top">
            <div className="col picture d-none d-lg-block col-md-5  col-xl-6 rounded"></div>

            <div className="col bg-white p-5 rounded-end">
              <div class="text-center">
                <img className="logo-signin" src={LOGINPIC} />
                <h2 class="fw-bold text-center py-3">Sign in</h2>
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
                <div class="my-3">
                  <span>
                    Don't have an account?{" "}
                    <Link className="signuplink" to="/signup">
                      Sign Up
                    </Link>
                  </span>
                  <br></br>
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
