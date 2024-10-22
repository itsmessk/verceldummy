
import React, { useEffect, useState } from 'react';
import './css/Slider.css';
import { motion } from "framer-motion";

const logos = [
  { name: 'Google', role: 'Tech Partner', imageUrl: './assets/mic.png' },
  { name: 'Facebook', role: 'Marketing', imageUrl: './assets/sony.png' },
  { name: 'Microsoft', role: 'Cloud Solutions', imageUrl: './assets/zoho.png' },
  { name: 'Amazon', role: 'E-commerce', imageUrl: './assets/wu.png' },
  { name: 'Issuu', role: 'Publishing', imageUrl: './assets/issuu.png' },
  { name: 'InVision', role: 'Design', imageUrl: './assets/invision.png' },
  { name: 'Chalk', role: 'Learning', imageUrl: './assets/chalk.png' },
  { name: 'Blackberry', role: 'Communications', imageUrl: './assets/partner-1.png' },
  { name: 'Dell', role: 'Hardware', imageUrl: './assets/dell.png' },
  { name: 'Fastmail', role: 'Email', imageUrl: './assets/fastmail.png' },
  { name: 'SAP', role: 'Enterprise', imageUrl: './assets/sap.png' },
  { name: 'Google', role: 'Search Engine', imageUrl: './assets/Google.png' }

];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the time as needed for auto-scroll (3000ms = 3 seconds)
    return () => clearInterval(interval);
  }, []);

  const getLogoClass = (index) => {
    if (index === currentIndex) {
      return 'logo center-logo';
    } else if (index === (currentIndex + 1) % logos.length) {
      return 'logo right-fade';
    } else if (index === (currentIndex - 1 + logos.length) % logos.length) {
      return 'logo left-fade';
    }
    return 'logo hidden';
  };

  return (
   <div className='slider-outer'>
    {/* Animated Title */}
    <motion.h1
        className="title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Our<span className="highlight"> Achievements</span>
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="description-slider"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      >
        We are proud to have been recognized for our excellence in cybersecurity solutions.
      </motion.p>
    <div className="award-slider">
      {logos.map((logo, index) => (
        <div key={index} className={getLogoClass(index)}>
          <img src={logo.imageUrl} alt={logo.name} />
          {/* <div className="logo-details">
            <h4>{logo.name}</h4>
            <p>{logo.role}</p>
          </div> */}
        </div>
      ))}
    
    </div>
    </div>
  );
};

export default Slider;