import storeContext from "./storeContext";
import { useState } from "react";

const GlobalState = (props) => {
  const [myCart, setMyCart] = useState([]);
  const [theUser, setTheUser] = useState({});
  const myAddToCart = (product) => {
    //console.log("global state add", product);
    let copy = [...myCart];
    let found = false;
    for (let i = 0; i < copy.length; i++) {
      let existingProd = copy[i];

      if (product._id === existingProd._id) {
        existingProd.quantity += product.quantity;
        found = true;
      }
    }

    if (!found) {
      copy.push(product);
    }

    setMyCart(copy);
  };

  const myRemoveProduct = (productId) => {
    console.log("test");
    let copy = [...myCart];
    for (let i = 0; i < copy.length; i++) {
      let prod = copy[i];
      if (prod._id === productId) {
        // removing an element from an array
        copy.splice(i, 1);
      }
    }
    setMyCart(copy);
    /**
     * create the copy
     * for to travel the copy
     * get every prod in the array
     * compare the prodID with the prod_id
     * if equal, remove the prod from the array
     */
  };
  return (
    <storeContext.Provider
      value={{
        cart: myCart,
        user: theUser,
        addProductToCart: myAddToCart,
        removeProductFromCart: myRemoveProduct,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
};

export default GlobalState;
