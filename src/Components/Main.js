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
      <section class="hero-card-container">
        <div class="hero-card">
          <div class="hero-card-img-container">
            <img src="../assets/tata-tea-premium.png" class="hero-card-img" />
          </div>
          <div class="hero-card-content">
            <h3>Exotic Tea</h3>
            <p class="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              officiis necessitatibus sint mollitia? Laudantium, quia?
            </p>
            <Link to="/products" className="cta">
              <a class="btn btn-primary hero-btn">Buy Now</a>
            </Link>
          </div>
        </div>
        <div class="hero-card">
          <div class="hero-card-img-container">
            <img src="../assets/tea-sachet.png" class="hero-card-img" />
          </div>
          <div class="hero-card-content">
            <h3>Premium Tea</h3>
            <p class="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              officiis necessitatibus sint mollitia? Laudantium, quia?
            </p>
            <Link to="/products" className="cta">
              <a class="btn btn-primary hero-btn">Buy Now</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export { Main };

{
  /* <p>No matter where you are in the world, you are at home when tea is served</p>; */
}
