import "./cart.css";
import { useContext } from "react";
import storeContext from "../store/storeContext";
import CartItem from "./cartItem";

const Cart = () => {
  const { cart } = useContext(storeContext);
  return (
    <div className="cart-page">
      <h1>Your cart has {cart.length} party items</h1>

      <div className="products">
        {cart.map((prod, index) => (
          <CartItem key={index} data={prod}></CartItem>
        ))}
      </div>
    </div>
  );
};

export default Cart;
