import React from 'react';
import { Link } from 'react-router-dom';
import ParallaxHero from './ParallaxHero';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <section className="contact-hero-section">
      <ParallaxHero
        bgImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600"
        height="380px"
        overlayClass="hero-overlay"
      >
        <div className="container">
          <div className="contact-hero-layout">
            
            {/* Left Content */}
            <div className="contact-hero-content">
              <h1>Contact <span className="text-green">Us</span></h1>
              
              <div className="breadcrumbs">
                <Link to="/" className="breadcrumb-link home-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  Home
                </Link>
                <span className="breadcrumb-separator">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </span>
                <span className="breadcrumb-current">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Contact Us
                </span>
              </div>

              <p>We're here to help you find the perfect property that suits your needs.</p>
            </div>

            {/* Right Badge Box */}
            <div className="contact-hero-badges">
              <div className="badge-item">
                <div className="badge-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <span className="badge-text">Trusted by<br/>Thousands</span>
              </div>
              <div className="badge-divider"></div>
              <div className="badge-item">
                <div className="badge-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <span className="badge-text">Legally<br/>Approved</span>
              </div>
              <div className="badge-divider"></div>
              <div className="badge-item">
                <div className="badge-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span className="badge-text">Prime<br/>Locations</span>
              </div>
              <div className="badge-divider"></div>
              <div className="badge-item">
                <div className="badge-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <span className="badge-text">Customer<br/>Focused</span>
              </div>
            </div>

          </div>
        </div>
      </ParallaxHero>
    </section>
  );
};

export default ContactHero;
