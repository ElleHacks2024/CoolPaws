import React, { useState } from 'react';
import './Progressbar.css';

const ProgressBar = ({ value }) => {
    // Implement the progress bar based on the value
    return (
      <div className="progress-bar">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${value}%` }} // Example to visually represent the value
        ></div>
      </div>
    );
  };
export default ProgressBar;