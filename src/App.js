import "./App.css";
import { useState, useEffect } from "react";
import { NavBar } from "./Components/Nav";
import { MainCategories } from "./Components/MainCategories";
import { Main } from "./Components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Products } from "./Pages/Products";
function App() {
  // const [data, setData] = useState([]);

  // const getData = () => {
  //   console.log("hi");
  //   const rew = fetch("/api/products")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.products));
  // };
  // useEffect(getData, []);
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
