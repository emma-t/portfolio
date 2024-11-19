import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CircularButton.css';

const CircularButton = ({ icon, link, label, target }) => {
  return (
    <a href={link} className="circular-button" aria-label={label} target={target} rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default CircularButton;
