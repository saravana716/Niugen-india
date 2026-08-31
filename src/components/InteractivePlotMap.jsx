import React, { useState } from 'react';
import './InteractivePlotMap.css';

const generatePlots = () => {
  const plots = [];
  let plotNo = 1;
  // 6 rows, 12 columns
  for (let r = 1; r <= 6; r++) {
    for (let c = 1; c <= 12; c++) {
      // Park area spans rows 3-4 and cols 5-8
      if ((r === 3 || r === 4) && (c >= 5 && c <= 8)) {
        continue; 
      }
      
      // Assign random status for visual variety
      let status = 'available';
      const rand = Math.random();
      if (rand > 0.6 && rand < 0.85) status = 'booked';
      else if (rand >= 0.85) status = 'sold';

      plots.push({
        id: plotNo,
        plotNo: plotNo,
        row: r,
        col: c,
        status: status,
        size: '1500 Sq.ft',
        facing: c % 2 === 0 ? 'East' : 'North',
        price: '₹ 8.75 Lakhs*'
      });
      plotNo++;
    }
  }
  return plots;
};

const plotsData = generatePlots();

const InteractivePlotMap = () => {
  const [selectedPlot, setSelectedPlot] = useState(plotsData.find(p => p.status === 'available') || plotsData[0]);

  return (
    <section className="interactive-plot-section">
      <div className="container">
        
        {/* Top Header */}
        <div className="plot-header">
          <div className="ph-left">
            <span className="ph-label">Select Project</span>
            <select className="project-select">
              <option>All Projects</option>
              <option>Greenfield City</option>
              <option>Royal Meadows</option>
            </select>

            <div className="plot-legend">
              <div className="legend-item">
                <span className="color-box available"></span> Available
              </div>
              <div className="legend-item">
                <span className="color-box booked"></span> Booked
              </div>
              <div className="legend-item">
                <span className="color-box sold"></span> Sold
              </div>
            </div>
          </div>
          <div className="ph-right">
            {/* Compass Icon */}
            <svg width="64" height="64" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="30" stroke="#111" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M50 10L60 50L50 90L40 50L50 10Z" fill="#333" />
              <path d="M50 10L60 50L50 50L50 10Z" fill="#111" />
              <path d="M10 50L50 40L90 50L50 60L10 50Z" fill="#555" />
              <path d="M10 50L50 40L50 50L10 50Z" fill="#222" />
              <text x="45" y="15" fontSize="14" fontWeight="bold" fill="#111">N</text>
              <text x="46" y="95" fontSize="14" fontWeight="bold" fill="#111">S</text>
              <text x="5" y="55" fontSize="14" fontWeight="bold" fill="#111">W</text>
              <text x="85" y="55" fontSize="14" fontWeight="bold" fill="#111">E</text>
            </svg>
          </div>
        </div>

        {/* Map Grid */}
        <div className="plot-map-wrapper">
          <div className="road horizontal top-road">30' WIDE ROAD</div>
          
          <div className="map-grid-container">
            <div className="road vertical left-road">30' WIDE ROAD</div>
            
            <div className="plot-grid">
              {plotsData.map(plot => (
                <div 
                  key={plot.id}
                  className={`plot-cell ${plot.status} ${selectedPlot.id === plot.id ? 'selected' : ''}`}
                  style={{ gridRow: plot.row, gridColumn: plot.col }}
                  onClick={() => setSelectedPlot(plot)}
                >
                  <span className="plot-number">{plot.plotNo.toString().padStart(2, '0')}</span>
                </div>
              ))}
              
              {/* Park Area */}
              <div className="park-area">
                PARK
              </div>
            </div>

            <div className="road vertical right-road">30' WIDE ROAD</div>
          </div>
          
          <div className="road horizontal bottom-road">30' WIDE ROAD</div>
        </div>

        <div className="map-helper-text">
          * Click on any plot to view details and booking information
        </div>

        {/* Plot Details Panel */}
        <div className="plot-details-panel">
          <h3 className="panel-title">Plot Details</h3>
          
          <div className="panel-data-row">
            <div className="data-col">
              <span className="data-label">Plot No.</span>
              <span className="data-value">{selectedPlot.plotNo.toString().padStart(2, '0')} &gt;</span>
            </div>
            <div className="data-col">
              <span className="data-label">Project</span>
              <span className="data-value">Greenfield City</span>
            </div>
            <div className="data-col">
              <span className="data-label">Plot Size</span>
              <span className="data-value">{selectedPlot.size}</span>
            </div>
            <div className="data-col">
              <span className="data-label">Facing</span>
              <span className="data-value">{selectedPlot.facing}</span>
            </div>
            <div className="data-col">
              <span className="data-label">Price</span>
              <span className="data-value highlight">{selectedPlot.price}</span>
            </div>
          </div>

          <div className="panel-actions">
            <button className="btn btn-solid-green">ENQUIRE NOW</button>
            <button className="btn btn-outline-green-large">BOOK SITE VISIT</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractivePlotMap;
