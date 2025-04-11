import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

const OTP = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  
  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto focus next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-form-container">
          <div className="auth-header">
            <img src="/logo.png" alt="HOT COFFEE" />
            <h1>Verify OTP</h1>
            <p>Enter the OTP sent to your email</p>
          </div>
          
          <form className="auth-form">
            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              ))}
            </div>
            <button type="submit" className="btn-primary btn-block">VERIFY</button>
            <div className="resend-otp">
              <p>Didn't receive OTP? <a href="#">Resend</a></p>
            </div>
          </form>
          
          <div className="auth-footer">
            <p>Back to <Link to="/login">Login</Link></p>
          </div>
        </div>
        
        <div className="auth-image">
          <img src="/images/coffee-promo.jpg" alt="Hot Coffee" />
          <div className="promo-badge">
            <span>20% OFF</span>
            <p>on first order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;