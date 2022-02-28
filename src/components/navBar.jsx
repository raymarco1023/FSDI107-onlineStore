import { Link } from "react-router-dom";
import "./navBar.css";
import { useContext } from "react";
import storeContext from "../store/storeContext";

const NavBar = () => {
  const { cart, user } = useContext(storeContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          NavBar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" tabIndex="1">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link className="btn btn-secondary" to="/cart">
              <span className="badge bg-primary">{cart.length}&nbsp;</span>
              View Cart
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

//create a cart component
// present a simple h1

// show the cart on cart url(setup the route on app.js)
