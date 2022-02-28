import storeContext from "../store/storeContext";
import { useContext } from "react";
import Product from "./product";
import QuantityPicker from "./quantityPicker";
import "./cartItem.css";

const CartItem = (props) => {
  const { removeProductFromCart } = useContext(storeContext);
  const getTotal = () => {
    let total = props.data.price * props.data.quantity;
    return "$" + total.toFixed(2);
  };
  const removeProd = () => {
    removeProductFromCart(props.data._id);
  };

  return (
    <div className="cart-item">
      <img src={"./image/" + props.data.image} alt="Product" />
      <div className="info">
        <h5>{props.data.title}</h5>
        <label>{props.data.category}</label>
      </div>

      <label className="price">{props.data.price}</label>
      <label className="quantity">{props.data.quantity}</label>
      <label className="total">{props.data.price * props.data.quantity}</label>

      <button onClick={removeProd} className="btn btn-sm btn-danger">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
