import React from 'react';
import { Link } from 'react-router-dom';
import ParallaxHero from './ParallaxHero';
import './ProjectsHero.css';

const ProjectsHero = () => {
  return (
    <section className="projects-hero-section">
      <ParallaxHero
        bgImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600"
        height="380px"
        overlayClass="hero-overlay"
      >
        <div className="container">
          <div className="projects-hero-content">
            <h1>Our Projects</h1>
            
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
                  <path d="M4 22h14"></path>
                  <path d="M6 22V8l4-4 4 4v14"></path>
                  <path d="M14 22V12h4v10"></path>
                </svg>
                Projects
              </span>
            </div>

            <p>Explore our premium villa plots and residential projects in prime locations.</p>
          </div>
        </div>
      </ParallaxHero>
    </section>
  );
};

export default ProjectsHero;
