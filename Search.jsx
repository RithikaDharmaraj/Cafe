import React, { useState } from 'react';
import './Search.css';
import ProductCard from '../components/ProductCard';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  // Mock products data
  const allProducts = [
    { id: 1, name: 'Classic Latte', price: 4.99, image: '/images/latte.jpg', rating: 4.8, category: 'coffee' },
    { id: 2, name: 'Chocolate Frappe', price: 5.99, image: '/images/frappe.jpg', rating: 4.7, category: 'coffee' },
    { id: 3, name: 'Caramel Macchiato', price: 5.49, image: '/images/macchiato.jpg', rating: 4.9, category: 'coffee' },
    { id: 4, name: 'Espresso Shot', price: 3.49, image: '/images/espresso.jpg', rating: 4.6, category: 'coffee' },
    { id: 5, name: 'Cheeseburger Deluxe', price: 8.99, salePrice: 6.99, image: '/images/burger.jpg', rating: 4.5, category: 'burger' },
    { id: 6, name: 'Margherita Pizza', price: 12.99, image: '/images/pizza.jpg', rating: 4.7, category: 'pizza' },
    { id: 7, name: 'Chicken Sandwich', price: 7.99, image: '/images/sandwich.jpg', rating: 4.4, category: 'sandwich' },
    { id: 8, name: 'Garden Salad', price: 6.99, image: '/images/salad.jpg', rating: 4.3, category: 'salad' },
  ];
  
  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };
  
  return (
    <div className="search-page">
      <div className="container">
        <div className="search-container">
          <form onSubmit={handleSearch} className="search-form">
            <input 
              type="text" 
              placeholder="Search for food or drinks..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn-primary">Search</button>
          </form>
          
          <div className="search-filters">
            <div className="filter-option">Popular Items</div>
            <div className="filter-option">Today's Menu</div>
            <div className="filter-option">Recent Searches</div>
          </div>
          
          {isSearching ? (
            <div className="search-loading">
              <span className="material-icons spinning">refresh</span>
              <p>Searching...</p>
            </div>
          ) : searchQuery ? (
            <div className="search-results">
              <h2>{searchResults.length} Results for "{searchQuery}"</h2>
              <div className="results-grid">
                {searchResults.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ) : (
            <div className="suggested-items">
              <h2>Suggested Items</h2>
              <div className="results-grid">
                {allProducts.slice(0, 4).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
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

export default Search;