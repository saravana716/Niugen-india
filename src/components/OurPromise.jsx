import React from 'react';
import './OurPromise.css';

const OurPromise = () => {
  return (
    <section className="our-promise-section">
      <div className="container">
        <div className="promise-banner">
          
          <div className="promise-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" 
              alt="Gated Community Entrance" 
            />
          </div>

          <div className="promise-content">
            
            <div className="promise-text-area">
              <h2>Our Promise</h2>
              <div className="divider-line"></div>
              <p>We don't just build plots and projects, we build communities, relationships and a better future for generations to come.</p>
              <span className="team-sign">- Niu Gen India Infras Team</span>
            </div>

            <div className="promise-stats-area">
              
              <div className="promise-stat">
                <div className="stat-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a8b38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <circle cx="8" cy="14" r="1" fill="#1a8b38"></circle>
                    <circle cx="12" cy="14" r="1" fill="#1a8b38"></circle>
                    <circle cx="16" cy="14" r="1" fill="#1a8b38"></circle>
                    <circle cx="8" cy="18" r="1" fill="#1a8b38"></circle>
                    <circle cx="12" cy="18" r="1" fill="#1a8b38"></circle>
                    <circle cx="16" cy="18" r="1" fill="#1a8b38"></circle>
                  </svg>
                </div>
                <h3>10+</h3>
                <span>Years of<br/>Experience</span>
              </div>

              <div className="promise-stat">
                <div className="stat-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a8b38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h16"></path>
                    <path d="M6 22V10l4-4 4 4v12"></path>
                    <path d="M14 22v-8h4v8"></path>
                    <path d="M8 6v4"></path>
                    <polyline points="20 4 15 9 12 6 6 12"></polyline>
                  </svg>
                </div>
                <h3>250+</h3>
                <span>Successful<br/>Projects</span>
              </div>

              <div className="promise-stat">
                <div className="stat-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a8b38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 21v-2a4 4 0 0 0-4-4H10a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="11" r="4"></circle>
                    <path d="M12 2C10.5 2 9.5 3 9.5 4.5S11 7 12 7s2.5-1 2.5-2.5S13.5 2 12 2z"></path>
                    <path d="M12 2v2"></path>
                  </svg>
                </div>
                <h3>5000+</h3>
                <span>Happy<br/>Customers</span>
              </div>

              <div className="promise-stat">
                <div className="stat-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a8b38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="8" r="4"></circle>
                    <polygon points="19 7 20.5 10 24 10 21.2 12 22.3 15 19.5 13.2 16.7 15 17.8 12 15 10 18.5 10" strokeLinejoin="round"></polygon>
                  </svg>
                </div>
                <h3>25+</h3>
                <span>Expert<br/>Professionals</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
