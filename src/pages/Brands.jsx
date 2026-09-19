import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxHero from '../components/ParallaxHero';
import './Brands.css';

const brandsList = [
  { name: 'UltraTech', color: '#ffcc00', text: '#000' },
  { name: 'Dalmia', color: '#fff', text: '#004aad' },
  { name: 'ACC', color: '#fff', text: '#ff0000' },
  { name: 'Kajaria', color: '#fff', text: '#00008b' },
  { name: 'HAVELLS', color: '#fff', text: '#cc0000' },
  { name: 'KOHLER', color: '#000', text: '#fff' },
  { name: 'HAFELE', color: '#fff', text: '#e3000f' },
  { name: 'asianpaints', color: '#fff', text: '#f37021' },
  { name: 'Finolex', color: '#fff', text: '#0072ce' },
  { name: 'TATA TISCON', color: '#fff', text: '#0033a0' }
];

const Brands = () => {
  return (
    <PageTransition>
      <div className="brands-page">
        {/* HERO SECTION */}
        <ParallaxHero 
          bgImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
          overlayClass="brands-hero-overlay"
        >
          <div className="container brands-hero-content">
            <h1 className="brands-hero-title">Premium Brands<br/>Trusted Quality</h1>
            <p className="brands-hero-subtitle">We partner with the world's leading brands<br/>to deliver the best for your projects.</p>
          </div>
        </ParallaxHero>

        {/* BRANDS GRID SECTION */}
        <ScrollReveal direction="up">
          <section className="brands-grid-section">
            <div className="container">
              <div className="brands-section-header">
                <h2 className="brands-section-title">Our Partner Brands</h2>
              </div>

              <div className="brands-logo-grid">
                {brandsList.map((brand, index) => (
                  <div key={index} className="brand-logo-card" style={{ backgroundColor: brand.color }}>
                    <span style={{ color: brand.text }} className="brand-logo-text">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Bottom text and button exactly like the screenshot */}
              <div className="brands-bottom-action">
                <p className="brands-bottom-text">
                  We partner with the world's leading brands<br/>to deliver the best for your projects.
                </p>
                <button className="brands-explore-btn">Explore All Brands →</button>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA BANNER (Consistent with other pages) */}
        <ScrollReveal direction="up">
          <section className="brands-cta-section">
            <div className="container">
              <div className="brands-cta-banner">
                <div className="brands-cta-left">
                  <div className="brands-cta-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <div className="brands-cta-text">
                    <h3>Uncompromising Quality</h3>
                    <p>Only the best materials for your dream space.</p>
                  </div>
                </div>
                <div className="brands-cta-right">
                  <button className="brands-cta-btn">Contact Us →</button>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Brands;
