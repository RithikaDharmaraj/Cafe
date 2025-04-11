import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <div className="container">
          <h1>CONTACT US</h1>
          <p>We'd love to hear from you. Send us your questions, feedback, or inquiries.</p>
        </div>
      </section>
      
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn-primary">SEND MESSAGE</button>
              </form>
            </div>
            <div className="contact-image">
              <img src="/images/contact-cafe.jpg" alt="Our café" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact-info">
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <span className="material-icons">phone</span>
              <h3>CALL US</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-card">
              <span className="material-icons">email</span>
              <h3>EMAIL</h3>
              <p>info@hotcoffee.com</p>
            </div>
            <div className="info-card">
              <span className="material-icons">location_on</span>
              <h3>ADDRESS</h3>
              <p>123 Coffee Street, Brewville, CA 90210</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="reserve-table-section">
        <div className="container">
          <div className="reserve-card">
            <h2>RESERVE A TABLE</h2>
            <p>Book your table in advance to avoid waiting.</p>
            <button className="btn-primary">BOOK NOW</button>
          </div>
        </div>
      </section>
      
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">OUR GALLERY</h2>
          <div className="gallery-grid">
            <img src="/images/gallery1.jpg" alt="Gallery" />
            <img src="/images/gallery2.jpg" alt="Gallery" />
            <img src="/images/gallery3.jpg" alt="Gallery" />
            <img src="/images/gallery4.jpg" alt="Gallery" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;