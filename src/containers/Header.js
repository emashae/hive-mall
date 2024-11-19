import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          hiveMall
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="d-flex mx-auto" style={{ maxWidth: '600px', width: '100%' }}>
            <input
              className="form-control me-2 rounded-pill"
              type="search"
              placeholder="Search products"
              aria-label="Search"
              style={{ border: '1px solid #ccc' }}
            />
            <button className="btn btn-warning rounded-pill px-3" type="submit">
              <FaSearch />
            </button>
          </form>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center text-white" to="/">
                <FaUser className="me-1" />
                <span>Hello, Sign In</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Returns & Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link d-flex align-items-center text-white" to="/cart">
                <FaShoppingCart className="me-1" />
                <span>Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
