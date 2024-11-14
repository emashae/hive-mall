import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">hiveMall</Link>
        <form className="d-flex mx-auto" style={{ width: '50%' }}>
          <input className="form-control me-2" type="search" placeholder="Search products" aria-label="Search" />
          <button className="btn btn-warning" type="submit">Search</button>
        </form>
        <div className="navbar-nav">
          <Link className="nav-link text-white" to="/">Hello, Sign In</Link>
          <Link className="nav-link text-white" to="/">Returns & Orders</Link>
          <Link className="nav-link text-white" to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
