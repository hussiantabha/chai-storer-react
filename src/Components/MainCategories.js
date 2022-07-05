import React from "react";
import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <main className="categories-card-container">
      <div className="categories-card">
        <Link to="/products" className="flex-center">
          <img
            src="../assets/tata-tea-premium.png"
            className="categories-img"
          />
        </Link>
        <h3>Day to Day Tea</h3>
      </div>

      <div className="categories-card">
        <Link to="/products" className="flex-center">
          <img src="../assets/taj-mahal-tea.png" className="categories-img" />
        </Link>
        <h3>Premium</h3>
      </div>
      <Link to="/products">
        <div className="categories-card">
          <img src="../assets/tea-sachet.png" className="categories-img" />
          <h3>Single Serve</h3>
        </div>
      </Link>
      <Link to="/products">
        <div className="categories-card">
          <img src="../assets/lemon-tea.png" className="categories-img" />
          <h3>Day to Day Tea</h3>
        </div>
      </Link>
    </main>
  );
};

export { MainCategories };
{
  /* <main className="categories-container">
  <div className="categories">
    <Link to="/products" className="flex-center">
      <img src="../assets/tata-tea-premium.png" className="categories-img" />
    </Link>
    <h3>Day to Day Tea</h3>
  </div>

  <div className="categories">
    <Link to="/products" className="flex-center">
      <img src="../assets/taj-mahal-tea.png" className="categories-img" />
    </Link>
    <h3>Premium</h3>
  </div>

  <Link to="/products">
    <div className="categories">
      <img src="../assets/tea-sachet.png" className="categories-img" />
      <h3>Single Serve</h3>
    </div>
  </Link>
  <Link to="/products">
    <div className="categories">
      <img src="../assets/lemon-tea.png" className="categories-img" />
      <h3>Day to Day Tea</h3>
    </div>
  </Link>
</main>; */
}
