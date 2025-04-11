import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="HOT COFFEE" />
          </Link>
        </div>
        
        <div className="navigation">
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <Link to="/search" className="icon-button search-btn">
              <span className="material-icons">search</span>
            </Link>
            <Link to="/cart" className="icon-button cart-btn">
              <span className="material-icons">shopping_cart</span>
            </Link>
            <Link to="/profile" className="icon-button profile-btn">
              <span className="material-icons">person</span>
            </Link>
          </div>
          
          <button 
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-icons">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;