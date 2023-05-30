import React, { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import { filterReducer } from "./Reucers/Filter-reducer";
import {
  filterCategory,
  rangeFunc,
  ratingFunc,
  sortFunc,
} from "./Reucers/filter-funcs";
import { notiReducer, notiObj } from "./Reucers/app-reducer";
const FilterContext = createContext({});

const AppContext = createContext({});

const FilterContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const token = sessionStorage.getItem("token");
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
  }, []);
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
  const [notiState, notiDispatch] = useReducer(notiReducer, notiObj);
  return (
    <AppContext.Provider value={{ notiState, notiDispatch }}>
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
    </AppContext.Provider>
  );
};

export { FilterContext, FilterContextProvider, AppContext };
