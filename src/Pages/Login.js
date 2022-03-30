import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../Components/Nav";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const loginFunc = async () => {
    try {
      const postData = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginInput),
      });
      const convertedJSON = await postData.json();
      console.log(convertedJSON);
      sessionStorage.setItem("token", convertedJSON.encodedToken);
      setLoginInput({ email: "", password: "" });
      navigate("/cart");
    } catch (error) {}
  };
  // console.log(loginInput);
  return (
    <>
      <NavBar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <section className="login-container">
        <div className="card card-head-first login">
          <div className="card-content head-first">
            <h2 className="login-card-title">Login</h2>
          </div>
          <div className="card-content login-input">
            <span className="input-title">Email</span>
            <input
              className="login-input-text"
              placeholder="username@gmail.com"
              value={loginInput.email}
              onChange={(e) =>
                setLoginInput((prevState) => {
                  return { ...prevState, email: e.target.value };
                })
              }
            />
            <span className="input-title">Password</span>
            <input
              className="login-input-text"
              type="password"
              value={loginInput.password}
              onChange={(e) =>
                setLoginInput((prevState) => {
                  return { ...prevState, password: e.target.value };
                })
              }
            />
          </div>
          <div className="login-help">
            <div>
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <a href="#">Forgot Password?</a>
          </div>
          <div className="login-btn">
            <button className="btn btn-primary login-btn" onClick={loginFunc}>
              Login
            </button>
            <Link to="/signup" className="btn btn-primary-outline login-btn">
              Create New Account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
