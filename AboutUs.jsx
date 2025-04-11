import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const timeline = [
    { year: 2009, event: "First shop opened" },
    { year: 2012, event: "Expanded to 5 locations" },
    { year: 2015, event: "Started delivery service" },
    { year: 2024, event: "Launched new app" }
  ];
  
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>ABOUT US</h1>
            <h2>Pranesh</h2>
            <button className="btn-primary">KNOW MORE</button>
          </div>
        </div>
      </section>
      
      <section className="about-info section-padding">
        <div className="container">
          <h2 className="section-title">WHAT MAKES US SPECIAL</h2>
          <div className="about-info-content">
            <div className="about-text">
              <p>At Hot Coffee, we believe in serving not just great food and coffee, but also creating memorable experiences. Our dedication to quality ingredients, exceptional service, and welcoming atmosphere sets us apart.</p>
            </div>
            <div className="about-cards">
              <div className="info-card">
                <h3>Quality</h3>
                <p>Only the finest ingredients</p>
              </div>
              <div className="info-card">
                <h3>Service</h3>
                <p>Fast and friendly</p>
              </div>
              <div className="info-card">
                <h3>Innovation</h3>
                <p>Always fresh ideas</p>
              </div>
              <div className="info-card">
                <h3>Community</h3>
                <p>We care for our people</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="policies section-padding">
        <div className="container">
          <h2 className="section-title">OUR POLICIES</h2>
          <div className="policies-grid">
            {timeline.map((item, index) => (
              <div key={index} className="policy-card">
                <h3>{item.year}</h3>
                <p>{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="mission section-padding">
        <div className="container">
          <h2 className="section-title">MISSION</h2>
          <div className="mission-content">
            <div className="mission-image">
              <img src="/images/mission.jpg" alt="Our mission" />
            </div>
            <div className="mission-text">
              <p>To provide exceptional food and beverages that bring joy to our customers while supporting sustainable practices and our community.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="founder-message section-padding">
        <div className="container">
          <h2 className="section-title">MESSAGE FROM OUR FOUNDER</h2>
          <div className="founder-content">
            <div className="founder-image">
              <img src="/images/founder.jpg" alt="Founder" />
            </div>
            <div className="founder-message-text">
              <blockquote>
                "Our vision of bringing the best coffee to the community has turned into so much more. We're proud of building a place where people connect, relax, and enjoy quality food and drinks."
              </blockquote>
              <p className="founder-name">- Pranesh</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="team section-padding">
        <div className="container">
          <h2 className="section-title">OUR TEAM</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/images/chef1.jpg" alt="Chef" />
              <h3>Alex</h3>
              <p>Head Chef</p>
            </div>
            <div className="team-member">
              <img src="/images/chef2.jpg" alt="Chef" />
              <h3>Sarah</h3>
              <p>Pastry Chef</p>
            </div>
            <div className="team-member">
              <img src="/images/chef3.jpg" alt="Chef" />
              <h3>Michael</h3>
              <p>Barista</p>
            </div>
            <div className="team-member">
              <img src="/images/chef4.jpg" alt="Chef" />
              <h3>Emma</h3>
              <p>Manager</p>
            </div>
          </div>
          <div className="join-team">
            <button className="btn-primary">JOIN OUR TEAM</button>
          </div>
        </div>
      </section>
      
      <section className="gallery section-padding">
        <div className="container">
          <h2 className="section-title">OUR GALLERY</h2>
          <div className="gallery-grid">
            <img src="/images/gallery1.jpg" alt="Gallery" />
            <img src="/images/gallery2.jpg" alt="Gallery" />
            <img src="/images/gallery3.jpg" alt="Gallery" />
            <img src="/images/gallery4.jpg" alt="Gallery" />
            <img src="/images/gallery5.jpg" alt="Gallery" />
            <img src="/images/gallery6.jpg" alt="Gallery" />
          </div>
        </div>
      </section>
      
      <section className="faq section-padding">
        <div className="container">
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="faq-accordion">
            <div className="faq-item">
              <div className="faq-question">
                <h3>What are your opening hours?</h3>
                <span className="material-icons">expand_more</span>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Do you offer vegetarian options?</h3>
                <span className="material-icons">expand_more</span>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>How can I place a bulk order?</h3>
                <span className="material-icons">expand_more</span>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question">
                <h3>Do you cater for events?</h3>
                <span className="material-icons">expand_more</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="join-social section-padding">
        <div className="container">
          <h2 className="section-title">JOIN US ON INSTA</h2>
          <div className="social-grid">
            <div className="social-post">
              <img src="/images/social1.jpg" alt="Instagram" />
            </div>
            <div className="social-post">
              <img src="/images/social2.jpg" alt="Instagram" />
            </div>
            <div className="social-post">
              <img src="/images/social3.jpg" alt="Instagram" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;