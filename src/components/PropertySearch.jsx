import React, { useState } from 'react';
import './PropertySearch.css';
import CustomSelect from './CustomSelect';

const PropertySearch = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState("");

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
              <CustomSelect 
                placeholder="All Locations"
                value={location}
                onChange={setLocation}
                options={[
                  { value: 'kovilpatti', label: 'Kovilpatti' }
                ]}
              />
            </div>
            
            <div className="filter-group">
              <label>Property Type</label>
              <CustomSelect 
                placeholder="All Types"
                value={propertyType}
                onChange={setPropertyType}
                options={[
                  { value: 'villa_plots', label: 'Villa Plots' },
                  { value: 'residential_plots', label: 'Residential Plots' }
                ]}
              />
            </div>
            
            <div className="filter-group">
              <label>Budget</label>
              <CustomSelect 
                placeholder="All Budgets"
                value={budget}
                onChange={setBudget}
                options={[
                  { value: 'below_10', label: 'Below 10 Lakhs' },
                  { value: '10_20', label: '10 - 20 Lakhs' },
                  { value: 'above_20', label: 'Above 20 Lakhs' }
                ]}
              />
            </div>
            
            <div className="filter-group">
              <label>Status</label>
              <CustomSelect 
                placeholder="All Status"
                value={status}
                onChange={setStatus}
                options={[
                  { value: 'ongoing', label: 'Ongoing' },
                  { value: 'new_launch', label: 'New Launch' },
                  { value: 'upcoming', label: 'Upcoming' }
                ]}
              />
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
