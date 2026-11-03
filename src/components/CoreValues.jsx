import React from 'react';
import './CoreValues.css';

import valArtwork1 from '../assets/values/val-artwork-1.png';
import valArtwork2 from '../assets/values/val-artwork-2.png';
import valArtwork3 from '../assets/values/val-artwork-3.png';
import valArtwork4 from '../assets/values/val-artwork-4.png';

const coreValuesData = [
  {
    id: 1,
    title: 'QUALITY PLANNING',
    description: 'Thoughtfully designed developments with attention to functionality and comfort.',
    image: valArtwork1,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#683515" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" fill="rgba(104, 53, 21, 0.12)" />
        <polyline points="2 12 12 17 22 12" />
        <polyline points="2 17 12 22 22 17" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'PRIME LOCATIONS',
    description: 'Locations selected for connectivity, accessibility and future potential.',
    image: valArtwork2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#683515" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="rgba(104, 53, 21, 0.12)" />
        <circle cx="12" cy="9" r="2.5" fill="#683515" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'CUSTOMER TRUST',
    description: 'Transparent service and clear communication at every stage.',
    image: valArtwork3,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#683515" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(104, 53, 21, 0.12)" />
        <polyline points="9 11.5 11.5 14 15.5 9.5" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'LONG-TERM VALUE',
    description: 'Properties selected and developed with future value in mind.',
    image: valArtwork4,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#683515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="14" width="2.5" height="6" rx="0.5" fill="#683515" />
        <rect x="8.5" y="11" width="2.5" height="9" rx="0.5" fill="#683515" />
        <rect x="13" y="8" width="2.5" height="12" rx="0.5" fill="#683515" />
        <rect x="17.5" y="5" width="2.5" height="15" rx="0.5" fill="#683515" />
        <path d="M4 10 L11 5 L20 2" stroke="#683515" strokeWidth="2" />
        <path d="M16 2 H20 V6" stroke="#683515" strokeWidth="2" />
      </svg>
    )
  }
];

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="container">
        {/* Header Block with Title & Underline Bar */}
        <div className="core-values-header">
          <h2 className="core-values-title">ABOUT &mdash; FOUR CORE VALUES</h2>
          <div className="core-values-underline" aria-hidden="true"></div>
        </div>

        {/* 4 Cards Grid - Fully Designed UI Cards */}
        <div className="core-values-grid">
          {coreValuesData.map((item) => (
            <div key={item.id} className="core-value-card">
              {/* Floating Top Badge with Glowing Ring */}
              <div className="core-val-badge" aria-hidden="true">
                {item.icon}
              </div>

              {/* Top 3D Photographic Visual with Bottom Gradient Fade */}
              <div className="core-val-photo-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="core-val-photo"
                  loading="lazy"
                />
                <div className="core-val-photo-gradient" aria-hidden="true"></div>
              </div>

              {/* Card Body with Title, Accent Bar & Description */}
              <div className="core-val-body">
                <h3 className="core-val-title">{item.title}</h3>
                <div className="core-val-line" aria-hidden="true"></div>
                <p className="core-val-desc">{item.description}</p>
              </div>

              {/* Bottom-Right Golden Corner Swoop */}
              <svg className="core-val-swoop" viewBox="0 0 58 52" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id={`valGoldGrad-${item.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5BE38" />
                    <stop offset="100%" stopColor="#E38910" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 52 C22 49 40 40 52 20 C55 13 58 6 58 0 L58 32 C58 43 49 52 38 52 Z"
                  fill={`url(#valGoldGrad-${item.id})`}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
