import React, { useContext } from "react";
import { NavBar } from "../Components/Nav";
import { FilterContext } from "../Context/Context";

const Wishlist = () => {
  const { userLoggedIn } = useContext(FilterContext);
  return (
    <>
      <NavBar />
      {userLoggedIn ? (
        <main>
          <h1 className="wishlist-display-title">My Wishlist</h1>
          <section className="wishlist-card-container">
            <div className="wishlist-card">
              <div className="wishlist-card-img-container">
                <img
                  src="../assets/exotic.png"
                  alt="Exotic Tea"
                  className="wishlist-card-img"
                />
              </div>
              <div className="wishlist-card-content">
                <h2 className="card-title">Exotic Tea</h2>
                <button className="btn btn-primary wishlist-btn">
                  Move to Cart
                </button>
              </div>
              <button className="btn-primary card-like-btn">
                <i className="fas fa-heart"></i>
              </button>
            </div>
            <div className="wishlist-card">
              <div className="wishlist-card-img-container">
                <img
                  src="../assets/exotic.png"
                  alt="Exotic Tea"
                  className="wishlist-card-img"
                />
              </div>
              <div className="wishlist-card-content">
                <h2 className="card-title">Exotic Tea</h2>
                <button className="btn btn-primary wishlist-btn">
                  Move to Cart
                </button>
              </div>
              <button className="btn-primary card-like-btn">
                <i className="fas fa-heart"></i>
              </button>
            </div>
            <div className="wishlist-card">
              <div className="wishlist-card-img-container">
                <img
                  src="../assets/exotic.png"
                  alt="Exotic Tea"
                  className="wishlist-card-img"
                />
              </div>
              <div className="wishlist-card-content">
                <h2 className="card-title">Exotic Tea</h2>
                <button className="btn btn-primary wishlist-btn">
                  Move to Cart
                </button>
              </div>
              <button className="btn-primary card-like-btn">
                <i className="fas fa-heart"></i>
              </button>
            </div>
            <div className="wishlist-card">
              <div className="wishlist-card-img-container">
                <img
                  src="../assets/exotic.png"
                  alt="Exotic Tea"
                  className="wishlist-card-img"
                />
              </div>
              <div className="wishlist-card-content">
                <h2 className="card-title">Exotic Tea</h2>
                <button className="btn btn-primary wishlist-btn">
                  Move to Cart
                </button>
              </div>
              <button className="btn-primary card-like-btn">
                <i className="fas fa-heart"></i>
              </button>
            </div>
          </section>
        </main>
      ) : (
        <h2>User Not Logged In</h2>
      )}
    </>
  );
};

export default Wishlist;
