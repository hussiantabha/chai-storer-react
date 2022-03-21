import React from "react";
import { NavBar } from "../Components/Nav";

const Cart = () => {
  return (
    <>
      <NavBar />
      <section className="cart-card-container">
        <div className="card-product-container">
          <div className="cart-card">
            <div className="cart-card-img-container">
              <img
                src="../assets/exotic.png"
                className="cart-card-img"
                alt="Exotica Tea"
              />
            </div>
            <div className="cart-card-content">
              <h2>Exotic Tea</h2>
              <div className="card-price">
                <span className="price-scratch">₹500/-</span>
                <span>₹299/-</span>
              </div>
              <span>45% Off</span>
              <div className="btn-quantity-container">
                <span>Quantity</span>
                <button className="btn-quantity">-</button>
                <span>1</span>
                <button className="btn-quantity">+</button>
              </div>
              <button className="btn btn-primary">Move to Wishlist</button>
              <button className="btn btn-primary-outline">
                Remove from Cart
              </button>
            </div>
          </div>
          <div className="cart-card">
            <div className="cart-card-img-container">
              <img
                src="../assets/exotic.png"
                className="cart-card-img"
                alt="Exotica Tea"
              />
            </div>
            <div className="cart-card-content">
              <h2>Exotic Tea</h2>
              <div className="card-price">
                <span className="price-scratch">₹500/-</span>
                <span>₹299/-</span>
              </div>
              <span>45% Off</span>
              <div className="btn-quantity-container">
                <span>Quantity</span>
                <button className="btn-quantity">-</button>
                <span>1</span>
                <button className="btn-quantity">+</button>
              </div>
              <button className="btn btn-primary">Move to Wishlist</button>
              <button className="btn btn-primary-outline">
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
        <div className="checkout-card-container">
          <div className="checkout-card">
            <h2>Price Details</h2>
            <hr />
            <div className="cart-price-container">
              <span>Price (2 items)</span>
              <span>₹500</span>
            </div>
            <div className="cart-price-container">
              <span>Discount</span>
              <span>-₹200</span>
            </div>
            <div className="cart-price-container">
              <span>Delivery Charge</span>
              <span>₹50</span>
            </div>
            <hr />
            <div className="cart-price-container">
              <span>Total Amount</span>
              <span>₹350</span>
            </div>
            <hr />
            <span>You will save ₹200 on this order</span>
            <button className="btn btn-primary">Place Order</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
