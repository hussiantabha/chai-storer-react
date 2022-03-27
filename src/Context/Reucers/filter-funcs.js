import React from "react";
const filterCategory = (state, data) => {
  if (state.category.length > 0) {
    // return state.category.map((item) =>
    //   data.filter((product) => product.category === item)
    // );
    return data.filter((product) =>
      state.category.some((category) => category === product.category)
    );
  }
  return data;
};
const rangeFunc = (state, data) => {
  if (state.range > 0) {
    return data.filter((product) => product.price >= state.range);
  }
  return data;
};
const ratingFunc = (state, data) => {
  if (state.rating.length > 0) {
    return data.filter((product) =>
      state.rating.some((item) => product.ratings >= item)
    );
  }
  return data;
};
const sortFunc = (state, data) => {
  if (state.sort === "lowtoHigh") {
    data.sort((a, b) => a.price - b.price);
  }
  if (state.sort === "hightoLow") {
    data.sort((a, b) => b.price - a.price);
  }
  return data;
};
export { filterCategory, rangeFunc, ratingFunc, sortFunc };
