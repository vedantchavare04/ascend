import React from 'react';
import './payerror.css'; // Import the CSS file

const PaymentError = ({ onRetry, onGoBack }) => {
  return (
    <div className="pe-container">
      <div className="pe-card" role="alert">
        
        {/* Header Section with Animated Icon */}
        <div className="pe-header">
          <div className="pe-icon-wrapper">
            <div className="pe-icon-pulse"></div>
            <div className="pe-icon-bg">
              {/* Icon: Server Off */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="40" height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="pe-icon-main"
              >
                <path d="M2 12h20" />
                <path d="M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6" />
                <path d="M2 12V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" />
                <line x1="2" y1="2" x2="22" y2="22" />
              </svg>
            </div>
          </div>
          <h2 className="pe-title">Payment Service Unavailable</h2>
          <div className="pe-status">
            <span className="pe-status-dot"></span>
            <span className="pe-status-text">System Outage</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="pe-content">
          <p className="pe-message">
            We are currently experiencing connectivity issues with our payment gateway. 
            Your funds are safe, but we cannot process transactions right now.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PaymentError;