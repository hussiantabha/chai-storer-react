import React, { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import { filterReducer } from "./Reucers/Filter-reducer";
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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider };
