import React from "react";
import { NavBar } from "../Components/Nav";

const Cart = () => {
  return (
    <>
      <NavBar />
      <section class="cart-card-container">
        <div class="card-product-container">
          <div class="cart-card">
            <div class="cart-card-img-container">
              <img
                src="../assets/exotic.png"
                class="cart-card-img"
                alt="Exotica Tea"
              />
            </div>
            <div class="cart-card-content">
              <h2>Exotic Tea</h2>
              <div class="card-price">
                <span class="price-scratch">₹500/-</span>
                <span>₹299/-</span>
              </div>
              <span>45% Off</span>
              <div class="btn-quantity-container">
                <span>Quantity</span>
                <button class="btn-quantity">-</button>
                <span>1</span>
                <button class="btn-quantity">+</button>
              </div>
              <button class="btn btn-primary">Move to Wishlist</button>
              <button class="btn btn-primary-outline">Remove from Cart</button>
            </div>
          </div>
          <div class="cart-card">
            <div class="cart-card-img-container">
              <img
                src="../assets/exotic.png"
                class="cart-card-img"
                alt="Exotica Tea"
              />
            </div>
            <div class="cart-card-content">
              <h2>Exotic Tea</h2>
              <div class="card-price">
                <span class="price-scratch">₹500/-</span>
                <span>₹299/-</span>
              </div>
              <span>45% Off</span>
              <div class="btn-quantity-container">
                <span>Quantity</span>
                <button class="btn-quantity">-</button>
                <span>1</span>
                <button class="btn-quantity">+</button>
              </div>
              <button class="btn btn-primary">Move to Wishlist</button>
              <button class="btn btn-primary-outline">Remove from Cart</button>
            </div>
          </div>
        </div>
        <div class="checkout-card-container">
          <div class="checkout-card">
            <h2>Price Details</h2>
            <hr />
            <div class="cart-price-container">
              <span>Price (2 items)</span>
              <span>₹500</span>
            </div>
            <div class="cart-price-container">
              <span>Discount</span>
              <span>-₹200</span>
            </div>
            <div class="cart-price-container">
              <span>Delivery Charge</span>
              <span>₹50</span>
            </div>
            <hr />
            <div class="cart-price-container">
              <span>Total Amount</span>
              <span>₹350</span>
            </div>
            <hr />
            <span>You will save ₹200 on this order</span>
            <button class="btn btn-primary">Place Order</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
