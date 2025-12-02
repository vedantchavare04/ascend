import React from 'react';
import './component.css';

const BenefitItem = ({ icon, text }) => (
  <div className="BenefitItem">
    <span className="BenefitItem__icon">{icon}</span>
    <p className="BenefitItem__text">{text}</p>
  </div>
);

const Benefits = () => {
  const benefitsList = [
    { text: 'Zero Brokerage. Zero Platform Fees. Zero Hassle.' },
    { text: 'Invest from just ₹100 — Start small, grow big.' },
    { text: 'No hidden charges. Ever.' },
    {  text: 'Wide range of stocks & mutual funds at your fingertips.' },
  ];

  return (
    <section className="GrowthBenefitsContainer">
      
      {/* Visual Metaphor for Growth and Trust */}
      <div className="GrowthVisual">
        <div className="GrowthChartBackground">
          {/* A simple rising wave/chart simulation */}
        </div>
        <div className="GrowthChartLine">
          {/* Animated line depicting rising growth */}
        </div>
      </div>

      {/* Content Area */}
      <div className="ContentWrapper">
        <div className="Preamble">
          <p className="Preamble__link">Invest Confidently. Grow Consistently.</p>
          <h1 className="Preamble__title">The Smarter Way to Build Long-Term Growth.</h1>
          <p className="Preamble__description">
            Unleash a new era of investing with comprehensive benefits designed to grow your wealth and give you an edge in a competitive landscape.
          </p>
        </div>

        <div className="BenefitsList">
          {benefitsList.map((item, index) => (
            <BenefitItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
        
        {/* Call to Action Button */}
        {/* <button className="CTAButton" onClick={() => console.log('Starting growth journey...')}>
            Start Your Growth Journey Today
        </button> */}
        
      </div>
    </section>
  );
};

export default Benefits;