import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./Pages/Products";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { FilterContextProvider } from "./Context/Context";
import MockMan from "./backend/Pages/MockMan";
import Success from "./Pages/Success";
// Call make Server
makeServer();

ReactDOM.render(
  <>
    <FilterContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mock" element={<MockMan />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </FilterContextProvider>
  </>,
  document.getElementById("root")
);
