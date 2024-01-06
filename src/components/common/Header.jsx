// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
        <span className="navbar-heading">Ecommerce</span>
        </Link>
      </div>
      <div className="navbar-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/productlist">Product</Link></li>
          <li><Link to="/cartpage"><AiOutlineShoppingCart/></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
