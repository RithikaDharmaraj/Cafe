import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-name">
          <h3>{product.name}</h3>
        </Link>
        <div className="product-rating">
          <span className="stars">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="material-icons">
                {index < Math.floor(product.rating) ? 'star' : 'star_border'}
              </span>
            ))}
          </span>
          <span className="rating-value">{product.rating}</span>
        </div>
        <div className="product-price">
          {product.salePrice ? (
            <>
              <span className="sale-price">${product.salePrice}</span>
              <span className="original-price">${product.price}</span>
            </>
          ) : (
            <span className="price">${product.price}</span>
          )}
        </div>
        <button className="btn-add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;