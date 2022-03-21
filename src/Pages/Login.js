import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../Components/Nav";

const Login = () => {
  return (
    <>
      <NavBar />
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
            />
            <span className="input-title">Password</span>
            <input className="login-input-text" type="password" />
          </div>
          <div className="login-help">
            <div>
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <a href="#">Forgot Password?</a>
          </div>
          <div className="login-btn">
            <button className="btn btn-primary login-btn">Login</button>
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
