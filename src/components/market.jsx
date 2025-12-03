import React from 'react';
import "./component.css";
import { FaChartLine, FaExclamationTriangle } from 'react-icons/fa'; // Requires react-icons package

const StockStatus = () => {
  return (
    <div className="stock-status-container">
      {/* Icon for visual impact: Warning/Pause in front of a chart */}
      <div className="status-icon-wrapper">
        <FaChartLine className="chart-icon" />
        <FaExclamationTriangle className="pause-icon" />
      </div>

      <div className="status-content">
        <h2 className="status-heading">
          A Temporary Focus Adjustment
        </h2>
        <p className="status-message">
          <span className="bold-highlight">We are currently not investing in new stocks.</span> 
          We have made a strategic decision to temporarily pause stock market investments to prioritize stability and allocate resources towards internal growth initiatives.
        </p>
        <p className="status-update">
          We remain committed to reviewing our position and will update our investors as soon as we resume stock market activities. Thank you for your understanding.
        </p>
      </div>

      <div className="status-footer">
        **Status:** <span className="temporary-label">Investment Pause (Temporary)</span>
      </div>
    </div>
  );
};

export default StockStatus;

// NOTE: You need to install react-icons for this to work:
// npm install react-icons
// OR
// yarn add react-icons