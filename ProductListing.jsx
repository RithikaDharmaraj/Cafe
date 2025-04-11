import React, { useState } from 'react';
import './ProductListing.css';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';

const ProductListing = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const products = [
    { id: 1, name: 'Classic Latte', price: 4.99, image: '/images/latte.jpg', rating: 4.8, category: 'coffee' },
    { id: 2, name: 'Chocolate Frappe', price: 5.99, image: '/images/frappe.jpg', rating: 4.7, category: 'coffee' },
    { id: 3, name: 'Caramel Macchiato', price: 5.49, image: '/images/macchiato.jpg', rating: 4.9, category: 'coffee' },
    { id: 4, name: 'Espresso Shot', price: 3.49, image: '/images/espresso.jpg', rating: 4.6, category: 'coffee' },
    { id: 5, name: 'Cheeseburger Deluxe', price: 8.99, salePrice: 6.99, image: '/images/burger.jpg', rating: 4.5, category: 'burger' },
    { id: 6, name: 'Margherita Pizza', price: 12.99, image: '/images/pizza.jpg', rating: 4.7, category: 'pizza' },
    { id: 7, name: 'Chicken Sandwich', price: 7.99, image: '/images/sandwich.jpg', rating: 4.4, category: 'sandwich' },
    { id: 8, name: 'Garden Salad', price: 6.99, image: '/images/salad.jpg', rating: 4.3, category: 'salad' },
    { id: 9, name: 'Chocolate Cake', price: 5.99, image: '/images/cake.jpg', rating: 4.8, category: 'dessert' },
    { id: 10, name: 'Strawberry Smoothie', price: 4.99, image: '/images/smoothie.jpg', rating: 4.6, category: 'beverages' },
    { id: 11, name: 'Veggie Wrap', price: 6.99, image: '/images/wrap.jpg', rating: 4.5, category: 'sandwich' },
    { id: 12, name: 'Iced Coffee', price: 3.99, image: '/images/iced-coffee.jpg', rating: 4.7, category: 'coffee' },
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  const deal = { id: 5, name: 'Cheeseburger Deluxe', price: 8.99, salePrice: 6.99, image: '/images/burger.jpg', rating: 4.5 };
  
  return (
    <div className="product-listing-page">
      <section className="product-header">
        <div className="container">
          <h1>NEW LAUNCH</h1>
          <p>Discover our latest additions of delicious food and beverages</p>
        </div>
      </section>
      
      <section className="product-content section-padding">
        <div className="container">
          <div className="product-sidebar">
            <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </div>
          
          <div className="product-grid-container">
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="deal-section section-padding">
        <div className="container">
          <h2 className="section-title">HOT DEAL! Sales of the Week</h2>
          <div className="deal-card">
            <div className="deal-image">
              <img src={deal.image} alt={deal.name} />
              <div className="discount-badge">-20%</div>
            </div>
            <div className="deal-content">
              <h3>{deal.name}</h3>
              <div className="price">
                <span className="sale-price">${deal.salePrice}</span>
                <span className="original-price">${deal.price}</span>
              </div>
              <Link to={`/product/${deal.id}`} className="btn-primary">ORDER NOW</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="delivery-section section-padding">
        <div className="container">
          <div className="delivery-content">
            <h2>DELIVERY & TAKE OUT</h2>
            <p>We deliver your food fresh, fast and right to your door.</p>
            <Link to="/products" className="btn-primary">ORDER NOW</Link>
          </div>
          <div className="delivery-image">
            <img src="/images/delivery-truck.svg" alt="Delivery" className="delivery-truck" />
            <div className="city-skyline"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductListing;