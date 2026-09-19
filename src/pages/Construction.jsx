import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import ParallaxHero from '../components/ParallaxHero';
import TextReveal from '../components/TextReveal';
import './Construction.css';

const services = [
  {
    id: 'con1',
    title: 'Residential Buildings',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80'
  },
  {
    id: 's1',
    title: 'Building Contracting',
    description: 'End-to-end contracting services for residential and commercial structures.',
    icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
  },
  {
    id: 's2',
    title: 'Turnkey Construction',
    description: 'From design to handover, we manage the entire lifecycle of your project.',
    icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'
  },
  {
    id: 's3',
    title: 'Commercial Construction',
    description: 'Expertise in building scalable, modern spaces for growing businesses.',
    icon: 'M4 4h16v16H4zM4 9h16M9 4v16M15 4v16'
  },
  {
    id: 's4',
    title: 'Renovations',
    description: 'Upgrading and breathing new life into existing structures.',
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
  }
];

const categoryIcons = [
  { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', label: 'Residential Construction' },
  { icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6', label: 'Commercial Construction' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', label: 'Renovation & Remodeling' },
  { icon: 'M4 4h16v16H4zM4 9h16M9 4v16M15 4v16', label: 'Turnkey Projects' },
  { icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', label: 'Quality Assurance', extraIcon: 'M22 4L12 14.01l-3-3' }
];

const Construction = () => {
  return (
    <PageTransition>
      <div className="construction-page">
        {/* HERO SECTION */}
        <ParallaxHero 
          bgImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
          overlayClass="const-hero-overlay"
        >
          <div className="container const-hero-content">
            <h1 className="const-hero-title">
              <TextReveal text="Building the Future" />
            </h1>
            <TextReveal elementType="p" className="const-hero-subtitle" text="Expert Contracting & Turnkey Construction" delay={0.2} />
          </div>
        </ParallaxHero>

        {/* ICONS ROW (No Search Bar) */}
        <ScrollReveal direction="up">
          <section className="const-icons-section">
            <div className="container">
              <div className="const-icons-row">
                {categoryIcons.map((item, index) => (
                  <div key={index} className="const-icon-item">
                    <div className="const-icon-circle">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={item.icon} />
                        {item.extraIcon && <path d={item.extraIcon} />}
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
          <section className="const-services-section">
            <div className="container">
              <div className="const-section-header">
                <h2 className="const-section-title">Our Construction Services</h2>
                <Link to="/services" className="const-view-all">
                  View All <span className="arrow">›</span>
                </Link>
              </div>

              <div className="const-services-grid">
                {services.map((srv) => (
                  <div key={srv.id} className="const-service-card">
                    <div className="const-service-image">
                      <img src={srv.image} alt={srv.title} />
                    </div>
                    <div className="const-service-content">
                      <h3 className="const-service-title">{srv.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA BANNER */}
        <ScrollReveal direction="up">
          <section className="const-cta-section">
            <div className="container">
              <div className="const-cta-banner">
                <div className="const-cta-left">
                  <div className="const-cta-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <path d="M2 15h10"></path>
                      <path d="M2 18h10"></path>
                      <path d="M2 21h10"></path>
                    </svg>
                  </div>
                  <div className="const-cta-text">
                    <h3>Let's Build Your Dream</h3>
                    <p>Reliable. Transparent. On Time.</p>
                  </div>
                </div>
                <div className="const-cta-right">
                  <button className="const-cta-btn">Get a Quote →</button>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </PageTransition>
  );
};

export default Construction;
