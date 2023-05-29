import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FilterContext } from "../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "../css/navbar.css";
const NavBar = ({ wishlistCount, cartCount }) => {
  const [showHam, setShowHam] = useState(false);
  const token = sessionStorage.getItem("token");
  const logout = () => {
    sessionStorage.clear();
    toast.success("User Logged Out.", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <nav className="navbar nav ">
        <Link to="/">
          <div>
            <h2 className="nav-header">The Chai Store</h2>
          </div>
        </Link>
        <div className="nav-search-bar">
          <input
            className="input-text"
            // style="font-family: FontAwesome;"
            // placeholder="&#xf002 Search..."
          />
        </div>
        {/* className={"nav-link-container nav-hamburger-active"} */}
        <div
          className={showHam ? "nav-hamburger-active" : "nav-link-container"}
        >
          {token !== null ? (
            <button className="btn btn-primary-outline" onClick={logout}>
              Logout{" "}
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary-outline"> Login </button>
            </Link>
          )}

          <Link to="/wishlist">
            <div className="badges">
              <i className="fas fa-heart nav-cart"></i>
              <span className="badge">
                {wishlistCount === undefined ? 0 : wishlistCount}
              </span>
            </div>
          </Link>
          <Link to="/cart">
            <div className="badges">
              <i className="fas fa-shopping-cart nav-cart"></i>
              <span className="badge">
                {cartCount === undefined ? 0 : cartCount}
              </span>
            </div>
          </Link>
        </div>
        <div
          className="nav-hamburger"
          onClick={() => setShowHam((prevState) => !prevState)}
        >
          <i className="fas fa-bars hamburger-icon"></i>
        </div>
      </nav>
    </>
  );
};

export { NavBar };
