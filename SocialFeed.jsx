import React from 'react';
import './SocialFeed.css';

const SocialFeed = () => {
  const socialPosts = [
    { id: 1, image: '/images/social1.jpg', likes: 243 },
    { id: 2, image: '/images/social2.jpg', likes: 187 },
    { id: 3, image: '/images/social3.jpg', likes: 320 },
  ];
  
  return (
    <div className="social-feed">
      {socialPosts.map(post => (
        <div key={post.id} className="social-post">
          <img src={post.image} alt="Instagram post" />
          <div className="post-overlay">
            <div className="post-likes">
              <span className="material-icons">favorite</span>
              {post.likes}
            </div>
          </div>
        </div>
      ))}
      <div className="follow-card">
        <div className="follow-icon">
          <img src="/images/instagram-logo.png" alt="Instagram" />
        </div>
        <h3>Follow Us</h3>
        <p>@hotcoffee</p>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
          FOLLOW
        </a>
      </div>
    </div>
  );
};

export default SocialFeed;