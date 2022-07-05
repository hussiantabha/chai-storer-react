import React, { useContext, useState } from "react";
import { FilterContext } from "../Context/Context";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillStarFill } from "react-icons/bs";
const ListingProducts = () => {
  const { products, filterState, dispatch, sortData, userLoggedIn } =
    useContext(FilterContext);
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const token = sessionStorage.getItem("token");
  const addtoCart = async (product) => {
    if (userLoggedIn) {
      const postData = await fetch("/api/user/cart", {
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
      toast.success("Product Added To Cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      navigate("/login");
    }
  };
  const addToWishlist = async (product) => {
    if (userLoggedIn) {
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
      console.log(convertedJSON);
      toast.success("Product Added To Wishlist", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <body className="product-body">
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />

        <aside className={showSidebar ? "show-sidebar" : "filter-sidebar"}>
          <section className="filters">
            <div className="product-search-div">
              <input
                type="search"
                className="input-text-search"
                placeholder="search Product"
              />
              <button
                className="btn-primary-outline px-1"
                onClick={() => dispatch({ type: "clearAll" })}
              >
                Clear All
              </button>
            </div>
            <div>
              <input
                type="range"
                min="1"
                max="2100"
                onChange={(e) =>
                  dispatch({
                    type: "RANGE",
                    payload: { value: e.target.value },
                  })
                }
                className="filter-slider"
              />
              <div className="slider-span">
                <span>0</span>
                <span>500</span>
                <span>3000</span>
              </div>
            </div>
            <div className="filter-category">
              <h3>Category</h3>
              <div>
                <input
                  type="checkbox"
                  checked={filterState.categoryValue}
                  onClick={(e) =>
                    dispatch({
                      type: "category",
                      payload: { value: "normal", check: e.target.checked },
                    })
                  }
                />
                <span>Day To Day Tea</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={filterState.categoryValue}
                  onClick={(e) =>
                    dispatch({
                      type: "category",
                      payload: { value: "exotic", check: e.target.checked },
                    })
                  }
                />
                <span>Exotic Tea</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={filterState.categoryValue}
                  onClick={(e) =>
                    dispatch({
                      type: "category",
                      payload: { value: "premium", check: e.target.checked },
                    })
                  }
                />
                <span>Premium Tea</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  checked={filterState.categoryValue}
                  onClick={(e) =>
                    dispatch({
                      type: "category",
                      payload: { value: "healthy", check: e.target.checked },
                    })
                  }
                />
                <span>Healthy Tea</span>
              </div>
            </div>
            <div className="filter-category">
              <h3>Rating</h3>
              {/* {[4, 3, 2, 1].map((item) => {
                return (
                  <div>
                    <input
                      type="checkbox"
                      checked={filterState.ratingValue}
                      onClick={(e) =>
                        dispatch({
                          type: "RATING",
                          payload: { check: e.target.checked, value: item },
                        })
                      }
                    />
                    <span>{item} star & above</span>
                  </div>
                );
              })} */}
              <div>
                <input
                  type="checkbox"
                  onClick={(e) =>
                    dispatch({
                      type: "RATING",
                      payload: { check: e.target.checked, value: 4 },
                    })
                  }
                />
                <span>4 star & above</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  onClick={(e) =>
                    dispatch({
                      type: "RATING",
                      payload: { check: e.target.checked, value: 3 },
                    })
                  }
                />
                <span>3 star & above</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  onClick={(e) =>
                    dispatch({
                      type: "RATING",
                      payload: { check: e.target.checked, value: 2 },
                    })
                  }
                />
                <span>2 star & above</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  onClick={(e) =>
                    dispatch({
                      type: "RATING",
                      payload: { check: e.target.checked, value: 1 },
                    })
                  }
                />
                <span>1 star & above</span>
              </div>
            </div>
            <div className="filter-category">
              <h3>Sort By</h3>
              <div>
                <input
                  type="radio"
                  name="value"
                  onClick={() =>
                    dispatch({ type: "SORT", payload: { sort: "lowtoHigh" } })
                  }
                />
                <label>Price - Low to High</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="value"
                  onClick={() =>
                    dispatch({ type: "SORT", payload: { sort: "hightoLow" } })
                  }
                />
                <label>Price - High to Low</label>
              </div>
            </div>
          </section>
        </aside>
        <main className="main-product-container">
          <div className="filter-btn-div">
            <button
              className="btn btn-primary-outline filter-btn"
              onClick={() => setShowSidebar((prev) => !prev)}
            >
              Filters
            </button>
          </div>
          <section className="product-card-container">
            {sortData.length === 0 ? (
              <h2>Loading</h2>
            ) : (
              sortData.map((product) => {
                return (
                  <div className="product-card">
                    <div className="productCard-img-container">
                      <img src={product.imgURL} className="card-img" />
                    </div>
                    <div className="card-content">
                      <h4 key={product.id}>{product.productBrand}</h4>
                      <div className="card-price">
                        <span className="price-scratch">
                          ₹{product.originalPrice}
                        </span>
                        <span>₹{product.price}</span>
                        <div className="card-ratings">
                          <BsFillStarFill />
                          <span>{product.ratings}</span>
                        </div>
                      </div>
                    </div>
                    <div className="card-btn-container">
                      <button
                        className="btn btn-primary-outline"
                        onClick={() => addToWishlist(product)}
                      >
                        Add to Wishlist
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => addtoCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                    <button className="btn-primary card-like-btn">
                      <i className="fas fa-heart"></i>
                    </button>
                  </div>
                );
              })
            )}
          </section>
        </main>
      </body>
    </>
  );
};

export { ListingProducts };
