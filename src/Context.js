import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const FilterContext = createContext({});

const FilterContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
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
  return (
    <FilterContext.Provider value={{ products }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterContextProvider };
