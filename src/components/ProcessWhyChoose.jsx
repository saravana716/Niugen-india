import React from 'react';
import './ProcessWhyChoose.css';

const processSteps = [
  {
    step: '01',
    title: (
      <>
        Planning &amp;<br />Research
      </>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  },
  {
    step: '02',
    title: (
      <>
        Design &amp;<br />Development
      </>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    )
  },
  {
    step: '03',
    title: (
      <>
        Approvals &amp;<br />Execution
      </>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 12 12 17 22 12" />
        <polyline points="2 17 12 22 22 17" />
      </svg>
    )
  },
  {
    step: '04',
    title: (
      <>
        Quality<br />Assurance
      </>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    )
  },
  {
    step: '05',
    title: (
      <>
        Handover &amp;<br />Support
      </>
    ),
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    )
  }
];

const whyFeatures = [
  {
    title: 'Strategic Locations',
    description: 'Prime locations for better connectivity and growth.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    title: 'Modern Designs',
    description: 'Functional and aesthetic spaces for modern needs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M13 21V11l6 3v7" />
        <circle cx="9" cy="9" r="0.8" fill="currentColor" />
        <circle cx="9" cy="13" r="0.8" fill="currentColor" />
        <circle cx="9" cy="17" r="0.8" fill="currentColor" />
      </svg>
    )
  },
  {
    title: 'Quality Construction',
    description: 'Built with high-quality materials and excellent workmanship.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    )
  },
  {
    title: 'Sustainable Development',
    description: 'Creating eco-friendly spaces for a greener tomorrow.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    )
  },
  {
    title: 'Customer Focused',
    description: 'Your needs at the center of everything we do.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

const ProcessWhyChoose = () => {
  return (
    <div className="process-why-wrapper">
      {/* ====================================================================
          Part 1: OUR PROCESS (Floating Rounded Dark Chocolate Card)
          ==================================================================== */}
      <section className="process-flow-banner-section our-process-section">
        <div className="container">
          <div className="process-flow-card our-process-card">
            {/* Decorative Skyline Watermark */}
            <div className="process-watermark-decor" aria-hidden="true">
              <svg viewBox="0 0 180 200" fill="none" stroke="#D49D60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

            {/* Left Text Intro */}
            <div className="process-card-left">
              <div className="process-eyebrow-wrapper">
                <span className="process-eyebrow">OUR PROCESS</span>
                <span className="process-eyebrow-line"></span>
              </div>
              <h2 className="process-heading">
                From Vision<br />
                <span className="process-heading-accent">to Reality</span>
              </h2>
              <p className="process-subtext">
                A simple and transparent process to deliver high-quality projects on time.
              </p>
            </div>

            {/* Vertical Divider */}
            <div className="process-card-divider" aria-hidden="true"></div>

            {/* Right 5-Step Flow */}
            <div className="process-flow-track">
              {processSteps.map((item, index) => (
                <React.Fragment key={item.step}>
                  <div className="process-node">
                    <div className="process-node-circle">
                      <div className="process-node-badge">{item.step}</div>
                      <div className="process-node-icon">{item.icon}</div>
                      <div className="process-node-label">{item.title}</div>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="process-node-arrow" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Part 2: WHY CHOOSE NIUGEN INDIA INFRAS (Light Section with 5 Cards)
          ==================================================================== */}
      <section className="why-choose-section">
        <div className="container">
          {/* Heading Block */}
          <div className="why-header">
            <div className="why-eyebrow-wrapper">
              <span className="why-eyebrow">WHY CHOOSE NIUGEN INDIA INFRAS</span>
              <span className="why-eyebrow-line"></span>
            </div>

            <h2 className="why-heading">
              Building More Than <span className="why-heading-accent">Just Spaces.</span>
            </h2>

            <p className="why-subtext">
              We combine industry expertise, modern design and a customer-centric approach to deliver projects that make a difference.
            </p>
          </div>

          {/* 5 Horizontal Feature Cards */}
          <div className="why-cards-grid">
            {whyFeatures.map((feat, index) => (
              <div key={index} className="why-card">
                <div className="why-card-icon-box" aria-hidden="true">
                  {feat.icon}
                </div>
                <div className="why-card-divider" aria-hidden="true"></div>
                <div className="why-card-content">
                  <h3 className="why-card-title">{feat.title}</h3>
                  <p className="why-card-text">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessWhyChoose;
