import React from 'react';
import './GalleryContactBanner.css';

const GalleryContactBanner = () => {
  return (
    <div className="gallery-contact-banner">
      <div className="gcb-left">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5">
          <path d="M12 2v20"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          <rect x="6" y="8" width="12" height="12" rx="1"></rect>
          {/* Custom building-like icon representing spaces */}
          <path d="M8 22V10h8v12"></path>
          <path d="M6 14h12"></path>
          <circle cx="10" cy="18" r="1"></circle>
          <circle cx="14" cy="18" r="1"></circle>
          <circle cx="10" cy="12" r="1"></circle>
          <circle cx="14" cy="12" r="1"></circle>
        </svg>
        <div className="gcb-text">
          <h4>Discover the Perfect Space</h4>
          <p>Explore our projects and find the perfect place to<br/>build your future.</p>
        </div>
      </div>
      <div className="gcb-right">
        <button className="btn btn-solid-green">
          VIEW PROJECTS 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
        <button className="btn btn-outline-white">
          ENQUIRE NOW 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </div>
    </div>
  );
};

export default GalleryContactBanner;
