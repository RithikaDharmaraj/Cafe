import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css';

const CategoryList = () => {
  const categories = [
    { id: 'coffee', name: 'Coffee', image: '/images/category-coffee.jpg' },
    { id: 'burger', name: 'Burgers', image: '/images/category-burger.jpg' },
    { id: 'pizza', name: 'Pizza', image: '/images/category-pizza.jpg' },
    { id: 'sandwich', name: 'Sandwiches', image: '/images/category-sandwich.jpg' },
    { id: 'salad', name: 'Salads', image: '/images/category-salad.jpg' },
    { id: 'dessert', name: 'Desserts', image: '/images/category-dessert.jpg' }
  ];
  
  return (
    <div className="category-list">
      {categories.map(category => (
        <Link to={`/category/${category.id}`} key={category.id} className="category-item">
          <img src={category.image} alt={category.name} />
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;