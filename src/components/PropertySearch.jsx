import React from 'react';
import './PropertySearch.css';

const PropertySearch = () => {
  return (
    <section className="property-search-section">
      <div className="container">
        <div className="search-bar-container">
          <div className="search-title">
            Find Your Perfect<br/>Property
          </div>
          
          <div className="search-filters">
            <div className="filter-group">
              <label>Location</label>
              <div className="select-wrapper">
                <select>
                  <option>All Locations</option>
                  <option>Kovilpatti</option>
                </select>
                <svg className="select-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
            
            <div className="filter-group">
              <label>Property Type</label>
              <div className="select-wrapper">
                <select>
                  <option>All Types</option>
                  <option>Villa Plots</option>
                  <option>Residential Plots</option>
                </select>
                <svg className="select-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
            
            <div className="filter-group">
              <label>Budget</label>
              <div className="select-wrapper">
                <select>
                  <option>All Budgets</option>
                  <option>Below 10 Lakhs</option>
                  <option>10 - 20 Lakhs</option>
                  <option>Above 20 Lakhs</option>
                </select>
                <svg className="select-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
            
            <div className="filter-group">
              <label>Status</label>
              <div className="select-wrapper">
                <select>
                  <option>All Status</option>
                  <option>Ongoing</option>
                  <option>New Launch</option>
                  <option>Upcoming</option>
                </select>
                <svg className="select-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
            
            <button className="btn btn-secondary search-btn">
              SEARCH NOW 
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
