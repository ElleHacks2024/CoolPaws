import React, { useState } from 'react';
import './Metric.css';
import ProgressBar from '../Progressbar/Progressbar';

const Metric = ({ title, icon, value }) => {
    return (
      <div className="metric">
        <div className="metric-title">
          {icon}
          <h2>{title}</h2>
        </div>
        <ProgressBar value={value} />
      </div>
    );
  };
export default Metric;