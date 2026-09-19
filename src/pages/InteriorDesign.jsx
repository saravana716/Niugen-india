import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxHero from '../components/ParallaxHero';
import TextReveal from '../components/TextReveal';
import './InteriorDesign.css';

const services = [
  {
    id: 'int1',
    title: 'Modern Living Room',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80'
  },
  {
    id: 'int2',
    title: 'Elegant Bedroom',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80'
  },
  {
    id: 'int3',
    title: 'Modular Kitchen',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a8728?w=600&q=80'
  },
  {
    id: 'int4',
    title: 'Office Workspace',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80'
  }
];

const categoryIcons = [
  { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', label: 'Home Interiors' },
  { icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', label: 'Office Interiors' },
  { icon: 'M10 2v7.31a3 3 0 0 0 2.21 2.89L14 12.69a3 3 0 0 1 2 2.83V22M10 21V11c0-1.66-1.34-3-3-3s-3 1.34-3 3v10', label: 'Kitchen Design' },
  { icon: 'M2 12V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5M2 17v5M22 17v5M2 17h20M6 12v5M18 12v5', label: 'Bedroom Design' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 8v4M12 16h.01', label: '3D Visualisation' }
];

const InteriorDesign = () => {
  return (
    <PageTransition>
      <div className="interior-page">
        {/* HERO SECTION */}
        <ParallaxHero 
          bgImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop"
          overlayClass="int-hero-overlay"
        >
          <div className="container int-hero-content">
            <h1 className="int-hero-title">
              <TextReveal text="Elevate Your" /><br/>
              <TextReveal text="Interiors" delay={0.2} />
            </h1>
            <TextReveal elementType="p" className="int-hero-subtitle" text="Premium Designs for Modern Living" delay={0.4} />
          </div>
        </ParallaxHero>

        {/* ICONS ROW */}
        <ScrollReveal direction="up">
          <section className="int-icons-section">
            <div className="container">
              <div className="int-icons-row">
                {categoryIcons.map((item, index) => (
                  <div key={index} className="int-icon-item">
                    <div className="int-icon-circle">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={item.icon} />
                      </svg>
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* FEATURED SERVICES SECTION */}
        <ScrollReveal direction="up">
          <section className="int-services-section">
            <div className="container">
              <div className="int-section-header">
                <h2 className="int-section-title">Featured Interior Designs</h2>
                <Link to="/services" className="int-view-all">
                  View All <span className="arrow">›</span>
                </Link>
              </div>

              <div className="int-services-grid">
                {services.map((srv) => (
                  <div key={srv.id} className="int-service-card">
                    <div className="int-service-image">
                      <img src={srv.image} alt={srv.title} />
                    </div>
                    <div className="int-service-content">
                      <h3 className="int-service-title">{srv.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA BANNER */}
        <ScrollReveal direction="up">
          <section className="int-cta-section">
            <div className="container">
              <div className="int-cta-banner">
                <div className="int-cta-left">
                  <div className="int-cta-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5a2 2 0 0 0-2 2v6h20v-6a2 2 0 0 0-2-2z"></path>
                      <path d="M5 12V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6"></path>
                      <path d="M2 22h20"></path>
                    </svg>
                  </div>
                  <div className="int-cta-text">
                    <h3>Design. Decorate. Live Better.</h3>
                    <p>Custom Interiors for every space.</p>
                  </div>
                </div>
                <div className="int-cta-right">
                  <button className="int-cta-btn">Get Started →</button>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default InteriorDesign;
