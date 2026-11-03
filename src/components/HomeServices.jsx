import React from 'react';
import { Link } from 'react-router-dom';
import './HomeServices.css';

const servicesData = [
  {
    id: 1,
    title: 'Land & Plots',
    description: 'Prime land and plotted development for residential, commercial and investment purposes.',
    link: '/projects?category=land',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAC460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 12 12 17 22 12" />
        <polyline points="2 17 12 22 22 17" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Residential',
    description: 'Modern residential spaces designed for better living.',
    link: '/projects?category=residential',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAC460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Commercial',
    description: 'Business spaces for growth and success.',
    link: '/projects?category=commercial',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAC460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <line x1="8" y1="6" x2="8.01" y2="6" />
        <line x1="12" y1="6" x2="12.01" y2="6" />
        <line x1="16" y1="6" x2="16.01" y2="6" />
        <line x1="8" y1="10" x2="8.01" y2="10" />
        <line x1="12" y1="10" x2="12.01" y2="10" />
        <line x1="16" y1="10" x2="16.01" y2="10" />
        <line x1="8" y1="14" x2="8.01" y2="14" />
        <line x1="12" y1="14" x2="12.01" y2="14" />
        <line x1="16" y1="14" x2="16.01" y2="14" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Construction',
    description: 'Quality construction with strong engineering and project management.',
    link: '/projects?category=construction',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAC460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18h20" />
        <path d="M4 18v-4a8 8 0 0 1 16 0v4" />
        <path d="M10 10V6a2 2 0 0 1 4 0v4" />
        <line x1="12" y1="14" x2="12" y2="14.01" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Architects',
    description: 'Innovative architectural designs for functional and aesthetic spaces.',
    link: '/services#architects',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAC460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <line x1="12" y1="7" x2="6" y2="21" />
        <line x1="12" y1="7" x2="18" y2="21" />
        <line x1="8.5" y1="15" x2="15.5" y2="15" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Interior Design',
    description: 'Elegant and modern interior solutions for homes and workspaces.',
    link: '/services#interior',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAC460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l3 9H3l3-9z" />
        <line x1="12" y1="12" x2="12" y2="20" />
        <line x1="8" y1="20" x2="16" y2="20" />
      </svg>
    )
  },
  {
    id: 7,
    title: 'Brands',
    description: 'Partnering with trusted brands for quality and reliability.',
    link: '/services#brands',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAC460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l8 4-8 4-8-4 8-4z" />
        <path d="M4 10l8 4 8-4" />
        <path d="M4 14l8 4 8-4" />
        <path d="M4 18l8 4 8-4" />
      </svg>
    )
  },
  {
    id: 8,
    title: 'Infrastructure Development',
    description: 'Integrated infrastructure solutions to support well-planned communities and sustainable development.',
    link: '/services#infrastructure',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FAC460" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="9" y2="3" />
        <line x1="20" y1="21" x2="15" y2="3" />
        <line x1="12" y1="5" x2="12" y2="8" />
        <line x1="12" y1="11" x2="12" y2="14" />
        <line x1="12" y1="17" x2="12" y2="20" />
      </svg>
    )
  }
];

const HomeServices = () => {
  return (
    <section className="home-services-section">
      <div className="container">
        {/* Header Block with Title & Top-Right View All Button */}
        <div className="home-services-header">
          <div className="home-services-header-left">
            <div className="services-eyebrow-wrapper">
              <span className="services-eyebrow">OUR SERVICES</span>
              <span className="services-eyebrow-line"></span>
            </div>
            <h2 className="services-main-title">
              Comprehensive Real Estate &amp;<br />
              Infrastructure <span className="services-title-accent">Solutions</span>
            </h2>
            <p className="services-subtitle">
              From land development to architectural design and construction, we deliver complete solutions that transform ideas into exceptional spaces.
            </p>
          </div>

          <div className="home-services-header-right">
            <Link to="/services" className="services-view-all-btn">
              View All Services <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="services-cards-grid">
          {servicesData.map((item) => (
            <div key={item.id} className="service-solution-card">
              <div className="service-card-top">
                <div className="service-card-icon-box" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="service-card-info">
                  <h3 className="service-card-title">{item.title}</h3>
                  <p className="service-card-desc">{item.description}</p>
                </div>
              </div>

              <div className="service-card-bottom">
                <Link to={item.link} className="service-learn-more-btn">
                  Learn More <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;

