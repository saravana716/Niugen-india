import React from 'react';
import './PlotAvailability.css';
import ContactStrip from './ContactStrip';

const PlotAvailability = () => {
  return (
    <section className="plot-availability-section">
      <div className="container">
        {/* Plot Availability Banner */}
        <div className="plot-banner">
          <div className="plot-content">
            <span className="subtitle">PLOT AVAILABILITY</span>
            <h2 className="title">Choose Your<br />Perfect Plot</h2>
            <p className="description">
              Explore available plots in our premium projects. Transparent pricing and easy booking process.
            </p>
            <div className="legend">
              <div className="legend-item">
                <span className="color-box available"></span>
                <span>Available</span>
              </div>
              <div className="legend-item">
                <span className="color-box booked"></span>
                <span>Booked</span>
              </div>
              <div className="legend-item">
                <span className="color-box sold"></span>
                <span>Sold</span>
              </div>
            </div>
            <button className="plot-btn">
              VIEW PLOT AVAILABILITY
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="plot-image-wrapper">
            <div className="plot-image">
              {/* Note: Using a placeholder image for the plot layout map */}
              <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Plot Layout Map" />
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <ContactStrip />
      </div>
    </section>
  );
};

export default PlotAvailability;
