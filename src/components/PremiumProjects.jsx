import React, { useRef, useEffect } from 'react';
import './PremiumProjects.css';

const projects = [
  {
    id: 1,
    title: 'Green Orchid',
    location: 'Kovilpatti',
    type: 'Premium Villa Plots',
    size: 'Green Living Concept',
    price: 'TBA',
    status: 'NEW LAUNCH',
    statusColor: 'purple',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Sri Siva Sakthi Nagar',
    location: 'Kovilpatti',
    type: 'Residential Plots',
    size: '120 Plots Available',
    price: '2.99',
    status: 'ONGOING',
    statusColor: 'green',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const PremiumProjects = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Only auto-scroll if it's scrollable (i.e., on mobile slider)
        if (scrollWidth > clientWidth) {
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Scroll exactly one card width. Assuming card width ~280px + gap
            // clientWidth is a safe scrolling step.
            scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
          }
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="premium-projects">
      <div className="container">
        <div className="section-header">
          <div className="header-left">
            <span className="subtitle">OUR PROJECTS</span>
            <h2 className="title">Our Premium Projects</h2>
          </div>
          <div className="header-right">
            <a href="#all-projects" className="view-all-link">
              VIEW ALL PROJECTS 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="projects-grid" ref={scrollRef}>
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
                <span className={`status-badge status-${project.statusColor}`}>
                  {project.status}
                </span>
              </div>
              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-location">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {project.location}
                </p>
                <div className="project-details">
                  <div className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span title={project.type}>{project.type}</span>
                  </div>
                  <div className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span title={project.size}>{project.size}</span>
                  </div>
                </div>
                <div className="project-footer">
                  <div className="price-info">
                    <div className="price">₹ {project.price} Lakhs*</div>
                    <div className="price-label">Onwards</div>
                  </div>
                  <button className="btn-outline">VIEW DETAILS</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumProjects;
