import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Catalog from "./components/catalog";
import Product from "./components/product";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <h1>Natural Healing Food</h1>
      <NavBar></NavBar>

      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;

/**
 * 1. create Catalog comp
 * 2.create the Product product
 * 3. on app.js render Catalog
 * 4. on catalog render 5 product
 * 5. product render QuantityPicker
 */
