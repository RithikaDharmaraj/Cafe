import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import ProductCard from '../components/ProductCard';
import CategoryList from '../components/CategoryList';
import FoodMoodSelector from '../components/FoodMoodSelector';
import TestimonialSlider from '../components/TestimonialSlider';
import SocialFeed from '../components/SocialFeed';

const HomePage = () => {
  const bestSellers = [
    { id: 1, name: 'Classic Latte', price: 4.99, image: '/images/latte.jpg', rating: 4.8 },
    { id: 2, name: 'Chocolate Frappe', price: 5.99, image: '/images/frappe.jpg', rating: 4.7 },
    { id: 3, name: 'Caramel Macchiato', price: 5.49, image: '/images/macchiato.jpg', rating: 4.9 },
    { id: 4, name: 'Espresso Shot', price: 3.49, image: '/images/espresso.jpg', rating: 4.6 },
  ];
  
  const deal = { id: 5, name: 'Cheeseburger Deluxe', price: 8.99, salePrice: 6.99, image: '/images/burger.jpg', rating: 4.5 };
  
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="container">
          <div className="hero-content">
            <h1>INDULGE IN BLISS</h1>
            <p>Taste the perfection in every sip and bite!</p>
            <Link to="/products" className="btn-primary">ORDER NOW</Link>
          </div>
        </div>
      </section>
      
      {/* Best Sellers */}
      <section className="best-sellers section-padding">
        <div className="container">
          <h2 className="section-title">BEST-SELLING PRODUCTS</h2>
          <div className="product-grid">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Deal of the Week */}
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
      
      {/* Categories */}
      <section className="categories-section section-padding">
        <div className="container">
          <h2 className="section-title">OUR CATEGORIES</h2>
          <CategoryList />
        </div>
      </section>
      
      {/* Delivery & Takeout */}
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
      
      {/* About Us */}
      <section className="about-section section-padding">
        <div className="container">
          <h2 className="section-title">IT'S ALL ABOUT US</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>HOW IT ALL STARTED</h3>
              <p>Founded with passion and dedication to bring you the best coffee and food experience.</p>
              <Link to="/about" className="btn-secondary">READ MORE</Link>
            </div>
            <div className="about-image-grid">
              <img src="/images/food1.jpg" alt="Food" />
              <img src="/images/food2.jpg" alt="Food" />
              <img src="/images/food3.jpg" alt="Food" />
              <img src="/images/food4.jpg" alt="Food" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Food Mood */}
      <section className="food-mood-section section-padding">
        <div className="container">
          <h2 className="section-title">HOW IS YOUR FOOD MOOD?</h2>
          <FoodMoodSelector />
        </div>
      </section>
      
      {/* Menu Feature */}
      <section className="menu-feature-section section-padding">
        <div className="container">
          <h2 className="section-title">ENJOY THE MENU</h2>
          <div className="menu-feature-grid">
            <div className="menu-item">
              <img src="/images/dish1.jpg" alt="Dish" />
              <h3>Healthy Salad</h3>
            </div>
            <div className="menu-item">
              <img src="/images/dish2.jpg" alt="Dish" />
              <h3>Tasty Pasta</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="testimonials-section section-padding">
        <div className="container">
          <h2 className="section-title">CUSTOMER REVIEWS</h2>
          <TestimonialSlider />
        </div>
      </section>
      
      {/* Social Feed */}
      <section className="social-feed-section section-padding">
        <div className="container">
          <h2 className="section-title">JOIN US ON INSTA</h2>
          <SocialFeed />
        </div>
      </section>
    </div>
  );
};

export default HomePage;