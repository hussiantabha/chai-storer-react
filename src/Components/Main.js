import React from "react";

const Main = () => {
  return (
    <>
      <section className="hero-img-container">
        <img src="../assets/Thien-Tea-02.jpg" className="hero-img" />
      </section>
      <section class="hero-card-container">
        <div class="hero-card">
          <div class="hero-card-img-container">
            <img src="../assets/exotic.png" class="hero-card-img" />
          </div>
          <div class="hero-card-content">
            <h3>Exotic Tea</h3>
            <p class="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              officiis necessitatibus sint mollitia? Laudantium, quia?
            </p>
            <a href="./files/products.html" class="btn btn-primary cta">
              Buy Now
            </a>
          </div>
        </div>
        <div class="hero-card">
          <div class="hero-card-img-container">
            <img src="../assets/flavored.png" class="hero-card-img" />
          </div>
          <div class="hero-card-content">
            <h3>Premium Tea</h3>
            <p class="py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              officiis necessitatibus sint mollitia? Laudantium, quia?
            </p>
            <a href="./files/products.html" class="btn btn-primary cta">
              Buy Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export { Main };
