import React from 'react';
import './SiteVisitBanner.css';

const SiteVisitBanner = () => {
  return (
    <section className="site-visit-section">
      <div className="container">
        <div className="sv-banner">
          <div className="sv-left">
            <svg className="sv-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <circle cx="8" cy="14" r="1"></circle>
              <circle cx="12" cy="14" r="1"></circle>
              <circle cx="16" cy="14" r="1"></circle>
              <circle cx="8" cy="18" r="1"></circle>
              <circle cx="12" cy="18" r="1"></circle>
              <circle cx="16" cy="18" r="1"></circle>
            </svg>
            <div className="sv-text">
              <h3>Your Next Property Starts Here.</h3>
              <p>Want to visit our project site?<br/>Book an appointment with our team to take the next step.</p>
            </div>
          </div>
          <div className="sv-right">
            <button className="btn btn-solid-green">
              BOOK SITE VISIT 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <button className="btn btn-outline-green">
              CALL NOW
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteVisitBanner;
