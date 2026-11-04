import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ProjectsList.css';

const filterTabs = [
  { id: 'all', label: 'All Projects', icon: null },
  {
    id: 'plots',
    label: 'Plots & Layouts',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    )
  },
  {
    id: 'villa',
    label: 'Villa Projects',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      </svg>
    )
  },
  {
    id: 'gated',
    label: 'Gated Communities',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        <line x1="9" y1="3" x2="9" y2="21"></line>
      </svg>
    )
  },
  {
    id: 'commercial',
    label: 'Commercial',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2"></rect>
        <line x1="9" y1="22" x2="9" y2="12"></line>
      </svg>
    )
  },
  {
    id: 'ongoing',
    label: 'Ongoing Projects',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18h20"></path>
        <path d="M12 6v12"></path>
      </svg>
    )
  },
  {
    id: 'completed',
    label: 'Completed Projects',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    )
  }
];

const projectsData = [
  {
    id: 1,
    badge: 'Premium Plots',
    brand: 'NIU GEN',
    title: 'Green Valley',
    titleColor: '#147A3B',
    location: 'Chennai, Tamil Nadu',
    category: ['plots', 'gated'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80',
    features: [
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        ),
        text: 'Residential Plots'
      },
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
        ),
        text: 'Gated Community'
      },
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline>
          </svg>
        ),
        text: 'Great Connectivity'
      }
    ]
  },
  {
    id: 2,
    badge: 'Villa Community',
    brand: 'NIU GEN',
    title: 'Dream Villas',
    titleColor: '#8C2224',
    location: 'Coimbatore, Tamil Nadu',
    category: ['villa', 'gated'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
    features: [
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
        ),
        text: 'Premium Villas'
      },
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <rect x="4" y="2" width="16" height="20" rx="2"></rect>
          </svg>
        ),
        text: 'Clubhouse & Amenities'
      },
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        ),
        text: 'Landscaped Community'
      }
    ]
  },
  {
    id: 3,
    badge: 'Integrated Township',
    brand: 'NIU GEN',
    title: 'Urban Springs',
    titleColor: '#0E6838',
    location: 'Trichy, Tamil Nadu',
    category: ['plots', 'villa', 'ongoing'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80',
    features: [
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect>
          </svg>
        ),
        text: 'Plots & Villas'
      },
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        ),
        text: 'Parks & Open Spaces'
      },
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
        ),
        text: 'Well-Planned Infrastructure'
      }
    ]
  },
  {
    id: 4,
    badge: 'Villa Community',
    brand: 'NIU GEN',
    title: 'Garden Villas',
    titleColor: '#1A7036',
    location: 'Madurai, Tamil Nadu',
    category: ['villa', 'gated', 'completed'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
    features: [
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
        ),
        text: 'Luxury Villas'
      },
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          </svg>
        ),
        text: 'Modern Amenities'
      },
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        ),
        text: 'Secure & Serene Living'
      }
    ]
  },
  {
    id: 5,
    badge: 'Commercial',
    brand: 'NIU GEN',
    title: 'Business Park',
    titleColor: '#0A7337',
    location: 'Chennai, Tamil Nadu',
    category: ['commercial', 'ongoing'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80',
    features: [
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <rect x="4" y="2" width="16" height="20" rx="2"></rect>
          </svg>
        ),
        text: 'Commercial Spaces'
      },
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        ),
        text: 'Prime Location'
      },
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          </svg>
        ),
        text: 'High Investment Value'
      }
    ]
  },
  {
    id: 6,
    badge: 'Ongoing Project',
    brand: 'NIU GEN',
    title: 'City Heights',
    titleColor: '#242424',
    location: 'Salem, Tamil Nadu',
    category: ['ongoing'],
    image: 'https://images.unsplash.com/photo-1541888081622-1262d1c68e14?w=700&q=80',
    features: [
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <rect x="4" y="2" width="16" height="20" rx="2"></rect>
          </svg>
        ),
        text: 'Residential Development'
      },
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        ),
        text: 'Quality Construction'
      },
      {
        icon: (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline>
          </svg>
        ),
        text: 'On-Time Delivery'
      }
    ]
  }
];

const ProjectsList = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category.includes(activeTab));

  return (
    <section className="projects-grid-section">
      <div className="container">
        {/* Top Filter Buttons Pill Bar */}
        <div className="projects-filter-bar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              className={`filter-pill-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon && <span className="tab-icon">{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* 3-Column Grid of 50/50 Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="projects-showcase-grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-split-card">
                {/* Left 50%: Thumbnail Image */}
                <div className="split-card-media">
                  <span className="split-category-pill">{project.badge}</span>
                  <img
                    src={project.image}
                    alt={`${project.brand} ${project.title}`}
                    className="split-img"
                    loading="lazy"
                  />
                </div>

                {/* Right 50%: Details Content */}
                <div className="split-card-body">
                  <span className="split-brand-tag">{project.brand}</span>
                  <h3 className="split-title" style={{ color: project.titleColor }}>
                    {project.title}
                  </h3>

                  <div className="split-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D36E2D" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{project.location}</span>
                  </div>

                  {/* 3 bullet feature rows */}
                  <div className="split-features">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="feature-bullet">
                        <span className="feature-icon">{feat.icon}</span>
                        <span className="feature-text">{feat.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="split-view-btn">
                    <span>View Project</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Have a Project Requirement? Bottom Strip */}
        <div className="project-requirement-strip">
          <div className="strip-left-icon">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#E69535" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <div className="strip-content">
            <h3 className="strip-title">Have a Project Requirement?</h3>
            <p className="strip-desc">Let's discuss your land, villa or infrastructure project today.</p>
          </div>
          <Link to="/contact" className="strip-enquire-btn">
            <span>Enquire Now</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
