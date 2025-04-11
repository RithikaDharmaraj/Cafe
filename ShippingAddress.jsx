import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShippingAddress.css';

const ShippingAddress = () => {
  const [addressType, setAddressType] = useState('delivery');
  
  const cartItems = [
    { id: 1, name: 'Classic Latte', price: 4.99, quantity: 1, image: '/images/latte.jpg' },
    { id: 5, name: 'Cheeseburger Deluxe', price: 6.99, quantity: 2, image: '/images/burger.jpg' },
  ];
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const delivery = 2.99;
  const total = subtotal + tax + delivery;
  
  return (
    <div className="shipping-page">
  <div className="container">
    <h1>CHECKOUT</h1>
    <div className="shipping-container">
      <div className="shipping-details">
        <div className="address-type-selector">
          <button 
            className={addressType === 'delivery' ? 'active' : ''} 
            onClick={() => setAddressType('delivery')}
          >
            Delivery
          </button>
          <button 
            className={addressType === 'pickup' ? 'active' : ''} 
            onClick={() => setAddressType('pickup')}
          >
            Pickup
          </button>
        </div>

        {addressType === 'delivery' ? (
          <form className="shipping-form">
            <h2>Shipping Address</h2>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Street Address</label>
              <input type="text" id="address" placeholder="Enter your street address" required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="City" required />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="text" id="state" placeholder="State" required />
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code</label>
                <input type="text" id="zipCode" placeholder="ZIP Code" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Phone number for delivery updates" required />
            </div>
            <div className="form-group">
              <label htmlFor="instructions">Delivery Instructions (Optional)</label>
              <textarea id="instructions" placeholder="Add any special instructions for delivery"></textarea>
            </div>
          </form>
        ) : (
          <div className="pickup-info">
            <h2>Pickup Information</h2>
            <p>Ready for pickup in: <strong>15-20 minutes</strong></p>
            <p>Pickup Location: <strong>123 Coffee Street, Downtown</strong></p>
            <div className="form-group">
              <label htmlFor="pickupName">Name for Pickup</label>
              <input type="text" id="pickupName" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="pickupPhone">Phone Number</label>
              <input type="tel" id="pickupPhone" placeholder="Phone number for pickup updates" required />
            </div>
          </div>
        )}
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="cart-items">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Qty: {item.quantity}</p>
              </div>
              <div className="item-price">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        <div className="price-breakdown">
          <div className="price-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="price-row">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          {addressType === 'delivery' && (
            <div className="price-row">
              <span>Delivery Fee</span>
              <span>${delivery.toFixed(2)}</span>
            </div>
          )}
          <div className="price-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <div className="checkout-actions">
          <Link to="/payment" className="btn-primary">Proceed to Payment</Link>
          <Link to="/cart" className="btn-secondary">Back to Cart</Link>
        </div>
      </div>
    </div>
  </div>
</div>);};
export default ShippingAddress