import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="stay-updated">
        <div className="container">
          <form className="subscribe-form">
            <h3>STAY UPDATED</h3>
            <div className="form-group">
              <input type="email" placeholder="Your Email Address" />
              <button className="btn-primary">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="footer-links container">
        <div className="footer-col">
          <h4>Hot Coffee</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Menu</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/reserve-table">Reserve a table</Link></li>
            <li><Link to="/products">Order Online</Link></li>
            <li><Link to="/about">Our Story</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><Link to="/profile/orders">Track Order</Link></li>
            <li><Link to="/contact">Feedback</Link></li>
            <li><Link to="/contact">FAQs</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="#"><span className="material-icons">facebook</span></a>
            <a href="#"><span className="material-icons">twitter</span></a>
            <a href="#"><span className="material-icons">instagram</span></a>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <div className="container">
          <p>&copy; 2025 Hot Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;