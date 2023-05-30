import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Main = () => {
  return (
    <>
      <section className="hero-img-container">
        <div className="hero-content-container">
          <h1>
            No matter where you are in the world, you are at <span>home</span>{" "}
            when <span>tea</span> is served
          </h1>
          <Link to="/products">
            <button className="btn btn-primary hero-img-btn">Buy Now</button>
          </Link>
        </div>
        <img src="../assets/chai.jpg" className="hero-img" />
      </section>
      <section className="hero-card-container">
        <div className="hero-card">
          <div className="hero-card-img-container">
            <img
              src="../assets/tata-tea-premium.png"
              className="hero-card-img"
            />
          </div>
          <div className="hero-card-content">
            <h3>Exotic Tea</h3>
            <p className="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              officiis necessitatibus sint mollitia? Laudantium, quia?
            </p>
            <Link to="/products" className="cta">
              <p className="btn btn-primary hero-btn">Buy Now</p>
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-img-container">
            <img src="../assets/tea-sachet.png" className="hero-card-img" />
          </div>
          <div className="hero-card-content">
            <h3>Premium Tea</h3>
            <p className="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              officiis necessitatibus sint mollitia? Laudantium, quia?
            </p>
            <Link to="/products" className="cta">
              <p className="btn btn-primary hero-btn">Buy Now</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export { Main };
