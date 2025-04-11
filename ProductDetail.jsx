import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetail.css';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  // Mock product data
  const product = {
    id: parseInt(id),
    name: 'Brick Oven Pizza',
    price: 14.99,
    rating: 4.8,
    reviewCount: 125,
    description: 'Delicious brick oven pizza with fresh mozzarella, basil, and our special tomato sauce. Made with love in our traditional brick oven for the perfect crispy crust.',
    image: '/images/pizza.jpg',
    category: 'pizza'
  };
  
  const relatedProducts = [
    { id: 2, name: 'Margherita Pizza', price: 12.99, image: '/images/pizza2.jpg', rating: 4.7 },
    { id: 3, name: 'Pepperoni Pizza', price: 13.99, image: '/images/pizza3.jpg', rating: 4.5 },
    { id: 4, name: 'Veggie Pizza', price: 13.49, image: '/images/pizza4.jpg', rating: 4.6 },
  ];
  
  const reviews = [
    { id: 1, user: 'Sarah M.', rating: 5, comment: 'Best pizza Ive had in years! The crust is perfect.' },
    { id: 2, user: 'John D.', rating: 4, comment: 'Really good pizza, love the brick oven taste.' },
    { id: 3, user: 'Lisa T.', rating: 5, comment: 'Authentic Italian flavors, will order again!' },
  ];
  
  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  
  return (
    <div className="product-detail-page">
      <div className="container">
        <section className="product-detail-section">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
            <div className="wishlist-button">
              <span className="material-icons">favorite_border</span>
            </div>
          </div>
          
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            
            <div className="product-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons">
                    {i < Math.floor(product.rating) ? 'star' : 'star_border'}
                  </span>
                ))}
              </div>
              <span className="rating-count">{product.reviewCount} reviews</span>
            </div>
            
            <div className="product-price">
              <span className="price">${product.price}</span>
            </div>
            
            <div className="product-description">
              <p>{product.description}</p>
            </div>
            
            <div className="product-actions">
              <div className="quantity-selector">
                <button onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button onClick={increment}>+</button>
              </div>
              
              <button className="btn-primary">ADD TO CART</button>
            </div>
            
            <div className="product-meta">
              <div className="meta-item">
                <span className="material-icons">schedule</span>
                <span>30-45 min delivery</span>
              </div>
              <div className="meta-item">
                <span className="material-icons">local_shipping</span>
                <span>Free delivery over $25</span>
              </div>
              <div className="meta-item">
                <span className="material-icons">verified</span>
                <span>Quality guaranteed</span>
              </div>
            </div>
          </div>
        </section>
        
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
        
        <section className="categories-section">
          <h2>OUR CATEGORIES</h2>
          <div className="categories-row">
            <div className="category-item">
              <img src="/images/cat-pizza.jpg" alt="Pizza" />
              <span>Pizza</span>
            </div>
            <div className="category-item">
              <img src="/images/cat-burger.jpg" alt="Burger" />
              <span>Burger</span>
            </div>
            <div className="category-item">
              <img src="/images/cat-sandwich.jpg" alt="Sandwich" />
              <span>Sandwich</span>
            </div>
            <div className="category-item">
              <img src="/images/cat-coffee.jpg" alt="Coffee" />
              <span>Coffee</span>
            </div>
            <div className="category-item">
              <img src="/images/cat-dessert.jpg" alt="Dessert" />
              <span>Dessert</span>
            </div>
            <div className="category-item">
              <img src="/images/cat-beverage.jpg" alt="Beverage" />
              <span>Beverage</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;