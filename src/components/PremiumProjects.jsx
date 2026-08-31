import React from 'react';
import './PremiumProjects.css';

const projects = [
  {
    id: 1,
    title: 'Greenfield City',
    location: 'Kovilpatti',
    type: 'Villa Plots',
    size: '1200 - 2400 Sq.ft',
    price: '7.99',
    status: 'ONGOING',
    statusColor: 'green',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Royal Meadows',
    location: 'Kovilpatti',
    type: 'Villa Plots',
    size: '1000 - 2400 Sq.ft',
    price: '5.99',
    status: 'NEW LAUNCH',
    statusColor: 'purple',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Sunrise Avenue',
    location: 'Kovilpatti',
    type: 'Residential Plots',
    size: '600 - 2400 Sq.ft',
    price: '6.49',
    status: 'ONGOING',
    statusColor: 'green',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Serenity Villas',
    location: 'Kovilpatti',
    type: 'Luxury Villas',
    size: '1500 - 3000 Sq.ft',
    price: '35.99',
    status: 'UPCOMING',
    statusColor: 'purple-dark',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const PremiumProjects = () => {
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

        <div className="projects-grid">
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
                    <span>{project.type}</span>
                  </div>
                  <div className="detail-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{project.size}</span>
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
