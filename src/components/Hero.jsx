import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';
import heroBg from '../assets/hero_bg.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ['0%', '50%']);

  return (
    <motion.section className="hero-banner" style={{ backgroundImage: `url(${heroBg})`, backgroundPositionY: y }}>
      <div className="hero-gradient-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">BUILDING STRONGER FOUNDATIONS</p>
          <h1 className="hero-title">
            <span className="text-primary">Building</span><br/>
            <span className="text-primary">Dreams.</span><br/>
            <span className="text-secondary">Creating Value.</span>
          </h1>
          <p className="hero-description">
            Premium Villa Plots & Residential Projects<br/>
            in and around Kovilpatti.
          </p>
          
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

        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
            </div>
            <p className="stat-text">PREMIUM<br/>DEVELOPMENTS</p>
          </div>
          
          <div className="stat-divider"></div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            </div>
            <p className="stat-text">LEGALLY<br/>APPROVED</p>
          </div>
          
          <div className="stat-divider"></div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <p className="stat-text">PRIME<br/>LOCATIONS</p>
          </div>
          
          <div className="stat-divider"></div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
            </div>
            <p className="stat-text">TRUSTED BY<br/>CUSTOMERS</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
