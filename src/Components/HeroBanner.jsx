import React from 'react';
import './HeroBanner.css';

const HeroBanner = ({ title, subtitle, buttonText }) => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default HeroBanner;
