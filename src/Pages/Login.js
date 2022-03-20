import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../Components/Nav";

const Login = () => {
  return (
    <>
      <NavBar />
      <section class="login-container">
        <div class="card card-head-first login">
          <div class="card-content head-first">
            <h2 class="login-card-title">Login</h2>
          </div>
          <div class="card-content login-input">
            <span class="input-title">Email</span>
            <input class="login-input-text" placeholder="username@gmail.com" />
            <span class="input-title">Password</span>
            <input class="login-input-text" type="password" />
          </div>
          <div class="login-help">
            <div>
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <a href="#">Forgot Password?</a>
          </div>
          <div class="login-btn">
            <button class="btn btn-primary login-btn">Login</button>
            <Link to="/signup" class="btn btn-primary-outline login-btn">
              Create New Account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
