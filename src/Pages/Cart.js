import React, { useContext, useEffect, useState } from "react";
import { NavBar } from "../Components/Nav";
import { FilterContext } from "../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [price, setPrice] = useState({
    price: 0,
    discount: 0,
    total: 0,
    delivery: 0,
  });
  const { userLoggedIn, sortData } = useContext(FilterContext);
  const [user, setUser] = useState(false);
  const token = sessionStorage.getItem("token");
  const getData = async () => {
    try {
      if (token !== null) {
        const response = await fetch("/api/user/cart", {
          method: "GET",
          headers: {
            authorization: token,
          },
        });
        if (response.status === 200) {
          const convertedJSON = await response.json();
          setCart(convertedJSON.cart);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const removeCart = async (product) => {
    try {
      const url = `/api/user/cart/${product._id}`;
      const postData = await fetch(url, {
        method: "DELETE",
        headers: {
          authorization: token,
        },
      });
      const convertedJSON = await postData.json();
      setCart(convertedJSON.cart);
    } catch {}
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
  const moveToWishlist = async (product) => {
    const postData = await fetch("/api/user/wishlist", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        product: product,
      }),
    });
    const convertedJSON = await postData.json();
    removeCart(product);
  };
  const totalPrice = () => {
    let value = cart.reduce((acc, cur) => {
      return (acc = acc + cur.price * cur.qty);
    }, 0);
    const finalTotal = value + 49;
    return finalTotal;
  };

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
        total: totalPrice(),
        discount: discountReduce,
        delivery: cart.length === 0 ? 0 : 49,
      };
    });
    setCartCount(cart.length);
  }, [cart]);
  const url = "https://e-commerce-backend-red-ten.vercel.app/api/hello";
  // const url = "http://localhost:3000/api/hello";
  const withDeliveryCart = [
    ...cart,
    {
      productBrand: "Delivery Charges",
      productDetail: "",
      price: 49,
      qty: 1,
    },
  ];

  const placeOrder = async () => {
    setLoading(true);
    try {
      const goCheckout = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Credentials": "true",
        },
        body: JSON.stringify({
          withDeliveryCart,
        }),
      });
      console.log(goCheckout);
      if (goCheckout.status !== 200 || goCheckout.ok === false) {
        console.log("gadbad");
        toast.error("Something went wrong", {
          position: "top-right",
        });
        setLoading(false);
      } else {
        const convertedJSON = await goCheckout.json();
        window.location.replace(convertedJSON.session.url);
      }
    } catch {
      toast.error("Something went wrong. Try Again!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    }
  };
  // console.log(JSON.stringify(cart));

  return (
    <>
      <NavBar cartCount={cartCount} />
      {/* {token !== null ? <h1>user Exist</h1> : <h1>Not logged in</h1>} */}
      {token !== null ? (
        cart.length === 0 ? (
          <h1 className="cart-heading">No Items in Cart</h1>
        ) : (
          <section className="cart-card-container">
            <div className="card-product-container">
              {cart.map((product) => {
                return (
                  <React.Fragment key={product._id}>
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
                        <button
                          className="btn btn-primary"
                          onClick={() => moveToWishlist(product)}
                        >
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
                  </React.Fragment>
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
                <button className="btn btn-primary" onClick={placeOrder}>
                  {loading ? "Loading..." : "Place Order"}
                </button>
              </div>
            </div>
          </section>
        )
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default Cart;
