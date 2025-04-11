import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Classic Latte', price: 4.99, quantity: 1, image: '/images/latte.jpg' },
    { id: 5, name: 'Cheeseburger Deluxe', price: 6.99, quantity: 2, image: '/images/burger.jpg' },
  ];
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  
  return (
    <div className="cart-page">
      <div className="container">
        <h1>Your Cart</h1>
        
        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">${item.price}</p>
                </div>
                <div className="item-quantity">
                  <button className="qty-btn">-</button>
                  <span>{item.quantity}</span>
                  <button className="qty-btn">+</button>
                </div>
                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                <button className="remove-btn">
                  <span className="material-icons">close</span>
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link to="/checkout/cart" className="btn-primary btn-checkout">CHECKOUT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;