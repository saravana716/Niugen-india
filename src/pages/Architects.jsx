import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxHero from '../components/ParallaxHero';
import './Architects.css';

const services = [
  {
    id: 'arch1',
    title: 'Residential Design',
    image: 'https://images.unsplash.com/photo-1600607687931-570a273f5a54?w=600&q=80'
  },
  {
    id: 'arch2',
    title: 'Commercial Design',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'
  },
  {
    id: 'arch3',
    title: 'Interior Planning',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80'
  },
  {
    id: 'arch4',
    title: 'Master Planning',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
  }
];

const categoryIcons = [
  { icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z', label: 'Architectural Planning' },
  { icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8', label: '2D/3D Designs' },
  { icon: 'M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4', label: 'Structural Planning' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 8v4M12 16h.01', label: 'Approval Assistance' },
  { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z', label: 'Site Supervision' }
];

const Architects = () => {
  return (
    <PageTransition>
      <div className="architects-page">
        {/* HERO SECTION */}
        <ParallaxHero 
          bgImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
          overlayClass="arch-hero-overlay"
        >
          <div className="container arch-hero-content">
            <h1 className="arch-hero-title">Design Spaces<br/>That Inspire</h1>
            <p className="arch-hero-subtitle">Innovative Designs.<br/>Functional Spaces.</p>
          </div>
        </ParallaxHero>

        {/* ICONS ROW */}
        <ScrollReveal direction="up">
          <section className="arch-icons-section">
            <div className="container">
              <div className="arch-icons-row">
                {categoryIcons.map((item, index) => (
                  <div key={index} className="arch-icon-item">
                    <div className="arch-icon-circle">
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
          <section className="arch-services-section">
            <div className="container">
              <div className="arch-section-header">
                <h2 className="arch-section-title">Our Architectural Services</h2>
                <Link to="/services" className="arch-view-all">
                  View All <span className="arrow">›</span>
                </Link>
              </div>

              <div className="arch-services-grid">
                {services.map((srv) => (
                  <div key={srv.id} className="arch-service-card">
                    <div className="arch-service-image">
                      <img src={srv.image} alt={srv.title} />
                    </div>
                    <div className="arch-service-content">
                      <h3 className="arch-service-title">{srv.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA BANNER */}
        <ScrollReveal direction="up">
          <section className="arch-cta-section">
            <div className="container">
              <div className="arch-cta-banner">
                <div className="arch-cta-left">
                  <div className="arch-cta-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <div className="arch-cta-text">
                    <h3>Turn Your Ideas into Reality</h3>
                    <p>Consult Our Architects Today.</p>
                  </div>
                </div>
                <div className="arch-cta-right">
                  <button className="arch-cta-btn">Book Consultation →</button>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Architects;
