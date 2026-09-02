import React, { useState } from 'react';
import './ProjectsList.css';

const projectsData = [
  {
    id: 1,
    title: "Greenfield City",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    badge: "ONGOING",
    badgeColor: "var(--color-primary)",
    location: "Kovilpatti",
    type: "Villa Plots",
    size: "1200 - 2400 Sq.ft",
    desc: "A well-planned villa plot project with modern amenities and excellent connectivity.",
    unitsLabel: "Plots",
    units: "120+",
    price: "₹ 7.99 Lakhs*",
    status: "Ongoing"
  },
  {
    id: 2,
    title: "Royal Meadows",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    badge: "NEW LAUNCH",
    badgeColor: "var(--color-primary)",
    location: "Kovilpatti",
    type: "Villa Plots",
    size: "1000 - 2400 Sq.ft",
    desc: "Spacious villa plots in a serene environment, perfect for your dream home.",
    unitsLabel: "Plots",
    units: "85+",
    price: "₹ 5.99 Lakhs*",
    status: "New Launch"
  },
  {
    id: 3,
    title: "Sunrise Avenue",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    badge: "ONGOING",
    badgeColor: "var(--color-primary)",
    location: "Kovilpatti",
    type: "Residential Plots",
    size: "600 - 2400 Sq.ft",
    desc: "Residential plots with complete infrastructure and modern amenities.",
    unitsLabel: "Plots",
    units: "150+",
    price: "₹ 6.49 Lakhs*",
    status: "Ongoing"
  },
  {
    id: 4,
    title: "Serenity Villas",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09be15c7?auto=format&fit=crop&q=80&w=800",
    badge: "UPCOMING",
    badgeColor: "var(--color-primary)",
    location: "Kovilpatti",
    type: "Luxury Villas",
    size: "1500 - 3000 Sq.ft",
    desc: "Premium luxury villas designed for a modern and comfortable lifestyle.",
    unitsLabel: "Villas",
    units: "40+",
    price: "₹ 35.99 Lakhs*",
    status: "Upcoming"
  }
];

const ProjectsList = () => {
  const [activeTab, setActiveTab] = useState('All Projects');
  const tabs = ['All Projects', 'Ongoing', 'New Launch', 'Upcoming', 'Completed'];

  return (
    <section className="projects-list-section">
      <div className="container">
        
        {/* Filter Tabs */}
        <div className="projects-filter">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="projects-list">
          {projectsData.map(project => (
            <div className="project-list-card" key={project.id}>
              
              <div className="project-card-image">
                <div className="project-badge" style={{ backgroundColor: project.badgeColor }}>
                  {project.badge}
                </div>
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-card-content">
                <h3>{project.title}</h3>
                
                <div className="project-meta">
                  <span className="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {project.location}
                  </span>
                  <span className="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    {project.type}
                  </span>
                  <span className="meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                    {project.size}
                  </span>
                </div>

                <p className="project-desc">{project.desc}</p>

                <hr className="project-divider" />

                <div className="project-stats-row">
                  <div className="stat-col">
                    <span className="stat-label">{project.unitsLabel}</span>
                    <span className="stat-value">{project.units}</span>
                  </div>
                  <div className="stat-divider"></div>
                  
                  <div className="stat-col">
                    <span className="stat-label">Starting From</span>
                    <span className="stat-value highlight">{project.price}</span>
                  </div>
                  <div className="stat-divider"></div>
                  
                  <div className="stat-col">
                    <span className="stat-label">Status</span>
                    <span className="stat-value text-green">{project.status}</span>
                  </div>
                  
                  <div className="stat-action">
                    <button className="btn-outline-green">VIEW DETAILS</button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="projects-contact-banner">
          <div className="pcb-left">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <rect x="7" y="14" width="2" height="2"></rect>
              <rect x="11" y="14" width="2" height="2"></rect>
              <rect x="15" y="14" width="2" height="2"></rect>
              <rect x="7" y="18" width="2" height="2"></rect>
              <rect x="11" y="18" width="2" height="2"></rect>
              <rect x="15" y="18" width="2" height="2"></rect>
            </svg>
            <div className="pcb-text">
              <h4>Can't Find What<br/>You're Looking For?</h4>
            </div>
          </div>
          <div className="pcb-center">
            <p>Our experts will help you find the perfect<br/>property that suits your needs.</p>
          </div>
          <div className="pcb-right">
            <button className="btn btn-primary enquire-btn">
              ENQUIRE NOW 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsList;
