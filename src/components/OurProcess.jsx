import React from 'react';
import './OurProcess.css';
import leavesImg from '../assets/process/process-leaves.png';
import villaImg from '../assets/process/process-villa.png';
import waveBarImg from '../assets/process/process-wave-bar.png';
import buildingLeftImg from '../assets/process/process-building-left.png';
import buildingRightImg from '../assets/process/process-building-right.png';

const processSteps = [
  {
    step: '01',
    pill: 'Discover',
    description: "Tell us what you're looking for.",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#4A220E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10.5" cy="10.5" r="7.5" />
        <line x1="21" y1="21" x2="15.8" y2="15.8" />
      </svg>
    )
  },
  {
    step: '02',
    pill: 'Explore',
    description: 'Review properties that match your requirements.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#4A220E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 12l10 5 10-5" />
        <path d="M2 17l10 5 10-5" />
      </svg>
    )
  },
  {
    step: '03',
    pill: 'Visit',
    description: 'Experience the location through a site visit.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#4A220E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19l-6 3V5l6-3 6 3 6-3v14l-6 3-6-3z" />
        <path d="M9 2v17" />
        <path d="M15 5v17" />
        <circle cx="12" cy="9" r="2.2" fill="#4A220E" />
      </svg>
    )
  },
  {
    step: '04',
    pill: 'Decide',
    description: 'Understand the project, documentation and investment.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#4A220E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="8" y1="12" x2="12" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
        <polyline points="14 14 16 16 20 12" />
      </svg>
    )
  },
  {
    step: '05',
    pill: 'Book',
    description: 'Take the next step towards ownership.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#4A220E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>
    )
  },
  {
    step: '06',
    pill: 'Own',
    description: 'Build your future with confidence.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#4A220E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5L12 3l9 7.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.5z" />
        <path d="M9 22v-6a3 3 0 0 1 6 0v6" />
      </svg>
    )
  }
];

const OurProcess = () => {
  return (
    <section className="about-our-process-section">
      {/* Decorative Assets matching Exact Mockup */}
      <img src={leavesImg} alt="" className="process-leaves-bg" aria-hidden="true" />
      <img src={buildingLeftImg} alt="" className="process-building-left" aria-hidden="true" />
      <img src={waveBarImg} alt="" className="process-wave-bar" aria-hidden="true" />

      <div className="container about-process-container">
        {/* Header Block: Centered with Gold Flanking Lines */}
        <div className="about-process-header">
          <div className="about-process-title-row">
            <span className="process-title-accent-line" aria-hidden="true"></span>
            <h2 className="about-process-main-title">Our Process</h2>
            <span className="process-title-accent-line" aria-hidden="true"></span>
          </div>
          <p className="about-process-subtitle">Simple, Transparent, Reliable</p>
        </div>

        {/* 6 Steps Connected Flow */}
        <div className="about-process-flow-track">
          {processSteps.map((item, index) => (
            <React.Fragment key={item.step}>
              {/* Individual Rounded Step Card */}
              <div className="about-process-card">
                {/* Floating Top Number Circle - unclipped with overflow: visible */}
                <div className="process-card-badge">{item.step}</div>

                {/* Outline Icon */}
                <div className="process-card-icon" aria-hidden="true">
                  {item.icon}
                </div>

                {/* Dark Chocolate Pill Button */}
                <div className="process-card-pill">{item.pill}</div>

                {/* Subtitle Description */}
                <p className="process-card-desc">{item.description}</p>

                {/* Golden-Amber Corner Swoop */}
                <span className="process-card-corner-swoop" aria-hidden="true"></span>
              </div>

              {/* Golden Double Chevron Connector Button */}
              {index < processSteps.length - 1 && (
                <div className="about-process-connector" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="13 17 18 12 13 7" />
                    <polyline points="6 17 11 12 6 7" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
