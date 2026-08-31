import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="container">
        <div className="core-values-header">
          <h2>Our Core Values</h2>
          <div className="divider-line"></div>
        </div>
        
        <div className="core-values-grid">
          
          <div className="core-value-card">
            <div className="icon-wrapper">
               <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a8b38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 9l-4 4a2.83 2.83 0 0 0 0 4v0a2.83 2.83 0 0 0 4 0l6-6"></path>
                  <path d="M11.5 12.5l5.5 5.5a2.83 2.83 0 0 0 4 0v0a2.83 2.83 0 0 0 0-4l-4-4"></path>
                  <path d="M12 12l-2-2"></path>
                  <path d="M14 14l-2-2"></path>
               </svg>
            </div>
            <h4>Integrity</h4>
            <p>We believe in honest dealings and open communication.</p>
          </div>

          <div className="core-value-card">
            <div className="icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a8b38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"></path>
                <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"></path>
                <circle cx="12" cy="8" r="3"></circle>
              </svg>
            </div>
            <h4>Quality</h4>
            <p>We deliver excellence in every project we undertake.</p>
          </div>

          <div className="core-value-card">
            <div className="icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a8b38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
            </div>
            <h4>Trust</h4>
            <p>Building long-term relationships through reliability.</p>
          </div>

          <div className="core-value-card">
            <div className="icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a8b38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M9 18h6"></path>
                 <path d="M10 22h4"></path>
                 <path d="M12 15a5.5 5.5 0 0 0 5.5-5.5c0-3.03-2.47-5.5-5.5-5.5S6.5 6.47 6.5 9.5a5.5 5.5 0 0 0 5.5 5.5z"></path>
                 <line x1="12" y1="1" x2="12" y2="3"></line>
                 <line x1="4" y1="9" x2="6" y2="9"></line>
                 <line x1="18" y1="9" x2="20" y2="9"></line>
                 <line x1="5.6" y1="4.6" x2="7" y2="6"></line>
                 <line x1="17" y1="6" x2="18.4" y2="4.6"></line>
              </svg>
            </div>
            <h4>Innovation</h4>
            <p>Embracing new ideas to create better living spaces.</p>
          </div>

          <div className="core-value-card">
            <div className="icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1a8b38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M22 2l-7.5 7.5"></path>
                <path d="M16 2h6v6"></path>
              </svg>
            </div>
            <h4>Commitment</h4>
            <p>Dedicated to on-time delivery and customer satisfaction.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
