import React, { useState } from 'react';
import './Healthmonitor.css';
import Metric from '../Metric/ Metric';

const Healthmonitor = () => {
  const [timeFrame, setTimeFrame] = useState('Daily');
  const WaterDropIcon = () => <span>💧</span>;
  const ActivityIcon = () => <span>🏃‍♂️</span>;

  return (
    <div className="health-monitoring">
      <header className="header">
        <h1>HEALTH MONITORING</h1>
        <select 
          value={timeFrame} 
          onChange={(e) => setTimeFrame(e.target.value)}
          className="timeframe-dropdown"
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </header>
      
      <div className="metrics">
        <Metric 
          title="Water Intake (mL)" 
          icon={<WaterDropIcon />} 
          value={1200} // Example value
        />
        <Metric 
          title="Physical Activity (minutes)" 
          icon={<ActivityIcon />} 
          value={45} // Example value
        />
      </div>
    </div>
  );
};
export default Healthmonitor;