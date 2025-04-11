import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './MyProfile.css';

const MyProfile = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    // Set active tab based on current path
    if (location.pathname.includes('/orders')) return 'orders';
    if (location.pathname.includes('/personal-info')) return 'personal-info';
    if (location.pathname.includes('/notifications')) return 'notifications';
    return 'personal-info'; // Default tab
  });

  const menuItems = [
    { id: 'personal-info', label: 'Personal Info', path: '/account/personal-info' },
    { id: 'orders', label: 'My Orders', path: '/account/orders' },
    { id: 'notifications', label: 'Notifications', path: '/account/notifications' },
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Account</h1>
      </div>
      
      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="user-info">
            <div className="avatar">
              <img src="/images/default-avatar.jpg" alt="User Avatar" />
            </div>
            <div className="user-details">
              <h3>John Doe</h3>
              <p>john.doe@example.com</p>
            </div>
          </div>
          
          <ul className="profile-menu">
            {menuItems.map(item => (
              <li key={item.id}>
                <Link 
                  to={item.path} 
                  className={activeTab === item.id ? 'active' : ''}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="divider"></li>
            <li>
              <button className="logout-button">
                Log Out
              </button>
            </li>
          </ul>
        </div>
        
        <div className="profile-main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;