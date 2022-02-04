import QuantityPicker from "./quantityPicker";
import "./product.css";
import Catalog from "./catalog";

const Product = (props) => {
  return (
    <div className="product">
      <img src="https://picsum.photos/200/300" alt="Product" />
      <h5>{props.data.title}</h5>
      <div className="priceTotal">
        <label className="Total">$10.00</label>
      </div>
      <div className="productPrice">
        <label className="Price">${props.data.price}</label>
      </div>
      <QuantityPicker></QuantityPicker>
      <button className="btn btn-outline-secondary">Add Cart</button>
    </div>
  );
};

export default Product;
