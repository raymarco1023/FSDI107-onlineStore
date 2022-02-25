import React from "react";
import Product from "../components/product";

//store context describes the data / functions that you want to share between components

const storeContext = React.createContext({
  cart: [],
  user: {},

  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});

export default storeContext;
