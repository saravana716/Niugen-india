import React from 'react';
import { Link } from 'react-router-dom';
import './GalleryHero.css';

const GalleryHero = () => {
  return (
    <section className="gallery-hero-section">
      <div className="gallery-hero-banner">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="gallery-hero-content">
            <h1>Gallery <span className="text-green">&</span> Video</h1>
            
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
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                Gallery & Video
              </span>
            </div>

            <p>Explore our premium projects, site views, and the lifestyle we create.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
