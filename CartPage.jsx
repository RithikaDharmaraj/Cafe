import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';
import ProductCard from '../components/ProductCard';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Classic Latte', price: 4.99, quantity: 1, image: '/images/latte.jpg' },
    { id: 5, name: 'Cheeseburger Deluxe', price: 6.99, quantity: 2, image: '/images/burger.jpg' },
  ];
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  
  const relatedProducts = [
    { id: 2, name: 'Chocolate Frappe', price: 5.99, image: '/images/frappe.jpg', rating: 4.7 },
    { id: 3, name: 'Caramel Macchiato', price: 5.49, image: '/images/macchiato.jpg', rating: 4.9 },
    { id: 4, name: 'Espresso Shot', price: 3.49, image: '/images/espresso.jpg', rating: 4.6 },
    { id: 6, name: 'Margherita Pizza', price: 12.99, image: '/images/pizza.jpg', rating: 4.7 },
  ];
  
  return (
    <div className="cart-page-detailed">
      <div className="container">
        <h1>Your Cart</h1>
        
        <div className="cart-page-container">
          <div className="cart-items-table">
            <div className="cart-header">
              <div className="header-item">Product</div>
              <div className="header-item">Price</div>
              <div className="header-item">Quantity</div>
              <div className="header-item">Total</div>
            </div>
            
            {cartItems.map(item => (
              <div key={item.id} className="cart-row">
                <div className="cart-product">
                  <img src={item.image} alt={item.name} />
                  <div className="product-info">
                    <h3>{item.name}</h3>
                    <button className="remove-link">Remove</button>
                  </div>
                </div>
                <div className="cart-price">${item.price.toFixed(2)}</div>
                <div className="cart-quantity">
                  <div className="quantity-selector">
                    <button>-</button>
                    <span>{item.quantity}</span>
                    <button>+</button>
                  </div>
                </div>
                <div className="cart-total">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary-box">
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
            <Link to="/checkout/shipping" className="btn-primary btn-checkout">PROCEED TO CHECKOUT</Link>
          </div>
        </div>
        
        <section className="related-products-section">
          <h2>PEOPLE ALSO BOUGHT</h2>
          <div className="related-products-grid">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        <section className="deal-section">
          <h2>HOT DEAL! Sales of the Week</h2>
          <div className="deal-banner">
            <img src="/images/pizza-deal.jpg" alt="Pizza Deal" />
            <div className="deal-overlay">
              <h3>Buy 1 Get 1 FREE</h3>
              <p>On all pizzas every Tuesday</p>
              <button className="btn-primary">ORDER NOW</button>
            </div>
          </div>
        </section>
      </div>
      
      <div className="footer-newsletter">
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
    </div>
  );
};

export default CartPage;