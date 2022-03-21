import "./App.css";
import { useState, useEffect, useContext } from "react";
import { NavBar } from "./Components/Nav";
import { MainCategories } from "./Components/MainCategories";
import { Main } from "./Components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./Pages/Products";
import axios from "axios";
import { FilterContext } from "./Context";

function App() {
  const { products } = useContext(FilterContext);
  console.log(products);
  return (
    <>
      <div className="App">
        <NavBar />
        <MainCategories />
        <Main />
      </div>
    </>
  );
}

export default App;
