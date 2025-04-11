import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <div className="auth-header">
            <img src="/logo.png" alt="HOT COFFEE" />
            <h1>Create New Account</h1>
          </div>
          
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Your Password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn-primary btn-block">REGISTER</button>
          </form>
          
          <div className="auth-footer">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
        
        <div className="auth-image">
          <img src="/images/coffee-promo.jpg" alt="Hot Coffee" />
          <div className="promo-badge">
            <span>20% OFF</span>
            <p>on first order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;