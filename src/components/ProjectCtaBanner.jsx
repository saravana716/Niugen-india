import React from 'react';
import { Link } from 'react-router-dom';
import projectVillaImg from '../assets/banners/ourproject.jpeg';
import './ProjectCtaBanner.css';

const ProjectCtaBanner = () => {
  return (
    <section className="project-cta-section">
      <div className="container">
        <div className="project-cta-banner">
          {/* Skyline Watermark on Far Right */}
          <div className="project-cta-watermark" aria-hidden="true">
            <svg viewBox="0 0 160 200" fill="none" stroke="#D49D60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M70 200V40l30-20v180" />
              <path d="M100 200V80l40-15v135" />
              <path d="M30 200V90l40-20v130" />
              <path d="M10 200V130l20-10v80" />
              <line x1="78" y1="60" x2="92" y2="60" />
              <line x1="78" y1="80" x2="92" y2="80" />
              <line x1="78" y1="100" x2="92" y2="100" />
              <line x1="78" y1="120" x2="92" y2="120" />
              <line x1="78" y1="140" x2="92" y2="140" />
              <line x1="78" y1="160" x2="92" y2="160" />
              <line x1="108" y1="100" x2="132" y2="100" />
              <line x1="108" y1="120" x2="132" y2="120" />
              <line x1="108" y1="140" x2="132" y2="140" />
              <line x1="108" y1="160" x2="132" y2="160" />
              <line x1="38" y1="110" x2="62" y2="110" />
              <line x1="38" y1="130" x2="62" y2="130" />
              <line x1="38" y1="150" x2="62" y2="150" />
            </svg>
          </div>

          {/* Left Villa Image with Gold Swoop Contour */}
          <div className="project-cta-image-wrapper">
            <img
              src={projectVillaImg}
              alt="Luxury modern villa architecture"
              className="project-cta-image"
              loading="lazy"
            />
          </div>

          {/* Center Text Content */}
          <div className="project-cta-content">
            <h2 className="project-cta-title">
              Have a Project in <span className="cta-accent">Mind?</span>
            </h2>
            <h3 className="project-cta-subtitle">
              Let's Build Something Great Together.
            </h3>
            <p className="project-cta-description">
              Get in touch with our team and explore the possibilities.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="project-cta-action">
            <Link to="/contact" className="project-cta-btn">
              <span>Enquire Now</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCtaBanner;

