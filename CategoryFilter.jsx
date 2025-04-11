import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'burger', name: 'Burgers' },
    { id: 'pizza', name: 'Pizza' },
    { id: 'sandwich', name: 'Sandwiches' },
    { id: 'salad', name: 'Salads' },
    { id: 'dessert', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];
  
  return (
    <div className="category-filter">
      <h3>Categories</h3>
      <ul className="category-list">
        {categories.map(category => (
          <li 
            key={category.id} 
            className={activeCategory === category.id ? 'active' : ''}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
      
      <div className="price-filter">
        <h3>Price Range</h3>
        <div className="price-slider">
          <input type="range" min="0" max="100" />
          <div className="price-range">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>
      </div>
      
      <div className="rating-filter">
        <h3>Rating</h3>
        <div className="rating-options">
          <label>
            <input type="checkbox" />
            <span className="stars">
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
            </span>
          </label>
          <label>
            <input type="checkbox" />
            <span className="stars">
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star_border</span>
            </span>
          </label>
          <label>
            <input type="checkbox" />
            <span className="stars">
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star</span>
              <span className="material-icons">star_border</span>
              <span className="material-icons">star_border</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;