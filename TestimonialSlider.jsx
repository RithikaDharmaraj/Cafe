import React, { useState } from 'react';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah M.',
      text: 'The coffee here is absolutely amazing! I come here every morning before work.',
      rating: 5
    },
    {
      id: 2,
      name: 'John D.',
      text: 'Best burgers in town, no doubt. The service is also top-notch.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily L.',
      text: 'I love their dessert selection. The cheesecake is to die for!',
      rating: 4
    },
    {
      id: 4,
      name: 'Michael T.',
      text: 'Great place for lunch meetings. Fast service and delicious food.',
      rating: 4
    }
  ];
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <div className="testimonial-slider">
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
          >
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <span 
                  key={i} 
                  className={`material-icons ${i < testimonial.rating ? 'filled' : ''}`}
                >
                  star
                </span>
              ))}
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
      <div className="testimonial-controls">
        <button onClick={prevSlide} className="slider-btn prev-btn">
          <span className="material-icons">chevron_left</span>
        </button>
        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
        </div>
        <button onClick={nextSlide} className="slider-btn next-btn">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;