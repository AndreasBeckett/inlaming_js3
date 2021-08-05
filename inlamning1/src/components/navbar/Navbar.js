import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import ShoppingCart from '../shoppingCart/ShoppingCart';

const Navbar = () => {
  return (
    <div>
      <nav className="container-fluid justify-content-between d-flex">

        
        <div className="d-flex nav-items">
          <h1>Golfshop</h1>
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
        </div>


        <div className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle hidden-arrow"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
           <i className="fas fa-shopping-cart"></i>
          </span>
          <ul className="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
            <ShoppingCart />
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
