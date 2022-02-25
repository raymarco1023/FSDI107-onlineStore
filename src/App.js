import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Catalog from "./components/catalog";
import Product from "./components/product";
import About from "./components/about";
import ToDo from "./components/toDo";
import Home from "./components/home";
import Cart from "./components/cart";
import Admin from "./components/admin";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalState from "./store/globalState";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </GlobalState>
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
