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
              </div>
              <div className="process-arrow"></div>
              <h4>Discover</h4>
              <p>Tell us what you're looking for.</p>
            </div>

            {/* Step 2 */}
            <div className="process-step">
              <div className="process-icon-wrapper">
                <div className="step-number">2</div>
              </div>
              <div className="process-arrow"></div>
              <h4>Explore</h4>
              <p>Review properties that match your requirements.</p>
            </div>

            {/* Step 3 */}
            <div className="process-step">
              <div className="process-icon-wrapper">
                <div className="step-number">3</div>
              </div>
              <div className="process-arrow"></div>
              <h4>Visit</h4>
              <p>Experience the location through a site visit.</p>
            </div>

            {/* Step 4 */}
            <div className="process-step">
              <div className="process-icon-wrapper">
                <div className="step-number">4</div>
              </div>
              <div className="process-arrow"></div>
              <h4>Decide</h4>
              <p>Understand the project, documentation and investment.</p>
            </div>

            {/* Step 5 */}
            <div className="process-step">
              <div className="process-icon-wrapper">
                <div className="step-number">5</div>
              </div>
              <div className="process-arrow"></div>
              <h4>Book</h4>
              <p>Take the next step towards ownership.</p>
            </div>

            {/* Step 6 */}
            <div className="process-step">
              <div className="process-icon-wrapper">
                <div className="step-number">6</div>
              </div>
              <h4>Own</h4>
              <p>Build your future with confidence.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
