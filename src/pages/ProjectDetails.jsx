import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import InteractivePlotMap from '../components/InteractivePlotMap';
import './ProjectDetails.css';

// Mock data (in a real app, this would be fetched based on id)
const projectData = {
  id: 1,
  title: 'Greenfield City',
  subtitle: 'A Premium Plotted Development in Kovilpatti',
  tagline: 'More than Plots. A Brighter Tomorrow.',
  location: 'Kovilpatti, Tamil Nadu',
  size: '100 - 2400 Sq.Ft.',
  price: '₹ 7.50 Lakhs*',
  description: 'Greenfield City is a thoughtfully planned residential plotted development in Kovilpatti, designed to offer a perfect blend of modern infrastructure and natural surroundings. With clear titles, premium amenities and excellent connectivity, it is an ideal choice for your dream home or a valuable investment.',
  stats: [
    { label: 'Acres', value: '25+' },
    { label: 'Plots', value: '500+' },
    { label: 'Infrastructure', value: 'Modern' }
  ],
  gallery: [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1600607687920-4e2a09be15c7?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400'
  ],
  plots: [
    { no: '01', size: 1200, facing: 'North', status: 'Available', price: '₹ 8.25 Lakhs*' },
    { no: '02', size: 1200, facing: 'North', status: 'Available', price: '₹ 8.25 Lakhs*' },
    { no: '03', size: 1500, facing: 'East', status: 'Booked', price: '-' },
    { no: '04', size: 1200, facing: 'East', status: 'Available', price: '₹ 8.25 Lakhs*' },
    { no: '05', size: 1500, facing: 'North', status: 'Sold', price: '-' },
    { no: '06', size: 1200, facing: 'North', status: 'Available', price: '₹ 8.25 Lakhs*' },
    { no: '07', size: 1800, facing: 'East', status: 'Available', price: '₹ 10.50 Lakhs*' },
    { no: '08', size: 1500, facing: 'North', status: 'Booked', price: '-' },
  ]
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData; // Using mock data for now

  return (
      <PageTransition>
        <div className="project-details-page">
          {/* Hero Section */}
          <section className="pd-hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000)' }}>
            <div className="pd-hero-overlay"></div>
            <div className="container pd-hero-container">
              <div className="pd-hero-content">
                <ScrollReveal direction="down">
                  <div className="pd-breadcrumbs">
                    <Link to="/">Home</Link> &gt; <Link to="/projects">Projects</Link> &gt; <span>{project.title}</span>
                  </div>
                  <h1 className="pd-title">{project.title}</h1>
                  <h2 className="pd-subtitle">{project.subtitle}</h2>
                  <p className="pd-tagline">{project.tagline}</p>
                  
                  <div className="pd-meta">
                    <div className="pd-meta-item">
                      <div className="icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="#4a2e1a" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div className="text">
                        <strong>{project.location.split(',')[0]},</strong>
                        <span>{project.location.split(',')[1]}</span>
                      </div>
                    </div>
                    <div className="pd-meta-divider"></div>
                    <div className="pd-meta-item">
                      <div className="icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4a2e1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 22L12 4l5 18M12 8v10" strokeDasharray="3 4"/>
                          <path d="M5 22h14" stroke="none" />
                        </svg>
                      </div>
                      <div className="text">
                        <strong>{project.size}</strong>
                      </div>
                    </div>
                    <div className="pd-meta-divider"></div>
                    <div className="pd-meta-item">
                      <div className="icon">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a2e1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" fill="#4a2e1a" fillOpacity="0.1"/>
                          <circle cx="7" cy="7" r="1.5" fill="#4a2e1a" stroke="none"/>
                        </svg>
                      </div>
                      <div className="text">
                        <span>Starting from</span>
                        <strong>{project.price}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="pd-actions">
                    <button className="btn-solid">ENQUIRE NOW &rarr;</button>
                    <button className="btn-outline-white">DOWNLOAD BROCHURE &darr;</button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

        {/* Features Bar */}
        <section className="pd-features-bar">
          <div className="container">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="features-grid">
                <div className="feature-item">
                  <div className="icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5">
                      <path d="M12 2l2.4 2.4 3.4-.6 1.4 3.2 3.2 1.4-.6 3.4L24 12l-2.2 2.2.6 3.4-3.2 1.4-1.4 3.2-3.4-.6L12 22l-2.4-2.4-3.4.6-1.4-3.2-3.2-1.4.6-3.4L0 12l2.2-2.2-.6-3.4 3.2-1.4 1.4-3.2 3.4.6L12 2z"/>
                      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#5c3a21" stroke="none">DTCP</text>
                    </svg>
                  </div>
                  <span>DTCP<br/>Approved</span>
                </div>
                <div className="feature-item">
                  <div className="icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5">
                      <path d="M8 22L12 4l4 18M12 4v18" strokeDasharray="3 3"/>
                    </svg>
                  </div>
                  <span>Ready<br/>Infrastructure</span>
                </div>
                <div className="feature-item">
                  <div className="icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5">
                      <path d="M10 2L5 22h14L14 2z"/>
                      <path d="M12 4v16" strokeDasharray="4 4"/>
                    </svg>
                  </div>
                  <span>Black Top<br/>Roads</span>
                </div>
                <div className="feature-item">
                  <div className="icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5">
                      <path d="M12 22V14"/>
                      <path d="M12 4C9 4 7 6 7 8c0 1.5.5 2.5 1 3.5C8.5 12.5 9 14 12 14c3 0 3.5-1.5 4-2.5.5-1 1-2 1-3.5 0-2-2-4-5-4z"/>
                    </svg>
                  </div>
                  <span>Avenue<br/>Trees</span>
                </div>
                <div className="feature-item">
                  <div className="icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5">
                      <path d="M12 22v-8M9 10h6l1-4H8zM12 6V2"/>
                    </svg>
                  </div>
                  <span>Street<br/>Lighting</span>
                </div>
                <div className="feature-item">
                  <div className="icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5">
                      <path d="M12 2L4 8v12h16V8zM9 20v-6h6v6"/>
                      <path d="M4 14h16"/>
                    </svg>
                  </div>
                  <span>Gated<br/>Community</span>
                </div>
                <div className="feature-item">
                  <div className="icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <path d="M14 2v6h6M8 13h8M8 17h8M8 9h2"/>
                    </svg>
                  </div>
                  <span>Clear Titles</span>
                </div>
                <div className="feature-item">
                  <div className="icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5">
                      <path d="M3 10L12 3l9 7"/>
                      <path d="M12 21V10M12 10l4 4M12 10l-4 4"/>
                    </svg>
                  </div>
                  <span>High Appreciation<br/>Value</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="pd-main-content">
          <div className="container">
            
            {/* ROW 1: About & Gallery */}
            <div className="pd-content-row">
              <div className="pd-col-left">
                <ScrollReveal direction="left">
                  <div className="pd-section">
                    <h3>About the Project</h3>
                    <p>{project.description}</p>
                    <p className="subtitle">With clear titles, premium amenities and excellent connectivity, it is an ideal choice for your dream home or a valuable investment.</p>
                    
                    <div className="pd-stats-grid">
                      {project.stats.map((stat, i) => (
                        <React.Fragment key={i}>
                          <div className="pd-stat-item">
                            <div className="icon">
                              {i === 0 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>}
                              {i === 1 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>}
                              {i === 2 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>}
                            </div>
                            <div className="info">
                              <strong>{stat.value}</strong>
                              <span>{stat.label}</span>
                            </div>
                          </div>
                          {i < project.stats.length - 1 && <div className="pd-stat-divider"></div>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <div className="pd-col-right">
                <ScrollReveal direction="right">
                  <div className="pd-section">
                    <div className="pd-section-header-flex">
                      <h3>Project Gallery</h3>
                      <a href="#" className="view-all-link">View All &rarr;</a>
                    </div>
                    <div className="pd-gallery-tabs">
                      <button className="active">All</button>
                      <button>Entrance</button>
                      <button>Roads</button>
                      <button>Parks</button>
                      <button>Infrastructure</button>
                    </div>
                    <div className="pd-gallery-grid">
                      {project.gallery.map((img, i) => (
                        <img key={i} src={img} alt={`Gallery ${i}`} />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* ROW 2: Master Plan & Plot Availability */}
            <div className="pd-content-row">
              <div className="pd-col-left">
                <ScrollReveal direction="left">
                  <div className="pd-section">
                    <h3>Master Plan</h3>
                    <p className="subtitle">A well-planned layout for a better tomorrow.</p>
                    <InteractivePlotMap variant="mini" />
                  </div>
                </ScrollReveal>
              </div>
              <div className="pd-col-right">
                <ScrollReveal direction="right">
                  <div className="pd-section">
                    <div className="pd-section-header-flex">
                      <div>
                        <h3>Plot Availability</h3>
                        <p className="subtitle">Check live status and select your plot.</p>
                      </div>
                      <button className="btn-brown-sm">VIEW FULL LAYOUT &rarr;</button>
                    </div>
                    <div className="pd-table-container">
                      <table className="pd-table">
                        <thead>
                          <tr>
                            <th>Plot No.</th>
                            <th>Size (Sq.Ft.)</th>
                            <th>Facing</th>
                            <th>Status</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {project.plots.map((plot, i) => (
                            <tr key={i}>
                              <td>{plot.no}</td>
                              <td>{plot.size}</td>
                              <td>{plot.facing}</td>
                              <td><span className={`pd-status-badge status-${plot.status.toLowerCase()}`}>{plot.status}</span></td>
                              <td>{plot.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* ROW 3: Amenities & Location (Left) + Contact Card (Right) */}
            <div className="pd-content-row pd-content-row-3">
              <div className="pd-col-left pd-mobile-stack" style={{ gap: '40px' }}>
                <ScrollReveal direction="left" delay={0.1}>
                  <div className="pd-section" style={{ flex: '1.2' }}>
                    <h3>Amenities</h3>
                    <p className="subtitle">Everything you need for a modern lifestyle.</p>
                    <div className="amenities-grid">
                      <div className="amenity-item"><div className="icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/></svg></div><span>Grand Entrance</span></div>
                      <div className="amenity-item"><div className="icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg></div><span>Black Top Roads</span></div>
                      <div className="amenity-item"><div className="icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg></div><span>Street Lighting</span></div>
                      <div className="amenity-item"><div className="icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><path d="M12 22v-6"/><path d="M12 8v8"/><circle cx="12" cy="8" r="5"/></svg></div><span>Avenue Trees</span></div>
                      <div className="amenity-item"><div className="icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></div><span>Children's Park</span></div>
                      <div className="amenity-item"><div className="icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div><span>Compound Wall</span></div>
                      <div className="amenity-item"><div className="icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg></div><span>Water Connection</span></div>
                      <div className="amenity-item"><div className="icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><span>EB Connection</span></div>
                      <div className="amenity-item"><div className="icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><path d="M3 3v18h18"/><path d="M18 9l-5 5-4-4-6 6"/></svg></div><span>Drainage System</span></div>
                      <div className="amenity-item"><div className="icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div><span>Landscaped Parks</span></div>
                      <div className="amenity-item"><div className="icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><span>24/7 Security</span></div>
                      <div className="amenity-item"><div className="icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="1.5"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg></div><span>Peaceful Environment</span></div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.2}>
                  <div className="pd-section" style={{ flex: '1' }}>
                    <h3>Location & Connectivity</h3>
                    <p className="subtitle">Well connected to key destinations.</p>
                    
                    <div className="location-flex pd-mobile-stack" style={{ gap: '20px' }}>
                      <div className="map-side" style={{ flex: 1 }}>
                        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" alt="Map" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' }} />
                        <button className="btn-brown-full" style={{marginTop: '12px', padding: '10px', fontSize: '12px'}}>VIEW ON GOOGLE MAPS &rarr;</button>
                      </div>
                      <div className="list-side" style={{ flex: 1.2 }}>
                        <ul className="pd-connectivity-list">
                          <li><span className="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="2"><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg></span> Just 5 mins from NH Road</li>
                          <li><span className="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></span> Close to Schools & Colleges</li>
                          <li><span className="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg></span> Near Hospitals</li>
                          <li><span className="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg></span> Easy Access to Public Transport</li>
                          <li><span className="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5c3a21" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span> Peaceful Residential Area</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="pd-col-right">
                <ScrollReveal direction="right" delay={0.3}>
                  <div className="pd-contact-card">
                    <h4>Interested in<br/>this project?</h4>
                    <p>Our property experts will guide you through the process.</p>
                    <button className="btn-white-full">ENQUIRE NOW &rarr;</button>
                    <button className="btn-white-full" style={{background: 'transparent', border: '1px solid white', color: 'white'}}>BOOK SITE VISIT</button>
                    <div className="pd-card-slogan">Let's Build A Better Tomorrow</div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default ProjectDetails;
