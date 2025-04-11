import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Page components
import HomePage from './components/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search';
import Cart from './pages/Cart';
import CartPage from './pages/CartPage';
import ShippingAddress from './pages/ShippingAddress';
import MyProfile from './pages/MyProfile';
import MyOrders from './pages/MyOrders';
import PersonalInfo from './pages/PersonalInfo';
import Notifications from './pages/Notification';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgetPassword';
import OTP from './pages/OTP';
import Success from './pages/Success';

// Layout components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            
            <Route path="/products" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout/cart" element={<CartPage />} />
            <Route path="/checkout/shipping" element={<ShippingAddress />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/profile/orders" element={<MyOrders />} />
            <Route path="/profile/personal-info" element={<PersonalInfo />} />
            <Route path="/profile/notifications" element={<Notifications />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;