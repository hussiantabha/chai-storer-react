import React, { useContext } from "react";
import { FilterContext } from "../Context";
import "../App.css";

const ListingProducts = () => {
  const { products } = useContext(FilterContext);
  console.log(products);
  return (
    <>
      <body className="product-body">
        <aside className="filter-sidebar">
          <section className="filters">
            <div>
              <input
                type="search"
                className="input-text-search"
                placeholder="search Product"
              />
            </div>
            <div>
              <input
                type="range"
                min="1"
                max="100"
                value="50"
                className="filter-slider"
              />
              <div className="slider-span">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>
            <div className="filter-category">
              <h3>Category</h3>
              <div>
                <input type="checkbox" />
                <span>Day To Day Tea</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>Exotic Tea</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>Premium Tea</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>Healthy Tea</span>
              </div>
            </div>
            <div className="filter-category">
              <h3>Rating</h3>
              {[4, 3, 2, 1].map((item) => {
                return (
                  <div>
                    <input type="checkbox" />
                    <span>{item} star & above</span>
                  </div>
                );
              })}
            </div>
            <div className="filter-category">
              <h3>Sort By</h3>
              <div>
                <input type="radio" name="value" />
                <label>Price - Low to High</label>
              </div>
              <div>
                <input type="radio" name="value" />
                <label>Price - High to Low</label>
              </div>
            </div>
          </section>
        </aside>
        <main className="main-product-container">
          <section className="product-card-container">
            {products.map((product) => {
              return (
                <div className="product-card">
                  <img src={product.imgURL} className="card-img" />
                  <div className="card-content">
                    <h1>{product.productBrand}</h1>
                    <div className="card-price">
                      <span className="price-scratch">
                        ₹{product.originalPrice}
                      </span>
                      <span>₹{product.price}</span>
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
            })}
            {/* <div className="product-card">
              <img src="../assets/exotic.png" className="card-img" />
              <div className="card-content">
                <h1>Dil Khush Tea</h1>
                <div className="card-price">
                  <span className="price-scratch">₹500/-</span>
                  <span>₹299/-</span>
                </div>
              </div>
              <div className="card-btn-container">
                <a href="./cart.html" className="btn btn-primary-outline">
                  Add to Cart
                </a>
                <a href="./cart.html" className="btn btn-primary">
                  Buy Now
                </a>
              </div>
              <button className="btn-primary card-like-btn">
                <i className="fas fa-heart"></i>
              </button>
            </div> */}
          </section>
        </main>
      </body>
    </>
  );
};

export { ListingProducts };
