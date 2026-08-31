import React from 'react';
import './ContactMap.css';

const ContactMap = () => {
  return (
    <section className="contact-map-section">
      <div className="container">
        <div className="map-wrapper">
          {/* Map background image (placeholder for iframe) */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1600" 
            alt="Map Location" 
            className="map-bg-image"
          />
          <div className="map-overlay-card">
            <div className="map-pin">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="none"></path>
                <circle cx="12" cy="10" r="3" fill="white"></circle>
              </svg>
            </div>
            <div className="map-card-text">
              <h6>Niu Gen India Infras</h6>
              <p>123, Niu Gen Tower, Anna Salai,<br/>Kovilpatti, Tamil Nadu - 628501</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
