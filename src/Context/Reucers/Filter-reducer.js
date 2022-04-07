import React from "react";

const filterReducer = (filterState, action) => {
  switch (action.type) {
    case "category": {
      const copy = [...filterState.category];
      const updated = action.payload.check
        ? [...copy, action.payload.value]
        : copy.filter((item) => item !== action.payload.value);
      return {
        ...filterState,
        category: updated,
        categoryValue: action.check,
      };
    }
    case "SORT": {
      return { ...filterState, sort: action.payload.sort };
    }
    case "RATING": {
      return {
        ...filterState,
        rating: action.payload.check
          ? [...filterState.rating, action.payload.value]
          : filterState.rating.filter((item) => item !== action.payload.value),
        // ratingValue: action.payload.check,
      };
    }
    case "RANGE": {
      return { ...filterState, range: action.payload.value };
    }
    case "clearAll": {
      return {
        ...filterState,
        fastDelivery: false,
        sort: null,
        category: [],
        rating: [],
        range: 0,
        categoryValue: false,
        ratingValue: false,
      };
    }
    default: {
      return { ...filterState };
    }
  }
};

export { filterReducer };
