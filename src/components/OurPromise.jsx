import React from 'react';
import romissImg from '../assets/romiss.jpeg';
import './OurPromise.css';

const OurPromise = () => {
  return (
    <section className="our-promise-section">
      <div className="container">
        <div className="promise-banner-image-only">
          <img
            src={romissImg}
            alt="Niugen India Our Promise"
            className="promise-full-banner-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
