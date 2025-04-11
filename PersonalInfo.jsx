import React, { useState } from 'react';
import './PersonalInfo.css';

const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    addresses: [
      {
        id: 1,
        type: 'Home',
        address: '123 Main Street',
        apt: 'Apt 4B',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        isDefault: true
      },
      {
        id: 2,
        type: 'Work',
        address: '456 Office Plaza',
        apt: 'Suite 300',
        city: 'New York',
        state: 'NY',
        zipCode: '10002',
        isDefault: false
      }
    ]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit the form data to an API
    setIsEditing(false);
    // Show success message or handle API response
  };

  return (
    <div className="personal-info">
      <div className="section-header">
        <h2>Personal Information</h2>
        <button 
          className="edit-button"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text"
                id="firstName"
                name="firstName"
                value={userData.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text"
                id="lastName"
                name="lastName"
                value={userData.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel"
                id="phone"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                required
              />
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="form-buttons">
            <button type="submit" className="save-button">Save Changes</button>
          </div>
        )}
      </form>

      <div className="section-divider"></div>

      <div className="section-header">
        <h2>Saved Addresses</h2>
        <button className="add-address-button">Add New Address</button>
      </div>

      <div className="addresses-list">
        {userData.addresses.map(address => (
          <div className={`address-card ${address.isDefault ? 'default' : ''}`} key={address.id}>
            <div className="address-header">
              <h3>{address.type}</h3>
              {address.isDefault && <span className="default-badge">Default</span>}
            </div>
            <div className="address-details">
              <p>{address.address}, {address.apt}</p>
              <p>{address.city}, {address.state} {address.zipCode}</p>
            </div>
            <div className="address-actions">
              <button className="edit-address">Edit</button>
              {!address.isDefault && <button className="delete-address">Delete</button>}
              {!address.isDefault && <button className="set-default">Set as Default</button>}
            </div>
          </div>
        ))}
      </div>

      <div className="section-divider"></div>

      <div className="section-header">
        <h2>Password</h2>
        <button className="change-password-button">Change Password</button>
      </div>
    </div>
  );
};

export default PersonalInfo;