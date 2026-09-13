import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="container">
        <div className="core-values-header">
          <h2>ABOUT — FOUR CORE VALUES</h2>
          <div className="divider-line"></div>
        </div>
        
        <div className="core-values-grid">
          
          <div className="core-value-card">
            <div className="icon-wrapper">
               <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>
               </svg>
            </div>
            <h4>QUALITY PLANNING</h4>
            <p>Thoughtfully designed developments with attention to functionality and comfort.</p>
          </div>

          <div className="core-value-card">
            <div className="icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h4>PRIME LOCATIONS</h4>
            <p>Locations selected for connectivity, accessibility and future potential.</p>
          </div>

          <div className="core-value-card">
            <div className="icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
            </div>
            <h4>CUSTOMER TRUST</h4>
            <p>Transparent service and clear communication at every stage.</p>
          </div>

          <div className="core-value-card">
            <div className="icon-wrapper">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                 <line x1="12" y1="1" x2="12" y2="23"></line>
                 <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h4>LONG-TERM VALUE</h4>
            <p>Properties selected and developed with future value in mind.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
