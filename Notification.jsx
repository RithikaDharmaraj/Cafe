import React, { useState } from 'react';
import './Notifications.css';

const Notifications = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    email: {
      orderUpdates: true,
      promotions: false,
      newsletter: true,
    },
    push: {
      orderUpdates: true,
      promotions: true,
      specialOffers: false,
    },
    sms: {
      orderUpdates: false,
      promotions: false,
      deliveryAlerts: true,
    }
  });

  const handleToggle = (category, setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [category]: {
        ...notificationSettings[category],
        [setting]: !notificationSettings[category][setting]
      }
    });
  };

  const [recentNotifications] = useState([
    {
      id: 1,
      type: 'order',
      title: 'Your order has been delivered!',
      message: 'Order #ORD-3842 was delivered successfully.',
      date: 'Today, 12:45 PM',
      isRead: false
    },
    {
      id: 2,
      type: 'promo',
      title: 'Weekend Special: 20% OFF',
      message: 'Use code WEEKEND20 for 20% off your next order this weekend!',
      date: 'Yesterday, 10:30 AM',
      isRead: true
    },
    {
      id: 3,
      type: 'order',
      title: 'Your order is on the way!',
      message: 'Order #ORD-3842 is out for delivery.',
      date: 'Yesterday, 09:15 AM',
      isRead: true
    },
    {
      id: 4,
      type: 'system',
      title: 'Password Changed Successfully',
      message: 'Your account password was changed successfully.',
      date: 'Apr 8, 2025',
      isRead: true
    }
  ]);

  return (
    <div className="notifications-page">
      <div className="section-header">
        <h2>Notification Settings</h2>
      </div>

      <div className="notification-settings">
        <div className="notification-category">
          <h3>Email Notifications</h3>
          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-info">
                <h4>Order Updates</h4>
                <p>Receive updates about your order status</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notificationSettings.email.orderUpdates}
                  onChange={() => handleToggle('email', 'orderUpdates')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Promotions & Deals</h4>
                <p>Get notified about promotions and special deals</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notificationSettings.email.promotions}
                  onChange={() => handleToggle('email', 'promotions')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Newsletter</h4>
                <p>Receive our monthly newsletter</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notificationSettings.email.newsletter}
                  onChange={() => handleToggle('email', 'newsletter')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="notification-category">
          <h3>Push Notifications</h3>
          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-info">
                <h4>Order Updates</h4>
                <p>Receive real-time updates about your orders</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notificationSettings.push.orderUpdates}
                  onChange={() => handleToggle('push', 'orderUpdates')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Promotions</h4>
                <p>Get notified about new promotions</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notificationSettings.push.promotions}
                  onChange={() => handleToggle('push', 'promotions')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Special Offers</h4>
                <p>Receive exclusive special offers</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notificationSettings.push.specialOffers}
                  onChange={() => handleToggle('push', 'specialOffers')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="notification-category">
          <h3>SMS Notifications</h3>
          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-info">
                <h4>Order Updates</h4>
                <p>Get text messages about your order status</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notificationSettings.sms.orderUpdates}
                  onChange={() => handleToggle('sms', 'orderUpdates')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Promotions</h4>
                <p>Receive promotions via text message</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notificationSettings.sms.promotions}
                  onChange={() => handleToggle('sms', 'promotions')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Delivery Alerts</h4>
                <p>Get alerts when your delivery is on the way</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={notificationSettings.sms.deliveryAlerts}
                  onChange={() => handleToggle('sms', 'deliveryAlerts')}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      <div className="section-header">
        <h2>Recent Notifications</h2>
        <button className="mark-all-read">Mark All as Read</button>
      </div>

      <div className="recent-notifications">
        {recentNotifications.map(notification => (
          <div className={`notification-item ${notification.isRead ? '' : 'unread'}`} key={notification.id}>
            <div className={`notification-icon ${notification.type}`}>
              {notification.type === 'order' && <i className="icon-order"></i>}
              {notification.type === 'promo' && <i className="icon-promo"></i>}
              {notification.type === 'system' && <i className="icon-system"></i>}
            </div>
            <div className="notification-content">
              <div className="notification-header">
                <h4>{notification.title}</h4>
                <span className="notification-date">{notification.date}</span>
              </div>
              <p>{notification.message}</p>
            </div>
            {!notification.isRead && <div className="unread-indicator"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;