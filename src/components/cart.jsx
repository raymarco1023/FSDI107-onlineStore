import "./cart.css";
import { useContext } from "react";
import storeContext from "../store/storeContext";

const Cart = () => {
  const { cart } = useContext(storeContext);
  return (
    <div className="cart-page">
      <h1>Your cart has {cart.length} party items</h1>

      <div className="products">
        <ul>
          {cart.map((prod) => (
            <li key={prod._id}>{prod.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
