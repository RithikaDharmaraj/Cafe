import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

const ForgotPassword = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <div className="auth-header">
            <img src="/logo.png" alt="HOT COFFEE" />
            <h1>Forgot Password</h1>
            <p>Enter your email address to reset your password</p>
          </div>
          
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <button type="submit" className="btn-primary btn-block">SEND RESET LINK</button>
          </form>
          
          <div className="auth-footer">
            <p>Remember your password? <Link to="/login">Back to Login</Link></p>
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

export default ForgotPassword;