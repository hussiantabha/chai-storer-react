import { useReducer } from "react";
const notiObj = {
  cart: 0,
  wishlist: 0,
};

const notiReducer = (notiState, action) => {
  switch (action.type) {
    case "cart": {
      return { ...notiState, cart: action.payload.cartLength };
    }
    case "wishlist": {
      return { ...notiState, wishlist: action.payload.wishlistLength };
    }
  }
};

export { notiReducer, notiObj };
