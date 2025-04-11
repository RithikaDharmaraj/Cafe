import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <div className="auth-header">
            <img src="/logo.png" alt="HOT COFFEE" />
            <h1>Welcome</h1>
          </div>
          
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Your Password" />
              <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" className="btn-primary btn-block">LOGIN</button>
          </form>
          
          <div className="auth-footer">
            <p>Don't have an account? <Link to="/register">Create New Account</Link></p>
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

export default Login;