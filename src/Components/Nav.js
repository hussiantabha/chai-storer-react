import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
const NavBar = () => {
  return (
    <>
      <nav class="navbar nav">
        <Link to="/">
          <div>
            <h2>The Chai Store</h2>
          </div>
        </Link>
        <div className="nav-search-bar">
          <input
            className="input-text"
            // style="font-family: FontAwesome;"
            // placeholder="&#xf002 Search..."
          />
        </div>
        <div class="nav-link-container">
          <button className="btn btn-primary-outline"> Login </button>
          <div class="badges">
            <i class="fas fa-heart nav-cart"></i>
            <span class="badge">2</span>
          </div>
          <div class="badges">
            <i class="fas fa-shopping-cart nav-cart"></i>
            <span class="badge">2</span>
          </div>
        </div>
        <div class="nav-hamburger">
          <i class="fas fa-bars hamburger-icon"></i>
        </div>
      </nav>
    </>
  );
};

export { NavBar };
