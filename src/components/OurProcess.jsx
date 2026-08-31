import React from 'react';
import './OurProcess.css';

const OurProcess = () => {
  return (
    <section className="our-process-section">
      <div className="container">
        <div className="process-container">
          <h2 className="process-title">
            Our Process &ndash; <span>Simple, Transparent, Reliable</span>
          </h2>
          
          <div className="process-flow">
            
            {/* Step 1 */}
            <div className="process-step">
              <div className="process-icon-wrapper">
                <div className="step-number">1</div>
                <div className="process-icon">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
              </div>
              <div className="process-arrow"></div>
              <h4>Explore</h4>
              <p>Discover prime locations and available options.</p>
            </div>

            {/* Step 2 */}
            <div className="process-step">
              <div className="process-icon-wrapper">
                <div className="step-number">2</div>
                <div className="process-icon">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="8" y1="13" x2="16" y2="13"></line>
                    <line x1="8" y1="17" x2="16" y2="17"></line>
                    <polyline points="10 12 12 14 16 10" transform="translate(0, 3)"></polyline>
                  </svg>
                </div>
              </div>
              <div className="process-arrow"></div>
              <h4>Select</h4>
              <p>Choose the perfect plot or property that suits your needs.</p>
            </div>

            {/* Step 3 */}
            <div className="process-step">
              <div className="process-icon-wrapper">
                <div className="step-number">3</div>
                <div className="process-icon">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.8 14l-4-4a2.8 2.8 0 0 0-4 0l-2.4 2.4-3.6-3.6a2.8 2.8 0 0 0-4 0l-2 2a2.8 2.8 0 0 0 0 4l4 4a2.8 2.8 0 0 0 4 0l1.4-1.4 1 1a2.8 2.8 0 0 0 4 0l4-4a2.8 2.8 0 0 0 0-4z"></path>
                    <line x1="14" y1="14" x2="10" y2="10"></line>
                    <line x1="17" y1="17" x2="11" y2="11"></line>
                  </svg>
                </div>
              </div>
              <div className="process-arrow"></div>
              <h4>Secure</h4>
              <p>Complete legal formalities with complete transparency.</p>
            </div>

            {/* Step 4 */}
            <div className="process-step">
              <div className="process-icon-wrapper">
                <div className="step-number">4</div>
                <div className="process-icon">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15.5 8.5a4.5 4.5 0 1 0-6.364 6.364L4.5 19.5a1 1 0 0 0 1.414 1.414l1.5-1.5 1 1 1.5-1.5 1 1 2.95-2.95a4.5 4.5 0 0 0 1.636-8.464z"></path>
                    <circle cx="16.5" cy="7.5" r="1"></circle>
                  </svg>
                </div>
              </div>
              <h4>Own</h4>
              <p>Take possession and start your journey towards your dream.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
