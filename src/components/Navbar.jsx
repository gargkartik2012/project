import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggles the menu state
  };

  return (
    <div className="burger-container">
      <button onClick={toggleMenu} className="burger-menu-button" aria-label="Toggle Menu">
        &#9776; {/* Hamburger Icon */}
      </button>
      <nav className={`burger-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/category">Category</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/searchbar">🔍</Link>
        <div className="auth-links">
          <Link to="/login" className="auth-link">Login</Link>
          /
          <Link to="/signup" className="auth-link">SignUp</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
