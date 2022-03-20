import React from "react";
import { NavBar } from "../Components/Nav";

const Wishlist = () => {
  return (
    <>
      <NavBar />
      <main>
        <h1 class="wishlist-display-title">My Wishlist</h1>
        <section class="wishlist-card-container">
          <div class="wishlist-card">
            <div class="wishlist-card-img-container">
              <img
                src="../assets/exotic.png"
                alt="Exotic Tea"
                class="wishlist-card-img"
              />
            </div>
            <div class="wishlist-card-content">
              <h2 class="card-title">Exotic Tea</h2>
              <button class="btn btn-primary wishlist-btn">Move to Cart</button>
            </div>
            <button class="btn-primary card-like-btn">
              <i class="fas fa-heart"></i>
            </button>
          </div>
          <div class="wishlist-card">
            <div class="wishlist-card-img-container">
              <img
                src="../assets/exotic.png"
                alt="Exotic Tea"
                class="wishlist-card-img"
              />
            </div>
            <div class="wishlist-card-content">
              <h2 class="card-title">Exotic Tea</h2>
              <button class="btn btn-primary wishlist-btn">Move to Cart</button>
            </div>
            <button class="btn-primary card-like-btn">
              <i class="fas fa-heart"></i>
            </button>
          </div>
          <div class="wishlist-card">
            <div class="wishlist-card-img-container">
              <img
                src="../assets/exotic.png"
                alt="Exotic Tea"
                class="wishlist-card-img"
              />
            </div>
            <div class="wishlist-card-content">
              <h2 class="card-title">Exotic Tea</h2>
              <button class="btn btn-primary wishlist-btn">Move to Cart</button>
            </div>
            <button class="btn-primary card-like-btn">
              <i class="fas fa-heart"></i>
            </button>
          </div>
          <div class="wishlist-card">
            <div class="wishlist-card-img-container">
              <img
                src="../assets/exotic.png"
                alt="Exotic Tea"
                class="wishlist-card-img"
              />
            </div>
            <div class="wishlist-card-content">
              <h2 class="card-title">Exotic Tea</h2>
              <button class="btn btn-primary wishlist-btn">Move to Cart</button>
            </div>
            <button class="btn-primary card-like-btn">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Wishlist;
