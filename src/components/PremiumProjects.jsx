import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PremiumProjects.css';

const featuredProjects = [
  {
    id: 1,
    badge: 'Premium Plots',
    brand: 'NIU GEN',
    title: 'Green Valley',
    location: 'Chennai, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80',
    features: [
      'Residential Plots',
      'Gated Community',
      'Great Connectivity'
    ]
  },
  {
    id: 2,
    badge: 'Villa Community',
    brand: 'NIU GEN',
    title: 'Dream Villas',
    location: 'Coimbatore, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
    features: [
      'Premium Villas',
      'Clubhouse & Amenities',
      'Landscaped Community'
    ]
  },
  {
    id: 3,
    badge: 'Integrated Township',
    brand: 'NIU GEN',
    title: 'Urban Springs',
    location: 'Trichy, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
    features: [
      'Plots & Villas',
      'Parks & Open Spaces',
      'Well-Planned Infrastructure'
    ]
  },
  {
    id: 4,
    badge: 'Commercial',
    brand: 'NIU GEN',
    title: 'Business Park',
    location: 'Chennai, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80',
    features: [
      'Commercial Spaces',
      'Prime Location',
      'High Investment Value'
    ]
  },
  {
    id: 5,
    badge: 'Villa Community',
    brand: 'NIU GEN',
    title: 'Garden Villas',
    location: 'Madurai, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
    features: [
      'Luxury Villas',
      'Modern Amenities',
      'Secure & Serene Living'
    ]
  },
  {
    id: 6,
    badge: 'Ongoing Project',
    brand: 'NIU GEN',
    title: 'City Heights',
    location: 'Salem, Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1541888081622-1262d1c68e14?w=700&q=80',
    features: [
      'Residential Development',
      'Quality Construction',
      'On-Time Delivery'
    ]
  }
];

const PremiumProjects = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = 340;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <section className="featured-projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="featured-header">
          <div className="header-text-group">
            <div className="eyebrow-tag">
              <span className="eyebrow-line"></span>
              <span className="eyebrow-title">OUR FEATURED PROJECTS</span>
            </div>
            <h2 className="main-heading">Discover Our Premium Developments</h2>
          </div>
          <Link to="/projects" className="view-all-btn">
            <span>View All Projects</span>
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Carousel / Swiper wrapper with floating arrow navigation */}
        <div className="projects-carousel-container">
          <button
            className={`slider-nav-btn prev-btn ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={() => scroll('left')}
            aria-label="Previous Projects"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div
            className="projects-track"
            ref={sliderRef}
            onScroll={checkScroll}
          >
            {featuredProjects.map((project) => (
              <div key={project.id} className="featured-project-card">
                {/* Top Image Box */}
                <div className="card-thumb-wrap">
                  <span className="project-category-pill">{project.badge}</span>
                  <img
                    src={project.image}
                    alt={`${project.brand} ${project.title}`}
                    className="card-thumb-img"
                    loading="lazy"
                  />
                </div>

                {/* Bottom Body */}
                <div className="card-info-wrap">
                  <span className="brand-tag">{project.brand}</span>
                  <h3 className="project-card-title">{project.title}</h3>

                  <div className="location-row">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{project.location}</span>
                  </div>

                  <Link to="/projects" className="view-project-action">
                    <span>View Project</span>
                    <span className="action-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`slider-nav-btn next-btn ${!canScrollRight ? 'disabled' : ''}`}
            onClick={() => scroll('right')}
            aria-label="Next Projects"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PremiumProjects;
