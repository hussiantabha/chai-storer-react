import React, { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import { filterReducer } from "./Reucers/Filter-reducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  filterCategory,
  rangeFunc,
  ratingFunc,
  sortFunc,
} from "./Reucers/filter-funcs";
const FilterContext = createContext({});

const FilterContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    // console.log(sessionStorage.getItem("token"));
    if (sessionStorage.getItem("token") === null) {
      setUserLoggedIn(false);
    } else if (sessionStorage.getItem("token") === "undefined") {
      setUserLoggedIn(false);
    } else {
      setUserLoggedIn(true);
    }
  });
  const logout = () => {
    sessionStorage.setItem("token", "undefined");
    toast.success("User SucessFully Logged Out", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  const getData = async () => {
    try {
      const data = await axios.get("api/products");
      setProducts(data.data.products);
    } catch (error) {
      setProducts(error);
    }
  };
  useEffect(() => {
    getData();
  });
  const reducerOBJ = {
    fastDelivery: false,
    sort: null,
    category: [],
    rating: [],
    range: 0,
    categoryValue: false,
    ratingValue: false,
  };
  const [filterState, dispatch] = useReducer(filterReducer, reducerOBJ);
  const rangedData = rangeFunc(filterState, products);
  const filterCategoriedData = filterCategory(filterState, rangedData);
  const ratingData = ratingFunc(filterState, filterCategoriedData);
  const sortData = sortFunc(filterState, ratingData);
  return (
    <FilterContext.Provider
      value={{
        products,
        filterState,
        dispatch,
        sortData,
        userLoggedIn,
        logout,
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider };
