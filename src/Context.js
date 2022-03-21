import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const FilterContext = createContext({});

const FilterContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const data = await axios.get("api/products");
    setProducts(data.data.products);
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
