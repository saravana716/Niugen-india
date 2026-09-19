import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TextReveal from './TextReveal';
import './ServicesSection.css';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to(imgRef.current, {
      yPercent: 40,
      scale: 1.25,
      ease: "power1.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      }
    });
  }, { scope: containerRef });

  return (
    <div className="services-section-wrapper" ref={containerRef}>
      
      <div className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <div className="services-hero-text">
              <TextReveal elementType="span" className="subtitle" text="OUR SERVICES" />
              <h2>
                <TextReveal text="Comprehensive Solutions" delay={0.2} /><br/>
                <TextReveal text="for" delay={0.4} /> <TextReveal elementType="span" text="Modern Living." delay={0.4} />
              </h2>
              <TextReveal elementType="p" text="From premium villa plots to thoughtfully planned residential projects, we offer end-to-end real estate solutions tailored to your needs." delay={0.6} />
            </div>
          </div>
        </div>
        <div className="services-hero-image" style={{ overflow: 'hidden' }}>
          <img 
            ref={imgRef}
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
            alt="Gated Community Entrance" 
            style={{ 
              width: '100%', 
              height: '130%', 
              objectFit: 'cover', 
              willChange: 'transform',
              marginTop: '-15%' 
            }} 
          />
        </div>
      </div>

      <div className="services-grid-area">
        <div className="container">
          <div className="services-grid">
            
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 9 8 15 11 21 8 21 19 15 22 9 19 3 22 3 11"></polygon>
                  <line x1="9" y1="8" x2="9" y2="19"></line>
                  <line x1="15" y1="11" x2="15" y2="22"></line>
                  <path d="M12 2a3 3 0 0 1 3 3c0 2.5-3 5-3 5s-3-2.5-3-5a3 3 0 0 1 3-3z"></path>
                  <circle cx="12" cy="5" r="1"></circle>
                </svg>
              </div>
              <h3>Villa Plots</h3>
              <p>DTCP & RERA approved villa plots in prime locations with excellent connectivity and future growth potential.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10l9-7 9 7"></path>
                  <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"></path>
                  <rect x="10" y="14" width="4" height="7"></rect>
                  <rect x="6" y="14" width="2" height="2"></rect>
                  <rect x="16" y="14" width="2" height="2"></rect>
                </svg>
              </div>
              <h3>Residential Projects</h3>
              <p>Well-planned residential communities with modern amenities and a peaceful living environment.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <circle cx="12" cy="14" r="3"></circle>
                  <path d="M10 16.5l-1.5 3L12 18.5l3.5 1-1.5-3"></path>
                </svg>
              </div>
              <h3>Gated Community</h3>
              <p>Secure, gated communities designed for safety, privacy and a premium lifestyle experience.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 22L10 2h4l8 20"></path>
                  <line x1="12" y1="22" x2="12" y2="16"></line>
                  <line x1="12" y1="12" x2="12" y2="8"></line>
                </svg>
              </div>
              <h3>Infrastructure Development</h3>
              <p>High-quality infrastructure including roads, drainage, water supply, and street lighting for a better living.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
                  <path d="M14 3v5h5M9 15l2 2 4-4"></path>
                </svg>
              </div>
              <h3>Legal & Documentation</h3>
              <p>100% clear titles, legal approvals and hassle-free documentation for a smooth and secure property purchase.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 14v-4a9 9 0 0 1 18 0v4"></path>
                  <rect x="2" y="14" width="3" height="6" rx="1"></rect>
                  <rect x="19" y="14" width="3" height="6" rx="1"></rect>
                  <path d="M19 18a4 4 0 0 1-4 4H9"></path>
                  <path d="M9 22h-.01"></path>
                </svg>
              </div>
              <h3>After Sales Support</h3>
              <p>We're with you even after your purchase, ensuring complete support and peace of mind.</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ServicesSection;
