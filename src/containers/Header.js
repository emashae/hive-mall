import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import logo from '../assets/images/logo.png'; 

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        zIndex: 1000,
        backdropFilter: 'blur(5px)',
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="HiveMall Logo" style={{ height: '50px', marginRight: '5px' }} />
          <span className="fw-bold">HiveMall</span>
        </Link>



        {/* Search Bar */}
        <form
          className="d-flex mx-auto position-absolute"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '600px',
            width: '100%',
          }}
        >
          <input
            className="form-control me-2 rounded-pill"
            type="search"
            placeholder="Search for products, brands, or categories"
            aria-label="Search"
            style={{
              border: '1px solid #ccc',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          />
          <button className="btn btn-info rounded-pill px-3" type="submit">
            <FaSearch />
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="navbar-nav ms-auto d-flex align-items-center">
          <li className="nav-item">
            <Link
              className="nav-link d-flex align-items-center text-white"
              to="/cart"
              style={{ transition: 'color 0.3s' }}
            >
              <FaShoppingCart className="me-2" />
              <span>Cart</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex align-items-center text-white"
              to="/account"
              style={{ transition: 'color 0.3s' }}
            >
              <FaUser className="me-2" />
              <span>Account</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
