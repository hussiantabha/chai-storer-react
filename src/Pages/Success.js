import React from "react";
import { NavBar } from "../Components/Nav";

const Success = () => {
  return (
    <>
      <NavBar />
      <section className="success-section-container">
        <div className="success-img-container">
          <img src="../assets/checkmark.svg" />
        </div>
        <h2>Congratulations, Your Order is Confirmed.</h2>
      </section>
    </>
  );
};

export default Success;
