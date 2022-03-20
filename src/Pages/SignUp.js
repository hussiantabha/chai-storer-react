import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../Components/Nav";

const SignUp = () => {
  return (
    <>
      <NavBar />
      <section class="login-container">
        <div class="card card-head-first login">
          <div class="card-content head-first">
            <h2 class="login-card-title">Signup</h2>
          </div>
          <div class="card-content login-input">
            <span class="input-title">Email</span>
            <input class="login-input-text " placeholder="username@gmail.com" />
            <span class="input-title">Password</span>
            <input class="login-input-text " type="password" />
          </div>
          <div class="login-help">
            <div>
              <input type="checkbox" />
              <span>I accept all Terms & Conditions</span>
            </div>
          </div>
          <div class="login-btn">
            <button class="btn btn-primary login-btn">
              Create New Account
            </button>

            <button class="btn btn-primary-outline login-btn">
              <Link to="/login">Already have an account</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
