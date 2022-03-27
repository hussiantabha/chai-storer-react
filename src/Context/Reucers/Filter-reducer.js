import React from "react";

const filterReducer = (filterState, action) => {
  switch (action.type) {
    case "category": {
      const copy = [...filterState.category];
      const updated = action.payload.check
        ? [...copy, action.payload.value]
        : copy.filter((item) => item !== action.payload.value);
      return { ...filterState, category: updated };
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
      };
    }
    default: {
      return { ...filterState };
    }
  }
};

export { filterReducer };
