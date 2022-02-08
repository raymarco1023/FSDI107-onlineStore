import catalog from "./catalog";
import QuantityPicker from "./quantityPicker";
import "./product.css";
import { useState } from "react";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const onQuantityChange = (value) => {
    console.log("qnty changed", value);
    setQuantity(value);
  };

  const getTotal = () => {
    let total = quantity * props.data.price;
    return "$" + total.toFixed(2);
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
      <button className="btn btn-outline-secondary">Add Cart</button>
    </div>
  );
};

export default Product;
