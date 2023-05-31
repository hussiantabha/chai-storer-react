import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FilterContext } from "../Context/Context";
import { AppContext } from "../Context/Context";
import { toast } from "react-hot-toast";
import "../css/navbar.css";
const NavBar = ({ wishlistCount, cartCount }) => {
  const [showHam, setShowHam] = useState(false);
  const [check, setCheck] = useState(false);
  const token = sessionStorage.getItem("token");
  const { notiState } = useContext(AppContext);
  // console.log(notiState);
  const logout = () => {
    sessionStorage.clear();
    setCheck((prev) => (prev === true ? false : true));
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
              {/* <i className="fas fa-heart nav-cart"></i> */}
              <img src="../assets/heart.svg" />
              <span className="badge">{notiState.wishlist}</span>
            </div>
          </Link>
          <Link to="/cart">
            <div className="badges">
              {/* <i className="fas fa-shopping-cart nav-cart"></i> */}
              <img src="../assets/cart-alt.svg" />
              <span className="badge">{notiState.cart}</span>
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
