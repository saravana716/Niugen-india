import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero-section">
      <div className="about-hero-top">
        <div className="container about-hero-container">
          <div className="about-hero-content">
            <span className="subtitle">ABOUT US</span>
            <h1 className="title">
              <span className="text-dark">Building Stronger Foundations, </span>
              <span className="text-green">Creating Better Futures.</span>
            </h1>
            <p className="description">
              Niu Gen India Infras is a premier real estate development company committed to delivering high-quality villa plots and residential projects that enrich lives and create long-term value.
            </p>
          </div>
        </div>
        <div className="about-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Villa at Sunset" 
          />
        </div>
      </div>

      <div className="container">
        <div className="about-features-banner">
          <div className="features-left">
            <h3>Who We Are</h3>
            <div className="divider-line"></div>
            <p>
              With a strong foundation of trust, transparency, and timely delivery, we create spaces that reflect serenity, connectivity and modern living. From prime locations to world-class amenities, every project is designed to offer comfort, convenience and a better tomorrow.
            </p>
          </div>
          <div className="features-right">
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <span>Legally<br/>Approved</span>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span>Prime<br/>Locations</span>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16h6"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M20 8v6"></path>
                  <circle cx="17" cy="17" r="4"></circle>
                  <path d="M15.5 17l1 1 2-2"></path>
                  <line x1="9" y1="13" x2="12" y2="13"></line>
                  <line x1="9" y1="17" x2="11" y2="17"></line>
                </svg>
              </div>
              <span>Transparent<br/>Deals</span>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 11s-3.5-2.5-3.5-4.5A2.5 2.5 0 0 1 12 5a2.5 2.5 0 0 1 3.5 1.5C15.5 8.5 12 11 12 11z"></path>
                  <path d="M5 15c1-1 3-1 5 1l2 1 2-1c2-2 4-2 5-1"></path>
                  <path d="M12 18v3"></path>
                </svg>
              </div>
              <span>Customer<br/>First</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
