import { useState } from "react";
import { useEffect } from "react";
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataServices";
import Todo from "./toDo";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  // create loadData functionhere

  const loadData = () => {
    //console.log("component loaded");

    let service = new DataService();
    let data = service.getCatalog();
    console.log(data);
    setProducts(data);
  };

  // when the component loads
  useEffect(() => {
    loadData();
  });

  /**
   * create an state variable (products)
   * set data (from loadData) to the state variable
   */
  return (
    <div className="catalog">
      <h3>Catalog Here</h3>
      <h5>There are {products.length} products</h5>
      //{console.log("component rendered")}
      {products.map((p) => (
        <Product key={p._id} data={p} />
      ))}
    </div>
  );
};

export default Catalog;
