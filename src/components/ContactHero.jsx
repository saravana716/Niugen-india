import React from 'react';
import ParallaxHero from './ParallaxHero';
import TextReveal from './TextReveal';
import contactBanner from '../assets/banners/contactusbanner.jpeg';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <section className="contact-hero-section">
      <ParallaxHero
        bgImage={contactBanner}
        height="400px"
        overlayClass="contact-hero-overlay"
      >
        <div className="container">
          <div className="contact-hero-layout">
            
            {/* Left Content - Matches Mockup (media_1793717874033_2f0d8813.jpg) */}
            <div className="contact-hero-content">
              {/* Eyebrow */}
              <div className="contact-hero-eyebrow">
                <span>GET IN TOUCH</span>
                <span className="eyebrow-accent-line" aria-hidden="true"></span>
              </div>

              {/* Title with Gold Accent on "Us" */}
              <h1 className="contact-hero-title">
                <TextReveal text="Contact" /> <TextReveal elementType="span" className="text-gold" text="Us" delay={0.2} />
              </h1>

              {/* Subtitle */}
              <p className="contact-hero-subtitle">
                We're here to help you find the perfect property that suits your needs.
              </p>

              {/* 4 Feature Items at bottom of left content */}
              <div className="contact-hero-features-bar">
                <div className="contact-feature-card">
                  <div className="contact-feature-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4BC34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                  </div>
                  <span className="contact-feature-label">Trusted by<br/>Thousands</span>
                </div>

                <div className="contact-feature-sep" aria-hidden="true"></div>

                <div className="contact-feature-card">
                  <div className="contact-feature-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4BC34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <span className="contact-feature-label">Legally<br/>Approved</span>
                </div>

                <div className="contact-feature-sep" aria-hidden="true"></div>

                <div className="contact-feature-card">
                  <div className="contact-feature-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4BC34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className="contact-feature-label">Prime<br/>Locations</span>
                </div>

                <div className="contact-feature-sep" aria-hidden="true"></div>

                <div className="contact-feature-card">
                  <div className="contact-feature-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F4BC34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <span className="contact-feature-label">Customer<br/>Focused</span>
                </div>
              </div>
            </div>

            {/* Right half is intentionally kept empty to showcase the building photo */}
            <div className="contact-hero-spacer" aria-hidden="true"></div>

          </div>
        </div>
      </ParallaxHero>
    </section>
  );
};

export default ContactHero;
