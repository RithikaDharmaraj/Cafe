import React from 'react';
import './FoodMoodSelector.css';

const FoodMoodSelector = () => {
  const moods = [
    { id: 'happy', name: 'Happy', emoji: '😊', image: '/images/food-happy.jpg' },
    { id: 'tired', name: 'Tired', emoji: '😴', image: '/images/food-tired.jpg' },
    { id: 'hungry', name: 'Hungry', emoji: '😋', image: '/images/food-hungry.jpg' },
    { id: 'healthy', name: 'Healthy', emoji: '🥗', image: '/images/food-healthy.jpg' },
    { id: 'indulgent', name: 'Indulgent', emoji: '🍰', image: '/images/food-indulgent.jpg' }
  ];
  
  return (
    <div className="food-mood-selector">
      {moods.map(mood => (
        <div key={mood.id} className="mood-item">
          <div className="mood-emoji">{mood.emoji}</div>
          <div className="mood-image">
            <img src={mood.image} alt={mood.name} />
          </div>
          <div className="mood-name">{mood.name}</div>
        </div>
      ))}
    </div>
  );
};

export default FoodMoodSelector;