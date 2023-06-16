import React, { useState } from 'react';
import './styles/backButton.css';

const BackButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`floating-button ${isHovered ? 'hovered' : ''}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="arrow"></span>
    </button>
  );
};

export default BackButton;