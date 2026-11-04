import React from 'react';
import ParallaxHero from './ParallaxHero';
import TextReveal from './TextReveal';
import './Hero.css';
import heroBg from '../assets/hommee.jpeg';

const Hero = () => {
  return (
    <ParallaxHero 
      bgImage={heroBg}
      height="600px"
      overlayClass="hero-gradient-overlay"
    >
      <div className="container hero-container">
        <div className="hero-content">
          <TextReveal elementType="p" className="hero-subtitle" text="BUILDING STRONGER FOUNDATIONS" />
          <h1 className="hero-title">
            <TextReveal className="text-primary" text="Building" delay={0.2} /><br/>
            <TextReveal className="text-primary" text="Dreams." delay={0.4} /><br/>
            <TextReveal className="text-secondary" text="Creating Value." delay={0.6} />
          </h1>
          <TextReveal 
            elementType="p" 
            className="hero-description" 
            text="Premium Villa Plots & Residential Projects in and around Kovilpatti." 
            delay={0.8}
          />
          
          <div className="hero-buttons">
            <button className="btn hero-btn-primary">
              EXPLORE PROJECTS 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
            <button className="btn hero-btn-outline">
              REQUEST SITE VISIT
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><rect x="8" y="14" width="3" height="3"></rect></svg>
            </button>
          </div>
        </div>
      </div>
    </ParallaxHero>
  );
};

export default Hero;
