import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './AboutHero.css';

const AboutHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <section className="about-hero-section">
      <div className="about-hero-top">
        <div className="container about-hero-container">
          <div className="about-hero-content">
            <span className="subtitle">ABOUT NIU GEN INDIA INFRAS</span>
            <h1 className="title">
              <span className="text-dark">Building Trust.</span>
              <span className="text-green">Creating Value.</span>
            </h1>
            <p className="description">
              NIU GEN INDIA INFRAS is a real estate development company focused on creating thoughtfully planned residential developments and premium villa plots in and around Kovilpatti.
              <br /><br />
              We believe that choosing a property is more than simply buying land. It is about choosing a location where your family can grow, your dreams can take shape and your investment can create lasting value.
              <br /><br />
              Our focus is on combining strategic locations, thoughtful planning, quality infrastructure and transparent customer service to create better property experiences.
            </p>

          </div>
        </div>
        <div className="about-hero-image" style={{ overflow: 'hidden' }}>
          <motion.img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
            alt="Modern Villa at Sunset"
            style={{ y, scale: 1.15, height: '115%', width: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className="container">
        <div className="about-features-banner" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div className="features-left" style={{ flex: 1, minWidth: '300px' }}>
            <h3>OUR VISION</h3>
            <div className="divider-line"></div>
            <p>
              To become a trusted real estate developer known for quality developments, strategic locations, transparent dealings and customer satisfaction.
            </p>
          </div>
          <div className="features-left" style={{ flex: 1, minWidth: '300px' }}>
            <h3>OUR MISSION</h3>
            <div className="divider-line"></div>
            <p>
              To create well-planned residential communities and property opportunities that help families build their dream homes and investors build long-term value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
