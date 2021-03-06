import catalog from "./catalog";
import QuantityPicker from "./quantityPicker";
import "./product.css";
import { useState, useContext } from "react";
import storeContext from "../store/storeContext";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart, removeProductFromCart } = useContext(storeContext);
  const onQuantityChange = (value) => {
    console.log("qnty changed", value);
    setQuantity(value);
  };

  const getTotal = () => {
    let total = quantity * props.data.price;
    return "$" + total.toFixed(2);
  };

  const pushToCart = () => {
    console.log("Push to cart", props.data.title);
    let product = {
      ...props.data,
      quantity: quantity,
    }; //all of the contents in props.data will be here and quantity
    addProductToCart(product);
  };

  return (
    <div className="product">
      <img src={"/image/" + props.data.image} alt="Product" />
      <h5>{props.data.title}</h5>
      <div className="priceTotal">
        <label className="total">{getTotal()}</label>
      </div>
      <div className="productPrice">
        <label className="price">${props.data.price.toFixed(2)}</label>
      </div>
      <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
      <button onClick={pushToCart} className="btn btn-outline-secondary">
        Add Cart
      </button>
    </div>
  );
};

export default Product;
