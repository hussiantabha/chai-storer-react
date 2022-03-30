import React, { useContext } from "react";
import { FilterContext } from "../Context/Context";
import "../App.css";

const ListingProducts = () => {
  const { products, filterState, dispatch, sortData } =
    useContext(FilterContext);
  const token = sessionStorage.getItem("token");
  console.log(token);
  return (
    <>
      <body className="product-body">
        <aside className="filter-sidebar">
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
              {[4, 3, 2, 1].map((item) => {
                return (
                  <div>
                    <input
                      type="checkbox"
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
              })}
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
                      <h1 key={product.id}>{product.productBrand}</h1>
                      <div className="card-price">
                        <span className="price-scratch">
                          ₹{product.originalPrice}
                        </span>
                        <span>₹{product.price}</span>
                        <div className="card-ratings">
                          <span>{product.ratings}</span>
                        </div>
                      </div>
                    </div>
                    <div className="card-btn-container">
                      <button className="btn btn-primary-outline">
                        Add to Cart
                      </button>
                      <button className="btn btn-primary">Buy Now</button>
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
