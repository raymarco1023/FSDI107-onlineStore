import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import Catalog from "./components/catalog";
import Product from "./components/product";
import About from "./components/about";
import ToDo from "./components/toDo";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <h1>Party Hackers</h1>
      <p>Let us do all the party hacking, so you can enjoy the party!</p>
      <About />
      <NavBar></NavBar>

      <Catalog></Catalog>

      <ToDo />

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
