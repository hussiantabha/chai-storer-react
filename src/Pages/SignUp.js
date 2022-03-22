import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../Components/Nav";

const SignUp = () => {
  return (
    <>
      <NavBar />
      <section className="login-container">
        <div className="card card-head-first login">
          <div className="card-content head-first">
            <h2 className="login-card-title">Signup</h2>
          </div>
          <div className="card-content login-input">
            <span className="input-title">Email</span>
            <input
              className="login-input-text "
              placeholder="username@gmail.com"
            />
            <span className="input-title">Password</span>
            <input className="login-input-text " type="password" />
          </div>
          <div className="login-help">
            <div>
              <input type="checkbox" />
              <span>I accept all Terms & Conditions</span>
            </div>
          </div>
          <div className="login-btn">
            <button className="btn btn-primary login-btn">
              Create New Account
            </button>

            <button className="btn btn-primary-outline login-btn">
              <Link to="/login">Already have an account</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
