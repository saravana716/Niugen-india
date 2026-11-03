import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TextReveal from './TextReveal';
import servicesBanner from '../assets/banners/services.jpeg';
import landPlotsImg from '../assets/services/service-land-plots.png';
import residentialImg from '../assets/services/service-residential.png';
import commercialImg from '../assets/services/service-commercial.png';
import constructionImg from '../assets/services/service-construction.png';
import architectsImg from '../assets/services/service-architects.png';
import interiorImg from '../assets/services/service-interior.png';
import brandsImg from '../assets/services/service-brands.png';
import './ServicesSection.css';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  {
    id: 'land-and-plots',
    title: 'Land & Plots',
    description: 'DTCP & RERA approved plots in prime locations.',
    image: landPlotsImg,
    link: '/projects/land-and-plots',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C86623" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 12 12 17 22 12" />
        <polyline points="2 17 12 22 22 17" />
      </svg>
    )
  },
  {
    id: 'residential',
    title: 'Residential',
    description: 'Premium homes and villas for modern living.',
    image: residentialImg,
    link: '/projects/residential',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C86623" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5l9-7 9 7v10.5a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5z" />
        <polyline points="9 21.5 9 12 15 12 15 21.5" />
      </svg>
    )
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'Commercial spaces for businesses and growth.',
    image: commercialImg,
    link: '/projects/commercial',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C86623" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="8.01" y2="6" strokeWidth="2.6" />
        <line x1="16" y1="6" x2="16.01" y2="6" strokeWidth="2.6" />
        <line x1="8" y1="10" x2="8.01" y2="10" strokeWidth="2.6" />
        <line x1="16" y1="10" x2="16.01" y2="10" strokeWidth="2.6" />
        <line x1="8" y1="14" x2="8.01" y2="14" strokeWidth="2.6" />
        <line x1="16" y1="14" x2="16.01" y2="14" strokeWidth="2.6" />
        <path d="M9 22v-4h6v4" />
      </svg>
    )
  },
  {
    id: 'construction',
    title: 'Construction',
    description: 'End-to-end construction with quality and trust.',
    image: constructionImg,
    link: '/projects/construction',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C86623" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="21" x2="21" y2="21" />
        <line x1="7" y1="21" x2="7" y2="3" />
        <line x1="7" y1="3" x2="21" y2="3" />
        <line x1="21" y1="3" x2="17" y2="8" />
        <line x1="17" y1="8" x2="7" y2="8" />
        <circle cx="15" cy="13" r="2" />
        <line x1="15" y1="8" x2="15" y2="11" />
      </svg>
    )
  },
  {
    id: 'architects',
    title: 'Architects',
    description: 'Innovative and functional designs by experts.',
    image: architectsImg,
    link: '/projects/architects',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C86623" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="2" />
        <path d="m5 21 7-15 7 15" />
        <line x1="7.5" y1="15.5" x2="16.5" y2="15.5" />
      </svg>
    )
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    description: 'Stylish, functional and personalized interiors.',
    image: interiorImg,
    link: '/projects/interior-design',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C86623" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2" />
        <path d="M3 11a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Z" />
        <line x1="5" y1="18" x2="5" y2="21" />
        <line x1="19" y1="18" x2="19" y2="21" />
      </svg>
    )
  }
];

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
      
      {/* HERO BANNER */}
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
            src={servicesBanner} 
            alt="Services Banner" 
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

      {/* SERVICES CARDS SECTION */}
      <div className="services-grid-area">
        <div className="services-showcase-container">
          
          {/* 3x2 Grid of 6 Service Cards */}
          <div className="services-new-grid">
            {servicesList.map((service) => (
              <Link 
                to={service.link} 
                key={service.id} 
                className="service-card-item"
                title={`Explore ${service.title}`}
              >
                <div className="service-card-thumb-wrap">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-card-thumb" 
                  />
                </div>
                
                <div className="service-card-body">
                  <div className="service-card-icon-wrap" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.description}</p>
                  
                  <div className="service-card-arrow" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Full-width Brands Banner Card */}
          <Link 
            to="/projects/brands" 
            className="services-brands-banner-card"
            title="Explore Commercial Brands"
          >
            <div className="brands-card-thumb-wrap">
              <img 
                src={brandsImg} 
                alt="Commercial Brands" 
                className="brands-card-thumb" 
              />
            </div>

            <div className="brands-card-heading-group">
              <div className="brands-star-icon" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C86623" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="brands-card-title">Brands</h3>
            </div>

            <div className="brands-card-divider" aria-hidden="true"></div>

            <div className="brands-card-content">
              <p>
                End-to-end brand space solutions — from site selection and construction to interior design, fit-out and project delivery for all types of commercial brands (retail, showrooms, restaurants and more.).
              </p>
            </div>

            <div className="brands-banner-arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
};

export default ServicesSection;
