import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import showcaseImg from '../assets/home-about-showcase-clean.png';
import './HomeAbout.css';

const StatCounter = ({ from = 0, to, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration, ease: 'easeOut' });
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const HomeAbout = () => {
  return (
    <section className="home-about-section">
      <div className="container">
        {/* Top 3-Column Content */}
        <div className="home-about-grid">
          {/* Left Column: About Info */}
          <div className="home-about-left">
            <div className="home-about-tag">
              <span className="tag-text">ABOUT US</span>
              <span className="tag-line"></span>
            </div>

            <h2 className="home-about-heading">
              Shaping Spaces<br />
              <span className="heading-accent">for a Better Tomorrow.</span>
            </h2>

            <p className="home-about-description">
              <strong>NIUGEN INDIA INFRAS</strong> is a real estate and infrastructure development company focused on creating quality spaces that support people, businesses and communities. We combine industry expertise, modern design and a customer-centric approach to deliver projects that stand the test of time.
            </p>

            <Link to="/about" className="home-about-cta">
              <span>Know More About Us</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Center Column: Villa Showcase with Exact Arch Ribbon */}
          <div className="home-about-center">
            <div className="showcase-wrapper">
              <img
                src={showcaseImg}
                alt="Modern Luxury Villa by Niugen India Infras"
                className="showcase-img"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: Vision, Mission, Values Feature Cards */}
          <div className="home-about-right">
            {/* Card 1: Our Vision */}
            <div className="feature-card">
              <div className="feature-icon-box" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3.8-7.5 10-7.5 10 7.5 10 7.5-3.8 7.5-10 7.5-10-7.5-10-7.5z" />
                  <circle cx="12" cy="12" r="3.2" />
                  <circle cx="12" cy="12" r="1.2" fill="currentColor" />
                </svg>
              </div>
              <div className="feature-divider" aria-hidden="true"></div>
              <div className="feature-content">
                <h3 className="feature-title">Our Vision</h3>
                <p className="feature-text">
                  To be a trusted name in real estate and infrastructure development, creating spaces for a better future.
                </p>
              </div>
            </div>

            {/* Card 2: Our Mission */}
            <div className="feature-card">
              <div className="feature-icon-box" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10" cy="14" r="7.5" />
                  <circle cx="10" cy="14" r="4" />
                  <circle cx="10" cy="14" r="1.2" fill="currentColor" />
                  <path d="M21 3l-8.5 8.5" />
                  <path d="M15 3h6v6" />
                </svg>
              </div>
              <div className="feature-divider" aria-hidden="true"></div>
              <div className="feature-content">
                <h3 className="feature-title">Our Mission</h3>
                <p className="feature-text">
                  To deliver well-planned, quality projects that enhance communities and create long-term value.
                </p>
              </div>
            </div>

            {/* Card 3: Our Values */}
            <div className="feature-card">
              <div className="feature-icon-box" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12l4 6.5-10 11.5L2 9.5z" />
                  <path d="M2 9.5h20" />
                  <path d="M10 3l-2 6.5 4 11.5 4-11.5-2-6.5" />
                </svg>
              </div>
              <div className="feature-divider" aria-hidden="true"></div>
              <div className="feature-content">
                <h3 className="feature-title">Our Values</h3>
                <p className="feature-text">
                  Integrity, quality, innovation and a commitment to sustainable development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner: 4 Stats Bar */}
        <div className="home-about-stats-banner">
          {/* Stat 1: Years of Experience */}
          <div className="stat-banner-item">
            <div className="stat-banner-icon" aria-hidden="true">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="10" cy="7" r="4" />
                <path d="M19 21v-2a3.5 3.5 0 0 0-2.8-3.4" />
                <path d="M15 3.6a3.5 3.5 0 0 1 0 6.8" />
              </svg>
            </div>
            <div className="stat-banner-info">
              <h4 className="stat-banner-number">
                <StatCounter to={10} />+
              </h4>
              <p className="stat-banner-label">Years of Experience</p>
            </div>
          </div>

          <div className="stat-banner-divider" aria-hidden="true"></div>

          {/* Stat 2: Projects Completed */}
          <div className="stat-banner-item">
            <div className="stat-banner-icon" aria-hidden="true">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" />
                <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
                <path d="M15 21v-9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v9" />
                <circle cx="8" cy="7" r="0.5" fill="currentColor" />
                <circle cx="12" cy="7" r="0.5" fill="currentColor" />
                <circle cx="8" cy="11" r="0.5" fill="currentColor" />
                <circle cx="12" cy="11" r="0.5" fill="currentColor" />
                <circle cx="8" cy="15" r="0.5" fill="currentColor" />
                <circle cx="12" cy="15" r="0.5" fill="currentColor" />
                <circle cx="18" cy="14" r="0.5" fill="currentColor" />
                <circle cx="18" cy="17" r="0.5" fill="currentColor" />
              </svg>
            </div>
            <div className="stat-banner-info">
              <h4 className="stat-banner-number">
                <StatCounter to={50} />+
              </h4>
              <p className="stat-banner-label">Projects Completed</p>
            </div>
          </div>

          <div className="stat-banner-divider" aria-hidden="true"></div>

          {/* Stat 3: Happy Customers */}
          <div className="stat-banner-item">
            <div className="stat-banner-icon" aria-hidden="true">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="10" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="stat-banner-info">
              <h4 className="stat-banner-number">
                <StatCounter to={1000} duration={2.2} />+
              </h4>
              <p className="stat-banner-label">Happy Customers</p>
            </div>
          </div>

          <div className="stat-banner-divider" aria-hidden="true"></div>

          {/* Stat 4: Cities Presence */}
          <div className="stat-banner-item">
            <div className="stat-banner-icon" aria-hidden="true">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="stat-banner-info">
              <h4 className="stat-banner-number">
                <StatCounter to={4} />+
              </h4>
              <p className="stat-banner-label">Cities Presence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
