import React from "react";
import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <>
      <main className="display-categories-container">
        <Link to="/products">
          <div className="categories">
            <img
              src="../assets/51QF8woKr5S._AC_UL480_FMwebp_QL65_-removebg-preview.png"
              className="categories-img"
            />
            <h3>Day to Day Tea</h3>
          </div>
        </Link>
        <Link to="/products">
          <div className="categories">
            <img src="../assets/premium.png" className="categories-img" />
            <h3>Premium</h3>
          </div>
        </Link>
        <Link to="/products">
          <div className="categories">
            <img src="../assets/exotic.png" className="categories-img" />
            <h3>Exotic</h3>
          </div>
        </Link>
        <Link to="/products">
          <div className="categories">
            <img src="../assets/flavored.png" className="categories-img" />
            <h3>Day to Day Tea</h3>
          </div>
        </Link>
      </main>
    </>
  );
};

export { MainCategories };
