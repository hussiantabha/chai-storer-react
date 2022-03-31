import React, { useContext, useEffect, useState } from "react";
import { NavBar } from "../Components/Nav";
import { FilterContext } from "../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState({
    price: 0,
    discount: 0,
    total: 0,
    delivery: 0,
  });
  const { userLoggedIn, sortData } = useContext(FilterContext);

  const token = sessionStorage.getItem("token");
  const getData = async () => {
    const response = await fetch("/api/user/cart", {
      method: "GET",
      headers: {
        authorization: token,
      },
    });
    const convertedJSON = await response.json();
    setCart(convertedJSON.cart);
  };
  const removeCart = async (product) => {
    const url = `/api/user/cart/${product._id}`;
    const postData = await fetch(url, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });
    const convertedJSON = await postData.json();
    setCart(convertedJSON.cart);
  };

  const increaseQty = async (product) => {
    const postData = await fetch(`/api/user/cart/${product._id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        action: {
          type: "increment",
        },
      }),
    });
    const convertedJSON = await postData.json();
  };
  const decreaseQty = async (product) => {
    const postData = await fetch(`/api/user/cart/${product._id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        action: {
          type: "decrement",
        },
      }),
    });
    const convertedJSON = await postData.json();
  };
  const totalPrice = cart.reduce((acc, cur) => {
    return (acc = acc + cur.price * cur.qty);
  }, 0);
  const priceReduce = cart.reduce((acc, cur) => {
    return acc + cur.originalPrice * cur.qty;
  }, 0);
  const discountReduce = cart.reduce((acc, cur) => {
    return (acc = acc + (cur.originalPrice - cur.price) * cur.qty);
  }, 0);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [cart, price]);
  useEffect(() => {
    setPrice((prevState) => {
      return {
        ...prevState,
        price: priceReduce,
        total: totalPrice,
        discount: discountReduce,
        delivery: prevState.total > 500 ? 0 : 49,
      };
    });
  }, [cart]);
  const count = cart.length;
  return (
    <>
      <NavBar cartCount={count} />
      <section className="cart-card-container">
        <div className="card-product-container">
          {cart.map((product) => {
            return (
              <>
                <div className="cart-card">
                  <div className="cart-card-img-container">
                    <img
                      src={product.imgURL}
                      className="cart-card-img"
                      alt="Exotica Tea"
                    />
                  </div>
                  <div className="cart-card-content">
                    <h2>{product.productBrand}</h2>
                    <div className="card-price">
                      <span className="price-scratch">
                        ₹{product.originalPrice}
                      </span>
                      <span>₹{product.price}</span>
                    </div>
                    {/* <span>45% Off</span> */}
                    <div className="btn-quantity-container">
                      <span>Quantity</span>
                      <button
                        className="btn-quantity"
                        onClick={() => decreaseQty(product)}
                      >
                        -
                      </button>
                      <span>{product.qty}</span>
                      <button
                        className="btn-quantity"
                        onClick={() => increaseQty(product)}
                      >
                        +
                      </button>
                    </div>
                    <button className="btn btn-primary">
                      Move to Wishlist
                    </button>
                    <button
                      className="btn btn-primary-outline"
                      onClick={() => removeCart(product)}
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="checkout-card-container">
          <div className="checkout-card">
            <h2>Price Details</h2>
            <hr />
            <div className="cart-price-container">
              <span>Price ({cart.length} items)</span>
              <span>₹{price.price}</span>
            </div>
            <div className="cart-price-container">
              <span>Discount</span>
              <span>-₹{price.discount}</span>
            </div>
            <div className="cart-price-container">
              <span>Delivery Charge</span>
              <span>₹{price.delivery}</span>
            </div>
            <hr />
            <div className="cart-price-container">
              <span>Total Amount</span>
              <span>₹{price.total}</span>
            </div>
            <hr />
            <span>You will save ₹{price.discount} on this order</span>
            <button className="btn btn-primary">Place Order</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
