import React from 'react';
import { Link } from 'react-router-dom';
import './Success.css';

const Success = () => {
  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-card">
          <div className="success-icon">
            <span className="material-icons">check_circle</span>
          </div>
          <h1>Your order has been received</h1>
          <p>Thank you for your purchase! You'll receive a confirmation email shortly.</p>
          <div className="success-actions">
            <Link to="/" className="btn-primary">BACK TO HOME</Link>
            <Link to="/profile/orders" className="btn-secondary">VIEW ORDERS</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;