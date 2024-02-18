import React, { useState } from 'react';
import Reminders from '../../components/Reminders/Reminders.tsx';
import './Schedules.css';

const Schedules = () => {
    const [timeFrame, setTimeFrame] = useState('Monthly');
    return (
        <div className="schedules-container">
            <header className="header">
            <h1>Schedules Table</h1>
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

            <Reminders />
        </div>
    );
    }
export default Schedules;