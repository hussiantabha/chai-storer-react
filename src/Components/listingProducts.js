import React from "react";
import "../App.css";

const ListingProducts = () => {
  return (
    <>
      <body class="product-body">
        <aside class="filter-sidebar">
          <section class="filters">
            <div>
              <input
                type="search"
                class="input-text-search"
                placeholder="search Product"
              />
            </div>
            <div>
              <input
                type="range"
                min="1"
                max="100"
                value="50"
                class="filter-slider"
              />
              <div class="slider-span">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>
            <div class="filter-category">
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
            <div class="filter-category">
              <h3>Rating</h3>
              <div>
                <input type="checkbox" />
                <span>4 star & above</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>3 star & above</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>2 star & above</span>
              </div>
              <div>
                <input type="checkbox" />
                <span>1 star & above</span>
              </div>
            </div>
            <div class="filter-category">
              <h3>Sort By</h3>
              <div>
                <input type="radio" name="value" />
                <span>Price - Low to High</span>
              </div>
              <div>
                <input type="radio" name="value" />
                <span>Price - High to Low</span>
              </div>
            </div>
          </section>
        </aside>
        <main class="main-product-container">
          <section class="product-card-container">
            <div class="product-card">
              <img src="../assets/exotic.png" class="card-img" />
              <div class="card-content">
                <h1>Dil Khush Tea</h1>
                <div class="card-price">
                  <span class="price-scratch">₹500/-</span>
                  <span>₹299/-</span>
                </div>
              </div>
              <div class="card-btn-container">
                <a href="./cart.html" class="btn btn-primary-outline">
                  Add to Cart
                </a>
                <a href="./cart.html" class="btn btn-primary">
                  Buy Now
                </a>
              </div>
              <button class="btn-primary card-like-btn">
                <i class="fas fa-heart"></i>
              </button>
            </div>
            <div class="product-card">
              <img src="../assets/exotic.png" class="card-img" />
              <div class="card-content">
                <h1>Dil Khush Tea</h1>
                <div class="card-price">
                  <span class="price-scratch">₹500/-</span>
                  <span>₹299/-</span>
                </div>
              </div>
              <div class="card-btn-container">
                <a href="./cart.html" class="btn btn-primary-outline">
                  Add to Cart
                </a>
                <a href="./cart.html" class="btn btn-primary">
                  Buy Now
                </a>
              </div>
              <button class="btn-primary card-like-btn">
                <i class="fas fa-heart"></i>
              </button>
            </div>
            <div class="product-card">
              <img src="../assets/exotic.png" class="card-img" />
              <div class="card-content">
                <h1>Dil Khush Tea</h1>
                <div class="card-price">
                  <span class="price-scratch">₹500/-</span>
                  <span>₹299/-</span>
                </div>
              </div>
              <div class="card-btn-container">
                <a href="./cart.html" class="btn btn-primary-outline">
                  Add to Cart
                </a>
                <a href="./cart.html" class="btn btn-primary">
                  Buy Now
                </a>
              </div>
              <button class="btn-primary card-like-btn">
                <i class="fas fa-heart"></i>
              </button>
            </div>
            <div class="product-card">
              <img src="../assets/exotic.png" class="card-img" />
              <div class="card-content">
                <h1>Dil Khush Tea</h1>
                <div class="card-price">
                  <span class="price-scratch">₹500/-</span>
                  <span>₹299/-</span>
                </div>
              </div>
              <div class="card-btn-container">
                <a href="./cart.html" class="btn btn-primary-outline">
                  Add to Cart
                </a>
                <a href="./cart.html" class="btn btn-primary">
                  Buy Now
                </a>
              </div>
              <button class="btn-primary card-like-btn">
                <i class="fas fa-heart"></i>
              </button>
            </div>
            <div class="product-card">
              <img src="../assets/exotic.png" class="card-img" />
              <div class="card-content">
                <h1>Dil Khush Tea</h1>
                <div class="card-price">
                  <span class="price-scratch">₹500/-</span>
                  <span>₹299/-</span>
                </div>
              </div>
              <div class="card-btn-container">
                <a href="./cart.html" class="btn btn-primary-outline">
                  Add to Cart
                </a>
                <a href="./cart.html" class="btn btn-primary">
                  Buy Now
                </a>
              </div>
              <button class="btn-primary card-like-btn">
                <i class="fas fa-heart"></i>
              </button>
            </div>
            <div class="product-card">
              <img src="../assets/exotic.png" class="card-img" />
              <div class="card-content">
                <h1>Dil Khush Tea</h1>
                <div class="card-price">
                  <span class="price-scratch">₹500/-</span>
                  <span>₹299/-</span>
                </div>
              </div>
              <div class="card-btn-container">
                <a href="./cart.html" class="btn btn-primary-outline">
                  Add to Cart
                </a>
                <a href="./cart.html#" class="btn btn-primary">
                  Buy Now
                </a>
              </div>
              <button class="btn-primary card-like-btn">
                <i class="fas fa-heart"></i>
              </button>
            </div>
            <div class="product-card">
              <img src="../assets/exotic.png" class="card-img" />
              <div class="card-content">
                <h1>Dil Khush Tea</h1>
                <div class="card-price">
                  <span class="price-scratch">₹500/-</span>
                  <span>₹299/-</span>
                </div>
              </div>
              <div class="card-btn-container">
                <a href="./cart.html" class="btn btn-primary-outline">
                  Add to Cart
                </a>
                <a href="./cart.html" class="btn btn-primary">
                  Buy Now
                </a>
              </div>
              <button class="btn-primary card-like-btn">
                <i class="fas fa-heart"></i>
              </button>
            </div>
            <div class="product-card">
              <img src="../assets/exotic.png" class="card-img" />
              <div class="card-content">
                <h1>Dil Khush Tea</h1>
                <div class="card-price">
                  <span class="price-scratch">₹500/-</span>
                  <span>₹299/-</span>
                </div>
              </div>
              <div class="card-btn-container">
                <a href="./cart.html" class="btn btn-primary-outline">
                  Add to Cart
                </a>
                <a href="./cart.html" class="btn btn-primary">
                  Buy Now
                </a>
              </div>
              <button class="btn-primary card-like-btn">
                <i class="fas fa-heart"></i>
              </button>
            </div>
          </section>
        </main>
      </body>
    </>
  );
};

export { ListingProducts };
