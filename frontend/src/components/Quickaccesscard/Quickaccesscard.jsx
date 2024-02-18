import React from 'react';
import "./Quickaccesscard.css";

const QuickAccessCard = ({ title, image }) => {
  return (
    <div className="quick-access-card">
      <img src={image} alt={title} className="quick-access-image" />
      <div className="quick-access-title">{title.toUpperCase()}</div>
    </div>
  );
};

export default QuickAccessCard;