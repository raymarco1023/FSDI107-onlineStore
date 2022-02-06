import { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {
  let [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    //console.log("Plus clicked");
    let value = quantity + 1;
    setQuantity(value);
    props.onChange(value);
  };

  const handleDecrease = () => {
    let value = quantity - 1;
    if (value > 0) {
      setQuantity(value);
      props.onChange(value);
    }
  };
  return (
    <div className="quantity-picker">
      <button className="btn btn-outline-dark" onClick={handleIncrease}>
        +
      </button>

      <label>{quantity}</label>

      <button
        className="btn btn-outline-dark"
        disabled={quantity === 1}
        onClick={handleDecrease}
      >
        -
      </button>
    </div>
  );
};

export default QuantityPicker;
