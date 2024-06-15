import React from 'react';

const Hero = ({ title, imageUrl }) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1 className="hero-title">{title}</h1>
        <h3>#letsgrow</h3>
        <p className="hero-text">
          Book appointments at your doorstep.....!!!
        </p>
      </div>

      <div className="banner hero-image-container">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span className="hero-vector">
          <img src="/hero_bg.png" alt="vector" />
        </span>
      </div>
      
    </div>
  );
};

export default Hero;
