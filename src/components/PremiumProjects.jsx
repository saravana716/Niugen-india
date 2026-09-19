import React from 'react';
import { Link } from 'react-router-dom';
import TextReveal from './TextReveal';
import StaggerReveal from './StaggerReveal';
import './PremiumProjects.css';

const categoryData = [
  {
    title: 'Land & Plots',
    projects: [
      { id: 'lp1', title: 'Green Valley Plots', location: 'Kovilpatti', type: 'Premium Plots', size: '1200 sq.ft', price: '12.5', status: 'NEW LAUNCH', statusColor: 'purple', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80' },
      { id: 'lp2', title: 'Sunset View Land', location: 'Kovilpatti', type: 'Villa Plots', size: '1500 sq.ft', price: '15.0', status: 'ONGOING', statusColor: 'green', image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=600&q=80' }
    ]
  },
  {
    title: 'Residential',
    projects: [
      { id: 'r1', title: 'Green Orchid', location: 'Kovilpatti', type: 'Premium Villa', size: 'Green Living Concept', price: 'TBA', status: 'NEW LAUNCH', statusColor: 'purple', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80' },
      { id: 'r2', title: 'Sri Siva Sakthi Nagar', location: 'Kovilpatti', type: 'Residential Plots', size: '120 Plots Available', price: '2.99', status: 'ONGOING', statusColor: 'green', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' }
    ]
  },
  {
    title: 'Commercial',
    projects: [
      { id: 'c1', title: 'City Center Plaza', location: 'Kovilpatti', type: 'Retail Space', size: '5000 sq.ft', price: '85.0', status: 'ONGOING', statusColor: 'green', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80' },
      { id: 'c2', title: 'Tech Park Office', location: 'Kovilpatti', type: 'Office Space', size: '2500 sq.ft', price: '45.0', status: 'READY', statusColor: 'purple', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' }
    ]
  },
  {
    title: 'Construction',
    projects: [
      { id: 'con1', title: 'Elite Builders Project', location: 'Kovilpatti', type: 'Turnkey Construction', size: 'Custom Built', price: 'Ask', status: 'ONGOING', statusColor: 'green', image: 'https://images.unsplash.com/photo-1541888081622-1262d1c68e14?w=600&q=80' },
      { id: 'con2', title: 'Modern Villa Build', location: 'Kovilpatti', type: 'Residential Build', size: '3000 sq.ft', price: '50.0', status: 'COMPLETED', statusColor: 'purple-dark', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80' }
    ]
  },
  {
    title: 'Architects',
    projects: [
      { id: 'a1', title: 'Contemporary Design', location: 'Kovilpatti', type: 'Architectural Plan', size: 'Bespoke', price: 'Custom', status: 'DESIGN', statusColor: 'purple', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
      { id: 'a2', title: 'Eco-Friendly Blueprint', location: 'Kovilpatti', type: 'Sustainable Design', size: 'Custom', price: 'Custom', status: 'NEW', statusColor: 'green', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80' }
    ]
  },
  {
    title: 'Interior Design',
    projects: [
      { id: 'i1', title: 'Luxury Living Room', location: 'Kovilpatti', type: 'Interior Setup', size: 'Full House', price: 'Custom', status: 'ONGOING', statusColor: 'green', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80' },
      { id: 'i2', title: 'Modern Kitchen', location: 'Kovilpatti', type: 'Modular Kitchen', size: 'Premium', price: 'Custom', status: 'READY', statusColor: 'purple', image: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?w=600&q=80' }
    ]
  }
];

const PremiumProjects = () => {
  return (
    <section className="premium-projects">
      <div className="container">
        
        {categoryData.map((category, index) => (
          <div key={index} className="project-category-section" style={{ marginBottom: '60px' }}>
            <div className="section-header">
              <div className="header-left">
                <TextReveal elementType="span" className="subtitle" text="OUR PROJECTS" />
                <h2 className="title">
                  <TextReveal text={category.title} delay={0.2} />
                </h2>
              </div>
              <div className="header-right">
                <a href="#all-projects" className="view-all-link">
                  VIEW ALL {category.title.toUpperCase()} 
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            <StaggerReveal className="projects-grid">
              {category.projects.map((project) => (
                <div 
                  key={project.id} 
                  className="project-card"
                >
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
                        <div className="price">₹ {project.price} {project.price !== 'Custom' && project.price !== 'Ask' && project.price !== 'TBA' ? 'Lakhs*' : ''}</div>
                        <div className="price-label">Onwards</div>
                      </div>
                      <Link to={`/projects/${project.id}`} className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                        VIEW DETAILS
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumProjects;
